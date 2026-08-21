import Link from "next/link";
import { notFound } from "next/navigation";
import { allThemes } from "@/config/themes";

type ClientPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type ClientData = {
  id: string;
  name: string;
  partnerName: string;
  weddingDate: string;
  theme: string;
  email: string;
  whatsapp: string;
  venue: string;
  city: string;
  status: "Pending" | "In Progress" | "Completed";
};

const clients: ClientData[] = [
  {
    id: "REQ-001",
    name: "Vishal",
    partnerName: "Varsha",
    weddingDate: "31 January 2027",
    theme: "basic-classic",
    email: "vishal@example.com",
    whatsapp: "+91 XXXXX XXXXX",
    venue: "Royal Palace Venue",
    city: "Guwahati, Assam",
    status: "Pending",
  },
];

export default async function ClientRequestPage({
  params,
}: ClientPageProps) {
  const { id } = await params;

  const client = clients.find((item) => item.id === id);

  if (!client) {
    notFound();
  }

  const theme = Object.values(allThemes).find(
    (item) => item.id === client.theme
  );

  const invitationSlug =
    `${client.name}-${client.partnerName}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const invitationUrl = `/invite/${invitationSlug}`;

  return (
    <main
      className="min-h-screen px-6 py-12 sm:px-8 lg:px-12"
      style={{
        background: theme?.colors.background ?? "#f8f5ef",
        color: theme?.colors.foreground ?? "#2b1d0e",
      }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Navigation */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/admin/requests"
              className="text-sm font-medium"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              ← Client Requests
            </Link>

            <p
              className="mt-8 text-xs uppercase tracking-[4px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              Shaditation Admin
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Invitation Setup
            </h1>

            <p
              className="mt-3 text-sm"
              style={{
                color: theme?.colors.muted ?? "#8f7565",
              }}
            >
              {client.id}
            </p>
          </div>

          <span
            className="inline-flex w-fit rounded-full px-4 py-2 text-xs font-medium"
            style={{
              background:
                client.status === "Completed"
                  ? "#dcfce7"
                  : client.status === "In Progress"
                    ? "#dbeafe"
                    : "#fef3c7",
              color:
                client.status === "Completed"
                  ? "#166534"
                  : client.status === "In Progress"
                    ? "#1d4ed8"
                    : "#92400e",
            }}
          >
            {client.status}
          </span>
        </div>

        {/* Client Overview */}
        <section
          className="rounded-2xl border p-6 shadow-sm sm:p-8"
          style={{
            borderColor: theme?.colors.border ?? "rgba(0,0,0,0.1)",
            background: theme?.colors.surface ?? "#ffffff",
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p
                className="text-xs uppercase tracking-[3px]"
                style={{
                  color: theme?.colors.primary ?? "#b68d40",
                }}
              >
                Client
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                {client.name} &amp; {client.partnerName}
              </h2>

              <p
                className="mt-2 text-sm"
                style={{
                  color: theme?.colors.muted ?? "#8f7565",
                }}
              >
                {client.email} · {client.whatsapp}
              </p>
            </div>

            <div
              className="rounded-xl border px-5 py-4"
              style={{
                borderColor:
                  theme?.colors.border ?? "rgba(0,0,0,0.1)",
              }}
            >
              <p
                className="text-xs uppercase tracking-[2px]"
                style={{
                  color: theme?.colors.muted ?? "#8f7565",
                }}
              >
                Selected Theme
              </p>

              <p className="mt-1 text-lg font-semibold">
                {theme?.name ?? client.theme}
              </p>

              <p
                className="mt-1 font-mono text-xs"
                style={{
                  color: theme?.colors.muted ?? "#8f7565",
                }}
              >
                {client.theme}
              </p>
            </div>

          </div>
        </section>

        {/* Setup Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Couple Details */}
          <section
            className="rounded-2xl border p-6 shadow-sm"
            style={{
              borderColor:
                theme?.colors.border ?? "rgba(0,0,0,0.1)",
              background:
                theme?.colors.surface ?? "#ffffff",
            }}
          >
            <p
              className="text-xs uppercase tracking-[3px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              01
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Couple Details
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs text-gray-400">
                  Partner 1
                </p>
                <p className="mt-1 font-medium">
                  {client.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Partner 2
                </p>
                <p className="mt-1 font-medium">
                  {client.partnerName}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs text-gray-400">
                  Wedding Date
                </p>
                <p className="mt-1 font-medium">
                  {client.weddingDate}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background:
                  theme?.colors.primary ?? "#b68d40",
              }}
            >
              Edit Couple Details
            </button>
          </section>

          {/* Theme */}
          <section
            className="rounded-2xl border p-6 shadow-sm"
            style={{
              borderColor:
                theme?.colors.border ?? "rgba(0,0,0,0.1)",
              background:
                theme?.colors.surface ?? "#ffffff",
            }}
          >
            <p
              className="text-xs uppercase tracking-[3px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              02
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Theme
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <div
                className="h-16 w-16 rounded-2xl border"
                style={{
                  background:
                    theme?.colors.primary ?? "#b68d40",
                  borderColor:
                    theme?.colors.border ?? "rgba(0,0,0,0.1)",
                }}
              />

              <div>
                <p className="text-lg font-semibold">
                  {theme?.name ?? client.theme}
                </p>

                <p
                  className="text-sm"
                  style={{
                    color:
                      theme?.colors.muted ?? "#8f7565",
                  }}
                >
                  {client.theme}
                </p>
              </div>
            </div>

            <Link
              href={`/preview/${client.theme}`}
              className="mt-7 block w-full rounded-xl border px-5 py-3 text-center text-sm font-medium transition hover:bg-black/5"
              style={{
                borderColor:
                  theme?.colors.border ?? "rgba(0,0,0,0.1)",
              }}
            >
              Preview Theme
            </Link>
          </section>

          {/* Events */}
          <section
            className="rounded-2xl border p-6 shadow-sm"
            style={{
              borderColor:
                theme?.colors.border ?? "rgba(0,0,0,0.1)",
              background:
                theme?.colors.surface ?? "#ffffff",
            }}
          >
            <p
              className="text-xs uppercase tracking-[3px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              03
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Wedding Events
            </h2>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border p-4">
                <p className="font-medium">
                  Barat
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{
                    color:
                      theme?.colors.muted ?? "#8f7565",
                  }}
                >
                  Sunday · 31 January 2027 · 11:00 AM
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="font-medium">
                  Reception
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{
                    color:
                      theme?.colors.muted ?? "#8f7565",
                  }}
                >
                  Wednesday · 3 February 2027 · 8:00 PM
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background:
                  theme?.colors.primary ?? "#b68d40",
              }}
            >
              Manage Events
            </button>
          </section>

          {/* Venue */}
          <section
            className="rounded-2xl border p-6 shadow-sm"
            style={{
              borderColor:
                theme?.colors.border ?? "rgba(0,0,0,0.1)",
              background:
                theme?.colors.surface ?? "#ffffff",
            }}
          >
            <p
              className="text-xs uppercase tracking-[3px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              04
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Venue
            </h2>

            <div className="mt-6">
              <p className="text-lg font-medium">
                {client.venue}
              </p>

              <p
                className="mt-1 text-sm"
                style={{
                  color:
                    theme?.colors.muted ?? "#8f7565",
                }}
              >
                {client.city}
              </p>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background:
                  theme?.colors.primary ?? "#b68d40",
              }}
            >
              Edit Venue
            </button>
          </section>

          {/* Gallery */}
          <section
            className="rounded-2xl border p-6 shadow-sm"
            style={{
              borderColor:
                theme?.colors.border ?? "rgba(0,0,0,0.1)",
              background:
                theme?.colors.surface ?? "#ffffff",
            }}
          >
            <p
              className="text-xs uppercase tracking-[3px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              05
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Gallery
            </h2>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex aspect-square items-center justify-center rounded-xl border border-dashed text-xs text-gray-400"
                >
                  Photo {item}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background:
                  theme?.colors.primary ?? "#b68d40",
              }}
            >
              Manage Gallery
            </button>
          </section>

          {/* RSVP */}
          <section
            className="rounded-2xl border p-6 shadow-sm"
            style={{
              borderColor:
                theme?.colors.border ?? "rgba(0,0,0,0.1)",
              background:
                theme?.colors.surface ?? "#ffffff",
            }}
          >
            <p
              className="text-xs uppercase tracking-[3px]"
              style={{
                color: theme?.colors.primary ?? "#b68d40",
              }}
            >
              06
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              RSVP
            </h2>

            <p
              className="mt-6 text-sm leading-7"
              style={{
                color:
                  theme?.colors.muted ?? "#8f7565",
              }}
            >
              RSVP functionality can be configured for this
              invitation before publishing.
            </p>

            <button
              type="button"
              className="mt-7 w-full rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background:
                  theme?.colors.primary ?? "#b68d40",
              }}
            >
              Configure RSVP
            </button>
          </section>
        </div>

        {/* Invitation URL */}
        <section
          className="mt-8 rounded-2xl border p-6 shadow-sm sm:p-8"
          style={{
            borderColor:
              theme?.colors.border ?? "rgba(0,0,0,0.1)",
            background:
              theme?.colors.surface ?? "#ffffff",
          }}
        >
          <p
            className="text-xs uppercase tracking-[3px]"
            style={{
              color:
                theme?.colors.primary ?? "#b68d40",
            }}
          >
            Final Invitation
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Unique Invitation URL
          </h2>

          <div className="mt-6 rounded-xl border bg-black/[0.02] p-4">
            <p className="font-mono text-sm break-all">
              {invitationUrl}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={invitationUrl}
              className="rounded-xl px-6 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background:
                  theme?.colors.primary ?? "#b68d40",
              }}
            >
              Open Invitation
            </Link>

            <button
              type="button"
              className="rounded-xl border px-6 py-3 text-sm font-medium transition hover:bg-black/5"
              style={{
                borderColor:
                  theme?.colors.border ?? "rgba(0,0,0,0.1)",
              }}
            >
              Copy URL
            </button>
          </div>
        </section>

        {/* Publish */}
        <section className="mt-8 text-center">
          <button
            type="button"
            className="rounded-xl px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
            style={{
              background:
                theme?.colors.primary ?? "#b68d40",
            }}
          >
            Save &amp; Prepare Invitation
          </button>

          <p
            className="mt-3 text-xs"
            style={{
              color:
                theme?.colors.muted ?? "#8f7565",
            }}
          >
            Publishing will be connected to the client database later.
          </p>
        </section>

      </div>
    </main>
  );
}
