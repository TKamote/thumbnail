"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, Image, Textbox, Triangle, Circle, Text } from "fabric";

// YouTube thumbnail dimensions (16:9 aspect ratio)
const THUMBNAIL_WIDTH = 1280;
const THUMBNAIL_HEIGHT = 720;

interface InitialContent {
  texts?: Array<{
    content: string;
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    top?: number;
    left?: number;
    angle?: number;
    textAlign?: "left" | "center" | "right" | "justify";
    originX?: "left" | "center" | "right";
    fontWeight?: string;
    stroke?: string;
    strokeWidth?: number;
    width?: number;
  }>;
  logoUrl?: string;
  logoUrls?: string[];
  logoBorder?: boolean;
  backgroundColor?: string;
  logoSizeMultiplier?: number;
  logoTop?: number;
  youtubeLogoUrl?: string;
  showArrow?: boolean;
  youtubeLogoSizeMultiplier?: number;
  youtubeLogoTop?: number;
  backgroundImageUrl?: string;
  showNineBall?: boolean;
  nineBallSize?: number;
}

interface SingleThumbnailEditorProps {
  canvasId: string;
  className?: string;
  initialContent?: InitialContent;
  hideControls?: boolean;
}

export default function SingleThumbnailEditor({
  canvasId,
  className,
  initialContent,
  hideControls = false,
}: SingleThumbnailEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const initializedRef = useRef(false);
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(60);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [isLoaded, setIsLoaded] = useState(false);

  // Available fonts
  const fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Impact",
    "Comic Sans MS",
    "Trebuchet MS",
    "Arial Black",
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric.js canvas at full resolution
    const bgColor = initialContent?.backgroundColor || "#FFFFFF";
    const canvas = new Canvas(canvasRef.current, {
      width: THUMBNAIL_WIDTH,
      height: THUMBNAIL_HEIGHT,
      backgroundColor: bgColor,
    });

    fabricCanvasRef.current = canvas;
    // Set loaded state after initialization
    // Using setTimeout to avoid synchronous setState in effect
    setTimeout(() => setIsLoaded(true), 0);

    // Add keyboard support for delete
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "Delete" || e.key === "Backspace") &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          e.preventDefault();
          canvas.remove(activeObject);
          canvas.renderAll();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Initialize with initial content if provided (only once)
    if (initialContent && !initializedRef.current) {
      initializedRef.current = true;
      setTimeout(() => {
        if (!fabricCanvasRef.current) return;

        let backgroundImageRef: Image | null = null;

        // Load background pattern/image if provided
        if (initialContent.backgroundImageUrl) {
          Image.fromURL(initialContent.backgroundImageUrl)
            .then((bgImg: Image) => {
              if (!fabricCanvasRef.current) return;
              // Scale background to fill canvas
              const scale = Math.max(
                THUMBNAIL_WIDTH / (bgImg.width || 1),
                THUMBNAIL_HEIGHT / (bgImg.height || 1)
              );
              bgImg.scale(scale);
              bgImg.set({
                left: 0,
                top: 0,
                selectable: false,
                evented: false,
              });
              // Add to canvas first so it's behind everything
              fabricCanvasRef.current.add(bgImg);
              backgroundImageRef = bgImg;
              // Ensure background stays at the back
              fabricCanvasRef.current.sendObjectToBack(bgImg);
              fabricCanvasRef.current.renderAll();
            })
            .catch((error) => {
              console.error("Failed to load background image:", error);
            });
        }

        // Add initial texts
        if (initialContent.texts) {
          initialContent.texts.forEach((textConfig) => {
            const textObject = new Textbox(textConfig.content, {
              left: textConfig.left ?? THUMBNAIL_WIDTH / 2 - 20,
              top: textConfig.top || THUMBNAIL_HEIGHT / 2,
              fontSize: textConfig.fontSize || 60,
              fontFamily: textConfig.fontFamily || "Arial",
              fill: textConfig.color || "#FFFFFF",
              fontWeight: textConfig.fontWeight || "bold",
              stroke: textConfig.stroke || "#000000",
              strokeWidth: textConfig.strokeWidth ?? 3,
              textAlign: textConfig.textAlign || "center",
              originX: textConfig.originX || "center",
              originY: "center",
              width: textConfig.width || THUMBNAIL_WIDTH * 0.8,
              angle: textConfig.angle || 0,
              charSpacing: 0, // Remove letter spacing
              editable: true,
            });
            fabricCanvasRef.current?.add(textObject);
          });
        }

        // Add logo(s) if provided - position it first, then texts will be below
        if (initialContent.logoUrls && initialContent.logoUrls.length > 0) {
          // Handle multiple logos side by side
          const logoSpacing = 30;
          const baseLogoWidth = 150;
          const logoMultiplier = initialContent.logoSizeMultiplier || 1;
          let loadedLogos = 0;
          const totalLogos = initialContent.logoUrls.length;
          const logoImages: Array<{ img: Image; width: number }> = [];

          // Load all logos first
          initialContent.logoUrls.forEach((logoUrl, index) => {
            Image.fromURL(logoUrl)
              .then((img: Image) => {
                if (!fabricCanvasRef.current) return;

                // Make APA logo 25% bigger, Barako logo 5% smaller
                const isAPALogo = logoUrl.includes("APA.png");
                const isBarakoLogo = logoUrl.includes("barako.png");
                let maxLogoWidth = baseLogoWidth * logoMultiplier;
                if (isAPALogo) {
                  maxLogoWidth = baseLogoWidth * 1.25 * logoMultiplier; // 25% bigger
                } else if (isBarakoLogo) {
                  maxLogoWidth = baseLogoWidth * 0.95 * logoMultiplier; // 5% smaller
                }

                // Scale logo to reasonable size
                const scale = Math.min(
                  maxLogoWidth / (img.width || 1),
                  maxLogoWidth / (img.height || 1)
                );
                img.scale(scale);

                const scaledWidth = (img.width || 0) * scale;

                logoImages[index] = { img, width: scaledWidth };

                // Add border if specified
                if (initialContent.logoBorder) {
                  img.set({
                    stroke: "#000000",
                    strokeWidth: 2,
                  });
                }

                fabricCanvasRef.current.add(img);
                loadedLogos++;

                // Once all logos are loaded, position them side by side
                if (loadedLogos === totalLogos) {
                  // Calculate total width and positions
                  const totalWidth =
                    logoImages.reduce((sum, logo) => sum + logo.width, 0) +
                    (totalLogos - 1) * logoSpacing;
                  let currentX = (THUMBNAIL_WIDTH - totalWidth) / 2 - 20; // Shift left by 20px

                  logoImages.forEach((logoData) => {
                    logoData.img.set({
                      left: currentX + logoData.width / 2,
                      top: 100,
                      originX: "center",
                      originY: "top",
                    });
                    currentX += logoData.width + logoSpacing;
                  });

                  // Ensure background stays behind logos
                  if (backgroundImageRef && fabricCanvasRef.current) {
                    fabricCanvasRef.current.sendObjectToBack(
                      backgroundImageRef
                    );
                  }
                  fabricCanvasRef.current.renderAll();
                }
              })
              .catch((error) => {
                console.error("Failed to load logo:", error);
              });
          });
        } else if (initialContent.logoUrl) {
          // Handle single logo
          Image.fromURL(initialContent.logoUrl)
            .then((img: Image) => {
              if (!fabricCanvasRef.current) return;

              // Scale logo to reasonable size (max 200px width, with optional multiplier)
              const baseLogoWidth = 200;
              const multiplier = initialContent.logoSizeMultiplier || 1;
              const maxLogoWidth = baseLogoWidth * multiplier;
              const scale = Math.min(
                maxLogoWidth / (img.width || 1),
                maxLogoWidth / (img.height || 1)
              );
              img.scale(scale);

              // Position logo at top center, relative to canvas
              // If logoTop is specified, use it; otherwise calculate based on text position
              let logoTop = 100;
              if (initialContent.logoTop !== undefined) {
                logoTop = initialContent.logoTop;
              } else if (
                initialContent.texts &&
                initialContent.texts.length > 0
              ) {
                // Calculate logo position to leave 30px gap before first text
                const firstTextTop =
                  initialContent.texts[0].top || THUMBNAIL_HEIGHT / 2;
                const scaledHeight = (img.height || 0) * scale;
                logoTop = firstTextTop - scaledHeight - 30;
              }

              img.set({
                left: THUMBNAIL_WIDTH / 2 - 20, // Shift left by 20px
                top: logoTop,
                originX: "center",
                originY: "top",
              });

              // Add border if specified
              if (initialContent.logoBorder) {
                img.set({
                  stroke: "#000000",
                  strokeWidth: 2,
                });
              }

              fabricCanvasRef.current.add(img);
              // Ensure background stays behind logo
              if (backgroundImageRef && fabricCanvasRef.current) {
                fabricCanvasRef.current.sendObjectToBack(backgroundImageRef);
              }
              fabricCanvasRef.current.renderAll();
            })
            .catch((error) => {
              console.error("Failed to load logo:", error);
            });
        }

        // Add YouTube logo and arrow if specified
        if (initialContent.youtubeLogoUrl) {
          Image.fromURL(initialContent.youtubeLogoUrl)
            .then((img: Image) => {
              if (!fabricCanvasRef.current) return;

              // Scale logo with optional multiplier (default 1, so 300px base)
              const baseLogoWidth = 300;
              const multiplier = initialContent.youtubeLogoSizeMultiplier || 1;
              const maxLogoWidth = baseLogoWidth * multiplier;
              const scale = Math.min(
                maxLogoWidth / (img.width || 1),
                maxLogoWidth / (img.height || 1)
              );
              img.scale(scale);

              const scaledHeight = (img.height || 0) * scale;

              // Position logo at the top with configurable padding
              const baseTop =
                initialContent.youtubeLogoTop !== undefined
                  ? initialContent.youtubeLogoTop
                  : 70;
              const youtubeLogoTop = baseTop + scaledHeight / 2;
              img.set({
                left: THUMBNAIL_WIDTH / 2 - 20, // Shift left by 20px
                top: youtubeLogoTop,
                originX: "center",
                originY: "center",
              });

              fabricCanvasRef.current.add(img);

              // Add downward-pointing arrow if specified
              if (initialContent.showArrow) {
                const arrow = new Triangle({
                  width: 40,
                  height: 40,
                  left: THUMBNAIL_WIDTH / 2 - 20, // Shift left by 20px
                  top: youtubeLogoTop + scaledHeight / 2 + 30,
                  fill: "#FF0000",
                  originX: "center",
                  originY: "center",
                  angle: 180, // Rotate to point down
                });

                fabricCanvasRef.current.add(arrow);
              }

              // Ensure background stays behind everything
              if (backgroundImageRef && fabricCanvasRef.current) {
                fabricCanvasRef.current.sendObjectToBack(backgroundImageRef);
              }

              fabricCanvasRef.current.renderAll();
            })
            .catch((error) => {
              console.error("Failed to load YouTube logo:", error);
            });
        }

        // Add 9 ball if specified (position it after logo loads if logo exists)
        if (initialContent.showNineBall) {
          const createNineBall = () => {
            if (!fabricCanvasRef.current) return;

            const ballSize = initialContent.nineBallSize || 250; // Default 250px diameter
            const ballRadius = ballSize / 2;

            // Calculate position below logo (5.25px gap - 5% more padding, moved down by 15px)
            let ballTop = THUMBNAIL_HEIGHT / 2; // Default center
            if (initialContent.logoTop !== undefined) {
              // Estimate logo height: base 200px * multiplier, assume square aspect ratio
              const baseLogoHeight = 200;
              const multiplier = initialContent.logoSizeMultiplier || 1;
              const estimatedLogoHeight = baseLogoHeight * multiplier;
              // Position ball 5.25px below the bottom of the logo (5% more padding), then move down by 15px, then 10px more
              ballTop =
                initialContent.logoTop +
                estimatedLogoHeight +
                5.25 +
                ballRadius +
                15 +
                10;
            }

            // Create white circle for the ball
            const ball = new Circle({
              radius: ballRadius,
              left: THUMBNAIL_WIDTH / 2 - 20, // Shift left by 20px to match other content
              top: ballTop,
              fill: "#FFFFFF",
              stroke: "#000000",
              strokeWidth: 3,
              originX: "center",
              originY: "center",
            });

            // Create "9" text in yellow/gold
            const numberText = new Text("9", {
              left: THUMBNAIL_WIDTH / 2 - 20, // Shift left by 20px to match other content
              top: ballTop,
              fontSize: ballRadius * 0.8 * 1.3 * 1.2, // Scale text to ball size, 30% bigger + 20% more
              fontFamily: "Arial",
              fontWeight: "bold",
              fill: "#FFD700", // Gold color
              originX: "center",
              originY: "center",
              textAlign: "center",
            });

            // Add ball and text first
            fabricCanvasRef.current.add(ball);
            fabricCanvasRef.current.add(numberText);

            // Move ball and text behind all text objects using z-index
            // Get all text objects and move them to front
            const objects = fabricCanvasRef.current.getObjects();
            objects.forEach((obj) => {
              if (obj.type === "textbox" || obj.type === "i-text") {
                fabricCanvasRef.current?.bringObjectToFront(obj);
              }
            });

            // Ensure background stays at the back
            if (backgroundImageRef && fabricCanvasRef.current) {
              fabricCanvasRef.current.sendObjectToBack(backgroundImageRef);
            }
          };

          // If logo exists, wait for it to load, otherwise create immediately
          if (initialContent.logoUrl) {
            Image.fromURL(initialContent.logoUrl)
              .then(() => {
                createNineBall();
                fabricCanvasRef.current?.renderAll();
              })
              .catch(() => {
                // If logo fails to load, create ball anyway
                createNineBall();
                fabricCanvasRef.current?.renderAll();
              });
          } else {
            createNineBall();
          }
        }

        fabricCanvasRef.current.renderAll();
      }, 200);
    }

    // Handle window resize for responsive canvas display (CSS only)
    const handleResize = () => {
      if (!canvasRef.current) return;
      const container = canvasRef.current.parentElement;
      if (!container) return;

      const maxWidth = container.clientWidth - 32; // Account for padding
      const scale = Math.min(maxWidth / THUMBNAIL_WIDTH, 1);

      // Scale only CSS display, keep internal canvas at full resolution
      canvas.setDimensions(
        {
          width: THUMBNAIL_WIDTH,
          height: THUMBNAIL_HEIGHT,
        },
        { cssOnly: true }
      );

      // Apply CSS scale transform
      if (canvasRef.current) {
        canvasRef.current.style.width = `${THUMBNAIL_WIDTH * scale}px`;
        canvasRef.current.style.height = `${THUMBNAIL_HEIGHT * scale}px`;
      }

      canvas.renderAll();
    };

    // Initial resize
    setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.dispose();
      initializedRef.current = false; // Reset on cleanup
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasId]); // Re-initialize if canvasId changes (initialContent is handled via initializedRef)

  // Handle image upload (background image)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !fabricCanvasRef.current) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      Image.fromURL(imgUrl)
        .then((img: Image) => {
          if (!fabricCanvasRef.current) return;

          // Scale image to fit canvas while maintaining aspect ratio
          const scale = Math.min(
            THUMBNAIL_WIDTH / (img.width || 1),
            THUMBNAIL_HEIGHT / (img.height || 1)
          );
          img.scale(scale);
          img.set({
            left: (THUMBNAIL_WIDTH - (img.width || 0) * scale) / 2,
            top: (THUMBNAIL_HEIGHT - (img.height || 0) * scale) / 2,
          });

          fabricCanvasRef.current.add(img);
          fabricCanvasRef.current.renderAll();
        })
        .catch((error) => {
          console.error("Failed to load image:", error);
        });
    };
    reader.readAsDataURL(file);
  };

  // Handle logo upload (positioned at top center)
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !fabricCanvasRef.current) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      Image.fromURL(imgUrl)
        .then((img: Image) => {
          if (!fabricCanvasRef.current) return;

          // Scale logo to reasonable size (max 200px width)
          const maxLogoWidth = 200;
          const scale = Math.min(
            maxLogoWidth / (img.width || 1),
            maxLogoWidth / (img.height || 1)
          );
          img.scale(scale);

          // Position logo at top center, relative to content
          img.set({
            left: THUMBNAIL_WIDTH / 2 - 5, // Shift left by 5px to center better
            top: 100,
            originX: "center",
            originY: "top",
          });

          fabricCanvasRef.current.add(img);
          fabricCanvasRef.current.renderAll();
        })
        .catch((error) => {
          console.error("Failed to load logo:", error);
        });
    };
    reader.readAsDataURL(file);
  };

  // Add text to canvas
  const handleAddText = () => {
    if (!text || !fabricCanvasRef.current) return;

    const textObject = new Textbox(text, {
      left: THUMBNAIL_WIDTH / 2 - 5, // Shift left by 5px to center better
      top: THUMBNAIL_HEIGHT / 2,
      fontSize,
      fontFamily,
      fill: textColor,
      textAlign: "center",
      originX: "center",
      originY: "center",
      width: THUMBNAIL_WIDTH * 0.8,
      editable: true,
    });

    fabricCanvasRef.current.add(textObject);
    fabricCanvasRef.current.setActiveObject(textObject);
    fabricCanvasRef.current.renderAll();
    setText(""); // Clear input
  };

  // Delete selected object
  const handleDelete = () => {
    if (!fabricCanvasRef.current) return;
    const activeObject = fabricCanvasRef.current.getActiveObject();
    if (activeObject) {
      fabricCanvasRef.current.remove(activeObject);
      fabricCanvasRef.current.renderAll();
    }
  };

  // Export as PNG
  const handleExportPNG = () => {
    if (!fabricCanvasRef.current) return;
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 1,
    });
    downloadImage(dataURL, `thumbnail-${canvasId}.png`);
  };

  // Export as JPEG
  const handleExportJPEG = () => {
    if (!fabricCanvasRef.current) return;
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: "jpeg",
      quality: 0.95,
      multiplier: 1,
    });
    downloadImage(dataURL, `thumbnail-${canvasId}.jpg`);
  };

  // Download image
  const downloadImage = (dataURL: string, filename: string) => {
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataURL;
    link.click();
  };

  // Clear canvas
  const handleClear = () => {
    if (!fabricCanvasRef.current) return;
    fabricCanvasRef.current.clear();
    fabricCanvasRef.current.backgroundColor = "#FFFFFF";
    fabricCanvasRef.current.renderAll();
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Canvas Container */}
      <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white inline-block">
          <canvas
            ref={canvasRef}
            id={canvasId}
            className="block"
            style={{ display: "block", margin: 0, padding: 0 }}
          />
        </div>
      </div>

      {/* Controls */}
      {!hideControls && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Upload */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Upload Background Image
            </h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer mb-2"
            />
            <h3 className="text-lg font-semibold mb-3 text-gray-800 mt-4">
              Upload Logo (Top Center)
            </h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
            />
          </div>

          {/* Text Editor */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Add Text
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddText();
                  }
                }}
              />
              <div className="flex gap-2">
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {fonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  min="12"
                  max="200"
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Size"
                />
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-16 h-10 border border-gray-300 rounded-md cursor-pointer"
                />
              </div>
              <button
                onClick={handleAddText}
                disabled={!isLoaded || !text}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Add Text
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Actions
            </h3>
            <div className="space-y-2">
              <button
                onClick={handleDelete}
                disabled={!isLoaded}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Delete Selected (or press Delete/Backspace)
              </button>
              <button
                onClick={handleClear}
                disabled={!isLoaded}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Clear Canvas
              </button>
            </div>
          </div>

          {/* Export */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Export</h3>
            <div className="space-y-2">
              <button
                onClick={handleExportPNG}
                disabled={!isLoaded}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Export PNG
              </button>
              <button
                onClick={handleExportJPEG}
                disabled={!isLoaded}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Export JPEG
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Dimensions: {THUMBNAIL_WIDTH}x{THUMBNAIL_HEIGHT}px (16:9)
            </p>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!hideControls && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Tips:</h4>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Click on any object (text, image, logo) to select it</li>
            <li>Drag objects to reposition them</li>
            <li>Use the resize handles to adjust size</li>
            <li>
              <strong>To delete:</strong> Click on an object to select it, then
              click &quot;Delete Selected&quot; button or press{" "}
              <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">
                Delete
              </kbd>{" "}
              /{" "}
              <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">
                Backspace
              </kbd>{" "}
              key
            </li>
            <li>Click on text objects to edit them directly on the canvas</li>
            <li>
              Thumbnails are exported at YouTube&apos;s recommended size
              (1280x720px)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
