import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";
import { useGlowFollow } from "./utils/motion";

const titles: Record<string, string> = {
  "/app": "The App",
  "/about": "About",
  "/support": "Support",
  "/contact": "Contact",
  "/feedback": "Feedback",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

// Pages whose first screen is pure black, so the header sits on black too.
const DARK_TOP = ["/about", "/privacy", "/terms"];

export default function Root() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  useGlowFollow();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = titles[path];
    // brand first, so a narrow browser tab still shows the app name
    document.title = t ? `${site.brand} — ${t}` : `${site.brand} — AI video generator for iPhone`;
  }, [path]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header dark={DARK_TOP.includes(path)} />
      <main id="main" className="page" key={path}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
