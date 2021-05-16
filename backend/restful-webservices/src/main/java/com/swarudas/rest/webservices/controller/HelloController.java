package com.swarudas.rest.webservices.controller;

import com.swarudas.rest.webservices.bean.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloController {

    @GetMapping("/hello/{id}")
    public String helloWorld(@PathVariable(name = "id") String id) {
        return "Hello World... "+id;
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean() throws Exception {
//        throw new RuntimeException("A new Springboot exception!!!");
        return new HelloWorldBean("Hello World Mr. Swarup - modified");
    }

    @GetMapping("/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldBeanWithPathVar(@PathVariable(name = "name") String name) throws Exception {
        return new HelloWorldBean(String.format("Hello World, Mr. %s",name));
    }
}
