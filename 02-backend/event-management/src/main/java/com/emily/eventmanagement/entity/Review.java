package com.emily.eventmanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import javax.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name="review")
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_email")
    @CreationTimestamp
    private Date date;







}
