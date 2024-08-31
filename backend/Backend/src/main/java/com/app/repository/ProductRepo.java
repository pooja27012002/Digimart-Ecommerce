package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entites.Products;

public interface ProductRepo extends JpaRepository<Products, Long> {

	Products findProductsByProductName(String bname);

}
