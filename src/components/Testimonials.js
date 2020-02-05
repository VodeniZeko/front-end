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
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquet mattis interd. Phasellus volutpat
                pellentesque dui, sit amet commodo risus faucibus sit
                amet.&rdquo;
              </p>
              <span class="quote-arrow"></span>
            </div>
            <span class="grid-testimonials-citation">Joshuan Soares</span>
            <div className="testimonialImage"></div>
          </li>
          <li>
            <div>
              <p>
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquet mattis interd. Phasellus volutpat
                pellentesque dui, sit amet commodo risus faucibus sit
                amet.&rdquo;
              </p>
              <span class="quote-arrow"></span>
            </div>
            <span class="grid-testimonials-citation">Anthony Perdue</span>
            <div className="testimonialImage"></div>
          </li>
          <li>
            <div>
              <p>
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquet mattis interd. Phasellus volutpat
                pellentesque dui, sit amet commodo risus faucibus sit
                amet.&rdquo;
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
