package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.service.ICustomerService;
import com.example.back_end_spring2.service.IProductService;
import com.example.back_end_spring2.service.IShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    private IProductService iProductService;


    @GetMapping("")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")

    public ResponseEntity<List<ShoppingCards>> getCard(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);

        Customers customers = customerService.getCustomer(username);
        if (customers == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shoppingService.getShoppingCart(customers.getId()), HttpStatus.OK);
    }

    @PatchMapping("/{index}/{id}/{idColor}")
    public ResponseEntity<?> setCart(@PathVariable Integer index, @PathVariable Integer id, @PathVariable Integer idColor, HttpServletRequest httpServletRequest) {
        List<ShoppingCards> cardsList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                cardsList = (List<ShoppingCards>) session.getAttribute("cart");
                for (int i = 0; i < cardsList.size(); i++) {
                    Products products = iProductService.getProduct(cardsList.get(i).getProducts().getId());
                    if (cardsList.get(i).getProducts().getId().equals(id) && cardsList.get(i).getProducts().getColors().getId().equals(idColor)) {


                        if (index == 0) {
                            cardsList.get(i).setPrice(cardsList.get(i).getProducts().getPrice() * (cardsList.get(i).getAmount() - 1));
                            cardsList.get(i).setAmount(cardsList.get(i).getAmount() - 1);

                        } else {
                            if (cardsList.get(i).getAmount() + 1 > products.getStockQuantity()) {
                                return new ResponseEntity<>("The product you purchased is out of stock", HttpStatus.BAD_REQUEST);
                            }
                            cardsList.get(i).setPrice(cardsList.get(i).getProducts().getPrice() * (cardsList.get(i).getAmount() + 1));
                            cardsList.get(i).setAmount(cardsList.get(i).getAmount() + 1);

                        }
                    }
                }
                session.setAttribute("cart", cardsList);
                return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);

            }


            ResponseEntity<?> set = shoppingService.setCart(index, id, idColor);
            if (set.getStatusCode() == HttpStatus.BAD_REQUEST) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }


    @PostMapping("/create/{id}/{amount}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")

    public ResponseEntity<?> createCart(@PathVariable Integer id, @PathVariable Integer amount, HttpServletRequest httpServletRequest) {

        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        try {
            Products products = productService.getProduct(id);
            Customers customers = customerService.getCustomer(username);

            ResponseEntity<?> cart = shoppingService.createCart(customers, products, amount);
            if (cart.getStatusCode() == HttpStatus.BAD_REQUEST) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")

    public ResponseEntity<List<ShoppingCards>> delete(@PathVariable Integer id) {
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
            Products products = iProductService.getProduct(shoppingCards.getProducts().getId());
            for (int i = 0; i < cardsList.size(); i++) {

                if (shoppingCards.getProducts().getId() == cardsList.get(i).getProducts().getId() && shoppingCards.getProducts().getColors().getId() == cardsList.get(i).getProducts().getColors().getId()) {
                    if (products.getStockQuantity() < shoppingCards.getAmount() + cardsList.get(i).getAmount()) {
                        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                    }
                    cardsList.get(i).setAmount(cardsList.get(i).getAmount() + shoppingCards.getAmount());
                    cardsList.get(i).setPrice(cardsList.get(i).getPrice() + shoppingCards.getProducts().getPrice());
                    count++;
                }
            }
            if (count == 0) {

                shoppingCards.setPrice(shoppingCards.getProducts().getPrice() * shoppingCards.getAmount());
                cardsList.add(shoppingCards);
            }

        } else {
            cardsList.add(shoppingCards);
            session.setAttribute("cart", cardsList);
        }

        session.setAttribute("cart", cardsList);
        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);
    }


    @GetMapping("/list-session")
    public ResponseEntity<?> getAllCard(HttpServletRequest httpServletRequest) {
        HttpSession httpSession = httpServletRequest.getSession();
        return new ResponseEntity<>(httpSession.getAttribute("cart"), HttpStatus.OK);
    }

    @DeleteMapping("/remove/{idP}")
    public ResponseEntity<?> deleteCart(@PathVariable Integer idP, HttpServletRequest httpServletRequest) {
        HttpSession httpSession = httpServletRequest.getSession();
        List<ShoppingCards> cardsList = (List<ShoppingCards>) httpSession.getAttribute("cart");

        if (cardsList != null) {
            for (int i = 0; i < cardsList.size(); i++) {
                if (cardsList.get(i).getProducts().getId().equals(idP)) {
                    cardsList.remove(cardsList.get(i));
                    break;
                }
            }

        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        httpSession.setAttribute("cart", cardsList);

        return new ResponseEntity<>(httpSession.getAttribute("cart"), HttpStatus.OK);
    }

//    @PostMapping("/save-db")
//    public ResponseEntity<?> saveSessionToDB(HttpServletRequest httpServletRequest) {
//        try {
//            HttpSession httpSession = httpServletRequest.getSession();
//            List<ShoppingCards> shoppingCards = new ArrayList<>();
//            shoppingCards = (List<ShoppingCards>) httpSession.getAttribute("cart");
//            for (int i = 0; i < shoppingCards.size(); i++) {
//                shoppingService.save(shoppingCards.get(i));
//            }
//            httpSession.removeAttribute("cart");
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }


}
