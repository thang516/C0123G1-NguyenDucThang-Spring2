package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IShoppingService {
    List<ShoppingCards> getShoppingCart(Integer id);

    ResponseEntity<?> setCart(Integer index, Integer id,Integer idColor);

    ResponseEntity<?> createCart(Customers customers, Products products, Integer amount);

    void deleteC(Integer id);

    void deleteByCustomerId(Integer id);

    void save(ShoppingCards shoppingCards);

    void deleteCustomer(Customers customers);
}
