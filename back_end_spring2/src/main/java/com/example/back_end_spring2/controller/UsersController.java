package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.config.JwtUserDetails;
import com.example.back_end_spring2.model.Users;
import com.example.back_end_spring2.reponse.JwtRequest;
import com.example.back_end_spring2.reponse.JwtResponse;
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

import java.util.Random;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UsersController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UsersService usersService;

    class ErrorInfo {
        private String error;
        private Integer id;


    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> loginAuthentication(@RequestBody JwtRequest authenticationRequest) throws Exception {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            GrantedAuthority authority = principal.getAuthorities().stream().findFirst().orElse(null);
            final String token = jwtTokenUtil.generateToken(principal.getUsername());

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