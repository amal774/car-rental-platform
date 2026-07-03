package com.carrental.authservice.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role;

    @Column(name = "is_admin", nullable = false)
    private Boolean isAdmin = false;

    public User(String fullName,
                String email,
                String password,
                String role,
                Boolean isAdmin) {

        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isAdmin = isAdmin;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 9875c639 (version finale v01)
