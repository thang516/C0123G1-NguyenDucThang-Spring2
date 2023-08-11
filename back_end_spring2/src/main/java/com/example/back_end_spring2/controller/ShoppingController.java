package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.service.ICustomerService;
import com.example.back_end_spring2.service.IProductService;
import com.example.back_end_spring2.service.IShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/shopping")
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
public class ShoppingController {

    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IShoppingService shoppingService;

    @Autowired
    private IProductService productService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    @GetMapping("")
    public ResponseEntity<List<ShoppingCards>> getCard(HttpServletRequest httpServletRequest){
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username  =  jwtTokenUtil.getUsernameFromToken(token);

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


    @PostMapping("/create/{id}/{amount}")
    public ResponseEntity<?> createCart(@PathVariable Integer id,@PathVariable Integer amount,HttpServletRequest httpServletRequest){

        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username  =  jwtTokenUtil.getUsernameFromToken(token);
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
    public ResponseEntity<List<ShoppingCards>> delete(@PathVariable Integer id ){
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        shoppingService.deleteC(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> addCartSession(@RequestBody ShoppingCards shoppingCards, HttpServletRequest httpServletRequest) {
        List<ShoppingCards> cardsList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        if (session.getAttribute("cart") != null) {
            cardsList = (List<ShoppingCards>) session.getAttribute("cart");
            int count = 0;
            for (int i = 0; i < cardsList.size(); i++) {
                if (shoppingCards.getProducts().getId() == cardsList.get(i).getProducts().getId()) {
                    cardsList.get(i).setAmount(cardsList.get(i).getAmount() + shoppingCards.getAmount());
                    count++;
                }
            }
            if (count == 0) {
                cardsList.add(shoppingCards);
            } else {
                session.setAttribute("cart", cardsList);
                cardsList.add(shoppingCards);
            }

        }
        session.setAttribute("cart", cardsList);
        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);
    }


    @GetMapping("/session-card")
    public ResponseEntity<?> getAllCard(HttpServletRequest httpServletRequest) {
        List<ShoppingCards> cardsList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();

        session.setAttribute("cart", cardsList);
        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);
    }




}
