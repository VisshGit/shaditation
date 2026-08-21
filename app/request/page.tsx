"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  createInvitationSlug,
  type Invitation,
} from "@/config/themes/invitations";

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
  const [invitations, setInvitations] = useState<Invitation[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const storedRequests =
      localStorage.getItem("shaditation_requests");

    const storedInvitations =
      localStorage.getItem("shaditation_invitations");

    if (storedRequests) {
      try {
        const parsedRequests: WeddingRequest[] =
          JSON.parse(storedRequests);

        setRequests([...parsedRequests].reverse());
      } catch (error) {
        console.error(
          "Failed to load requests:",
          error
        );
      }
    }

    if (storedInvitations) {
      try {
        const parsedInvitations: Invitation[] =
          JSON.parse(storedInvitations);

        setInvitations(parsedInvitations);
      } catch (error) {
        console.error(
          "Failed to load invitations:",
          error
        );
      }
    }
  };

  const updateStatus = (
    id: string,
    status: WeddingRequest["status"]
  ) => {
    const stored = localStorage.getItem(
      "shaditation_requests"
    );

    if (!stored) return;

    try {
      const current: WeddingRequest[] =
        JSON.parse(stored);

      const updated = current.map((request) =>
        request.id === id
          ? {
              ...request,
              status,
            }
          : request
      );

      localStorage.setItem(
        "shaditation_requests",
        JSON.stringify(updated)
      );

      setRequests([...updated].reverse());
    } catch (error) {
      console.error(
        "Failed to update request:",
        error
      );
    }
  };

  const getInvitation = (requestId: string) => {
    return invitations.find(
      (invitation) => invitation.id === requestId
    );
  };

  const createInvitation = (
    request: WeddingRequest
  ) => {
    const existing = getInvitation(request.id);

    if (existing) {
      return;
    }

    const slug = createInvitationSlug(
      request.name,
      request.partnerName
    );

    const invitation: Invitation = {
      id: request.id,
      slug,
      themeId: request.themeId,

      groomName: request.name,
      brideName: request.partnerName,

      weddingDate: request.weddingDate,

      email: request.email,
      whatsapp: request.whatsapp,

      status: "draft",

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedInvitations = [
      ...invitations,
      invitation,
    ];

    localStorage.setItem(
      "shaditation_invitations",
      JSON.stringify(updatedInvitations)
    );

    setInvitations(updatedInvitations);
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
              Manage customer requests and create
              invitations.
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
                  (request) =>
                    request.status === "new"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6d8c5] bg-white p-6">
            <p className="text-sm text-[#8f7565]">
              Invitations
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {invitations.length}
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
              Once someone submits the form,
              their request will appear here.
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

          {requests.map((request) => {
            const invitation =
              getInvitation(request.id);

            return (
              <div
                key={request.id}
                className="rounded-3xl border border-[#e6d8c5] bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                  {/* Request Info */}
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
                      {request.name} &{" "}
                      {request.partnerName}
                    </h2>

                    <p className="mt-2 text-sm text-[#8f7565]">
                      Wedding Date:{" "}
                      <span className="font-medium text-[#2b1d0e]">
                        {request.weddingDate}
                      </span>
                    </p>

                    {/* Details */}
                    <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">

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

                        <p className="mt-1 font-medium break-all">
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

                    {/* Message */}
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

                    {/* Invitation */}
                    {invitation && (
                      <div className="mt-5 rounded-2xl border border-[#d9c5a5] bg-[#fdf8f3] p-5">

                        <p className="text-xs uppercase tracking-[3px] text-[#b68d40]">
                          Invitation Created
                        </p>

                        <p className="mt-2 text-sm text-[#8f7565]">
                          Your invitation URL
                        </p>

                        <p className="mt-1 break-all font-mono text-sm font-medium">
                          /invite/{invitation.slug}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">

                          <Link
                            href={`/invite/${invitation.slug}`}
                            target="_blank"
                            className="rounded-xl bg-[#b68d40] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                          >
                            Open Invitation
                          </Link>

                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `${window.location.origin}/invite/${invitation.slug}`
                              );
                            }}
                            className="rounded-xl border border-[#d9c5a5] px-5 py-3 text-sm font-medium transition hover:bg-white"
                          >
                            Copy URL
                          </button>

                        </div>

                      </div>
                    )}

                  </div>

                  {/* Right Controls */}
                  <div className="w-full space-y-4 lg:w-52">

                    {/* Status */}
                    <div>

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

                    {/* Create Invitation */}
                    {!invitation && (
                      <button
                        type="button"
                        onClick={() =>
                          createInvitation(request)
                        }
                        className="w-full rounded-xl bg-[#2b1d0e] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Create Invitation
                      </button>
                    )}

                    {invitation && (
                      <div className="rounded-xl bg-[#f5e6c8] px-4 py-3 text-center text-xs font-medium text-[#8b5e34]">
                        Invitation Ready
                      </div>
                    )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </main>
  );
}