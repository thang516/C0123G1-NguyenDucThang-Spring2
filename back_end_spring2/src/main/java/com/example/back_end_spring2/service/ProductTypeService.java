package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.ProductType;
import com.example.back_end_spring2.repository.IProductRepository;
import com.example.back_end_spring2.repository.IProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService  implements IProductTypeService{

    @Autowired
    private IProductTypeRepository productTypeRepository;

    @Override
    public List<ProductType> findProductType() {
        return productTypeRepository.getAll();
    }
}
