package com.emily.eventmanagement.entity;

import lombok.Data;
import jakarta.persistence.*;
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "speaker")
    private String speaker;

    @Column(name = "description")
    private String description;

    @Column(name = "seats")
    private int seats;





}
