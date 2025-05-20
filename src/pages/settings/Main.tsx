import { Separator } from "../../components/ui/separator";
import SettingTabs from "./components/SettingTabs";

const Settings = () => {
  return (
    <main className="space-y-3 border border-gray-400 rounded-sm container p-2">
      <h1 className="text-xl font-semibold">Settings</h1>
      <Separator />
      <SettingTabs />
    </main>
  );
};

export default Settings;
