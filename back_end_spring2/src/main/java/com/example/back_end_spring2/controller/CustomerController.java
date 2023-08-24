package com.example.back_end_spring2.controller;

import com.example.back_end_spring2.DTO.CustomerDTO;
import com.example.back_end_spring2.config.JwtTokenUtil;
import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.service.ICustomerService;
import com.sun.istack.NotNull;
import com.sun.istack.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    private ICustomerService customerService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @GetMapping("")
    public ResponseEntity<Page<Customers>> getAll(@RequestParam(value = "page", defaultValue = "0") Integer page) {
        Pageable pageable = PageRequest.of(page, 3, Sort.by(Sort.Order.asc("name")));

        Page<Customers> customersPage = customerService.getAll(pageable);

        if (customersPage == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customersPage, HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<List<Customers>> delete(@PathVariable Integer id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        customerService.deleteByCustomer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @NotNull
    @PostMapping("/create")
    public ResponseEntity createCustomer(@Validated @RequestBody CustomerDTO customerDTO , BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            Map<String, String> list = new HashMap<>();
            String[] fieldsToCheck = {"name", "phone", "address", "email"};

            for (String field : fieldsToCheck) {
                @Nullable
                FieldError fieldError = bindingResult.getFieldError(field);
                if (fieldError != null) {
                    list.put(field, fieldError.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(list, HttpStatus.BAD_REQUEST);
        }
        customerService.save(customerDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/detail")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")
    public ResponseEntity<Customers> detailCustomer(HttpServletRequest httpServletRequest) {

        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);

      Customers customers = customerService.getCus(username);
      if (customers == null){
          return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
      return new ResponseEntity<>(customers,HttpStatus.OK);
    }


}
