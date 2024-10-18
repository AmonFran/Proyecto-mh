package com.mhapi.mhapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.mhapi.mhapi.domain.Monstruo;
import com.mhapi.mhapi.exceptions.EmptyMonstruosException;
import com.mhapi.mhapi.repositories.MonstruoRepository;

@Service
@Primary
public class MonstruoService {
    @Autowired
    MonstruoRepository repositorio;

    public Monstruo add(Monstruo monstruo) {
        return repositorio.save(monstruo);
    }

    public List<Monstruo> getAll() {
        List<Monstruo> lista = repositorio.findAll();
        if (lista.isEmpty()) {
            throw new EmptyMonstruosException();
        }
        return lista;
    }
}
