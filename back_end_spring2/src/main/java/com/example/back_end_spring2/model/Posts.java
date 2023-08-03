package com.example.back_end_spring2.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;

    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false,columnDefinition = "LONGTEXT")
    private String content;


    @Column(name = "create_time" ,nullable = false,unique = true,columnDefinition = "DATETIME DEFAULT now()")
    @CreatedDate
    private LocalDateTime createDate;

    public Posts(Integer id, String title, String image, String content, LocalDateTime createDate) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.content = content;
        this.createDate = createDate;
    }

    public Posts() {
    }

    public Posts(String title, String image, String content, LocalDateTime createDate) {
        this.title = title;
        this.image = image;
        this.content = content;
        this.createDate = createDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }
}
