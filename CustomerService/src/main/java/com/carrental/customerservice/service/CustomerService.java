package com.carrental.customerservice.service;
import com.carrental.customerservice.entity.Customer;
import com.carrental.customerservice.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    public Customer addCustomer(Customer customer) {
        return repository.save(customer);
    }

    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }

    public Customer getCustomerById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Customer not found"));
    }
    public Customer updateCustomer(Long id, Customer customer) {

        Customer existingCustomer = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Customer not found"));

        existingCustomer.setFirstName(customer.getFirstName());
        existingCustomer.setLastName(customer.getLastName());
        existingCustomer.setAge(customer.getAge());
        existingCustomer.setEmail(customer.getEmail());
        existingCustomer.setPhone(customer.getPhone());

        return repository.save(existingCustomer);
    }
}
