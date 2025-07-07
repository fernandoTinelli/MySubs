package br.tinelli.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.tinelli.Model.UserDTO;
import br.tinelli.Model.Auth.UserAutheticationDTO;
import br.tinelli.Model.Auth.UserRegistrationDTO;
import br.tinelli.Service.Auth.AuthServiceInterface;
import jakarta.validation.Valid;

@RestController
public class AuthController {

    private final AuthServiceInterface authService;

    public AuthController(AuthServiceInterface authService) {
        this.authService = authService;
    }
    
    @PostMapping("/login")
    public UserDTO login(@Valid @RequestBody UserAutheticationDTO dto) {
        UserDTO user = authService.authenticate(dto);
        return user;
    }

    @PostMapping("/register")
    public UserDTO register(@Valid @RequestBody UserRegistrationDTO dto) {
        UserDTO user = authService.register(dto);
        return user;
    }
}
