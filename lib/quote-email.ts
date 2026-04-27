import type { QuoteRequest } from "@/lib/quote";

const fieldLabels: Record<Exclude<keyof QuoteRequest, "website">, string> = {
  fullName: "Full name",
  email: "Email",
  contact: "Phone / Messenger",
  serviceType: "Service type",
  hasFile: "Already has a file",
  fileName: "File note",
  modelLink: "Model link",
  description: "Project description",
  dimensions: "Dimensions / size",
  material: "Preferred material",
  color: "Preferred color",
  quantity: "Quantity",
  deadline: "Deadline",
  deliveryMethod: "Delivery method",
  additionalNotes: "Additional notes",
  budgetRange: "Budget range",
};

const fieldOrder = Object.keys(fieldLabels) as Array<Exclude<keyof QuoteRequest, "website">>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatValue(value: string) {
  return value || "Not provided";
}

export function createQuoteEmailSubject(data: QuoteRequest) {
  return `New quote request from ${data.fullName} (${data.serviceType})`;
}

export function createQuoteEmailText(data: QuoteRequest) {
  return fieldOrder
    .map((field) => `${fieldLabels[field]}: ${formatValue(data[field])}`)
    .join("\n");
}

export function createQuoteEmailHtml(data: QuoteRequest) {
  const rows = fieldOrder
    .map(
      (field) => `
        <tr>
          <td style="padding:12px 16px;border:1px solid #e5e7eb;font-weight:600;background:#f8fafc;width:220px;">
            ${escapeHtml(fieldLabels[field])}
          </td>
          <td style="padding:12px 16px;border:1px solid #e5e7eb;white-space:pre-wrap;">
            ${escapeHtml(formatValue(data[field]))}
          </td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f3f8f5;padding:24px;color:#111827;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;">
        <div style="padding:24px 28px;background:radial-gradient(circle at top left,rgba(34,197,94,0.18),transparent 28%),linear-gradient(135deg,#081426 0%,#0f172a 58%,#0b1f3a 100%);color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.82;">
            New website inquiry
          </p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">${escapeHtml(data.fullName)}</h1>
          <p style="margin:12px 0 0;font-size:15px;line-height:1.7;opacity:0.9;">
            ${escapeHtml(data.serviceType)} request from ${escapeHtml(data.email)}
          </p>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;border-spacing:0;">
            ${rows}
          </table>
        </div>
      </div>
    </div>`;
}
