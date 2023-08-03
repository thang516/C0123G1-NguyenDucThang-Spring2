package com.example.back_end_spring2.model;

import javax.persistence.*;

@Entity
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "img_one",nullable = false)
    private String imgOne;
    @Column(name = "img_two",nullable = false)
    private String imgTwo;
    @Column(name = "img_three")
    private String imgThree;
    @Column(name = "img_four")

    private String imgFour;
    @Column(name = "img_five")

    private String imgFive;

    public Images() {
    }

    public Images(Integer id, String imgOne, String imgTwo, String imgThree, String imgFour, String imgFive) {
        this.id = id;
        this.imgOne = imgOne;
        this.imgTwo = imgTwo;
        this.imgThree = imgThree;
        this.imgFour = imgFour;
        this.imgFive = imgFive;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgOne() {
        return imgOne;
    }

    public void setImgOne(String imgOne) {
        this.imgOne = imgOne;
    }

    public String getImgTwo() {
        return imgTwo;
    }

    public void setImgTwo(String imgTwo) {
        this.imgTwo = imgTwo;
    }

    public String getImgThree() {
        return imgThree;
    }

    public void setImgThree(String imgThree) {
        this.imgThree = imgThree;
    }

    public String getImgFour() {
        return imgFour;
    }

    public void setImgFour(String imgFour) {
        this.imgFour = imgFour;
    }

    public String getImgFive() {
        return imgFive;
    }

    public void setImgFive(String imgFive) {
        this.imgFive = imgFive;
    }
}
