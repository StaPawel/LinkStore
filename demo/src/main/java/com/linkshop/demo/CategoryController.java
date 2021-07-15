package com.linkshop.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//
@RestController
@CrossOrigin ("*")
@RequestMapping("api/")
public class CategoryController {

    //WHY -> bez autorived zwraca 500 na stronie
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private LinkRepository linkRepository;

    @GetMapping ("categories")
    public List<Category> getCategories(){
        System.out.println("/categories");
        return this.categoryRepository.findAll();
    }

    @PostMapping("/addcategory")
    public String addCategory(@RequestBody Category category){
        categoryRepository.save(category);
        System.out.println("addCategory() -> "  + "ID: " + category.getId() + " Name: " + category.getCategoryName());
        return "links";
    }

    @CrossOrigin ("*")
    @GetMapping("/delete-category/{id}")
    public String deleteCategory(@PathVariable Long id){
        categoryRepository.deleteById(id);

        List<Link> links = linkRepository.findAll();

        for(Link link:links){
            if(link.getCategoryId().equals(id))
                linkRepository.deleteById(link.getId());
        }

        System.out.println("Delete category --> " + id);
        return "links";
    }
}
