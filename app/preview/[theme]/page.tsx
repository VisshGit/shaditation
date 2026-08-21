import Link from "next/link";
import { notFound } from "next/navigation";
import { allThemes } from "@/config/themes";

type PreviewPageProps = {
  params: Promise<{
    theme: string;
  }>;
};

export default async function ThemePreviewPage({
  params,
}: PreviewPageProps) {
  const { theme: themeId } = await params;

  const theme = Object.values(allThemes).find(
    (item) => item.id === themeId
  );

  if (!theme) {
    notFound();
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background: theme.colors.background,
        color: theme.colors.foreground,
      }}
    >
      {/* Top Bar */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          background: `${theme.colors.background}ee`,
          borderColor: theme.colors.border,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium"
            style={{
              color: theme.colors.primary,
            }}
          >
            ← All Themes
          </Link>

          <p
            className="text-xs uppercase tracking-[3px]"
            style={{
              color: theme.colors.muted,
            }}
          >
            Theme Preview
          </p>
        </div>
      </header>

      {/* Hero Preview */}
      <section className="flex min-h-[80vh] items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl">
          <p
            className="mb-6 text-xs uppercase tracking-[5px]"
            style={{
              color: theme.colors.primary,
            }}
          >
            {theme.category} collection
          </p>

          <h1 className="text-6xl font-semibold tracking-tight sm:text-8xl">
            {theme.name}
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl text-base leading-8"
            style={{
              color: theme.colors.muted,
            }}
          >
            A beautifully crafted wedding invitation experience designed
            around the {theme.name} aesthetic.
          </p>

          {/* Fake couple preview */}
          <div className="mt-16">
            <p
              className="text-sm uppercase tracking-[4px]"
              style={{
                color: theme.colors.primary,
              }}
            >
              The Wedding Of
            </p>

            <h2
              className="mt-5 text-4xl sm:text-6xl"
              style={{
                color: theme.colors.foreground,
              }}
            >
              Vishal &amp; Varsha
            </h2>

            <p
              className="mt-5 text-sm"
              style={{
                color: theme.colors.muted,
              }}
            >
              Sunday · 31 January 2027
            </p>
          </div>
        </div>
      </section>

      {/* Palette */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p
            className="text-xs uppercase tracking-[4px]"
            style={{
              color: theme.colors.primary,
            }}
          >
            Design Language
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Theme Palette
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Primary", theme.colors.primary],
              ["Secondary", theme.colors.secondary],
              ["Accent", theme.colors.accent],
              ["Surface", theme.colors.surface],
            ].map(([name, color]) => (
              <div
                key={name}
                className="overflow-hidden rounded-2xl border"
                style={{
                  borderColor: theme.colors.border,
                }}
              >
                <div
                  className="h-28"
                  style={{
                    background: color,
                  }}
                />

                <div className="p-4">
                  <p className="text-sm font-medium">
                    {name}
                  </p>

                  <p
                    className="mt-1 font-mono text-xs"
                    style={{
                      color: theme.colors.muted,
                    }}
                  >
                    {color}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <p
          className="text-xs uppercase tracking-[4px]"
          style={{
            color: theme.colors.primary,
          }}
        >
          Like this design?
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          Make it yours.
        </h2>

        <p
          className="mx-auto mt-5 max-w-xl"
          style={{
            color: theme.colors.muted,
          }}
        >
          Choose this theme and we&apos;ll create your personalised wedding
          invitation with your names, dates, events, photos and RSVP details.
        </p>

        <Link
  href={`/request?theme=${theme.id}`}
  className="inline-block rounded-xl px-8 py-4 text-center text-sm font-medium text-white transition hover:opacity-90"
  style={{
    background: theme.colors.primary,
  }}
>
  I Want This Theme
</Link>
      </section>
    </main>
  );
}