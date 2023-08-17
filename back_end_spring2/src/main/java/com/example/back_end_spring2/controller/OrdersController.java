package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.service.ICustomerService;
import com.example.back_end_spring2.service.IOrdersService;
import com.example.back_end_spring2.service.IShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrdersController {
    @Autowired
    private IOrdersService ordersService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IShoppingService shoppingService;

    @GetMapping("")
    public ResponseEntity<List<Orders>> getAll() {
        List<Orders> ordersList = ordersService.getAll();
        if (ordersList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }


    @PostMapping("/add-orders")
    public ResponseEntity<?> create(HttpServletRequest httpServletRequest) {

        try {
            String header = httpServletRequest.getHeader("Authorization");
            String token = header.substring(7);
            String username = jwtTokenUtil.getUsernameFromToken(token);
            Customers customers = customerService.getCustomer(username);
            List<ShoppingCards> shoppingCards = shoppingService.getShoppingCart(customers.getId());
            ordersService.save(shoppingCards);
            shoppingService.deleteC(customers.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }





}
