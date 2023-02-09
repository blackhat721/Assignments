package com.example.practice.service;

import com.example.practice.model.Student;
import com.example.practice.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    //Create New student details

    public String createStudent(Student student){
        if(this.studentRepo.existsById(student.getId())){
            return "Student already exists";
        }
        else{
            this.studentRepo.save(student);
            return "Student details are saved.";
        }
    }

    //get all student details

    public List<Student> getStudents(){
        return this.studentRepo.findAll();

    }
    public String deleteStudent(int id) {
        this.studentRepo.deleteById(id);
        return "record deleted";
    }

    // update student
    public String updateStudent(Student student) {
        this.studentRepo.save(student);
        return "Student details are saved.";
    }

    // get student by id

    public Optional<Student> getStudentById(int student) {
        return this.studentRepo.findById(student);

    }

}
