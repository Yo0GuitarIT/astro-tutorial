import Social from "@/components/Social";
import ThemeButton from "./ThemeButton";

function Footer() {
  const footerStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
  };

  return (
    <footer style={footerStyle}>
      <ThemeButton />
      <Social platform="github" username="Yo0GuitarIT" />
      <Social platform="twitter" username="Yo0GuitarIT" />
      <Social platform="linkedin" username="Yo0GuitarIT" />
    </footer>
  );
}

export default Footer;
