
package com.akira.auth;

import com.akira.common.ApiResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public ApiResponse login(@RequestBody AuthRequest req){
        String token = service.login(req.getUsername(), req.getPassword());
        return ApiResponse.ok(new AuthResponse(token));
    }
}
