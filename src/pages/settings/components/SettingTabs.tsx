import { Suspense, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area";
import ViewCategory from "./SettingTabs/ViewCategory";
import AddCategory from "./SettingTabs/AddCategory";

const settings = [
  { name: "Category", component: ViewCategory },
  { name: "Grade", component: "" },
];

const SettingTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("Category");
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  return (
    <Tabs
      defaultValue={activeTab}
      className="w-full flex gap-3 flex-row max-sm:flex-col max-sm:gap-8 "
      onValueChange={setActiveTab}
    >
      <ScrollArea>
        <TabsList className="flex flex-col h-full gap-3 items-center bg-slate-200 justify-between w-full sm:w-[250px] p-4">
          {settings?.map((setting, index) => (
            <TabsTrigger
              key={index}
              value={setting.name}
              className="w-full h-[40px] cursor-pointer"
            >
              {setting.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {settings.map((setting, index) => (
        <TabsContent value={setting.name} key={index} className=" ">
          <Suspense fallback={"loading.."}>
            {setting.name === "Category" ? (
              isAddingCategory ? (
                <AddCategory onBack={() => setIsAddingCategory(false)} />
              ) : (
                <ViewCategory onAdd={() => setIsAddingCategory(true)} />
              )
            ) : (
              <setting.component />
            )}
          </Suspense>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SettingTabs;
