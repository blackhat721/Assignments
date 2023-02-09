package com.example.practice.service;

import com.example.practice.model.Employee;
import com.example.practice.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    //Create New Employee details

    public String createEmployee(Employee employee){
        if(this.employeeRepo.existsById(employee.getId())){
            return "Employee already exists";
        }
        else{
            this.employeeRepo.save(employee);
            return "Employee details are saved.";
        }
    }

    //get all Employee details

    public List<Employee> getEmployees(){
        return this.employeeRepo.findAll();

    }
    public String deleteEmployee(int id) {
        this.employeeRepo.deleteById(id);
        return "record deleted";
    }

    // update Employee
    public String updateEmployee(Employee employee) {
        this.employeeRepo.save(employee);
        return "Employee details are saved.";
    }

    // get Employee by id

    public Optional<Employee> getEmployeeById(int employee) {
        return this.employeeRepo.findById(employee);

    }

}
