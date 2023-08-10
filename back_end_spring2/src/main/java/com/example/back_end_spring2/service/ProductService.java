package com.example.back_end_spring2.service;

import com.example.back_end_spring2.DTO.IProductDTO;
import com.example.back_end_spring2.DTO.ProductDTO;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.repository.IProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{

    @Autowired
    private IProductRepository productRepository ;



    @Override
    public ProductDTO findByIdProduct(Integer id) {
        Products product = productRepository.findByProduct(id);
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    @Override
    public Page<IProductDTO> getAllProducts(Pageable pageable, String sortBy, double from, double to, String color, String typeProduct, String nameProduct) {
        Page<IProductDTO> iProductDTOS = productRepository.getProducts(pageable, from, to,"%" + color + "%" ,"%" + typeProduct + "%" ,"%" + nameProduct + "%");

        return iProductDTOS ;
    }

    @Override
    public double getMaxPrice() {
        return productRepository.getMaxPrice();
    }

    @Override
    public Products getProduct(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public List<IProductDTO> findNewProduct() {
        return productRepository.findNewProduct();
    }


}
