"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  BUNDLE_FOOTNOTES,
  BUNDLE_TABS,
  DATA_BUNDLES,
  SMS_BUNDLES,
  VOICE_BUNDLES,
  WHATSAPP_BUNDLE,
  type BundleTab,
} from "@/lib/data";

function BundleGrid({
  bundles,
}: {
  bundles: readonly { size: string; price: number }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {bundles.map((bundle) => (
        <div
          key={bundle.size}
          className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-lg font-bold text-nexa-navy">{bundle.size}</p>
          <p className="mt-2 text-2xl font-bold text-nexa-purple">
            R{bundle.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export function BundlesSection() {
  const [activeTab, setActiveTab] = useState<BundleTab>("data");

  return (
    <section id="packages" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-nexa-navy sm:text-4xl">
          Bundles
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {BUNDLE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-nexa-purple text-white shadow-lg shadow-purple-500/25"
                  : "bg-white text-gray-600 hover:bg-purple-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {activeTab === "data" && (
            <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
              <BundleGrid bundles={DATA_BUNDLES} />
              <div className="rounded-2xl border-2 border-green-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-nexa-navy">WhatsApp Bundle</p>
                    <p className="text-sm text-gray-500">Featured add-on</p>
                  </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-nexa-purple">
                  {WHATSAPP_BUNDLE.size}
                </p>
                <p className="text-3xl font-bold text-nexa-navy">
                  R{WHATSAPP_BUNDLE.price}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Valid for {WHATSAPP_BUNDLE.validity}
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  {WHATSAPP_BUNDLE.description}
                </p>
              </div>
            </div>
          )}
          {activeTab === "voice" && <BundleGrid bundles={VOICE_BUNDLES} />}
          {activeTab === "sms" && <BundleGrid bundles={SMS_BUNDLES} />}
          {activeTab === "whatsapp" && (
            <div className="mx-auto max-w-md rounded-2xl border-2 border-green-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-nexa-navy">
                WhatsApp Bundle
              </h3>
              <p className="mt-2 text-4xl font-bold text-nexa-purple">
                {WHATSAPP_BUNDLE.size}
              </p>
              <p className="text-3xl font-bold text-nexa-navy">
                R{WHATSAPP_BUNDLE.price}
              </p>
              <p className="mt-2 text-gray-600">
                Valid for {WHATSAPP_BUNDLE.validity}
              </p>
              <p className="mt-4 text-sm text-gray-500">
                {WHATSAPP_BUNDLE.description}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {BUNDLE_FOOTNOTES.map((note) => (
            <span
              key={note}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-nexa-purple" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
