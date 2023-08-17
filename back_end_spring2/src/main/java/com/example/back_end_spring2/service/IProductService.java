package com.example.back_end_spring2.service;

import com.example.back_end_spring2.DTO.IImageDTO;
import com.example.back_end_spring2.DTO.IProductDTO;
import com.example.back_end_spring2.DTO.ProductDTO;
import com.example.back_end_spring2.model.ProductType;
import com.example.back_end_spring2.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {

    ProductDTO findByIdProduct(Integer id);

    Page<IProductDTO> getAllProducts(Pageable pageable, String sortBy, double from, double to, String color, String typeProduct, String nameProduct);

    double getMaxPrice();

    Products getProduct(Integer id);


    List<IProductDTO> findNewProduct();


    List<Products> findProductType();

    List<Products> findProducts();

    List<IImageDTO> findColor(String nameProduct);

    Page<IProductDTO> findAllProductByOther(Pageable pageable , String typeProduct, String nameProduct);

//    void createProduct(ProductDTO productDTO);
}
