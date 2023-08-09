package com.example.back_end_spring2.service;

import com.example.back_end_spring2.DTO.IProductDTO;
import com.example.back_end_spring2.DTO.ProductDTO;
import com.example.back_end_spring2.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {

    ProductDTO findByIdProduct(Integer id);

    Page<IProductDTO> getAllProducts(Pageable pageable, String sortBy, double from, double to, String color, String typeProduct, String nameProduct);

    double getMaxPrice();

    Products getProduct(Integer id);

    void delete(Integer id);
}
