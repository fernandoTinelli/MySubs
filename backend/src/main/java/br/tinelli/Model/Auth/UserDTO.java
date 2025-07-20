package br.tinelli.Model.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserDTO(
    @NotBlank String userName,
    @Email String email,
    @NotBlank String token
) {}
