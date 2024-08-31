package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entites.Products;
import com.app.entites.FavouriteProducts;
import com.app.entites.User;
import com.app.repository.ProductRepo;
import com.app.repository.FavRepo;
import com.app.repository.UserRepo;
import com.app.response.ApiResponse;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepo productRepo;
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private FavRepo favRepo;
	@Override
	public ApiResponse addProduct(Products product) {
		productRepo.save(product);
		return new ApiResponse("Product Inserted");
	}
	@Override
	public List<Products> getProducts() {
		
		return productRepo.findAll();
	}
	@Override
	public ApiResponse delProduct(Long bid) {
		productRepo.deleteById(bid);
		return new ApiResponse("Product Deleted");
	}
	@Override
	public Products getProduct(Long bid) {
		Products product = productRepo.findById(bid).get();
		return product;
	}
	@Override
	public ApiResponse addToFav(Long bid, Long uid) {
		User user = userRepo.findById(uid).orElseThrow(() -> new RuntimeException("User not found"));
        Products product = productRepo.findById(bid).orElseThrow(() -> new RuntimeException("Product not found"));

        FavouriteProducts favoriteProduct = new FavouriteProducts();
        favoriteProduct.setUser(user);
        favoriteProduct.setProduct(product);
        favRepo.save(favoriteProduct);
    		
		return new ApiResponse("Added to fav");
	}
	@Override
	public Products getProductName(String bname) {
		Products product = productRepo.findProductsByProductName(bname);
		return product;
	}

}
