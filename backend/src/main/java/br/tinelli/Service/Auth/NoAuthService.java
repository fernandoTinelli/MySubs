package br.tinelli.Service.Auth;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import br.tinelli.Model.Auth.UserAutheticationDTO;
import br.tinelli.Model.Auth.UserDTO;
import br.tinelli.Model.Auth.UserRegistrationDTO;

@Service
@ConditionalOnProperty(name = "auth.provider", havingValue = "noAuth")
public class NoAuthService implements AuthServiceInterface {
    @Override
    public UserDTO authenticate(UserAutheticationDTO dto) {
        return new UserDTO("test", "test@domain.com", 
        "");
    }

    @Override
    public UserDTO register(UserRegistrationDTO dto) {
        return new UserDTO("test", "test@domain.com", "");
    }
}
