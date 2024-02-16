package com.emily.eventmanagement.service;

import com.emily.eventmanagement.dao.ReviewRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class ReviewService {

    private ReviewRepository reviewRepository;
}