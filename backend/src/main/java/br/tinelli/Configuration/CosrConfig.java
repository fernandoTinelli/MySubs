package br.tinelli.Configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CosrConfig implements WebMvcConfigurer {

    @Value("${app.cors.allowed-origins:*}")
    private String allowedOrigins;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        if (!this.allowedOrigins.contains(new String("*"))) {
            registry.addMapping("/**") // todas as rotas
                    .allowedOrigins(this.getAllowedOrigins())
                    .allowedMethods("*")
                    .allowedHeaders("*")
                    .allowCredentials(true);
        } else {
            registry.addMapping("/**")
                    .allowedOriginPatterns("*") // ← permite qualquer porta
                    .allowedMethods("*")
                    .allowedHeaders("*")
                    .allowCredentials(true);
        }
        
    }

    private String[] getAllowedOrigins() {
        return this.allowedOrigins.split(",");
    }
}
