package com.emily.eventmanagement.requestmodels;

import lombok.Data;

import java.util.Optional;

@Data
public class ReviewRequest {
    private double rating;

    private Long eventId;

    private Optional<String> reviewDescription;

    public Long getEventId() {
        return this.eventId;
    }



}
