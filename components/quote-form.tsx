"use client";

import { useState } from "react";

import {
  initialQuoteRequest,
  validateQuoteRequest,
  type QuoteFormErrors,
  type QuoteRequest,
} from "@/lib/quote";
import {
  budgetOptions,
  colorOptions,
  deliveryOptions,
  materialOptions,
  serviceTypeOptions,
  supportedFileTypes,
} from "@/lib/site-data";

import { CheckIcon, UploadIcon } from "./icons";

function getServiceHint(serviceType: QuoteRequest["serviceType"]) {
  switch (serviceType) {
    case "Ready-Made Model Printing":
      return "Send the file or model link if you already have one.";
    case "Custom Design + Print":
      return "A sketch, photo, or rough measurements are enough to start.";
    case "Personalized Prints":
      return "Names, dates, and sample styles help us shape the design faster.";
    case "Multi-Color Prints":
      return "Let us know the colors you want and where they should appear.";
    default:
      return "Tell us what you need and we will guide you through the best print approach.";
  }
}

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteRequest>(initialQuoteRequest);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const serviceHint = getServiceHint(formData.serviceType);

  function handleChange<K extends keyof QuoteRequest>(key: K, value: QuoteRequest[K]) {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateQuoteRequest(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData: {
        message?: string;
        errors?: QuoteFormErrors;
      } = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (responseData.errors && typeof responseData.errors === "object") {
          setErrors((current) => ({ ...current, ...responseData.errors }));
        }

        setSubmitError(
          typeof responseData.message === "string"
            ? responseData.message
            : "We couldn't send your request right now. Please try again.",
        );
        return;
      }

      setIsSubmitted(true);
      setSubmitMessage(
        typeof responseData.message === "string"
          ? responseData.message
          : "Request received. We'll review your details and reply soon.",
      );
      setFormData(initialQuoteRequest);
      setErrors({});
    } catch {
      setSubmitError(
        "We couldn't send your request right now. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
      <div className="card-panel bg-ink text-white dark:bg-slate-950">
        <span className="eyebrow border-white/15 bg-white/10 text-white">Before you send</span>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">A clear request is enough</h3>
        <p className="mt-4 text-sm leading-7 text-slate-200">
          If you know the details, include them. If not, send what you have and we&apos;ll
          help fill in the gaps.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-2xl bg-white/10 p-2 text-white">
                <UploadIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Supported file types</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {supportedFileTypes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold">Quick tip</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{serviceHint}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold">Most helpful details</p>
            <ul className="mt-3 space-y-3 text-sm text-slate-200">
              <li>1. What the part or project is for.</li>
              <li>2. Approximate size, quantity, or deadline.</li>
              <li>3. A file, link, sketch, or reference if available.</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card-panel overflow-hidden p-0">
        <div className="border-b border-slate-200 px-5 py-6 dark:border-slate-800 sm:px-8">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">Request a quote</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-body">
            Share the essentials and we&apos;ll reply with the best next step.
          </p>
        </div>

        <div className="space-y-8 px-5 py-6 sm:px-8">
          {isSubmitted ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/40">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-emerald-600 p-2 text-white">
                  <CheckIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                    Request received
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-800 dark:text-emerald-200">
                    {submitMessage ||
                      "Thanks for reaching out. We'll review your request and send a quote with recommendations."}
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 dark:border-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-900/30"
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitMessage("");
                    }}
                  >
                    Send another request
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {submitError ? (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5 dark:border-rose-900/50 dark:bg-rose-950/30">
              <p className="text-sm font-semibold text-rose-900 dark:text-rose-200">
                Unable to send request
              </p>
              <p className="mt-2 text-sm leading-6 text-rose-800 dark:text-rose-200">
                {submitError}
              </p>
            </div>
          ) : null}

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="input-label" htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                className="input-field"
                placeholder="Your name"
                required
                value={formData.fullName}
                onChange={(event) => handleChange("fullName", event.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName ? (
                <p id="fullName-error" className="mt-2 text-sm text-rose-600">
                  {errors.fullName}
                </p>
              ) : null}
            </div>
            <div>
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-sm text-rose-600">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <label className="input-label" htmlFor="contact">
                Phone / Messenger / contact number
              </label>
              <input
                id="contact"
                name="contact"
                className="input-field"
                placeholder="09xx xxx xxxx or Messenger link"
                required
                value={formData.contact}
                onChange={(event) => handleChange("contact", event.target.value)}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "contact-error" : undefined}
              />
              {errors.contact ? (
                <p id="contact-error" className="mt-2 text-sm text-rose-600">
                  {errors.contact}
                </p>
              ) : null}
            </div>
          </section>

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="input-label" htmlFor="serviceType">
                Type of service
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="input-field"
                value={formData.serviceType}
                onChange={(event) => handleChange("serviceType", event.target.value)}
              >
                {serviceTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <fieldset>
              <legend className="input-label">Do you already have a file?</legend>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {["yes", "no"].map((option) => {
                  const isSelected = formData.hasFile === option;

                  return (
                    <label
                      key={option}
                      className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                        isSelected
                          ? "border-ink bg-ink text-white dark:border-accent-500 dark:bg-accent-500 dark:text-slate-950"
                          : "border-slate-300 bg-white text-body hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-slate-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name="hasFile"
                        value={option}
                        className="sr-only"
                        checked={isSelected}
                        onChange={(event) => handleChange("hasFile", event.target.value)}
                      />
                      {option === "yes" ? "Yes, I do" : "No, I need help"}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <div>
              <label className="input-label" htmlFor="modelLink">
                Model link
              </label>
              <input
                id="modelLink"
                name="modelLink"
                className="input-field"
                placeholder="Thingiverse, Printables, Google Drive, etc."
                value={formData.modelLink}
                onChange={(event) => handleChange("modelLink", event.target.value)}
                aria-invalid={Boolean(errors.modelLink)}
                aria-describedby={errors.modelLink ? "modelLink-error" : "modelLink-help"}
              />
              <p id="modelLink-help" className="mt-2 text-xs text-body">
                Paste a public file or model link if you have one.
              </p>
              {errors.modelLink ? (
                <p id="modelLink-error" className="mt-2 text-sm text-rose-600">
                  {errors.modelLink}
                </p>
              ) : null}
            </div>
            <div>
              <label className="input-label" htmlFor="fileName">
                File note or filename
              </label>
              <input
                id="fileName"
                name="fileName"
                className="input-field"
                placeholder="Example: bracket-v2.stl"
                value={formData.fileName}
                onChange={(event) => handleChange("fileName", event.target.value)}
                aria-invalid={Boolean(errors.fileName)}
                aria-describedby={errors.fileName ? "fileName-error" : "fileName-help"}
              />
              <p id="fileName-help" className="mt-2 text-xs text-body">
                Add a filename, short note, or version label.
              </p>
              {errors.fileName ? (
                <p id="fileName-error" className="mt-2 text-sm text-rose-600">
                  {errors.fileName}
                </p>
              ) : null}
            </div>
          </section>

          <section className="grid gap-5">
            <div>
              <label className="input-label" htmlFor="description">
                Description of part or project
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="input-field resize-none"
                placeholder="Tell us what you need, how it will be used, and any important details."
                required
                value={formData.description}
                onChange={(event) => handleChange("description", event.target.value)}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? "description-error" : undefined}
              />
              {errors.description ? (
                <p id="description-error" className="mt-2 text-sm text-rose-600">
                  {errors.description}
                </p>
              ) : null}
            </div>
          </section>

          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="input-label" htmlFor="dimensions">
                Dimensions / size
              </label>
              <input
                id="dimensions"
                name="dimensions"
                className="input-field"
                placeholder="e.g. 12cm x 8cm x 3cm"
                value={formData.dimensions}
                onChange={(event) => handleChange("dimensions", event.target.value)}
              />
            </div>
            <div>
              <label className="input-label" htmlFor="material">
                Preferred material
              </label>
              <select
                id="material"
                name="material"
                className="input-field"
                value={formData.material}
                onChange={(event) => handleChange("material", event.target.value)}
              >
                {materialOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="input-label" htmlFor="color">
                Preferred color
              </label>
              <select
                id="color"
                name="color"
                className="input-field"
                value={formData.color}
                onChange={(event) => handleChange("color", event.target.value)}
              >
                {colorOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="input-label" htmlFor="quantity">
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                className="input-field"
                required
                value={formData.quantity}
                onChange={(event) => handleChange("quantity", event.target.value)}
                aria-invalid={Boolean(errors.quantity)}
                aria-describedby={errors.quantity ? "quantity-error" : undefined}
              />
              {errors.quantity ? (
                <p id="quantity-error" className="mt-2 text-sm text-rose-600">
                  {errors.quantity}
                </p>
              ) : null}
            </div>
            <div>
              <label className="input-label" htmlFor="deadline">
                Deadline
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                className="input-field"
                value={formData.deadline}
                onChange={(event) => handleChange("deadline", event.target.value)}
              />
            </div>
            <div>
              <label className="input-label" htmlFor="deliveryMethod">
                Delivery method
              </label>
              <select
                id="deliveryMethod"
                name="deliveryMethod"
                className="input-field"
                value={formData.deliveryMethod}
                onChange={(event) => handleChange("deliveryMethod", event.target.value)}
              >
                {deliveryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="input-label" htmlFor="budgetRange">
                Budget range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                className="input-field"
                value={formData.budgetRange}
                onChange={(event) => handleChange("budgetRange", event.target.value)}
              >
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="input-label" htmlFor="additionalNotes">
                Additional notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={4}
                className="input-field resize-none"
                placeholder="Special finish, packaging, quantity variations, meetup notes, and more."
                value={formData.additionalNotes}
                onChange={(event) => handleChange("additionalNotes", event.target.value)}
              />
            </div>
          </section>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-body">
              This goes straight to the business inbox for review and follow-up.
            </p>
            <button
              type="submit"
              className="btn-primary min-w-44 w-full sm:w-auto"
              disabled={isSubmitting}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-transparent" />
                    Sending request...
                  </>
                ) : (
                  "Send Quote Request"
                )}
              </span>
            </button>
          </div>
        </div>

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          value={formData.website}
          onChange={(event) => handleChange("website", event.target.value)}
          aria-hidden="true"
        />
      </form>
    </div>
  );
}
