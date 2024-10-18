package com.mhapi.mhapi.exceptions;

public class EmptyMonstruosException extends RuntimeException {
    public EmptyMonstruosException(){
        super("No hay monstruos en el sistema");
    }
}
