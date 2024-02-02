package com.emily.eventmanagement.entity;

import lombok.Data;
import jakarta.persistence.*;
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



}
