import { testimonialsData } from '../data/platformData.js'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad" id="reviews">
      <div className="container">
        <div className="section-head-center">
          <p className="eyebrow">REAL CAREER TRANSFORMATIONS</p>
          <h2>Stories from learners who made the leap</h2>
          <p>Over 1,000+ graduates have upskilled, built real projects, and landed high-growth roles in modern tech.</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-avatar" style={{ backgroundColor: item.avatarBg }}>
                  {item.initials}
                </div>
                <div>
                  <h3 className="testimonial-author">{item.name}</h3>
                  <span className="testimonial-role">{item.roleTransition}</span>
                </div>
              </div>

              <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </div>

              <blockquote className="testimonial-quote">
                “{item.comment}”
              </blockquote>

              <div className="testimonial-footer">
                <span className="testimonial-course-badge">Course: {item.course}</span>
                <span className="testimonial-company-badge">Now at <strong>{item.company}</strong></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
