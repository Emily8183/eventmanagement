package com.emily.eventmanagement.dao;

import com.emily.eventmanagement.entity.Review;
import org.hibernate.query.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Review findByUserEmailAndEventId(String userEmail, Long eventId);
}
