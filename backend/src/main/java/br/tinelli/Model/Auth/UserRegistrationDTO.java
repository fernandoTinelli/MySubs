package br.tinelli.Model.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRegistrationDTO(
    @Email(message = "email invalid") String email,
    @NotBlank(message = "username required") String username,
    
    @Size(min = 10, max = 100, message = "password must have between 10 and 100 characters")
    String password
) {}
