package com.app.dtos;

import java.util.Set;

import com.app.entites.Products;
import com.app.entites.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavDto {

	private Long favId;

	private User user;

	private Set<Products> products;

	public FavDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FavDto(User user, Set<Products> products) {
		super();
		this.user = user;
		this.products = products;
	}

	public Long getFavId() {
		return favId;
	}

	public void setFavId(Long favId) {
		this.favId = favId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<Products> getProducts() {
		return products;
	}

	public void setProducts(Set<Products> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "FavDto [favId=" + favId + ", user=" + user + ", products=" + products + "]";
	}
	
	

}
