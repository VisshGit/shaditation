
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type WeddingRequest = {
  id: string;
  themeId: string;
  themeName: string;
  themeCategory: string;
  name: string;
  partnerName: string;
  weddingDate: string;
  email: string;
  whatsapp: string;
  message: string;
  status: "new" | "contacted" | "completed";
  createdAt: string;
};

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState<WeddingRequest[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("shaditation_requests");

    if (!stored) return;

    try {
      const parsed: WeddingRequest[] = JSON.parse(stored);
      setRequests(parsed.reverse());
    } catch (error) {
      console.error("Failed to load requests:", error);
    }
  }, []);

  const updateStatus = (
    id: string,
    status: WeddingRequest["status"]
  ) => {
    const stored = localStorage.getItem(
      "shaditation_requests"
    );

    if (!stored) return;

    try {
      const current: WeddingRequest[] = JSON.parse(stored);

      const updated = current.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      );

      localStorage.setItem(
        "shaditation_requests",
        JSON.stringify(updated)
      );

      setRequests([...updated].reverse());
    } catch (error) {
      console.error("Failed to update request:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#fdf8f3] px-6 py-12 text-[#2b1d0e]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[4px] text-[#b68d40]">
              Shaditation Admin
            </p>

            <h1 className="mt-3 text-4xl font-semibold">
              Wedding Requests
            </h1>

            <p className="mt-3 text-sm text-[#8f7565]">
              Manage theme selections and customer requests.
            </p>
          </div>

          <Link
            href="/admin/themes"
            className="inline-flex rounded-xl border border-[#d9c5a5] px-5 py-3 text-sm font-medium transition hover:bg-white"
          >
            ← Themes
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e6d8c5] bg-white p-6">
            <p className="text-sm text-[#8f7565]">
              Total Requests
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {requests.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6d8c5] bg-white p-6">
            <p className="text-sm text-[#8f7565]">
              New
            </p>

            <p className="mt-2 text-3xl font-semibold text-[#b68d40]">
              {
                requests.filter(
                  (request) => request.status === "new"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6d8c5] bg-white p-6">
            <p className="text-sm text-[#8f7565]">
              Completed
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {
                requests.filter(
                  (request) =>
                    request.status === "completed"
                ).length
              }
            </p>
          </div>
        </div>

        {/* Empty State */}
        {requests.length === 0 && (
          <div className="rounded-3xl border border-[#e6d8c5] bg-white px-6 py-20 text-center">
            <p className="text-lg font-medium">
              No wedding requests yet.
            </p>

            <p className="mt-2 text-sm text-[#8f7565]">
              Once someone submits the form, their request
              will appear here.
            </p>

            <Link
              href="/admin/themes"
              className="mt-6 inline-flex rounded-xl bg-[#b68d40] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Browse Themes
            </Link>
          </div>
        )}

        {/* Requests */}
        <div className="space-y-5">
          {requests.map((request) => (
            <div
              key={request.id}
              className="rounded-3xl border border-[#e6d8c5] bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#f5e6c8] px-3 py-1 text-xs font-medium text-[#8b5e34]">
                      {request.themeCategory}
                    </span>

                    <span className="text-xs text-[#8f7565]">
                      {request.id}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold">
                    {request.name} & {request.partnerName}
                  </h2>

                  <p className="mt-2 text-sm text-[#8f7565]">
                    Wedding Date:{" "}
                    <span className="font-medium text-[#2b1d0e]">
                      {request.weddingDate}
                    </span>
                  </p>

                  <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#8f7565]">
                        Theme
                      </p>

                      <p className="mt-1 font-medium">
                        {request.themeName}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#8f7565]">
                        Email
                      </p>

                      <p className="mt-1 font-medium">
                        {request.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#8f7565]">
                        WhatsApp
                      </p>

                      <p className="mt-1 font-medium">
                        {request.whatsapp}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#8f7565]">
                        Submitted
                      </p>

                      <p className="mt-1 font-medium">
                        {new Date(
                          request.createdAt
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {request.message && (
                    <div className="mt-5 rounded-2xl bg-[#faf3e8] p-4">
                      <p className="text-xs uppercase tracking-[2px] text-[#8f7565]">
                        Message
                      </p>

                      <p className="mt-2 text-sm leading-6">
                        {request.message}
                      </p>
                    </div>
                  )}
                </div>

                {/* Status */}
                <div className="w-full lg:w-48">
                  <p className="text-xs uppercase tracking-[2px] text-[#8f7565]">
                    Status
                  </p>

                  <select
                    value={request.status}
                    onChange={(event) =>
                      updateStatus(
                        request.id,
                        event.target.value as WeddingRequest["status"]
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-[#d9c5a5] bg-[#fdf8f3] px-4 py-3 text-sm outline-none"
                  >
                    <option value="new">
                      New
                    </option>

                    <option value="contacted">
                      Contacted
                    </option>

                    <option value="completed">
                      Completed
                    </option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
