"use client"

import { useState } from "react"
import { trackEvent } from "@/lib/analytics"
import styles from "./LeadCaptureForm.module.css"

type Props = {
  formType?: "general" | "valuation" | "buyer" | "seller"
  title?: string
  subtitle?: string
}

export function LeadCaptureForm({ formType = "general", title, subtitle }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    trackEvent("lead_capture_submit", { formType })
    setTimeout(() => setStatus("done"), 400)
  }

  if (status === "done") {
    return (
      <p className={styles.thanks} role="status">
        Thank you — we will reach out shortly.
      </p>
    )
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {title ? <h4 className={styles.formTitle}>{title}</h4> : null}
      {subtitle ? <p className={styles.formSubtitle}>{subtitle}</p> : null}
      <label className={styles.label}>
        <span className={styles.srOnly}>Name</span>
        <input name="name" type="text" required placeholder="Your name" className={styles.input} autoComplete="name" />
      </label>
      <label className={styles.label}>
        <span className={styles.srOnly}>Email</span>
        <input name="email" type="email" required placeholder="Email" className={styles.input} autoComplete="email" />
      </label>
      <label className={styles.label}>
        <span className={styles.srOnly}>Phone</span>
        <input name="phone" type="tel" required placeholder="Phone" className={styles.input} autoComplete="tel" />
      </label>
      <label className={styles.label}>
        <span className={styles.srOnly}>Message</span>
        <textarea name="message" rows={3} placeholder="How can we help?" className={styles.textarea} />
      </label>
      <button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  )
}
