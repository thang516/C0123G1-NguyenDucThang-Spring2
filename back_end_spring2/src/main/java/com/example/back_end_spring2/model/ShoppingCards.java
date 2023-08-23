package com.example.back_end_spring2.model;

import javax.persistence.*;

@Entity
public class ShoppingCards {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer amount ;

    private  Double price ;

    @ManyToOne
    @JoinColumn
    private Products products ;

    @ManyToOne
    @JoinColumn
    private Customers customers ;
    
    @Column(columnDefinition = "BIT DEFAULT 0", updatable = true)
    private boolean isDelete;

    public ShoppingCards(Integer id, Integer amount, Double price, Products products, Customers customers, boolean isDelete) {
        this.id = id;
        this.amount = amount;
        this.price = price;
        this.products = products;
        this.customers = customers;
        this.isDelete = isDelete;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public ShoppingCards() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }
}
