package com.example.practice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {
    
    @Id
    private Integer id;
    private String name;
    private Integer age;
    private String department;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
    public String getDepartment() {
        return department;
    }

    public void setDepartment(String dept) {
        this.department = dept;
    }

    public Employee() {
    }

    public Employee(Integer id, String name, Integer age,String dept) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = dept;
    }
    
}
