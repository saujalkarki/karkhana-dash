import { Separator } from "../../components/ui/separator";
import SettingTabs from "./components/SettingTabs";

const Settings = () => {
  return (
    <main className="space-y-3 border-2 border-gray-300 rounded-sm container p-2 m-2">
      <h1 className="px-4 text-lg font-semibold">Settings</h1>
      <Separator />
      <SettingTabs />
    </main>
  );
};

export default Settings;
