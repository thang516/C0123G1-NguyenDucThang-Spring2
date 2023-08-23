package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.OrderDetail;

import java.util.List;

public interface IOrdersDetailService {
    List<OrderDetail> findById(Integer id);
}
