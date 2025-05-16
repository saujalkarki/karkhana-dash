import { useState } from "react";
import { FileUp, X } from "lucide-react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";

function ContentForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="content-title">Content Title</Label>
        <Input
          id="content-title"
          placeholder="Enter the Title for Notification"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="grade">Select Grade</Label>
            <Select>
              <SelectTrigger id="grade">
                <SelectValue placeholder="Select the Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grade1">Grade 1</SelectItem>
                <SelectItem value="grade2">Grade 2</SelectItem>
                <SelectItem value="grade3">Grade 3</SelectItem>
                <SelectItem value="grade4">Grade 4</SelectItem>
                <SelectItem value="grade5">Grade 5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chapter">Enter Chapter</Label>
            <Input id="chapter" placeholder="Enter The Chapter" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content-cover">Content Cover</Label>
            <div className="relative">
              <Input
                id="content-cover"
                type="file"
                accept="image/*"
                className="pr-10"
                onChange={handleImageChange}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full pointer-events-none"
              >
                <FileUp className="h-4 w-4" />
              </Button>
            </div>

            {imagePreview && (
              <div className="relative w-32 mt-2">
                <img
                  src={imagePreview}
                  alt="Selected Cover"
                  className="w-full h-auto rounded border"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-0 right-0 bg-white bg-opacity-80 hover:bg-opacity-100 p-0.5 rounded-full shadow text-gray-700"
                  aria-label="Remove image"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Select Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select the Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
                <SelectItem value="category3">Category 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Select Duration</Label>
            <Select>
              <SelectTrigger id="duration">
                <SelectValue placeholder="Select the Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15min">15 minutes</SelectItem>
                <SelectItem value="30min">30 minutes</SelectItem>
                <SelectItem value="45min">45 minutes</SelectItem>
                <SelectItem value="60min">60 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Select Content Position</Label>
            <Select>
              <SelectTrigger id="position">
                <SelectValue placeholder="Select the content Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top">Top</SelectItem>
                <SelectItem value="middle">Middle</SelectItem>
                <SelectItem value="bottom">Bottom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentForm;
