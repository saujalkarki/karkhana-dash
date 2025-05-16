import { useState } from "react";
import { ImageIcon, X } from "lucide-react";
import { Label } from "../../../components/ui/label";

function ContentImage() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleUploadClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const previews: string[] = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          previews.push(reader.result as string);
          if (previews.length === files.length) {
            setSelectedImages((prev) => [...prev, ...previews]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="space-y-2">
      <Label>Content Images/Slides</Label>

      <div
        className="border-2 border-dashed rounded-md p-10 text-center cursor-pointer"
        onClick={handleUploadClick}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <ImageIcon className="h-10 w-10 text-gray-400" />
          <p className="text-sm text-gray-500">
            Drag and drop or{" "}
            <span className="text-blue-500 underline">upload images</span>
          </p>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* Image Previews */}
      {selectedImages.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {selectedImages.map((src, index) => (
            <div key={index} className="relative w-24 h-24">
              <img
                src={src}
                alt={`preview-${index}`}
                className="w-full h-full object-cover rounded border"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 bg-white bg-opacity-80 hover:bg-opacity-100 p-0.5 rounded-full shadow text-gray-700"
                aria-label="Remove image"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContentImage;
