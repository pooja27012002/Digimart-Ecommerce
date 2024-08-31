package com.app.dtos;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartDTO {
	
	private Long cartId;
	private Double totalPrice = 0.0;
	private List<ProductDTO2> products = new ArrayList<>();
	public CartDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CartDTO(Double totalPrice, List<ProductDTO2> products) {
		super();
		this.totalPrice = totalPrice;
		this.products = products;
	}
	public Long getCartId() {
		return cartId;
	}
	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}
	public Double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public List<ProductDTO2> getProducts() {
		return products;
	}
	public void setProducts(List<ProductDTO2> products) {
		this.products = products;
	}
	@Override
	public String toString() {
		return "CartDTO [cartId=" + cartId + ", totalPrice=" + totalPrice + ", products=" + products + "]";
	}
	
}
