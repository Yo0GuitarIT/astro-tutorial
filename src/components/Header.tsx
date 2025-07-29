import Hamburger from "@/components/Hamburger";
import Navigation from "@/components/Navigation";

function Header() {
  return (
    <header>
      <nav>
        <Hamburger />
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
