package com.app.dtos;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
public class CatDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long categoryId;
	private String categoryName;
	public CatDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CatDTO(String categoryName) {
		super();
		this.categoryName = categoryName;
	}
	public Long getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	@Override
	public String toString() {
		return "CatDTO [categoryId=" + categoryId + ", categoryName=" + categoryName + "]";
	}
	
	
}
