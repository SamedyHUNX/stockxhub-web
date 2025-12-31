import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>Click me!</Button>
      <ThemeSwitcher />
    </div>
  );
}
