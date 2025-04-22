import React, { useEffect, useRef } from "react";
import "./CustomerReviews.css";

const reviews = [
  {
    name: "Amit Sharma",
    review: "UrbanScape made my home smarter and more efficient!",
  },
  {
    name: "Priya Verma",
    review: "Amazing products and great customer service!",
  },
  {
    name: "Rahul Mehta",
    review: "I love how easy it is to control my home with UrbanScape!",
  },
  {
    name: "Sneha Patel",
    review: "Highly recommend their smart home solutions!",
  },
  { name: "Vikram Singh", review: "Fast delivery and quality products!" },
  {
    name: "Neha Agarwal",
    review: "My smart plugs and switches work perfectly!",
  },
  {
    name: "Arjun Kapoor",
    review: "The best investment for my home automation!",
  },
  {
    name: "Riya Choudhary",
    review: "Seamless experience with smart lighting solutions!",
  },
  { name: "Suresh Iyer", review: "Customer support was super helpful!" },
  { name: "Ananya Das", review: "Would definitely buy again!" },
];

const CustomerReviews = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const animateScroll = (row, speed) => {
      let position = 0;
      const scroll = () => {
        position += speed;
        if (position > row.scrollWidth / 2) position = 0;
        row.style.transform = `translateX(-${position}px)`;
        requestAnimationFrame(scroll);
      };
      scroll();
    };

    if (row1Ref.current && row2Ref.current) {
      animateScroll(row1Ref.current, 0.5); // First row (slow left to right)
      animateScroll(row2Ref.current, 1); // Second row (faster right to left)
    }
  }, []);

  return (
    <div className="reviews-wrapper">
      <h1 className="fw-bolder text-white text-center">
        What Our Customers Say
      </h1>
      <div className=" py-4 text-white text-center fst-italic fw-semibold">
        Real experiences, real satisfaction—our smart home solutions redefine
        convenience & security!
      </div>
      <div className="reviews-row" ref={row1Ref}>
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <strong>{item.name}</strong>
            <p>{item.review}</p>
          </div>
        ))}
      </div>

      <div className="reviews-row reverse pt-4" ref={row2Ref}>
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <strong>{item.name}</strong>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
