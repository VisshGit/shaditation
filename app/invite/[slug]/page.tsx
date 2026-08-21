import { notFound } from "next/navigation";
import { invitations } from "@/config/themes/invitations";

type InvitationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InvitationPage({
  params,
}: InvitationPageProps) {
  const { slug } = await params;

  const invitation = invitations.find(
    (item) => item.slug === slug
  );

  if (!invitation) {
    notFound();
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[4px]">
          Wedding Invitation
        </p>

        <h1 className="mt-5 text-5xl font-semibold">
          {invitation.groomName} & {invitation.brideName}
        </h1>

        <p className="mt-4 text-sm">
          {invitation.weddingDate}
        </p>

        <p className="mt-2 text-sm">
          Theme: {invitation.themeId}
        </p>
      </div>
    </main>
  );
}