package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Products> getAllProducts(Pageable pageable);
}
