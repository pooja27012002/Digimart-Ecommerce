package com.app.dtos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

	private Long orderId;
	private String email;
	private List<OrderItemDTO> orderItems = new ArrayList<>();
	private LocalDate orderDate;
	private PaymentDTO payment;
	private Double totalAmount;
	public OrderDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderDTO(String email, List<OrderItemDTO> orderItems, LocalDate orderDate, PaymentDTO payment,
			Double totalAmount) {
		super();
		this.email = email;
		this.orderItems = orderItems;
		this.orderDate = orderDate;
		this.payment = payment;
		this.totalAmount = totalAmount;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<OrderItemDTO> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(List<OrderItemDTO> orderItems) {
		this.orderItems = orderItems;
	}
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	public PaymentDTO getPayment() {
		return payment;
	}
	public void setPayment(PaymentDTO payment) {
		this.payment = payment;
	}
	public Double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
	@Override
	public String toString() {
		return "OrderDTO [orderId=" + orderId + ", email=" + email + ", orderItems=" + orderItems + ", orderDate="
				+ orderDate + ", payment=" + payment + ", totalAmount=" + totalAmount + "]";
	}
	
	
}
