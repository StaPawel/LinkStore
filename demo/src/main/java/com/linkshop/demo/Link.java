package com.linkshop.demo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table (name = "linkTable")
public class Link {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;

    @Column (name = "linkNameColumn")
    private String linkName;

    @Column (name = "linkUrl")
    private String linkUrl;

    @Column (name = "categoryId")
    private Long categoryId;

    public Link() {}
//
//    public Link(String linkName) {
//        //this.id = id;
//        this.linkName = linkName;
//    }

    public Link(String linkName, Long categoryId, String linkUrl) {
        //this.id = id;
        this.linkName = linkName;
        this.categoryId = categoryId;
        this.linkUrl = linkUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLinkName() {
        return linkName;
    }

    public void setLinkName(String linkName) {
        this.linkName = linkName;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
