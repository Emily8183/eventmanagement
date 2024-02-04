package com.emily.eventmanagement.entity;

import lombok.Data;
import jakarta.persistence.*;

@Entity
@Table(name = "event")
@Data
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

    @Column(name = "tickets")
    private int tickets;

    @Column(name = "tickets_available")
    private int ticketsAvailable;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String img;
}
