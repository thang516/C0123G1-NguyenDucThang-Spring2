package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.model.ShoppingCards;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IOrdersService {
    List<Orders> getAll();

    ResponseEntity<?> save(List<ShoppingCards> shoppingCards);
}
