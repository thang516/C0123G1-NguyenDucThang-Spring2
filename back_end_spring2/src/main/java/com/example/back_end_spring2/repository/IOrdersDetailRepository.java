package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IOrdersDetailRepository extends JpaRepository<OrderDetail,Integer> {


}
