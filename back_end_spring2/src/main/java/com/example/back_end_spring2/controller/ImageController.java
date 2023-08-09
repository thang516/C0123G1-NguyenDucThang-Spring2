package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.model.Images;
import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.service.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/image")
@CrossOrigin("*")

public class ImageController {
    @Autowired
    private IImageService iImageService;



}
