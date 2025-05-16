import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../../../schema/auth";
import { z } from "zod";
import { Separator } from "../../../../components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import kRocket from "../../../../assets/k-rocket.png";

type UserFormValue = z.infer<typeof loginFormSchema>;

export default function UserLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <div className="flex items-center gap-5 sm:gap-8 text-red-500 pb-8">
        <h1 className=" text-2xl">Science Karkhana</h1>
        <img src={kRocket} alt="karkharna rocket" />
      </div>
      <div className="flex flex-col space-y-2 pb-2 ">
        <h1 className="text-2xl font-semibold text-primary tracking-tight">
          Login
        </h1>
        <p className="text-md text-gray-400">Login to continue using the CMS</p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 pt-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      disabled={loading}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <FaEye className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <FaEyeSlash className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row justify-between gap-2 items-center py-2">
            <div className="flex items-center gap-2 text-sm ">
              <input type="checkbox" />
              <span>Remember Me?</span>
            </div>
            <div>
              <Link
                to={""}
                className=" text-sm text-red-500 py-2 underline-offset-4 underline "
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <Link to={"/dashboard/home"}>
            <Button
              disabled={loading}
              className="ml-auto w-full bg-red-500 text-white border border-red-500 hover:bg-white hover:text-red-500 cursor-pointer"
              type="submit"
            >
              Login
            </Button>
          </Link>
        </form>
      </Form>
      <p className=" text-gray-400 text-center pt-24">Version 0.1.9</p>
    </>
  );
}
