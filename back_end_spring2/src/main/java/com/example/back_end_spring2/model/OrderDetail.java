package com.example.back_end_spring2.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn
    private Orders orders;

    @ManyToOne
    @JoinColumn
    private Products products;

    private Double price ;
    private Integer quantity;

    @Column(name = "create_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime createDate;

    @Column(name = "update_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime updateTime;

    @Column(columnDefinition = "BIT DEFAULT 0", updatable = true)
    private boolean isDelete;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, Orders orders, Products products, Double price, Integer quantity, LocalDateTime createDate, LocalDateTime updateTime, boolean isDelete) {
        this.id = id;
        this.orders = orders;
        this.products = products;
        this.price = price;
        this.quantity = quantity;
        this.createDate = createDate;
        this.updateTime = updateTime;
        this.isDelete = isDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
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
}
