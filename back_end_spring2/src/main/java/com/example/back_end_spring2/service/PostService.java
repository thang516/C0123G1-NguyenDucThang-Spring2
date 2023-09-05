package com.example.back_end_spring2.service;


import com.example.back_end_spring2.model.Posts;
import com.example.back_end_spring2.repository.IPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService implements IPostService {

    @Autowired
    private IPostRepository postRepository ;

    @Override
    public Page<Posts> getAll(Pageable pageable, String titleSearch) {
        return postRepository.getAll(pageable,titleSearch);
    }

    @Override
    public Optional<Posts> findByIdPosts(Integer id) {
            return postRepository.findById(id);
    }
}
