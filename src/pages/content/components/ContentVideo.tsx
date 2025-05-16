import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { X } from "lucide-react";

function ContentVideo() {
  const [videoLink, setVideoLink] = useState("");

  const getYouTubeId = (url: string) => {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([^\s&?]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoLink);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="videoLink">YouTube Video Link</Label>
        <Input
          id="videoLink"
          placeholder="Enter the video link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
      </div>

      {embedUrl && (
        <div className="relative mt-2 w-[40%] rounded-lg shadow overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setVideoLink("")}
            className="absolute top-1 right-1 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 rounded-full p-1 shadow transition"
            aria-label="Remove video"
          >
            <X size={16} />
          </button>

          {/* Video */}
          <iframe
            width="100%"
            height="315"
            src={embedUrl}
            title="YouTube video preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ContentVideo;
