package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.Posts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IPostRepository extends JpaRepository<Posts,Integer> {

    @Query(value = "select * from posts p  where p.title like concat('%', :titleSearch, '%')", nativeQuery = true)
    Page<Posts> getAll(Pageable pageable ,@Param("titleSearch") String titleSearch );
}
