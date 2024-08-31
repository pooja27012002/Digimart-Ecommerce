package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {
	private Long orderItemId;
	private ProductDTO2 product;
	private Integer quantity;
	
	private double orderedProductPrice;

	public OrderItemDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderItemDTO(ProductDTO2 product, Integer quantity, double orderedProductPrice) {
		super();
		this.product = product;
		this.quantity = quantity;
		this.orderedProductPrice = orderedProductPrice;
	}

	public Long getOrderItemId() {
		return orderItemId;
	}

	public void setOrderItemId(Long orderItemId) {
		this.orderItemId = orderItemId;
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

	public double getOrderedProductPrice() {
		return orderedProductPrice;
	}

	public void setOrderedProductPrice(double orderedProductPrice) {
		this.orderedProductPrice = orderedProductPrice;
	}

	@Override
	public String toString() {
		return "OrderItemDTO [orderItemId=" + orderItemId + ", product=" + product + ", quantity=" + quantity
				+ ", orderedProductPrice=" + orderedProductPrice + "]";
	}
	
	

}
