// PLACEHOLDER legal texts. The owner's Google Docs (Privacy, Terms) contain only a title as of 2026-11-10.
// When the final texts arrive, paste them VERBATIM into PRIVACY / TERMS — only markup may change:
// section titles become "## " headings (the page numbers them itself), bullets become "- " lists.
// Never edit the wording. Then set legalUpdated to the documents' effective date and refresh the
// "At a glance" cards (a site summary, not part of the documents).

export const legalUpdated = "—";

const PRIVACY = null as string | null;
const TERMS = null as string | null;

export const privacy = {
  title: "Privacy Policy",
  current: "privacy",
  body: PRIVACY,
  glance: [
    ["What we collect", "Summary from the final text."],
    ["How we use it", "Summary from the final text."],
    ["Your choices", "Summary from the final text."],
  ] as [string, string][],
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms = {
  title: "Terms of Use",
  current: "terms",
  body: TERMS,
  glance: [
    ["Using the app", "Summary from the final text."],
    ["Subscriptions", "Summary from the final text."],
    ["Your content", "Summary from the final text."],
  ] as [string, string][],
  other: { to: "/privacy", label: "Privacy Policy" },
};
