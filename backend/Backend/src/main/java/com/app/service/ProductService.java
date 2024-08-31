package com.app.service;

import java.util.List;

import com.app.entites.Products;
import com.app.response.ApiResponse;

public interface ProductService {

	ApiResponse addProduct(Products product);

	List<Products> getProducts();

	ApiResponse delProduct(Long bid);

	Products getProduct(Long bid);

	ApiResponse addToFav(Long bid, Long uid);

	Products getProductName(String bname);
	
}
