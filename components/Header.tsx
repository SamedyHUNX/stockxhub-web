import NavItem from "./NavItem";
import UserDropdown from "./UserDropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import BrandLogo from "./BrandLogo";

export default function Header() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <BrandLogo />
        <nav className="hidden sm:block">
          <NavItem />
        </nav>
        <div className="flex items-center">
          <ThemeSwitcher />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
