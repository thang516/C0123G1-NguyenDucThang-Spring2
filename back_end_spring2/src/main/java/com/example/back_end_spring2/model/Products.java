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


    

}
