package com.app.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "favouriteproducts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FavouriteProducts {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long favId;
	 	
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    @ManyToOne
	    @JoinColumn(name = "product_id")
	    private Products product;

		public FavouriteProducts() {
			super();
			// TODO Auto-generated constructor stub
		}

		public FavouriteProducts(User user, Products product) {
			super();
			this.user = user;
			this.product = product;
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

		public Products getProduct() {
			return product;
		}

		public void setProduct(Products product) {
			this.product = product;
		}

		@Override
		public String toString() {
			return "FavouriteProducts [favId=" + favId + ", user=" + user + ", product=" + product + "]";
		}

	    
	    
}
