package br.tinelli.ExceptionHandlers.Logo;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.tinelli.Exception.Logo.GetLogoException;
import br.tinelli.Exception.Logo.LabelLogoException;

@RestControllerAdvice
public class LogoExceptionHandler {
    
    @ExceptionHandler(LabelLogoException.class)
    public ResponseEntity<Map<String, Object>> handleLabelLogoException(
        LabelLogoException ex
    ) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("error", ex.getMessage());

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(GetLogoException.class)
    public ResponseEntity<Map<String, Object>> handleGetLogoException(
        GetLogoException ex
    ) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.SERVICE_UNAVAILABLE.value());
        response.put("error", ex.getMessage());

        return new ResponseEntity<>(response, HttpStatus.SERVICE_UNAVAILABLE);
    }
}
