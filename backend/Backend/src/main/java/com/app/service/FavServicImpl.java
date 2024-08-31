package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entites.Products;
import com.app.entites.FavouriteProducts;
import com.app.repository.FavRepo;

@Service
@Transactional
public class FavServicImpl implements FavService {

	
	@Autowired
	private FavRepo favRepo;
	
	
	@Override
	public List<Products> getFavoriteProductsByUser(Long userId) {
		
		 return favRepo.findAll().stream()
		            .filter(fb -> fb.getUser().getUserId().equals(userId))
		            .map(FavouriteProducts::getProduct)
		            .collect(Collectors.toList());
	}

}
