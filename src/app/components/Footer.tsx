import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo logo--lg">
              <img src={img("/images/app-icon.png")} alt="" width={44} height={44} />
              <span>{site.brand}</span>
            </Link>
            <p className="muted">{site.tagline}</p>
            <Btn href={app.url} size="sm">Download</Btn>
          </div>
          <div className="footer__cols">
            <div>
              <span className="eyebrow">Navigate</span>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">Help</span>
              <ul>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">Contact</span>
              <ul>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <span>© {site.year} {site.operator}. All rights reserved.</span>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 12V2M2.5 6.5L7 2l4.5 4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
