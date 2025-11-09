"use client";

import { useState } from "react";
import SingleThumbnailEditor from "./SingleThumbnailEditor";

// YouTube thumbnail dimensions (16:9 aspect ratio)
const THUMBNAIL_HEIGHT = 720;

interface Tab {
  id: number;
  name: string;
}

const tabs: Tab[] = [
  { id: 1, name: "Thumbnail 1" },
  { id: 2, name: "Thumbnail 2" },
  { id: 3, name: "Thumbnail 3" },
  { id: 4, name: "Thumbnail 4" },
  { id: 5, name: "Thumbnail 5" },
];

export default function TabbedThumbnailEditor() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-1 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm transition-colors
                ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) => {
          // Pre-populate Thumbnail 1 with initial content
          let initialContent;
          if (tab.id === 1) {
            initialContent = {
              texts: [
                {
                  content: "TGIF: Barako WTA @ PB",
                  fontSize: 100,
                  fontFamily: "Arial",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  stroke: "#000000",
                  strokeWidth: 4,
                  width: 994,
                  top: THUMBNAIL_HEIGHT / 2 + 80,
                },
                {
                  content: "7th November 2025 | 8:00PM",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#FFFFFF",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrl: "/barako.png",
            };
          } else if (tab.id === 2) {
            // Thumbnail 2: Billiards in Punggol
            initialContent = {
              texts: [
                {
                  content: "Billiards in Punggol",
                  fontSize: 100,
                  fontFamily: "Arial",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 4,
                  width: 994,
                  top: THUMBNAIL_HEIGHT / 2 + 80,
                },
                {
                  content: "7th November 2025 | 8:00PM",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#000000",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrl: "/barako.png",
            };
          } else if (tab.id === 3) {
            // Thumbnail 3: Billiards with Friends @ PB
            initialContent = {
              texts: [
                {
                  content: "Billiards with Friends @ PB",
                  fontSize: 100,
                  fontFamily: "Arial",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 4,
                  width: 994,
                  top: THUMBNAIL_HEIGHT / 2 + 80,
                },
                {
                  content: "8th November 2025 | 6:00PM",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#000000",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrl: "/barako.png",
              logoBorder: true,
            };
          }

          return (
            <div
              key={tab.id}
              className={activeTab === tab.id ? "block" : "hidden"}
            >
              <SingleThumbnailEditor
                canvasId={`canvas-${tab.id}`}
                initialContent={initialContent}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
