import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "../../../../schema/settings";

export function AddCategory({ onBack }: { onBack: () => void }) {
  const defaultValues = { category_Name: "" };

  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues,
  });

  const loading = false;
  return (
    <section className=" space-y-2 px-4 w-full">
      <h3 className="text-lg font-medium">Add Category</h3>

      <Form {...form}>
        <form className="space-y-6 w-full sm:w-1/2">
          <FormField
            name="category_Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    disabled={loading}
                    placeholder="Enter the category Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end gap-2">
            <Button
              onClick={onBack}
              className="bg-red-500 border border-red-500 hover:bg-white hover:text-red-500 cursor-pointer"
            >
              <ChevronLeftIcon size={18} /> Back
            </Button>
            <Button className="bg-red-500 border border-red-500 hover:bg-white hover:text-red-500 cursor-pointer">
              SAVE <ChevronRightIcon size={18} />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default AddCategory;
