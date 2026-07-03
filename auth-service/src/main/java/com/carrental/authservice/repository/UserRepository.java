<<<<<<< HEAD
package com.carrental.authservice.repository;

import com.carrental.authservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
=======
package com.carrental.authservice.repository;

import com.carrental.authservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
>>>>>>> 9875c639 (version finale v01)
}