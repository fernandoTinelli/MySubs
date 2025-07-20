package br.tinelli.Service.Logo;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import br.tinelli.Exception.Logo.GetLogoException;
import br.tinelli.Exception.Logo.LabelLogoException;
import br.tinelli.Model.Logo.LogoDTO;

@Service
public class LogoDevService implements LogoServiceInterface {

    @Value(value = "api.logodev.url")
    private String api;

    @Value(value = "api.logodev.token")
    private String token;

    @Override
    public LogoDTO find(String label) {
        try {
            URL imageURL = UriComponentsBuilder.fromUriString(api)
                        .path("/".concat(label))
                        .queryParam("token", token)
                        .queryParam("retina", "true")
                        .build()
                        .toUri()
                        .toURL();

            String base64 = Base64.getEncoder().encodeToString(imageURL.openStream().readAllBytes());

            return new LogoDTO(label, base64);
        } catch (MalformedURLException | IllegalArgumentException e) {
            throw new LabelLogoException("Logo inválido");
        } catch (IOException e) {
            throw new GetLogoException("Não foi possível gerar o logo");
        }
    }
}
