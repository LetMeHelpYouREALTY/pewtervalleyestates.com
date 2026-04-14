"use server"

import { SITE_CONFIG } from "@/lib/site-contact"

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: Record<string, string>
}

function validateEmail(email: string) {
  return email.includes("@") && email.includes(".")
}

function validatePhone(phone: string) {
  return phone.replace(/\D/g, "").length >= 10
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    propertyInterest: String(formData.get("propertyInterest") ?? "").trim(),
    preferredContact: String(formData.get("preferredContact") ?? "").trim(),
  }

  const errors: Record<string, string> = {}

  if (!data.name) errors.name = "Name is required"
  if (!data.email || !validateEmail(data.email)) errors.email = "Please enter a valid email address"
  if (!data.phone || !validatePhone(data.phone)) errors.phone = "Please enter a valid phone number"
  if (!data.message) errors.message = "Please tell us how we can help you"
  if (!data.propertyInterest) errors.propertyInterest = "Please select a property interest"
  if (!data.preferredContact) errors.preferredContact = "Please select preferred contact method"

  if (Object.keys(errors).length > 0) {
    return { errors, success: false }
  }

  const payload = {
    ...data,
    site: SITE_CONFIG.url,
    submittedAt: new Date().toISOString(),
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    } catch {
      return {
        success: false,
        message: "We could not send your message right now. Please call or try again shortly.",
      }
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("Contact form submission (dev, no CONTACT_WEBHOOK_URL):", payload)
  }

  return {
    success: true,
    message: "Thank you for your message! Dr. Jan Duffy will contact you within 24 hours.",
  }
}
