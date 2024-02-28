package com.emily.eventmanagement.requestmodels;

import lombok.Data;

@Data
public class ReviewRequest {
    private double rating;

    private Long eventId;



}
