package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Images;

import java.util.List;

public interface IImageService {

    List<Images> getAllImage(Integer id);
}
