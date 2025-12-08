package com.example.backEnd_Test.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backEnd_Test.DTOs.RecruitDTOs;
import com.example.backEnd_Test.model.Recruit;
import com.example.backEnd_Test.service.RecruitService;

@RestController
@RequestMapping("/api/recruits")
@CrossOrigin(origins = "http://localhost:3000")
public class RecruitController {

    private final RecruitService recruitService;

    public RecruitController(RecruitService recruitService) {
        this.recruitService = recruitService;
    }

    @GetMapping
    public List<Recruit> getAllRecruits(){
        return this.recruitService.getAll();
    }

    @GetMapping("/{tuition}")
    public Recruit getRecruitByTuition(@PathVariable String tuition) {
        return this.recruitService.getRecruitById(tuition);
    }

    @PostMapping("/create/recruit")
    public Recruit creaRecruit(@RequestBody Recruit recruit){
        return this.recruitService.createRecruit(recruit);
    }

    @PatchMapping("/update/recruit/{id}")
    public Recruit updaRecruit(@PathVariable Long id, @RequestBody RecruitDTOs recruitDTOs ) {
        return this.recruitService.updateRecruit(id, recruitDTOs);
    }

    
    
}
