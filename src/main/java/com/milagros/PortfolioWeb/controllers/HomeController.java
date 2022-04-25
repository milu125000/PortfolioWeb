package com.milagros.PortfolioWeb.controllers;

import com.milagros.PortfolioWeb.helper.ViewRouteHelper;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
public class HomeController {
    @GetMapping("")
    public String index(){
        return ViewRouteHelper.INDEX;
    }
    
}