package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.repository.IOrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService implements IOrdersService{
    @Autowired
    private IOrdersRepository iOrdersRepository;
    @Override
    public List<Orders> getAll() {
        return iOrdersRepository.findAll();
    }
}
