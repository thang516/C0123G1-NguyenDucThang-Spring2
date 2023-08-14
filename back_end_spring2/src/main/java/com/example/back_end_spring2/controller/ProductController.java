package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.DTO.IImageDTO;
import com.example.back_end_spring2.DTO.IProductDTO;
import com.example.back_end_spring2.DTO.ProductDTO;
import com.example.back_end_spring2.model.Images;
import com.example.back_end_spring2.model.ProductType;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.service.IImageService;
import com.example.back_end_spring2.service.IProductService;
import com.example.back_end_spring2.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
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
    @Autowired
    private IProductTypeService productTypeService ;

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
            case "0-500": {
                from = 0;
                to = 500;
                break;
            }
            case "500-1000": {
                from = 500;
                to = 1000;
                break;
            }

            case "1001": {
                from = 1001;
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



    @GetMapping("/new-product")
    public ResponseEntity<List<IProductDTO>> newProduct(){
        List<IProductDTO> products = productService.findNewProduct();
        if(products.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
            return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @GetMapping("/products")
    public ResponseEntity<List<Products>> products(){
        List<Products> products = productService.findProducts();
        if(products.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @GetMapping("/type")
    public ResponseEntity<List<Products>> getProductType(){
        List<Products> productDTOS = productService.findProductType();
        if(productDTOS.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDTOS,HttpStatus.OK);
    }

    @GetMapping("/color/{nameProduct}")
    public ResponseEntity<List<IImageDTO>> getColor(@PathVariable String nameProduct){
        List<IImageDTO> productDTOS = productService.findColor(nameProduct);
        if(productDTOS.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDTOS,HttpStatus.OK);
    }



    @GetMapping("/find-all")
    public ResponseEntity<Page<IProductDTO>> findAllProductByRoleOther (@RequestParam(value = "page",defaultValue = "0") Integer page,
                                                     @RequestParam(value = "typeProduct",defaultValue = "") String typeProduct,
                                                     @RequestParam(value = "nameProduct",defaultValue = "") String nameProduct ){
        Pageable pageable = PageRequest.of(page, 6, Sort.by(Sort.Order.asc("price")));
        Page<IProductDTO> pro = productService.findAllProductByOther(pageable, typeProduct, nameProduct);
        if(pro == null ){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(pro,HttpStatus.OK);
    }









}
