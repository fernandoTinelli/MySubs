package br.tinelli.Service.Auth;

import br.tinelli.Exception.Auth.AuthenticationException;
import br.tinelli.Exception.Auth.RegistrationException;
import br.tinelli.Model.Auth.UserAutheticationDTO;
import br.tinelli.Model.Auth.UserDTO;
import br.tinelli.Model.Auth.UserRegistrationDTO;

public interface AuthServiceInterface {
    public UserDTO authenticate(UserAutheticationDTO dto) throws AuthenticationException;
    public UserDTO register(UserRegistrationDTO dto) throws RegistrationException;
}
