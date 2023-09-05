package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.model.Posts;
import com.example.back_end_spring2.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin("*")
public class PostController {
    @Autowired
    private IPostService postService ;
    @GetMapping("")
    public ResponseEntity<Page<Posts>> getPosts(@PageableDefault(sort = "create_time", direction = Sort.Direction.DESC) Pageable pageable,
                                                @RequestParam(required = false, defaultValue = "") String titleSearch) {
        Page<Posts> posts = postService.getAll(pageable, titleSearch);
        if (posts.isEmpty() && posts == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/detailPosts/{id}")
    public ResponseEntity<Posts> detailPosts(@PathVariable Integer id) {
        Optional<Posts> posts = postService.findByIdPosts(id);
        if (!posts.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(posts.get(), HttpStatus.OK);
    }
}
