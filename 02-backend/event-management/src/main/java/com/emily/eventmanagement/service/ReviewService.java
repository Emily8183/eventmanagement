package com.emily.eventmanagement.service;

import com.emily.eventmanagement.dao.ReviewRepository;
import com.emily.eventmanagement.entity.Review;
import com.emily.eventmanagement.requestmodels.ReviewRequest;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;


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

        Review review = new Review();

        review.setEventId(reviewRequest.getEventId());
        review.setUserEmail(userEmail);
        review.setRating(reviewRequest.getRating());

        if (reviewRequest.getReviewDescription().isPresent()) {
            review.setReviewDescription(reviewRequest.getReviewDescription().map(Object::toString).orElse(null));
        }

        review.setDate(Date.valueOf(LocalDate.now()));
        reviewRepository.save(review);

        }

        //to display the review list
        public Boolean userReviewListed(String userEmail, Long bookId) {

            Review validateReview = reviewRepository.findByUserEmailAndEventId(userEmail, bookId);
            if (validateReview != null) {
                return true;
            } else {
                return false;
            }

        }


}