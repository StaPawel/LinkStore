package com.linkshop.demo;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

@RestController
@CrossOrigin ("*")
@RequestMapping ("api/")
public class LinkController {

    @Autowired
    private LinkRepository linkRepository;
//@autoriwed powoduje zapisanie ID category ale wywala cala aplikacje
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping ("links")
    public List <Link> getLinks(){
        System.out.println("/links");
        return this.linkRepository.findAll();

    }
    @CrossOrigin ("*")
    @PostMapping ("/add/{id}")
    public String addLink(@PathVariable Long id, @RequestBody Link link){

        System.out.println("Category ID: " + id);
        link.setCategoryId(id);
        linkRepository.save(link);
        return "links";
    }

    //@CrossOrigin ("*")
    @PostMapping ("/update/{id}")
    public String updateLink(@PathVariable Long id, @RequestBody Link link){

        System.out.println("Update -> " + link.getId() + "  Link: " +  link.getLinkName());
        System.out.println(linkRepository.getById(id).getLinkName());

        Link updateLink = linkRepository.getById(id);
        updateLink.setLinkName(link.getLinkName());

        linkRepository.save(updateLink);
        return "links";
    }

    @CrossOrigin ("*")
    @GetMapping("/delete/{id}")
    public String deleteLink(@PathVariable Long id){
        linkRepository.deleteById(id);
        System.out.println("Delete --> " + id);

        return "links";
    }


}

//    @PostMapping ("/add")
//    public String addLink(@RequestBody ObjectNode link){
//        System.out.println("idCategory: " + link.get("categoryId"));
//
//        Long categoryId = Long.parseLong(link.get("categoryId").toString());
//        Category category = categoryRepository.getById(categoryId);
//
//        Link link1 = new Link(link.get("linkName").toString(), category);
//        linkRepository.save(link1);
//
//        //Link link1 = new Link(link.getLinkName(), link.getCategory());
//        ///linkRepository.save(link1);
////        Category category = new Category();
////        System.out.println(category.getId());
//
//        //System.out.println("addLink() -> "  + "ID: " + link1.getId() + " Name: " + link1.getLinkName());
//        //System.out.println("Category ID: " + link.getCategory().getId());
//        return "links";
//    }
