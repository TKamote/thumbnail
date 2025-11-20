'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, Image, Textbox } from 'fabric';

// YouTube thumbnail dimensions (16:9 aspect ratio)
const THUMBNAIL_WIDTH = 1280;
const THUMBNAIL_HEIGHT = 720;

interface ThumbnailEditorProps {
  className?: string;
}

export default function ThumbnailEditor({ className }: ThumbnailEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(60);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [isLoaded, setIsLoaded] = useState(false);

  // Available fonts
  const fonts = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Impact',
    'Comic Sans MS',
    'Trebuchet MS',
    'Arial Black',
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric.js canvas at full resolution
    const canvas = new Canvas(canvasRef.current, {
      width: THUMBNAIL_WIDTH,
      height: THUMBNAIL_HEIGHT,
      backgroundColor: '#000000',
    });

    fabricCanvasRef.current = canvas;
    setIsLoaded(true);

    // Handle window resize for responsive canvas display (CSS only)
    const handleResize = () => {
      if (!canvasRef.current) return;
      const container = canvasRef.current.parentElement;
      if (!container) return;

      const maxWidth = container.clientWidth - 32; // Account for padding
      const scale = Math.min(maxWidth / THUMBNAIL_WIDTH, 1);
      
      // Scale only CSS display, keep internal canvas at full resolution
      canvas.setDimensions({
        width: THUMBNAIL_WIDTH,
        height: THUMBNAIL_HEIGHT,
      }, { cssOnly: true });
      
      // Apply CSS scale transform
      if (canvasRef.current) {
        canvasRef.current.style.width = `${THUMBNAIL_WIDTH * scale}px`;
        canvasRef.current.style.height = `${THUMBNAIL_HEIGHT * scale}px`;
      }
      
      canvas.renderAll();
    };

    // Initial resize
    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.dispose();
    };
  }, []);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !fabricCanvasRef.current) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      Image.fromURL(imgUrl, (img) => {
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
      });
    };
    reader.readAsDataURL(file);
  };

  // Add text to canvas
  const handleAddText = () => {
    if (!text || !fabricCanvasRef.current) return;

    const textObject = new Textbox(text, {
      left: THUMBNAIL_WIDTH / 2,
      top: THUMBNAIL_HEIGHT / 2,
      fontSize,
      fontFamily,
      fill: textColor,
      textAlign: 'center',
      originX: 'center',
      originY: 'center',
      width: THUMBNAIL_WIDTH * 0.8,
      editable: true,
    });

    fabricCanvasRef.current.add(textObject);
    fabricCanvasRef.current.setActiveObject(textObject);
    fabricCanvasRef.current.renderAll();
    setText(''); // Clear input
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
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    downloadImage(dataURL, 'thumbnail.png');
  };

  // Export as JPEG
  const handleExportJPEG = () => {
    if (!fabricCanvasRef.current) return;
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: 'jpeg',
      quality: 0.95,
      multiplier: 1,
    });
    downloadImage(dataURL, 'thumbnail.jpg');
  };

  // Download image
  const downloadImage = (dataURL: string, filename: string) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    link.click();
  };

  // Clear canvas
  const handleClear = () => {
    if (!fabricCanvasRef.current) return;
    fabricCanvasRef.current.clear();
    fabricCanvasRef.current.backgroundColor = '#000000';
    fabricCanvasRef.current.renderAll();
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Canvas Container */}
      <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
          <canvas
            ref={canvasRef}
            className="block"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Upload Image</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        {/* Text Editor */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Add Text</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
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
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Actions</h3>
          <div className="space-y-2">
            <button
              onClick={handleDelete}
              disabled={!isLoaded}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Delete Selected
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

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Tips:</h4>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Click on text objects to edit them directly on the canvas</li>
          <li>Drag objects to reposition them</li>
          <li>Use the resize handles to adjust size</li>
          <li>Select an object and click "Delete Selected" to remove it</li>
          <li>Thumbnails are exported at YouTube's recommended size (1280x720px)</li>
        </ul>
      </div>
    </div>
  );
}

