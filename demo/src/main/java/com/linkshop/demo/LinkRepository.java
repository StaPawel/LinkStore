package com.linkshop.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface LinkRepository extends JpaRepository <Link, Long>{
    Collection<Category> findByCategoryId (Long categoryId);
}
