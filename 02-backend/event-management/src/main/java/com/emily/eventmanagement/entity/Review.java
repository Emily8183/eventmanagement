package com.emily.eventmanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import javax.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "review")
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "date")
    @CreationTimestamp
    private Date date;

    @Column(name = "event_id")
    private Long eventId;

    @Column(name = "review_description")
    private String reviewDescription;

}
