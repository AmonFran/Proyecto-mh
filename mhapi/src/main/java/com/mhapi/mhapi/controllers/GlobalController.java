package com.mhapi.mhapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mhapi.mhapi.domain.Monstruo;
import com.mhapi.mhapi.service.MonstruoService;

@RestController
public class GlobalController {
    @Autowired
    MonstruoService monstruoService;

    @GetMapping("/monstruos")
    public List<Monstruo> showAll() {
        List<Monstruo> lista;
        lista = monstruoService.getAll();
        return lista;
    }
}
