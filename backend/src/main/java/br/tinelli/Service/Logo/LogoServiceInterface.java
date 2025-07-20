package br.tinelli.Service.Logo;

import br.tinelli.Exception.Logo.GetLogoException;
import br.tinelli.Exception.Logo.LabelLogoException;
import br.tinelli.Model.Logo.LogoDTO;

public interface LogoServiceInterface {
    public LogoDTO find(String label) throws LabelLogoException, GetLogoException;
}
