package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.OrderDetail;
import com.example.back_end_spring2.model.Orders;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.repository.IOrdersDetailRepository;
import com.example.back_end_spring2.repository.IOrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.List;

@Service
public class OrdersService implements IOrdersService {
    @Autowired
    private IOrdersRepository iOrdersRepository;
    @Autowired
    private IOrdersDetailRepository repository;
    @Override
    public List<Orders> getAll() {
        return iOrdersRepository.findAll();
    }

    @Override
    public ResponseEntity<?> save(List<ShoppingCards> shoppingCards) {
        boolean check = false ;
        for (int i = 0; i <shoppingCards.size() ; i++) {
            if(shoppingCards.get(i).getAmount() > shoppingCards.get(i).getProducts().getStockQuantity()){
                 check = true;
            }
        }
        if(check ==true) {
            return new ResponseEntity<>("The product you purchased is out of stock",HttpStatus.BAD_REQUEST);
        }

      try{
          Orders orders = new Orders();
          orders.setCustomers(shoppingCards.get(0).getCustomers());
          iOrdersRepository.save(orders);

          for (int i = 0; i < shoppingCards.size(); i++) {
              OrderDetail orderDetail = new OrderDetail();
                 orderDetail.setOrders(orders);
                orderDetail.setProducts(shoppingCards.get(i).getProducts());
                orderDetail.setPrice(shoppingCards.get(i).getPrice());
                orderDetail.setQuantity(shoppingCards.get(i).getAmount());
              orderDetail.getProducts().setStockQuantity( orderDetail.getProducts().getStockQuantity()-shoppingCards.get(i).getAmount());
                repository.save(orderDetail);
          }


          return new ResponseEntity<>(HttpStatus.OK);
      }catch (Exception e){
          return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }

    }


}
