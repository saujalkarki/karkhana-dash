import { Calendar } from "lucide-react";

const contentItems = [
  {
    id: 1,
    title:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    subtitle:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    date: "09/05/23",
    timeStart: "09:00:00",
    timeEnd: "09:30:00",
    status: "Grade 1",
    isLive: true,
    contentType: "text",
  },
  {
    id: 2,
    title:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    subtitle:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    date: "09/05/23",
    timeStart: "09:00:00",
    timeEnd: "09:30:00",
    status: "Grade 1",
    isLive: true,
    contentType: "video",
  },
  {
    id: 3,
    title:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    subtitle:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    date: "09/05/23",
    timeStart: "09:00:00",
    timeEnd: "09:30:00",
    status: "Grade 1",
    isLive: true,
    contentType: "text",
  },
  {
    id: 4,
    title:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    subtitle:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    date: "09/05/23",
    timeStart: "09:00:00",
    timeEnd: "09:30:00",
    status: "Grade 1",
    isLive: true,
    contentType: "image",
  },
  {
    id: 5,
    title:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    subtitle:
      "How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud? How does water rain and evaporate in the sky and form cloud?",
    date: "09/05/23",
    timeStart: "09:00:00",
    timeEnd: "09:30:00",
    status: "Grade 1",
    isLive: true,
    contentType: "text",
  },
];

function ContentView() {
  return (
    <>
      <div className="p-4 ">
        {contentItems.map((item) => (
          <div key={item.id} className="mb-4 border rounded-md">
            <div className="grid md:flex md:items-start p-2 gap-2">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 overflow-hidden">
                  <img
                    src=""
                    alt="Content thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="text-xs font-medium text-blue-600 mr-2">
                    Draft Content
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                    Live
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  {item.subtitle}
                </p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">
                    {item.date} to {item.date}
                  </span>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-xs text-gray-500">
                    {item.timeStart}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start  gap-3">
                <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                  {item.contentType}
                </span>
                <span className="text-red-500 text-xs font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContentView;
