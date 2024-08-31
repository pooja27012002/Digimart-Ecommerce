package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {
	
	private Long cartItemId;
//	private CartDTO cart;
	private ProductDTO2 product;
	private Integer quantity;
	private double productPrice;
	public CartItemDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CartItemDTO(ProductDTO2 product, Integer quantity, double productPrice) {
		super();
		this.product = product;
		this.quantity = quantity;
		this.productPrice = productPrice;
	}
	public Long getCartItemId() {
		return cartItemId;
	}
	public void setCartItemId(Long cartItemId) {
		this.cartItemId = cartItemId;
	}
	public ProductDTO2 getProduct() {
		return product;
	}
	public void setProduct(ProductDTO2 product) {
		this.product = product;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
	@Override
	public String toString() {
		return "CartItemDTO [cartItemId=" + cartItemId + ", product=" + product + ", quantity=" + quantity
				+ ", productPrice=" + productPrice + "]";
	}
	
	
}
