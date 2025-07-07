package br.tinelli.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CosrConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // todas as rotas
            .allowedOrigins(this.getAllowedOrigins())
            .allowedMethods("*")
            .allowedHeaders("*")
            .allowCredentials(true);
    }

    private String[] getAllowedOrigins() {
        return new String[] {"http://localhost:5173"};
    }
}
