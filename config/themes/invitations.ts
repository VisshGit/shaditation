export type InvitationStatus =
  | "draft"
  | "published";

export type Invitation = {
  id: string;

  // URL identifier
  slug: string;

  // Selected theme
  themeId: string;

  // Couple
  groomName: string;
  brideName: string;

  // Wedding
  weddingDate: string;

  // Optional details
  email?: string;
  whatsapp?: string;

  // Invitation status
  status: InvitationStatus;

  createdAt: string;
  updatedAt: string;
};

/**
 * Create a URL-safe slug from couple names.
 *
 * Example:
 * Vishal + Varsha
 * → vishal-varsha
 */
export function createInvitationSlug(
  groomName: string,
  brideName: string
) {
  const clean = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  return `${clean(groomName)}-${clean(brideName)}`;
}
export const invitations: Invitation[] = [
  {
    id: "vishal-varsha-001",
    slug: "vishal-varsha",
    themeId: "basic-classic",
    groomName: "Vishal",
    brideName: "Varsha",
    weddingDate: "31 January 2027",
    email: "example@email.com",
    whatsapp: "+91 XXXXX XXXXX",
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];