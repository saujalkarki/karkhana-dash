import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import ContentEditor from "./components/ContentEditor";
import ContentForm from "./components/ContentForm";
import ContentImage from "./components/ContentImage";
import ContentVideo from "./components/ContentVideo";

export function Content({
  contentType,
}: {
  contentType: "image" | "video" | "text";
}) {
  return (
    <div className="container p-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ContentForm />
          {contentType === "image" && <ContentImage />}
          {contentType === "video" && <ContentVideo />}

          <ContentEditor />
          {/* Save Button */}
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Content;
