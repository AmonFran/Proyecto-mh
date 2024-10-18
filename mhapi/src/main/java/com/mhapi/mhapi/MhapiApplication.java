package com.mhapi.mhapi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.mhapi.mhapi.domain.Monstruo;
import com.mhapi.mhapi.service.MonstruoService;

@SpringBootApplication
public class MhapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MhapiApplication.class, args);
	}

	@Bean
	CommandLineRunner initData(MonstruoService monstruoService) {
		return args -> {
			monstruoService.add(new Monstruo(null, "Anjanath", "Wyvern bruto", "Fuego", "Monster Hunter World"));
			monstruoService.add(new Monstruo(null, "Barroth", "Wyvern bruto", "Agua", "Monster Hunter 3"));
			monstruoService.add(new Monstruo(null, "Bazelgeuse", "Wyvern volador", "Fuego", "Monster Hunter World"));
			monstruoService.add(new Monstruo(null, "Deviljho", "Wyvern bruto", "Draco", "Monster Hunter 3"));
			monstruoService.add(new Monstruo(null, "Diablos", "Wyvern volador", "Ninguno", "Monster Hunter"));
			monstruoService.add(new Monstruo(null, "Lagriacus", "Leviatan", "Electrico", "Monster Hunter 3"));
		};
	}
	  @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
                }
            };
        }
}