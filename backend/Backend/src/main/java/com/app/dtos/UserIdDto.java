package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserIdDto {
	private Long userId;

	public UserIdDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserIdDto(Long userId) {
		super();
		this.userId = userId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "UserIdDto [userId=" + userId + "]";
	}
	
}
