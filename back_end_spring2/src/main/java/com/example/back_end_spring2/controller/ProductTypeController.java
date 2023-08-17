package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.model.Colors;
import com.example.back_end_spring2.model.ProductType;
import com.example.back_end_spring2.service.IColorService;
import com.example.back_end_spring2.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api/type")
@CrossOrigin("*")
public class ProductTypeController {

    @Autowired
    private IProductTypeService productTypeService;
@Autowired
private IColorService colorService ;
    @GetMapping("")
    public ResponseEntity<List<ProductType>> findAllType(){
        List<ProductType> productTypes = productTypeService.findAllType();
        if(productTypes.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productTypes,HttpStatus.OK);
    }
    @GetMapping("/color")
    public ResponseEntity<List<Colors>> findAllColor(){
        List<Colors> colors = colorService.findAllColor();
        if(colors.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(colors,HttpStatus.OK);
    }






}
