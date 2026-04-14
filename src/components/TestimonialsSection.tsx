"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { trackEvent } from "@/lib/analytics"
import styles from "./TestimonialsSection.module.css"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Johnson",
    location: "The Avalon Homeowner",
    rating: 5,
    text: "We absolutely love our new home at Pewter Valley Estates! The quality is outstanding and the community amenities are fantastic. Our kids love the pool and we enjoy the walking trails.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "David Chen",
    location: "The Cambridge Homeowner",
    rating: 5,
    text: "The location is perfect - close to everything but still quiet and peaceful. The Richmond American team made the entire process smooth and stress-free. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "The Berkeley Homeowner",
    rating: 5,
    text: "The energy efficiency features have saved us so much on utilities. The open floor plan is perfect for entertaining, and our neighbors are wonderful. This truly feels like home.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  function next() {
    setCurrent((c) => (c + 1) % testimonials.length)
    trackEvent("testimonial_navigation", { action: "next", current_index: (current + 1) % testimonials.length })
  }

  function prev() {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
    trackEvent("testimonial_navigation", { action: "previous", current_index: current })
  }

  function goTo(index: number) {
    setCurrent(index)
    trackEvent("testimonial_navigation", { action: "direct", current_index: index })
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Homeowners Say</h2>
          <p className={styles.sectionSubtitle}>
            Don&apos;t just take our word for it - hear from families who have made Pewter Valley Estates their home.
          </p>
        </div>

        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className={styles.testimonialText}>&quot;{t.text}&quot;</blockquote>
              <div className={styles.testimonialAuthor}>
                <Image src={t.image} alt={t.name} width={100} height={100} className={styles.authorImage} />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorLocation}>{t.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialControls}>
            <button type="button" className={`${styles.controlBtn} ${styles.prev}`} onClick={prev} aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={testimonials[index].id}
                  type="button"
                  className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button type="button" className={`${styles.controlBtn} ${styles.next}`} onClick={next} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.testimonialsFooter}>
          <div className={styles.ratingSummary}>
            <div className={styles.averageRating}>
              <span className={styles.ratingNumber}>4.9</span>
              <div className={styles.ratingStars}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.ratingText}>Based on 127 homeowner reviews</div>
          </div>
          <Link href="/contact" className={styles.viewReviewsBtn}>
            Share Your Experience{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
