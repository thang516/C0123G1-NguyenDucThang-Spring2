package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.DTO.IProductDTO;
import com.example.back_end_spring2.DTO.ProductDTO;
import com.example.back_end_spring2.model.Images;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.service.IImageService;
import com.example.back_end_spring2.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private IImageService iImageService;
    @Autowired
    private IProductService productService ;

    @GetMapping("")
    public ResponseEntity<Page<IProductDTO>> getAll (@RequestParam(value = "page",defaultValue = "0") Integer page,
                                                     @RequestParam("sortBy") String sortBy,
                                                     @RequestParam("price") String priceFromTo,
                                                         @RequestParam("color") String color,
                                                     @RequestParam("typeProduct") String typeProduct,
                                                     @RequestParam("nameProduct") String nameProduct ){
        Pageable pageable ;
        switch (sortBy) {

            case "lowToHigh": {
                pageable = PageRequest.of(page, 6, Sort.by(Sort.Order.asc("price")));
                break;
            }
            case "highToLow": {
                pageable = PageRequest.of(page, 6, Sort.by(Sort.Order.desc("price")));
                break;
            }

            default: {
                pageable = PageRequest.of(page, 6);
            }

        }

        double from = 0;
        double to = 0;

        switch (priceFromTo) {
            case "0-100": {
                from = 0;
                to = 100;
                break;
            }
            case "100-200": {
                from = 100;
                to = 200;
                break;
            }

            case "200": {
                from = 200;
                to = productService.getMaxPrice();
                break;
            }
            default:{
                from = 0;
                to = productService.getMaxPrice();
                break;
            }

        }




        Page<IProductDTO> productsPage = productService.getAllProducts(pageable, sortBy, from, to, color, typeProduct, nameProduct);


        if(productsPage == null ){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productsPage,HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id) {
        ProductDTO productDTO = productService.findByIdProduct(id);
        if (productDTO == null)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        else
            return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<List<Images>> detailProduct(@PathVariable("id") Integer id){

        List<Images> imagesList = iImageService.getAllImage(id);

        if(imagesList == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }
        return new ResponseEntity<>(imagesList, HttpStatus.OK);
    }


}
