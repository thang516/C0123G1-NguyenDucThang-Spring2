package com.example.back_end_spring2.DTO;
import com.example.back_end_spring2.model.Images;
import java.util.List;

public class ProductDTO {

    private Integer id;
        private String nameProduct;
        private Double price;
        private String description ;

        private List<Images> images ;
        private String colorName;
    private Integer stockQuantity;

    public ProductDTO(Integer id, String nameProduct, Double price, String description, List<Images> images, Integer stockQuantity,String colorName) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.images = images;
        this.stockQuantity = stockQuantity;
        this.colorName = colorName;
    }

    public String getColorName() {
        return colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public ProductDTO() {
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

}
