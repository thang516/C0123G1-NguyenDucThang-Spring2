package com.example.back_end_spring2.service;

import com.example.back_end_spring2.model.Customers;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.ShoppingCards;
import com.example.back_end_spring2.repository.IShoppingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class ShoppingService implements IShoppingService{

    @Autowired
    private IShoppingRepository shoppingRepository ;
    @Override
    public List<ShoppingCards> getShoppingCart(Integer id) {
        return shoppingRepository.findAllByCustomers(id);
    }

    @Override
    public void setCart(Integer index, Integer id) {
      ShoppingCards shoppingCards = shoppingRepository.findById(id).get();
        if (index==0){
            shoppingCards.setPrice(shoppingCards.getProducts().getPrice()*(shoppingCards.getAmount()-1));
            shoppingCards.setAmount(shoppingCards.getAmount()-1);
            shoppingRepository.save(shoppingCards);
        }else {
            shoppingCards.setPrice(shoppingCards.getProducts().getPrice()*(shoppingCards.getAmount()+1));
            shoppingCards.setAmount(shoppingCards.getAmount()+1);
            shoppingRepository.save(shoppingCards);
        }
    }

    @Override
    public void createCart(Customers customers, Products products, Integer amount) {
        ShoppingCards shoppingCards = shoppingRepository.getToCart(customers.getId(),products.getId());
        if(shoppingCards == null){
            ShoppingCards shoppingCards1 = new ShoppingCards();
            shoppingCards1.setAmount(amount);
            shoppingCards1.setPrice(products.getPrice()*amount);
            shoppingCards1.setCustomers(customers);
            shoppingCards1.setProducts(products);
            shoppingRepository.save(shoppingCards1);
        }else {
            shoppingCards.setPrice(shoppingCards.getPrice()*(shoppingCards.getAmount()+amount));
            shoppingCards.setAmount(shoppingCards.getAmount()+amount);
            shoppingRepository.save(shoppingCards);

        }
    }

    @Override
    public void deleteC(Integer id) {
        shoppingRepository.deleteById(id);
    }



}
