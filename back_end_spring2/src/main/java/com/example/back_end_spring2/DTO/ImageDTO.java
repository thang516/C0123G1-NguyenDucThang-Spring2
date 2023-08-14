package com.example.back_end_spring2.DTO;

import com.example.back_end_spring2.model.Images;

import java.util.List;

public class ImageDTO {

        private Integer id;
        private String nameProduct;
        private Double price;
        private String description ;
        private List<Images> images ;
        private String colorName;

    public ImageDTO() {
    }

    public ImageDTO(Integer id, String nameProduct, Double price, String description, List<Images> images, String colorName) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.images = images;
        this.colorName = colorName;
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

    public List<Images> getImages() {
        return images;
    }

    public void setImages(List<Images> images) {
        this.images = images;
    }

    public String getColorName() {
        return colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }
}
