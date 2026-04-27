import { Resend } from "resend";

import {
  createQuoteEmailHtml,
  createQuoteEmailSubject,
  createQuoteEmailText,
} from "@/lib/quote-email";
import { normalizeQuoteRequest, validateQuoteRequest } from "@/lib/quote";

export const runtime = "nodejs";

function isResendConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.QUOTE_TO_EMAIL &&
      process.env.QUOTE_FROM_EMAIL,
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submission = normalizeQuoteRequest(body);

    if (submission.website) {
      return Response.json({ message: "Thanks." }, { status: 200 });
    }

    const errors = validateQuoteRequest(submission);

    if (Object.keys(errors).length > 0) {
      return Response.json(
        {
          message: "Please review the highlighted fields and try again.",
          errors,
        },
        { status: 400 },
      );
    }

    if (!isResendConfigured()) {
      return Response.json(
        {
          message:
            "Quote email delivery is not configured yet. Add RESEND_API_KEY, QUOTE_TO_EMAIL, and QUOTE_FROM_EMAIL before going live.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL!,
      to: [process.env.QUOTE_TO_EMAIL!],
      replyTo: submission.email,
      subject: createQuoteEmailSubject(submission),
      text: createQuoteEmailText(submission),
      html: createQuoteEmailHtml(submission),
    });

    if (error) {
      console.error("Resend quote delivery failed", error);

      return Response.json(
        {
          message:
            "We couldn't send your request right now. Please try again in a moment.",
        },
        { status: 502 },
      );
    }

    return Response.json(
      {
        message:
          "Request received. We'll review the details and send an estimate soon.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Quote submission failed", error);

    return Response.json(
      {
        message:
          "Something went wrong while sending your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
