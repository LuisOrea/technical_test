package com.example.backEnd_Test.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Recruit {

    //id y generacion automatica
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //basic info 
    @Column(name = "fullName", length = 100)
    private String name;
    private int age;
    private String birthday;
    private String gender;
    private String numberIdentification;
    private String nationality;

    //contact info
    private String address;
    private int numberPhone;
    
    @Column(unique = true)
    private String email;
    private int emergencyNumberPhone;

    //physic & medic info
    private int weight;
    private int height;
    private String bloodType;
    private String historialMedic;
    private Boolean certificationMedic;

    //militar info
    @Column(updatable = false, unique = true)
    private String tuition;
    private String grade;
    private String entryDate;
    private String unity;
    private String stateRecruit;

    //abilities && education
    private String education;
    private String specialAbilities;
    private String languages;
    private String previousExperience;

    //Documentation
    private Boolean photoPersonal;
    private Boolean identifyPersonalCopy;
    private Boolean medicDocuments;   

}