package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entites.Products;
import com.app.entites.Cart;
import com.app.entites.CartItem;

public interface CartItemRepo extends JpaRepository<CartItem, Long>{

	CartItem findCartItemByCart(Long cartId);
//	CartItem findCartItemByProductIdAndCart( Long productId,Long cartId);


	CartItem findByProductAndCart(Products product1, Cart cart);


	void deleteCartItemByProductAndCart(Products product1, Cart cart);


//	CartItem findCartItemByCart(Cart cart);


	CartItem findCartItemByCartAndProduct (Cart cart, Products product);


//	CartItem findByIdAndProduct (Long cartItemId, Products product);
	
	CartItem findByCartItemIdAndProduct(Long cartItemId, Products product);


	CartItem findByProduct (Products product);



	
	

	
}
