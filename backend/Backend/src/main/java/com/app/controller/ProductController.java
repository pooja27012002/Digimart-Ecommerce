
package com.app.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ProductDTO;
import com.app.dtos.ProductDTO2;
import com.app.dtos.CategoryIdDto;
import com.app.dtos.UserIdDto;
import com.app.entites.Products;
import com.app.entites.Category;
import com.app.entites.FavouriteProducts;
import com.app.entites.User;
import com.app.repository.FavRepo;
import com.app.response.ApiResponse;
import com.app.service.ProductService;
import com.app.service.CatService;
import com.app.service.FavService;
import com.app.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	@Autowired
	private CatService catService;
	@Autowired
	private FavRepo favRepo;
	@Autowired
	private FavService favServ;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserService userService;

	@PostMapping("/add")
	private ResponseEntity<ApiResponse> addProduct(@RequestBody ProductDTO productDto) {
		Products product = mapToEntity(productDto);
		return ResponseEntity.ok(productService.addProduct(product));

	}

	@GetMapping
	private ResponseEntity<List<ProductDTO>> getProducts() {
		List<Products> list2 = productService.getProducts();
		List<ProductDTO> list = list2.stream().map(this::convertToDTO).collect(Collectors.toList());

		return ResponseEntity.ok(list);
	}
	@GetMapping("/getfavs/{userId}")
	public ResponseEntity<List<ProductDTO>> getFavoriteProductsByUser(@PathVariable Long userId) {
		List<Products> list2 = favServ.getFavoriteProductsByUser(userId);
		List<ProductDTO> list = list2.stream().map(this::convertToDTO).collect(Collectors.toList());
		return ResponseEntity.ok(list);

	}

	@GetMapping("/{bid}")
	private ResponseEntity<ProductDTO2> getProduct(@PathVariable Long bid) {
		Products product1 = productService.getProduct(bid);
		ProductDTO2 product = mapper.map(product1, ProductDTO2.class);
		return ResponseEntity.ok(product);
	}
	@GetMapping("/productname/{bname}")
	private ResponseEntity<ProductDTO2> getProduct(@PathVariable String bname) {
		Products product1 = productService.getProductName(bname);
		ProductDTO2 product = mapper.map(product1, ProductDTO2.class);
		return ResponseEntity.ok(product);
	}

	@PostMapping("/addtofav/{bid}/{uid}")
	private ResponseEntity<ApiResponse> addProduct(@PathVariable Long bid,@PathVariable Long uid) {
		ApiResponse api = productService.addToFav(bid, uid);
		return ResponseEntity.ok(api);

	}

	

	@DeleteMapping("/delfav/{bid}/{uid}")
	public void removeFavorite(@PathVariable Long uid, @PathVariable Long bid) {
		System.out.println(uid);
		System.out.println(bid);
		FavouriteProducts favoriteProduct = favRepo.findAll().stream()
				.filter(fb -> fb.getUser().getUserId().equals(uid) && fb.getProduct().getProductId().equals(bid))
				.findFirst().orElseThrow(() -> new RuntimeException("Favorite not found"));

		favRepo.delete(favoriteProduct);
	}

	@DeleteMapping("/{bid}")
	private ResponseEntity<ApiResponse> delProduct(@PathVariable Long bid) {
		return ResponseEntity.ok(productService.delProduct(bid));
	}

	private Products mapToEntity(ProductDTO productDto) {

		Products product = new Products();
		product.setProductName(productDto.getProductName());
		product.setDescription(productDto.getDescription());
		product.setQuantity(productDto.getQuantity());
		product.setPrice(productDto.getPrice());
		product.setImgUrl(productDto.getImgUrl());
//		product.setAuthorName(productDto.getAuthorName());

		User user = userService.getById(productDto.getSellerId().getUserId());
		Category cat = catService.getById(productDto.getCategoryId().getCateId());
		product.setSeller(user);
		product.setCategory(cat);
		return product;
	}

	private ProductDTO convertToDTO(Products product) {

		ProductDTO dto = new ProductDTO();
		dto.setProductId(product.getProductId());
		dto.setProductName(product.getProductName());
		dto.setDescription(product.getDescription());
//		dto.setAuthorName(product.getAuthorName());
		dto.setQuantity(product.getQuantity());
		dto.setPrice(product.getPrice());
		dto.setImgUrl(product.getImgUrl());
		dto.setSellerId(new UserIdDto(product.getSeller().getUserId()));
		dto.setCategoryId(new CategoryIdDto(product.getCategory().getCategoryId()));

		return dto;
	}

}
