package com.emily.eventmanagement.service;

import com.emily.eventmanagement.dao.ReviewRepository;
import com.emily.eventmanagement.entity.Review;
import com.emily.eventmanagement.requestmodels.ReviewRequest;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class ReviewService {

    private ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public void postReview(String userEmail, ReviewRequest reviewRequest) throws Exception {
        Review validateReview = reviewRepository.findByUserEmailAndEventId(userEmail, reviewRequest.getEventId());
        if (validateReview != null) {
            throw new Exception("Review already created");
        }
    }
}