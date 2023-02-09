package com.example.practice.controller;

import com.example.practice.model.Employee;
import com.example.practice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/allemployees")
    public List<Employee> getAllEmployees(){
        return this.employeeService.getEmployees();
    }

    @PostMapping("/createemployee")
    public String createEmployee(@RequestBody Employee Employee){
        return this.employeeService.createEmployee(Employee);
    }
    //delete
    @DeleteMapping("/deleteemployee/{id}")
    public String deleteEmployee(@PathVariable int id) {
        this.employeeService.deleteEmployee(id);
        return "deleted";
    }

    // update
    @PutMapping("/updateemployee")
    public String updateEmployee(@RequestBody Employee Employee) {
        return this.employeeService.updateEmployee(Employee);
    }

    // getbyid
    @GetMapping("/getemployeebyid/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id) {
        return this.employeeService.getEmployeeById(id);
    }
}

