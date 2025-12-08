package com.example.backEnd_Test.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backEnd_Test.DTOs.RecruitDTOs;
import com.example.backEnd_Test.model.Recruit;
import com.example.backEnd_Test.repository.RecruitRepository;

@Service
public class RecruitService {

    private final RecruitRepository recruitRepository;

    public RecruitService(RecruitRepository recruitRepository) {
        this.recruitRepository = recruitRepository;
    }

    public List<Recruit> getAll(){
        return recruitRepository.findAll();
    }

    public Recruit getRecruitById(String tuition) {
        return recruitRepository.findByTuition(tuition);
    }

    public Recruit createRecruit(Recruit recruit) {
        return recruitRepository.save(recruit);
    }

    public Recruit updateRecruit(Long id, RecruitDTOs newData) {
        return recruitRepository.findById(id)
            .map(recruit -> {

                if (newData.getAge() != null) {
                    recruit.setAge(newData.getAge());
                }

                if (newData.getAddress() != null) {
                    recruit.setAddress(newData.getAddress());
                }

                if (newData.getNumberPhone() != null) {
                    recruit.setAddress(newData.getNumberPhone());
                }

                if (newData.getEmail() != null) {
                    recruit.setEmail(newData.getEmail());
                }

                if (newData.getEmergencyNumberPhone() != null) {
                    recruit.setEmergencyNumberPhone(newData.getEmergencyNumberPhone());
                }

                if (newData.getWeight() != null) {
                    recruit.setWeight(newData.getWeight());
                }

                if (newData.getHeight() != null) {
                    recruit.setHeight(newData.getHeight());
                }

                if (newData.getHistorialMedic() != null) {
                    recruit.setHistorialMedic(newData.getHistorialMedic());
                }

                if (newData.getCertificationMedic() != null) {
                    recruit.setCertificationMedic(newData.getCertificationMedic());
                }

                if (newData.getGrade() != null) {
                    recruit.setGrade(newData.getGrade());
                }

                if (newData.getUnity() != null) {
                    recruit.setUnity(newData.getUnity());
                }
                
                if (newData.getStateRecruit() != null) {
                    recruit.setStateRecruit(newData.getStateRecruit());
                }

                if (newData.getPhotoPersonal() != null) {
                    recruit.setPhotoPersonal(newData.getPhotoPersonal());
                }

                if (newData.getIdentifyPersonalCopy() != null) {
                    recruit.setIdentifyPersonalCopy(newData.getIdentifyPersonalCopy());
                }

                if (newData.getMedicDocuments() != null) {
                    recruit.setMedicDocuments(newData.getMedicDocuments());
                }
                
                
                // guardas
                return recruitRepository.save(recruit);
            })
            .orElseThrow(() -> new RuntimeException("Recruit not found"));
    }
    
}
