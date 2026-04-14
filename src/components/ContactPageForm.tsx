"use client"

import { useActionState, useEffect, useRef } from "react"
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact"
import { trackEvent } from "@/lib/analytics"
import styles from "./ContactPageForm.module.css"

const initialState: ContactFormState = {}

function fieldError(errors: Record<string, string> | undefined, key: string) {
  return errors?.[key]
}

export function ContactPageForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  if (state.success && state.message) {
    return (
      <p className={styles.successBanner} role="status">
        {state.message}
      </p>
    )
  }

  return (
    <form className={styles.form} action={formAction} noValidate>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={Boolean(fieldError(state.errors, "name"))}
          />
          {fieldError(state.errors, "name") ? (
            <span className={styles.error}>{fieldError(state.errors, "name")}</span>
          ) : null}
        </div>
        <div className={styles.group}>
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="your.email@example.com"
            autoComplete="email"
            aria-invalid={Boolean(fieldError(state.errors, "email"))}
          />
          {fieldError(state.errors, "email") ? (
            <span className={styles.error}>{fieldError(state.errors, "email")}</span>
          ) : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="(702) 555-0123"
            autoComplete="tel"
            aria-invalid={Boolean(fieldError(state.errors, "phone"))}
          />
          {fieldError(state.errors, "phone") ? (
            <span className={styles.error}>{fieldError(state.errors, "phone")}</span>
          ) : null}
        </div>
        <div className={styles.group}>
          <label htmlFor="propertyInterest">Property Interest *</label>
          <select
            id="propertyInterest"
            name="propertyInterest"
            className={styles.select}
            defaultValue=""
            aria-invalid={Boolean(fieldError(state.errors, "propertyInterest"))}
          >
            <option value="">Select your interest</option>
            <option value="buying">Buying a Home</option>
            <option value="selling">Selling a Home</option>
            <option value="investing">Real Estate Investment</option>
            <option value="renting">Rental Property</option>
            <option value="general">General Inquiry</option>
          </select>
          {fieldError(state.errors, "propertyInterest") ? (
            <span className={styles.error}>{fieldError(state.errors, "propertyInterest")}</span>
          ) : null}
        </div>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Preferred Contact Method *</legend>
        <div className={styles.radios}>
          <label className={styles.radio}>
            <input type="radio" name="preferredContact" value="phone" defaultChecked />
            <span>Phone Call</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name="preferredContact" value="email" />
            <span>Email</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name="preferredContact" value="text" />
            <span>Text Message</span>
          </label>
        </div>
        {fieldError(state.errors, "preferredContact") ? (
          <span className={styles.error}>{fieldError(state.errors, "preferredContact")}</span>
        ) : null}
      </fieldset>

      <div className={styles.group}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={styles.textarea}
          placeholder="Tell me about your real estate needs, timeline, budget, or any questions you have about Pewter Valley Estates..."
          aria-invalid={Boolean(fieldError(state.errors, "message"))}
        />
        {fieldError(state.errors, "message") ? (
          <span className={styles.error}>{fieldError(state.errors, "message")}</span>
        ) : null}
      </div>

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Sending Message…" : "Send Message to Dr. Jan Duffy"}
      </button>
    </form>
  )
}
