package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.OrderDetail;
import com.example.back_end_spring2.repository.IOrdersDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersDetailService implements IOrdersDetailService{

    @Autowired
    private IOrdersDetailRepository ordersDetailRepository;

    @Override
    public List<OrderDetail> getAll() {
        return ordersDetailRepository.getAllOrdersDetail();
    }
}
