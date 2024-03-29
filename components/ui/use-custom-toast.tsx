import { describe } from "node:test";
import { toast } from "./use-toast";
import { Description } from "@radix-ui/react-toast";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const useCustomToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login required",
      description: "You need to be logged in to do that",
      variant: "destructive",
      action: (
        <Link
          href="/sign-in"
          onClick={() => dismiss()}
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
      ),
    });
  };
  return { loginToast };
};
