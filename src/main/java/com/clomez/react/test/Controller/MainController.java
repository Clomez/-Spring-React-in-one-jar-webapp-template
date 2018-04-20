package com.clomez.react.test.Controller;

import com.clomez.react.test.Repositories.UserRepo;
import com.clomez.react.test.beans.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class MainController {

    @Autowired
    private UserRepo repo;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hello")
    public Collection<User> index() {
        return repo.findAll().stream().collect(Collectors.toList());

    }
    @GetMapping("/title2")
    public String titles() {

    return "Work & school";
    }

    @GetMapping("/greet")
    public String greet() {

        return "hello";
    }

    private boolean adminCheck(User user) {
        return true;
    }
}
