import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SignInButton({
  size = "default",
  label = "Otwórz demo panelu",
}: {
  size?: "default" | "xl";
  label?: string;
}) {
  return (
    <Button asChild size={size} className="rounded-full">
      <Link href="/demo">
        <LayoutDashboard className="size-4" />
        {label}
      </Link>
    </Button>
  );
}
