package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;

import java.util.List;

public interface IShoppingService {
    List<ShoppingCards> getShoppingCart(Integer id);

    void setCart(Integer index, Integer id);

    void createCart(Customers customers, Products products, Integer amount);

    void deleteC(Integer id);
}
