export type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PolicyDocument = {
  title: string;
  description: string;
  path: string;
  lastUpdated: string;
  sections: PolicySection[];
};

const lastUpdated = "April 12, 2026";

export const privacyPolicy: PolicyDocument = {
  title: "Privacy Policy",
  description:
    "How Northernware collects, uses, and protects customer contact details, files, and project information.",
  path: "/privacy-policy",
  lastUpdated,
  sections: [
    {
      title: "What we collect",
      paragraphs: [
        "We collect the details you submit through the quote form or direct messages, such as your name, email address, phone or Messenger contact, project description, model links, delivery preferences, and any notes needed to quote the job.",
        "If you send files, measurements, screenshots, or reference photos, we treat them as project materials used to review, quote, and produce your order.",
      ],
    },
    {
      title: "How we use your information",
      paragraphs: [
        "Your information is used to reply to inquiries, prepare quotes, confirm printability, schedule production, arrange fulfillment, and provide support related to your order.",
      ],
      bullets: [
        "Respond to quote requests and follow-up questions",
        "Review file requirements and production risk",
        "Confirm payment, schedule, and fulfillment details",
        "Maintain order history for repeat customers and reorders",
      ],
    },
    {
      title: "When we share information",
      paragraphs: [
        "We do not sell customer information. Order details are only shared when needed to complete the service, such as email delivery, payment confirmation, or local courier coordination.",
      ],
      bullets: [
        "Email or form-delivery providers used to receive inquiries",
        "Payment channels used to confirm approved orders",
        "Delivery riders or courier services when a shipment is requested",
      ],
    },
    {
      title: "Storage and retention",
      paragraphs: [
        "Project details, submitted files, and communication records may be retained for quoting, reprints, repeat orders, support, and bookkeeping. We keep data only as long as reasonably necessary for business operations and compliance.",
      ],
    },
    {
      title: "Your choices",
      paragraphs: [
        "You can request corrections to your contact details or ask us to delete stored project information that is no longer needed for an active order, subject to any legal or recordkeeping obligations.",
      ],
    },
  ],
};

export const termsOfService: PolicyDocument = {
  title: "Terms of Service",
  description:
    "The operating terms that apply to quote requests, approved orders, custom design work, and print fulfillment.",
  path: "/terms-of-service",
  lastUpdated,
  sections: [
    {
      title: "Quotes and approvals",
      paragraphs: [
        "Quotes are based on the details provided at the time of review. Changes to dimensions, materials, colors, quantity, deadline, or design scope can change the final price and lead time.",
        "An order is considered approved only after the customer confirms the quote and completes any required payment or down payment.",
      ],
    },
    {
      title: "Customer responsibilities",
      paragraphs: [
        "Customers are responsible for confirming spelling, names, dimensions, measurements, and intended use before production starts.",
      ],
      bullets: [
        "Review quotes, mockups, and design notes carefully",
        "Confirm whether the order is decorative, functional, or fit-sensitive",
        "Make sure any third-party file can legally be used for the intended purpose",
      ],
    },
    {
      title: "Production limitations",
      paragraphs: [
        "FDM 3D printing has normal layer lines, visible seams, and material-specific limitations. Minor visual variation is expected unless a premium finish was explicitly quoted.",
        "Mechanical performance depends on the design, material, orientation, and real-world use. No blanket guarantee is provided for customer-supplied files that were not designed by Northernware.",
      ],
    },
    {
      title: "Fulfillment and release",
      paragraphs: [
        "Orders are released only after final payment has been settled. Pickup, meetup, and delivery timing is arranged separately once the project passes the final quality check.",
      ],
    },
  ],
};

export const refundPolicy: PolicyDocument = {
  title: "Refund / Cancellation Policy",
  description:
    "How cancellations, partial refunds, design charges, and production-stage orders are handled.",
  path: "/refund-cancellation-policy",
  lastUpdated,
  sections: [
    {
      title: "Before production starts",
      paragraphs: [
        "Orders canceled before printing or design work starts can usually be canceled with little to no charge, unless special-order material has already been purchased.",
      ],
    },
    {
      title: "Custom design work",
      paragraphs: [
        "Custom design fees cover time spent modeling, checking fit, and preparing files. Completed design work is generally non-refundable even if the customer later decides not to continue with printing.",
      ],
    },
    {
      title: "After printing begins",
      paragraphs: [
        "Once printing starts, material and machine time are already committed. Orders canceled during or after production are generally non-refundable except when the issue is caused by our confirmed production error.",
      ],
    },
    {
      title: "Approved corrections",
      paragraphs: [
        "If the finished item does not match the approved design because of our production mistake, we will review the issue and provide a reprint, adjustment, or other reasonable resolution.",
      ],
    },
  ],
};

export const paymentPolicy: PolicyDocument = {
  title: "Payment Policy",
  description:
    "Accepted payment methods, timing, down payment expectations, and release requirements for approved orders.",
  path: "/payment-policy",
  lastUpdated,
  sections: [
    {
      title: "Accepted payment methods",
      paragraphs: [
        "We currently accept GCash, Maya, bank transfer, and cash for approved pickup or meetup orders.",
      ],
    },
    {
      title: "When payment is collected",
      paragraphs: [
        "Small ready-made jobs may be paid in full before production begins. Custom design work, rush jobs, and larger or higher-risk orders may require a partial or full upfront payment before machine time is reserved.",
      ],
    },
    {
      title: "Down payments",
      paragraphs: [
        "Most custom design work and many batch jobs require a down payment of around 50% before work starts. The exact amount is confirmed in the quote.",
      ],
    },
    {
      title: "Release of completed orders",
      paragraphs: [
        "Completed orders are released only after the remaining balance, delivery fee, and any approved extra charges are settled.",
      ],
    },
  ],
};

export const fileHandlingPolicy: PolicyDocument = {
  title: "File Handling / Customer Upload Policy",
  description:
    "How customer files, shared links, third-party models, and print-risk reviews are handled before production.",
  path: "/file-handling-policy",
  lastUpdated,
  sections: [
    {
      title: "Accepted file formats",
      paragraphs: [
        "STL and 3MF are the most quote-ready formats. OBJ, STEP, and public file-sharing links can also be accepted depending on the project.",
      ],
    },
    {
      title: "Review before printing",
      paragraphs: [
        "We review files for obvious printability issues such as thin walls, unsupported geometry, scale problems, and unclear assembly expectations. This review reduces risk but does not guarantee that every third-party file will perform perfectly in real-world use.",
      ],
    },
    {
      title: "Customer-provided files",
      paragraphs: [
        "The customer remains responsible for design intent, licensing, dimensions, and intended use when supplying a third-party or self-made file. If a file is approved with known risk, failed attempts may still incur charges.",
      ],
    },
    {
      title: "Storage and deletion",
      paragraphs: [
        "Submitted files and links may be retained for quoting, reorders, support, and recordkeeping. Customers may request deletion of inactive project files when there is no open order requiring them.",
      ],
    },
  ],
};

export const policyDocuments = [
  privacyPolicy,
  termsOfService,
  refundPolicy,
  paymentPolicy,
  fileHandlingPolicy,
];
