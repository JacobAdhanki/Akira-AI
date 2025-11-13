package com.akira.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository repo;
    private final JwtUtil jwt;
    private final PasswordEncoder encoder;

    public AuthService(UserRepository repo, JwtUtil jwt, PasswordEncoder encoder) {
        this.repo = repo;
        this.jwt = jwt;
        this.encoder = encoder;
    }

    public String login(String username, String password) {

        User user = repo.findByUsername(username);

        if (user == null) throw new RuntimeException("User not found");
        if (!encoder.matches(password, user.getPassword()))
            throw new RuntimeException("Invalid password");

        return jwt.generateToken(user.getUsername(), user.getRole());
    }
}
