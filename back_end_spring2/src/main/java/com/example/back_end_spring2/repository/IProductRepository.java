package com.example.back_end_spring2.repository;


import com.example.back_end_spring2.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IProductRepository extends JpaRepository<Products,Integer> {


    @Query(value = "SELECT p.* FROM products p WHERE p.is_delete = false ORDER BY p.price DESC ",nativeQuery = true)
    Page<Products> getAll(Pageable pageable);
}
