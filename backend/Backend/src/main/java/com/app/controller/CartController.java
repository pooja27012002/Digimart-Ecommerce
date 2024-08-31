package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.CartDTO;
import com.app.dtos.CartItemDTO;
import com.app.response.ApiResponse;
import com.app.service.CartService;

@CrossOrigin
@RestController
@RequestMapping("/cart")
//@SecurityRequirement(name = "E-Commerce Application")
public class CartController {
	
	@Autowired
	private CartService cartService;

	@PostMapping("/public/carts/{cartId}/products/{productId}/quantity/{quantity}")
	public ResponseEntity<CartDTO> addProductToCart(@PathVariable Long cartId, @PathVariable Long productId, @PathVariable Integer quantity) {
		CartDTO cartDTO = cartService.addProductToCart(cartId, productId, quantity);
		System.out.println("Success-------------------------");
		return new ResponseEntity<CartDTO>(cartDTO, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<CartDTO>> getCarts() {
		
		List<CartDTO> cartDTOs = cartService.getAllCarts();
		
		return new ResponseEntity<List<CartDTO>>(cartDTOs, HttpStatus.FOUND);
	}
	
	@GetMapping("/user/{emailId}")
	public ResponseEntity<CartDTO> getCartByUserId(@PathVariable String emailId) {
		CartDTO cartDTO = cartService.getCart(emailId);
		
		return new ResponseEntity<CartDTO>(cartDTO, HttpStatus.FOUND);
	}
	@GetMapping("/{cartId}")
	public ResponseEntity<CartDTO> getCartById(@PathVariable Long cartId) {
		CartDTO cartDTO = cartService.getCartById(cartId);
		
		return  ResponseEntity.ok(cartDTO);
	}
	@GetMapping("/cartitems/{cartId}")
	public ResponseEntity<List<CartItemDTO>> getCartItems(@PathVariable Long cartId) {
		List<CartItemDTO> cartItemDTO = cartService.getCartItemsById(cartId);
		
		return  ResponseEntity.ok(cartItemDTO);
	}
	@PutMapping("/updateItems/cartitemid/{cartItemId}/productid/{productid}/quantity/{quant}")
	public ResponseEntity<ApiResponse> updateCartItems(@PathVariable Long cartItemId,@PathVariable Long productid,@PathVariable Integer quant) {
		ApiResponse api = cartService.updateItems(cartItemId,productid,quant);
		
		return  ResponseEntity.ok(api);
	}
	
//	@PutMapping("/public/carts/{cartId}/products/{productId}/quantity/{quantity}")
//	public ResponseEntity<CartDTO> updateCartProduct(@PathVariable Long cartId, @PathVariable Long productId, @PathVariable Integer quantity) {
//		CartDTO cartDTO = cartService.updateProductQuantityInCart(cartId, productId, quantity);
//		
//		return new ResponseEntity<CartDTO>(cartDTO, HttpStatus.OK);
//	}
	
	@DeleteMapping("cartId/{cartId}/productId/{productId}")
	public ResponseEntity<String> deleteProductFromCart(@PathVariable Long cartId, @PathVariable Long productId) {
		String status = cartService.deleteProductFromCart(cartId, productId);
		
		return new ResponseEntity<String>(status, HttpStatus.OK);
	}
	
//
//	@DeleteMapping("productId/{productId}")
//	public ResponseEntity<ApiResponse> deleteproductFromCart( @PathVariable Long productId) {
//		ApiResponse status = cartService.deleteproductFromCart( productId);
//		
//		return new ResponseEntity<ApiResponse>(status, HttpStatus.OK);
//	}
}
