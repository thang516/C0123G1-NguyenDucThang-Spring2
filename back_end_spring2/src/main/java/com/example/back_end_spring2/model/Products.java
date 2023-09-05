package com.example.back_end_spring2.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(name = "name_product", nullable = false)
    private String nameProduct;
    @Column(nullable = false)
    private Double price;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, name = "stock_quantity")

    private Integer stockQuantity;


    @Column(name = "create_time", nullable = false, unique = true, columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime createDate;

    @Column(name = "update_time", nullable = false, unique = true, columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime updateTime;

    @Column(columnDefinition = "BIT DEFAULT 0", updatable = true)
    private boolean isDelete;
//
//    @OneToMany
//    private List<Images> images;

    @ManyToOne
    @JoinColumn
    private Sizes sizes;

    @ManyToOne
    @JoinColumn
    private ProductType productType;

    @ManyToOne
    @JoinColumn
    private Colors colors;

    @Column(columnDefinition = "TEXT")
       private String img ;

    public String getImg() {
        return img;
    }

    public Products(Integer id, String nameProduct, Double price, String description, Integer stockQuantity, Sizes sizes, ProductType productType, Colors colors, String img) {
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

    public void setImg(String img) {
        this.img = img;
    }

    public Products() {
    }

    public Products(Integer id, String nameProduct, Double price, String description, Integer stockQuantity, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete, Sizes sizes, ProductType productType) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
        this.sizes = sizes;
        this.productType = productType;
    }

    public Colors getColors() {
        return colors;
    }

    public void setColors(Colors colors) {
        this.colors = colors;
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
