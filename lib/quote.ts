import {
  budgetOptions,
  colorOptions,
  deliveryOptions,
  materialOptions,
  serviceTypeOptions,
} from "@/lib/site-data";

export type QuoteRequest = {
  fullName: string;
  email: string;
  contact: string;
  serviceType: string;
  hasFile: string;
  fileName: string;
  modelLink: string;
  description: string;
  dimensions: string;
  material: string;
  color: string;
  quantity: string;
  deadline: string;
  deliveryMethod: string;
  additionalNotes: string;
  budgetRange: string;
  website: string;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteRequest, string>>;

export const initialQuoteRequest: QuoteRequest = {
  fullName: "",
  email: "",
  contact: "",
  serviceType: serviceTypeOptions[0],
  hasFile: "yes",
  fileName: "",
  modelLink: "",
  description: "",
  dimensions: "",
  material: materialOptions[0],
  color: colorOptions[0],
  quantity: "1",
  deadline: "",
  deliveryMethod: deliveryOptions[0],
  additionalNotes: "",
  budgetRange: budgetOptions[4],
  website: "",
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function isValidUrl(url: string) {
  if (!url) return true;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isAllowedOption(value: string, options: string[]) {
  return options.includes(value);
}

export function normalizeQuoteRequest(input: unknown): QuoteRequest {
  const record = input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  return {
    fullName: asString(record.fullName),
    email: asString(record.email),
    contact: asString(record.contact),
    serviceType: asString(record.serviceType) || initialQuoteRequest.serviceType,
    hasFile: asString(record.hasFile) || initialQuoteRequest.hasFile,
    fileName: asString(record.fileName),
    modelLink: asString(record.modelLink),
    description: asString(record.description),
    dimensions: asString(record.dimensions),
    material: asString(record.material) || initialQuoteRequest.material,
    color: asString(record.color) || initialQuoteRequest.color,
    quantity: asString(record.quantity) || initialQuoteRequest.quantity,
    deadline: asString(record.deadline),
    deliveryMethod:
      asString(record.deliveryMethod) || initialQuoteRequest.deliveryMethod,
    additionalNotes: asString(record.additionalNotes),
    budgetRange: asString(record.budgetRange) || initialQuoteRequest.budgetRange,
    website: asString(record.website),
  };
}

export function validateQuoteRequest(data: QuoteRequest): QuoteFormErrors {
  const errors: QuoteFormErrors = {};
  const quantity = Number.parseInt(data.quantity, 10);

  if (!data.fullName) errors.fullName = "Please enter your name.";
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.contact) {
    errors.contact = "Add a phone number or Messenger contact.";
  }
  if (!data.description) {
    errors.description = "Tell us what you want printed or designed.";
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    errors.quantity = "Enter a valid quantity of at least 1.";
  }
  if (!isAllowedOption(data.serviceType, serviceTypeOptions)) {
    errors.serviceType = "Choose one of the listed service types.";
  }
  if (!["yes", "no"].includes(data.hasFile)) {
    errors.hasFile = "Choose whether you already have a file.";
  }
  if (!isAllowedOption(data.material, materialOptions)) {
    errors.material = "Choose one of the available material options.";
  }
  if (!isAllowedOption(data.color, colorOptions)) {
    errors.color = "Choose one of the available color options.";
  }
  if (!isAllowedOption(data.deliveryMethod, deliveryOptions)) {
    errors.deliveryMethod = "Choose one of the available delivery options.";
  }
  if (!isAllowedOption(data.budgetRange, budgetOptions)) {
    errors.budgetRange = "Choose one of the listed budget ranges.";
  }
  if (data.modelLink && !isValidUrl(data.modelLink)) {
    errors.modelLink = "Paste a full link starting with http:// or https://.";
  }
  if (data.deadline && !/^\d{4}-\d{2}-\d{2}$/.test(data.deadline)) {
    errors.deadline = "Enter a valid date.";
  }
  if (data.hasFile === "yes" && !data.fileName && !data.modelLink) {
    errors.fileName = "Add a file note or paste a model link.";
  }

  return errors;
}
