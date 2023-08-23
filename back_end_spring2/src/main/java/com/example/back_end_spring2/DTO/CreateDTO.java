package com.example.back_end_spring2.DTO;

import com.example.back_end_spring2.model.Colors;
import com.example.back_end_spring2.model.ProductType;
import com.example.back_end_spring2.model.Sizes;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

public class CreateDTO {


        private Integer id;


        private String nameProduct;
        private Double price;
        private String description;


        private Integer stockQuantity;




        private Sizes sizes;


        private ProductType productType;


        private Colors colors;

        private String img ;


    public CreateDTO(Integer id, String nameProduct, Double price, String description, Integer stockQuantity, Sizes sizes, ProductType productType, Colors colors, String img) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.sizes = sizes;
        this.productType = productType;
        this.colors = colors;
        this.img = img;
    }

    public CreateDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public Sizes getSizes() {
        return sizes;
    }

    public void setSizes(Sizes sizes) {
        this.sizes = sizes;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public Colors getColors() {
        return colors;
    }

    public void setColors(Colors colors) {
        this.colors = colors;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
