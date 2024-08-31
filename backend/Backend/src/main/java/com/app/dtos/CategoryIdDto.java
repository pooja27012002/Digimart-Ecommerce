package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryIdDto {
	private Long cateId;

	public CategoryIdDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CategoryIdDto(Long cateId) {
		super();
		this.cateId = cateId;
	}

	public Long getCateId() {
		return cateId;
	}

	public void setCateId(Long cateId) {
		this.cateId = cateId;
	}

	@Override
	public String toString() {
		return "CategoryIdDto [cateId=" + cateId + "]";
	}
	
	
}
