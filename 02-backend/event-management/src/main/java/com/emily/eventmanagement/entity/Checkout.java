package com.emily.eventmanagement.entity;

import lombok.Data;

import javax.persistence.*;

    @Entity
    @Table(name = "checkout")
    @Data
    public class Checkout {

        public Checkout() {}
        public Checkout(String userEmail, String checkoutDate, Long eventId) {
            this.userEmail = userEmail;
            this.checkoutDate = checkoutDate;
            this.eventId = eventId;
        }

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "user_email")
        private String userEmail;

        @Column(name = "checkout_date")
        private String checkoutDate;

        @Column(name = "event_id")
        private Long eventId;
    }
