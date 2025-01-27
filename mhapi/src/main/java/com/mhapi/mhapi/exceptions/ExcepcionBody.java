package com.mhapi.mhapi.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatusCode;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ExcepcionBody {
    private LocalDateTime timestamp;
    private HttpStatusCode status;
    private String message;
    private String path;
}
