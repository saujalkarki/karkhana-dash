import { useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function QuillEditor() {
  const [value, setValue] = useState("");
  const quillRef = useRef<ReactQuill | null>(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote", "code"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: () => {
          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.click();

          input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                const range = quillRef.current?.getEditor().getSelection();
                if (range && reader.result) {
                  quillRef.current
                    ?.getEditor()
                    .insertEmbed(range.index, "image", reader.result as string);
                }
              };
              reader.readAsDataURL(file);
            }
          };
        },
      },
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Content Description</label>
      <div className="border rounded-md overflow-hidden bg-white">
        <ReactQuill
          ref={quillRef}
          modules={modules}
          formats={formats}
          value={value}
          onChange={setValue}
          className="h-[300px]"
        />
      </div>
    </div>
  );
}
