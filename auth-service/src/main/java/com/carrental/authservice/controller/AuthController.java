package com.carrental.authservice.controller;

import com.carrental.authservice.dto.LoginRequest;
import com.carrental.authservice.dto.LoginResponse;
import com.carrental.authservice.dto.RegisterRequest;
import com.carrental.authservice.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}
