package com.app.service;

import java.util.List;

import com.app.entites.Products;

public interface FavService {

	List<Products> getFavoriteProductsByUser(Long userId);

}
