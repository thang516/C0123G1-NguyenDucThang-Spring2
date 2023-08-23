package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.OrderDetail;
import com.example.back_end_spring2.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrdersRepository extends JpaRepository<Orders,Integer> {


    @Query(value = "SELECT o.* FROM orders  o INNER JOIN customers c on o.customers_id = c.id WHERE customers_id  = :id",nativeQuery = true)
    List<Orders> findAllHistory(@Param("id") Integer id);
}
