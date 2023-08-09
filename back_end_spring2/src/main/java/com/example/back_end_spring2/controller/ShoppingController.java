package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.service.ICustomerService;
import com.example.back_end_spring2.service.IProductService;
import com.example.back_end_spring2.service.IShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shopping")
@CrossOrigin("*")
public class ShoppingController {

    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IShoppingService shoppingService;

    @Autowired
    private IProductService productService;


    @GetMapping("/{username}")
    public ResponseEntity<List<ShoppingCards>> getCard(@PathVariable String username){
        Customers customers = customerService.getCustomer(username);
        if(customers == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoppingService.getShoppingCart(customers.getId()),HttpStatus.OK);
    }
    @PatchMapping("/{index}/{id}")
    public ResponseEntity<?> setCart(@PathVariable Integer index,@PathVariable Integer id){
        try {
            shoppingService.setCart(index,id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }


    @PostMapping("/create/{username}/{id}/{amount}")
    public ResponseEntity<?> createCart(@PathVariable String username,@PathVariable Integer id,@PathVariable Integer amount){
        try{
            Products products =productService.getProduct(id);
                Customers customers = customerService.getCustomer(username);
            shoppingService.createCart(customers,products,amount);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id ){
        try{
            productService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
