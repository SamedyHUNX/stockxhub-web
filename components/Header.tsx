import NavItem from "./NavItem";
import UserDropdown from "./UserDropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import BrandLogo from "./BrandLogo";
import { searchStocks } from "@/lib/actions/finnhub.actions";

export default async function Header({ user }: { user: User }) {
  const initialStocks = await searchStocks();
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <BrandLogo />
        <nav className="hidden sm:block">
          <NavItem initialStocks={initialStocks} />
        </nav>
        <div className="flex items-center">
          <ThemeSwitcher />
          <UserDropdown user={user} initialStocks={initialStocks} />
        </div>
      </div>
    </header>
  );
}
