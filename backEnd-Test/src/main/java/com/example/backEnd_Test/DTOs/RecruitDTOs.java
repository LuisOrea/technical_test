package com.example.backEnd_Test.DTOs;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class RecruitDTOs {

    //basic info 
    private Integer age;

    //contact info
    private String address;
    private String numberPhone;
    
    @Column(unique = true)
    private String email;
    private String emergencyNumberPhone;

    //physic & medic info
    private Integer weight;
    private Integer height;
    private String historialMedic;
    private Boolean certificationMedic;

    //militar info
    private String grade;
    private String unity;
    private String stateRecruit;

    //Documentation
    private Boolean photoPersonal;
    private Boolean identifyPersonalCopy;
    private Boolean medicDocuments;   
}
