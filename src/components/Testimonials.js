import React from "react";
import { TestimonialContainer } from "../styles/styles.js";

const Testimonials = () => {
  return (
    <TestimonialContainer>
      <div class="container">
        <ul class="grid-testimonials">
          <li>
            <div>
              <p>
                &ldquo;After using shareable my business skyrocketed! . I will
                recommend you to my colleagues.!&rdquo;
              </p>
              <span class="quote-arrow"></span>
            </div>
            <span class="grid-testimonials-citation">Joshuan Soares</span>
            <div className="testimonialImage"></div>
          </li>
          <li>
            <div>
              <p>
                &ldquo;Shareable should be nominated for service of the year.
                Shareable is both attractive and highly adaptable. &rdquo;
              </p>
              <span class="quote-arrow"></span>
            </div>
            <span class="grid-testimonials-citation">Anthony Perdue</span>
            <div className="testimonialImage"></div>
          </li>
          <li>
            <div>
              <p>
                &ldquo;It's the perfect solution for our business. It's
                incredible. It fits our needs perfectly. Wow what great service,
                I love it.&rdquo;
              </p>
              <span class="quote-arrow"></span>
            </div>
            <span class="grid-testimonials-citation">Paul George</span>
            <div className="testimonialImage"></div>
          </li>
        </ul>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonials;
