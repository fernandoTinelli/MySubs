package br.tinelli.Model.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record UserRegistrationDTO(
    @Email String email,
    @NotBlank String userName,
    @Min(10) @Max(100) String password
) {}
