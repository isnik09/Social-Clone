import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { SignUpValidationFormSchema } from "../../lib/validation";
import { z } from "zod";
import Loader from "../../components/ui/shared/loader";

const SignUpForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignUpValidationFormSchema>>({
    resolver: zodResolver(SignUpValidationFormSchema),
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignUpValidationFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="../assets/images/logo.svg" alt="" />
        <h2 className="h3-bold md:h2.bold pt-5 sm:pt-12">
          Create a new accout
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Enter your details to use Snapgram
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          {/* NAME */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* UserName */}
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader />
              </div>
            ) : (
              "Sign  Up"
            )}
          </Button>
        </form>
      </div>
      <p className="text-small-regular text-light-2 text-center mt-2">
        Already have an accout?
        <Link
          to="/sign-in"
          className="text-primary-500 text-small-semibold ml-2"
        >
          Log in
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
