import Link from "next/link";
import { allThemes, type ThemeId } from "@/config/themes";

export default function ThemeStudioPage() {
  const themes = Object.values(allThemes) as Array<
    (typeof allThemes)[ThemeId]
  >;

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[4px] text-[var(--primary)]">
            Shaditation
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#2b1d0e] sm:text-5xl">
            Theme Studio
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f6258]">
            Preview and select the visual theme for a wedding invitation.
            Theme selection is controlled by the developer.
          </p>
        </div>

        {/* Themes */}
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Color Preview */}
              <div
                className="relative h-48 p-6"
                style={{
                  background: theme.colors.background,
                  color: theme.colors.foreground,
                }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p
                      className="text-xs uppercase tracking-[3px]"
                      style={{ color: theme.colors.primary }}
                    >
                      {theme.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                      {theme.name}
                    </h2>
                  </div>

                  {/* Color Palette */}
                  <div className="flex gap-2">
                    {[
                      theme.colors.primary,
                      theme.colors.secondary,
                      theme.colors.accent,
                      theme.colors.surface,
                    ].map((color, index) => (
                      <span
                        key={index}
                        className="h-7 w-7 rounded-full border border-black/10"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[2px] text-gray-400">
                    Theme ID
                  </p>

                  <p className="mt-1 break-all font-mono text-sm text-gray-700">
                    {theme.id}
                  </p>
                </div>

                <Link
                  href={`/preview/${theme.id}`}
                  className="block w-full rounded-xl px-4 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
                  style={{
                    background: theme.colors.primary,
                  }}
                >
                  Preview Theme
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}