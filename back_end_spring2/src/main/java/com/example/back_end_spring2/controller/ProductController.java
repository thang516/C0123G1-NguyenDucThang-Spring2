package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private IProductService productService ;

    @GetMapping("")
    public ResponseEntity<Page<Products>> getAll (@RequestParam(value = "page") Integer page){
        Pageable pageable = PageRequest.of(page, 6, Sort.by(Sort.Order.asc("price")));
        Page<Products> productsPage = productService.getAllProducts(pageable);
        if(productsPage == null ){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productsPage,HttpStatus.OK);
    }




}
