package br.tinelli.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import br.tinelli.Model.Auth.UserDTO;
import br.tinelli.Model.Logo.LogoDTO;
import br.tinelli.Service.Logo.LogoServiceInterface;

@RestController
public class LogoController {

    private LogoServiceInterface logoService;

    public LogoController(LogoServiceInterface logoService) {
        this.logoService = logoService;
    }
    
    @GetMapping("/logo/{label}")
    public LogoDTO find(@PathVariable String label) {
        return this.logoService.find(label);
    }
}
