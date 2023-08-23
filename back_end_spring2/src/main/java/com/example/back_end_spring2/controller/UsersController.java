package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.config.JwtUserDetails;
import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.model.Users;
import com.example.back_end_spring2.reponse.JwtRequest;
import com.example.back_end_spring2.reponse.JwtResponse;
import com.example.back_end_spring2.service.ICustomerService;
import com.example.back_end_spring2.service.IShoppingService;
import com.example.back_end_spring2.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/api/user")
public class UsersController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UsersService usersService;
    @Autowired
    private IShoppingService shoppingService;
    @Autowired
    private ICustomerService customerService ;

    class ErrorInfo {
        private String error;
        private Integer id;


    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> loginAuthentication(@RequestBody JwtRequest authenticationRequest, HttpServletRequest httpServletRequest) throws Exception {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            GrantedAuthority authority = principal.getAuthorities().stream().findFirst().orElse(null);
            final String token = jwtTokenUtil.generateToken(principal.getUsername());
            HttpSession httpSession = httpServletRequest.getSession();

        if( httpSession.getAttribute("cart") != null){
                List<ShoppingCards> shoppingCards = new ArrayList<>();
                Customers customers = customerService.getCustomer(principal.getUsername());
                try {
                    shoppingService.deleteCustomer(customers);
                }catch (Exception e){
                   throw  e ;
                }

                shoppingCards = (List<ShoppingCards>) httpSession.getAttribute("cart");
                for (int i = 0; i < shoppingCards.size(); i++) {
                    shoppingService.createCart(customers,shoppingCards.get(i).getProducts(),shoppingCards.get(i).getAmount());
                }
                httpSession.removeAttribute("cart");
            }
            return ResponseEntity.ok(new JwtResponse(token, principal.getUsername(), authority != null ? authority.getAuthority() : null));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Fail to login");
        }
//        Users users = usersService.findByUsername(authenticationRequest.getUsername());
//        final UserDetails userDetails = usersService.loadUserByUsername(authenticationRequest.getUsername());
    }


    @PostMapping("/checkCode")
    public ResponseEntity<?> checkCode(@RequestBody Users user) {
        Users users = usersService.findById(user.getId());
        if (users.getVerificationCode().toString().equals(user.getVerificationCode().toString())) {
            return ResponseEntity.ok(users.getId());
        } else {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Xác nhận mã thất bại!!");
        }
    }

    @PatchMapping("/newPassword")
    public ResponseEntity<?> createNewPassword(@RequestBody Users user) {
        if (user.getPassword().length() < 8 || user.getPassword().length() > 20) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Mật khẩu không được ít hơn 8 hoăc nhiều hơn 50 kí tự!!");
        }
        try {
            usersService.saveNewPassword(user);
            return ResponseEntity.ok("Đổi mật khẩu thành công!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Đổi mật khẩu thất bại!!");
        }
    }




}