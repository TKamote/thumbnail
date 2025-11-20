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
  { id: 6, name: "Thumbnail 6" },
  { id: 7, name: "Thumbnail 7" },
  { id: 8, name: "Subscribe 1" },
  { id: 9, name: "Follow" },
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
                  content: "21st November 2025 | 7:45PM",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#FFFFFF",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrl: "/barako.png",
              logoSizeMultiplier: 1.3,
              logoTop: 30,
              backgroundColor: "#FFFFE0",
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
            // Thumbnail 3: Sunday WTA @ Punggol Billiards
            initialContent = {
              texts: [
                {
                  content: "Sunday WTA @ Punggol Billiards",
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
                  content: "9th November 2025 | 7:00PM",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#000000",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrl: "/barako.png",
              logoTop: 30,
              logoSizeMultiplier: 1.3,
            };
          } else if (tab.id === 4) {
            // Thumbnail 4: APA Monday League @ D' Skunks Lounge
            initialContent = {
              texts: [
                {
                  content: "APA Monday League @ D' Skunks Lounge",
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
                  content: "10th November 2025",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#FFFFFF",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrls: ["/barako.png", "/APA.png"],
              backgroundColor: "#0066CC",
            };
          } else if (tab.id === 5) {
            // Thumbnail 5: Barako Tournament at Snooker Zone
            const today = new Date();
            const day = today.getDate();
            const monthNames = [
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            const month = monthNames[today.getMonth()];
            const year = today.getFullYear();
            
            // Format date with ordinal suffix (1st, 2nd, 3rd, 4th, etc.)
            const getOrdinalSuffix = (n: number) => {
              const s = ["th", "st", "nd", "rd"];
              const v = n % 100;
              return n + (s[(v - 20) % 10] || s[v] || s[0]);
            };
            
            const formattedDate = `${getOrdinalSuffix(day)} ${month} ${year}`;
            
            initialContent = {
              texts: [
                {
                  content: "Barako Tournament at Snooker Zone",
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
                  content: formattedDate,
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#FFFFFF",
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrl: "/barako.png",
              logoSizeMultiplier: 1.3,
              logoTop: 30,
              backgroundColor: "#E6E6FA", // Light purple/lavender
            };
          } else if (tab.id === 6) {
            // Thumbnail 6: New thumbnail template with 3 logos side by side and dark purple pattern
            initialContent = {
              texts: [
                {
                  content: "PBS Cup @ ASA",
                  fontSize: 100,
                  fontFamily: "Arial",
                  color: "#4a3a6e", // Darker purple for fill (matching subtitle)
                  stroke: "#E6E6FA", // Light lavender for stroke/background (matching subtitle)
                  strokeWidth: 3,
                  width: 994,
                  top: THUMBNAIL_HEIGHT / 2 + 80,
                },
                {
                  content: "22nd November 2025",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#4a3a6e", // Darker purple for fill
                  stroke: "#E6E6FA", // Light lavender for stroke/background
                  strokeWidth: 3,
                  top: THUMBNAIL_HEIGHT / 2 + 230,
                },
              ],
              logoUrls: ["/PBS.png", "/fromOwen.png", "/Asa.png"], // Swapped left and right
              backgroundImageUrl: "/dark-purple-pattern.svg",
              logoSizeMultiplier: 1.5, // Make logos 50% larger
            };
          } else if (tab.id === 7) {
            // Thumbnail 7: New thumbnail template
            initialContent = {
              texts: [
                {
                  content: "PBS Tour @ Snooker Zone",
                  fontSize: 100,
                  fontFamily: "Arial Black",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 4,
                  width: 994,
                  top: THUMBNAIL_HEIGHT / 2 + 85, // Moved down by 10px more
                },
                {
                  content: "29th November 2025",
                  fontSize: 48,
                  fontFamily: "Arial",
                  color: "#FFFFFF", // Light color for visibility on midnight background
                  top: THUMBNAIL_HEIGHT / 2 + 240, // Moved down by 10px
                },
              ],
              logoUrl: "/fromOwen.png",
              logoTop: 50,
              logoSizeMultiplier: 1.3, // Make logo 30% bigger
              showNineBall: true,
              nineBallSize: 200, // Reduced size 9 ball
              backgroundColor: "#191970", // Midnight blue background
            };
          } else if (tab.id === 8) {
            // Tab 8: Subscribe 1 - Thank you / Subscribe message
            initialContent = {
              texts: [
                {
                  content: "Thank You for Watching",
                  fontSize: 120,
                  fontFamily: "Arial",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 3,
                  width: 800,
                  top: THUMBNAIL_HEIGHT / 2 + 20,
                },
                {
                  content: "Please 🤝 subscribe to my channel",
                  fontSize: 64,
                  fontFamily: "Arial",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 3,
                  width: 1000,
                  top: THUMBNAIL_HEIGHT / 2 + 240,
                },
              ],
              backgroundColor: "#FFFFFF",
              youtubeLogoUrl: "/youtube-logo.svg",
              showArrow: false,
            };
          } else if (tab.id === 9) {
            // Tab 9: Follow - Facebook message
            initialContent = {
              texts: [
                {
                  content: "Thank You for Watching",
                  fontSize: 84, // Reduced by 30% (120 * 0.7 = 84)
                  fontFamily: "Arial",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 3,
                  width: 800,
                  top: THUMBNAIL_HEIGHT / 2 + 20,
                },
                {
                  content: "Please follow my account",
                  fontSize: 64,
                  fontFamily: "Arial",
                  color: "#000000",
                  fontWeight: "bold",
                  stroke: "#FFFFFF",
                  strokeWidth: 3,
                  width: 1000,
                  top: THUMBNAIL_HEIGHT / 2 + 240,
                },
              ],
              backgroundColor: "#FFFFFF",
              youtubeLogoUrl: "/facebook.png",
              showArrow: false,
              youtubeLogoSizeMultiplier: 0.5, // Reduce by 2x (half size)
              youtubeLogoTop: 50, // Reduced by 20px (from 70 to 50)
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
                hideControls={tab.id === 8 || tab.id === 9}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
