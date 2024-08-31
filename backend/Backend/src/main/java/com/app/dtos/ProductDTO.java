package com.app.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class ProductDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long productId;

	private String productName;

	private String description;
	private String imgUrl;
	private Integer quantity;

	private double price;

	private UserIdDto sellerId;

	private CategoryIdDto categoryId;

	public ProductDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductDTO(String productName, String description, String imgUrl, Integer quantity, double price,
			UserIdDto sellerId, CategoryIdDto categoryId) {
		super();
		this.productName = productName;
		this.description = description;
		this.imgUrl = imgUrl;
		this.quantity = quantity;
		this.price = price;
		this.sellerId = sellerId;
		this.categoryId = categoryId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public UserIdDto getSellerId() {
		return sellerId;
	}

	public void setSellerId(UserIdDto sellerId) {
		this.sellerId = sellerId;
	}

	public CategoryIdDto getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(CategoryIdDto categoryId) {
		this.categoryId = categoryId;
	}

	@Override
	public String toString() {
		return "ProductDTO [productId=" + productId + ", productName=" + productName + ", description=" + description
				+ ", imgUrl=" + imgUrl + ", quantity=" + quantity + ", price=" + price + ", sellerId=" + sellerId
				+ ", categoryId=" + categoryId + "]";
	}
	
	
	
}


