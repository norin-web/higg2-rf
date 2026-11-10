import { useEffect, useState } from "react";
import { app, screens, specs, storeShots } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const TICK = 5000;

/** Minimal slider: tab list with a progress bar on the active tab + one phone that crossfades. */
function ScreenTabs() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setCur((c) => (c + 1) % screens.length), TICK);
    return () => clearTimeout(t);
  }, [cur, paused]);

  return (
    <section className="section">
      <div className="container tabs" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="tabs__list">
          <Split as="h2" className="h2" parts={[["Everything"], ["\n"], ["in one place"]]} />
          <div role="tablist" aria-label="App screens">
            {screens.map((s, i) => {
              const on = i === cur;
              return (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={on}
                  aria-controls="tab-phone"
                  className={`tab${on ? " is-on" : ""}`}
                  onClick={() => setCur(i)}
                >
                  <span className="tab__row">
                    <b>{s.name}</b>
                    <span className="tab__n">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="tab__text">{s.text}</span>
                  <span className="tab__bar" aria-hidden="true">
                    <i key={`${cur}-${paused}`} style={{ animationDuration: `${TICK}ms`, animationPlayState: paused ? "paused" : "running" }} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="tabs__stage" id="tab-phone" role="tabpanel">
          {screens.map((s, i) => (
            <Phone key={s.name} src={s.img} alt={`${s.name} screen`} className={`tabs__phone${i === cur ? " is-on" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurApp() {
  return (
    <>
      <section className="ahero">
        <div className="glow glow--right" aria-hidden="true" />
        <div className="container ahero__grid">
          <div className="ahero__text">
            <Reveal as="span" className="overline">The app</Reveal>
            <Split as="h1" className="h-page" parts={[["Your video studio"], ["\n"], ["in a pocket"]]} />
            <Reveal as="p" className="lead" delay={150}>
              Create from text or a photo, borrow a scene from Prompt Bank, brainstorm in AI Chat and keep every clip in History.
            </Reveal>
            <Reveal className="hero__cta hero__cta--row" delay={220}>
              <Btn href={app.url}>Download on the App Store</Btn>
              <span className="note">For iPhone · iOS {app.minIOS.split(".")[0]}+</span>
            </Reveal>
          </div>
          <div className="ahero__phones">
            <Phone src="/images/phone-promptbank.webp" alt="Prompt Bank screen" className="ahero__back" />
            <Phone src="/images/phone-result.webp" alt="Result screen with a generated video and Save button" className="ahero__front" eager />
          </div>
        </div>
      </section>

      <section className="section reel">
        <div className="container shead">
          <Split as="h2" className="h2" parts={[["A look inside"]]} />
          <Reveal as="p" className="muted">Screens from the App Store page</Reveal>
        </div>
        <div className="reel__track" tabIndex={0} aria-label="App Store screenshots">
          {storeShots.map((s, i) => (
            <img key={s} src={img(s)} alt={`App Store screenshot ${i + 1}`} loading="lazy" width={660} height={1434} />
          ))}
        </div>
      </section>

      <ScreenTabs />

      <section className="section">
        <div className="container specs">
          <div>
            <Split as="h2" className="h2" parts={[["The details"]]} />
            <Reveal as="p" className="muted">Taken from the App Store listing.</Reveal>
          </div>
          <Reveal as="dl" className="specs__table">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
