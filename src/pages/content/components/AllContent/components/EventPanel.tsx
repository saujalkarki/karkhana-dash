const events = [
  { type: "Short Content", media: "Slides", icon: "🖼️" },
  { type: "Long Content", media: "Video", icon: "🎥" },
  { type: "Mid Content", media: "Text", icon: "📄" },
  { type: "Long Content", media: "Video", icon: "🎥" },
  { type: "Long Content", media: "Video", icon: "🎥" },
];

function EventsPanel() {
  return (
    <div className="w-full bg-white border-r p-3 overflow-y-auto h-screen shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-700">
          Scheduled Event for <span className="text-red-500">Grade 1</span>
        </h2>
        <span className="text-sm bg-gray-200 rounded-full px-2 py-0.5 text-gray-700">
          20
        </span>
      </div>

      {events.map((event, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl p-3 mb-3 shadow-sm flex flex-col gap-2"
        >
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="thumbnail"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col text-xs">
              <span className={`text-blue-600 font-bold`}>{event.type}</span>
              <span className="text-green-500 font-semibold">
                {event.media}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            How does water rain and evaporate up the sky and form cloud?
          </p>
          <div className="text-xs text-gray-500 flex justify-between">
            <span>6 Days</span>
            <span>📅 2025/02/13 to 2025/02/19</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsPanel;
