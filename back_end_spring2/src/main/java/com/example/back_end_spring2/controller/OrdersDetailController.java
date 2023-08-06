package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.model.OrderDetail;
import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.service.IOrdersDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/order-detail")
@CrossOrigin("*")
public class OrdersDetailController {



    @Autowired
    private IOrdersDetailService ordersDetailService;

    @GetMapping("")
    public ResponseEntity<List<OrderDetail>> getAll(){
        List<OrderDetail> orderDetails = ordersDetailService.getAll();
        if(orderDetails == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orderDetails,HttpStatus.OK);
    }



}
