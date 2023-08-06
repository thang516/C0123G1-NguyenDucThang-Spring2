package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Orders;

import java.util.List;

public interface IOrdersService {
    List<Orders> getAll();
}
