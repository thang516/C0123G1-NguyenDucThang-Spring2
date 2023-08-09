package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.DTO.ProductDTO;
import com.example.back_end_spring2.model.OrderDetail;
import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.service.IOrdersDetailService;
import com.example.back_end_spring2.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-detail")
@CrossOrigin("*")
public class OrdersDetailController {



    @Autowired
    private IOrdersDetailService ordersDetailService;




}
