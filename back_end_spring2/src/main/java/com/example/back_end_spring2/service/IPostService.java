package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Posts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IPostService {
    Page<Posts> getAll(Pageable pageable, String titleSearch);

    Optional<Posts> findByIdPosts(Integer id);
}
