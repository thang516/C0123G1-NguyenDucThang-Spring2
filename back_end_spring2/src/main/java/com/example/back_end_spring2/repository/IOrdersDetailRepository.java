package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrdersDetailRepository extends JpaRepository<OrderDetail,Integer> {

    @Query(value = "SELECT * FROM order_detail WHERE orders_id = :id" ,nativeQuery = true)
    List<OrderDetail> getOD(@Param("id") Integer id);
}
