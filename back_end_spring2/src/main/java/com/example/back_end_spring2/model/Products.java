package com.example.back_end_spring2.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    private String nameProduct;

    private Double price;

    private String description ;


    @Column(name = "create_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime createDate;

    @Column(name = "update_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime updateTime;

    @Column(columnDefinition = "BIT DEFAULT 0", updatable = true)
    private boolean isDelete;

    @ManyToOne
    @JoinColumn
    private Images images;

    @ManyToOne
    @JoinColumn
    private Colors colors;

    @ManyToOne
    @JoinColumn
    private Sizes sizes;

    @ManyToOne
    @JoinColumn
    private ProductType productType;


    public Products(Integer id, String nameProduct, Double price, String description, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete, Images images, Colors colors, Sizes sizes, ProductType productType) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
        this.images = images;
        this.colors = colors;
        this.sizes = sizes;
        this.productType = productType;
    }

    public Products() {
    }

    public Products(String nameProduct, Double price, String description, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete, Images images, Colors colors, Sizes sizes, ProductType productType) {
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
        this.images = images;
        this.colors = colors;
        this.sizes = sizes;
        this.productType = productType;
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

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Images getImages() {
        return images;
    }

    public void setImages(Images images) {
        this.images = images;
    }

    public Colors getColors() {
        return colors;
    }

    public void setColors(Colors colors) {
        this.colors = colors;
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
}
