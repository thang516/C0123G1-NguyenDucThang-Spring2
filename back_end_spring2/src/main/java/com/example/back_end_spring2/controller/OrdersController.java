package com.example.back_end_spring2.controller;


import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.model.*;
import com.example.back_end_spring2.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrdersController {
    @Autowired
    private IOrdersService ordersService;
    @Autowired
    private IOrdersDetailService ordersDetailService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IShoppingService shoppingService;
    @Autowired
    private EmailService emailService;

    @GetMapping("")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")


    public ResponseEntity<List<Orders>> getAll(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.getCustomer(username);
        List<Orders> ordersList = ordersService.getAll(customers.getId());
        if (ordersList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }

    @PostMapping("/add-orders")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")

    public ResponseEntity<?> create(HttpServletRequest httpServletRequest) {

        try {
            String header = httpServletRequest.getHeader("Authorization");
            String token = header.substring(7);
            String username = jwtTokenUtil.getUsernameFromToken(token);
            Customers customers = customerService.getCustomer(username);
            List<ShoppingCards> shoppingCards = shoppingService.getShoppingCart(customers.getId());
            ordersService.save(shoppingCards);
            shoppingService.deleteByCustomerId(customers.getId());

            LocalDate redeemDate = LocalDate.now();
            String name = customers.getName();
            String product = null;
            for (int i = 0; i < shoppingCards.size(); i++) {
                 product = shoppingCards.get(i).getProducts().getNameProduct();
                break;
            }
            String to = customers.getEmail();


            String subject = "Thank you for shopping at ZeusAccessory";
            String body = "Hello " + name + ",\n" +
                    "\n" +
                    "We send this email to confirm that you have just paid " + product + " on the day " + redeemDate +"\n" +
                    "\n" +
                    "We would like to thank you for trusting and using our services.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "---------------------------------------" + "\n" +
                    "Name :zeus accessory\n" +
                    "Mobile : 0782391943\n" +
                    "Email : accessoryzeus@gmail.com\n" +
                    "Address :\u200B2\u200B80\u200B \u200BTrần Hưng Đạo\u200B streets, \u200BSơn Trà\u200B District, Da Nang";

            emailService.sendMail(to, subject, body);






            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
    @GetMapping("/history/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")

    public ResponseEntity<List<OrderDetail>> detailHistory (@PathVariable("id") Integer id){
      List<OrderDetail> orderDetails = ordersDetailService.findById(id);
      if(orderDetails == null){
          return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
      return new ResponseEntity<>(orderDetails,HttpStatus.OK);
    }





}
