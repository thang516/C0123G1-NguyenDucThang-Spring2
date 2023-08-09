package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Images;
import com.example.back_end_spring2.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService implements IImageService{
    @Autowired
    private IImageRepository iImageRepository;


    @Override
    public List<Images> getAllImage(Integer id) {
        return iImageRepository.getAllImageById(id);
    }
}
