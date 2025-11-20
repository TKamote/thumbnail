import TabbedThumbnailEditor from '@/components/TabbedThumbnailEditor';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            YouTube Thumbnail Creator
          </h1>
          <p className="text-gray-600">
            Create professional thumbnails for your YouTube videos - Work on multiple thumbnails with tabs
          </p>
        </div>
        <TabbedThumbnailEditor />
      </main>
    </div>
  );
}
