import ThemeSwitcher from "@/components/ThemeSwitcher";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen home-wrapper">
      <Header />
      <ThemeSwitcher />
    </div>
  );
}
