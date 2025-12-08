package com.example.backEnd_Test.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backEnd_Test.model.Recruit;

@Repository
public interface RecruitRepository extends JpaRepository<Recruit, Long> {   
    Recruit findByTuition(String tuition);
} 
