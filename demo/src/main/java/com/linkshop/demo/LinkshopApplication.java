package com.linkshop.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LinkshopApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(LinkshopApplication.class, args);
	}

//	@Autowired
//	private LinkRepository linkRepository;

	//private CategoryRepository categoryRepository;




	@Override
	public void run(String... args) throws Exception {
		//linkRepository.save(new Link("testLinkxDDDD"));
		//categoryRepository.save(new Category("test"));

//		Category category = new Category("runCategoryName");
//		Link link = new Link("runLink",category);
//		linkRepository.save(link);

	}



}
