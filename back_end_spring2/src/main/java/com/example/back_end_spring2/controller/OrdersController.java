package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.service.ICustomerService;
import com.example.back_end_spring2.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrdersController {
    @Autowired
    private IOrdersService ordersService;




    @GetMapping("")
    public ResponseEntity<List<Orders>> getAll (){
        List<Orders> ordersList = ordersService.getAll();
        if(ordersList == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(ordersList,HttpStatus.OK);
    }






}
