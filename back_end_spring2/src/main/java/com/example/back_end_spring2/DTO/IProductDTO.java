package com.example.back_end_spring2.DTO;

import com.example.back_end_spring2.model.Images;

import java.util.List;

public interface IProductDTO {

    String getId();
    String getNameProduct();
    String getPrice();
    String getDescription() ;
    String getImages();

    String getStockQuantity();
String getColorName();

}
