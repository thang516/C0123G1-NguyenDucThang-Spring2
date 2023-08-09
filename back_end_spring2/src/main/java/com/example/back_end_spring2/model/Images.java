package com.example.back_end_spring2.model;

import javax.persistence.*;

@Entity
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn
    @ManyToOne
    private Products product;

    @Column(name = "img_url",nullable = false,columnDefinition = "TEXT")
    private String imgURL;


    public Images() {
    }

    public Images(Integer id, Products product, String imgURL) {
        this.id = id;
        this.product = product;
        this.imgURL = imgURL;
    }

    public Images(Products product, String imgURL) {
        this.product = product;
        this.imgURL = imgURL;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }
}
