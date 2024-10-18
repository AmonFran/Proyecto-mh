package com.mhapi.mhapi.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
public class Monstruo {
    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty
    private String nombre;
    
    @NotEmpty
    private String clase;

    @NotEmpty
    private String elemento;

    @NotEmpty
    private String primeraAparicion;
}
