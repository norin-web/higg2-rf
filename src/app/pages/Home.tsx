import { Fragment, useState } from "react";
import { app, cases, features, historyFilters, presets, settings, site, steps, ticker } from "../content/site";
import { img } from "../utils/img";
import { useScrollVar } from "../utils/motion";
import Btn from "../components/Btn";
import Marquee from "../components/Marquee";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Spark = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
    <path fill="currentColor" d="M10 0c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" />
  </svg>
);

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

function Hero() {
  const ref = useScrollVar<HTMLElement>();
  return (
    <section className="hero" ref={ref}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="glow glow--hero" aria-hidden="true" />
      <Reveal as="span" className="overline">AI video generator for iPhone</Reveal>
      <Split className="h-hero" parts={[["Make videos."], ["\n"], ["In one click."]]} />
      <Reveal as="p" className="lead hero__sub" delay={250}>
        Turn a text prompt or a photo into a short video. Set the ratio, resolution and length — then tap Generate.
      </Reveal>
      <Reveal className="hero__cta" delay={350}>
        <Btn href={app.url}>Download on the App Store</Btn>
        <span className="note">For iPhone · iOS {app.minIOS.split(".")[0]}+</span>
      </Reveal>
      <div className="hero__phone">
        <Phone src="/images/phone-home.webp" alt={`${site.brand} home screen: Make videos in one click, Text to Video, Image to Video and Prompt Bank`} eager />
      </div>
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}

function Facts() {
  return (
    <Marquee className="facts" time={36} label={ticker.join(", ")}>
      {ticker.map((t) => (
        <Fragment key={t}>
          <span className="facts__item">{t}</span>
          <span className="facts__spark"><Spark /></span>
        </Fragment>
      ))}
    </Marquee>
  );
}

function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className="shead">
          <Split as="h2" className="h2" parts={[["From an idea"], ["\n"], ["to a video"]]} />
          <Reveal as="p" className="lead shead__side">
            Two ways to start, one Generate button. Every clip lands in History, ready to watch again or save.
          </Reveal>
        </div>
        <div className="fgrid">
          {features.map((f, i) => (
            <Reveal className="fcard" key={f.title} delay={(i % 2) * 80}>
              <span className="tagline"><i className={`dot dot--${f.dot}`} />{f.tag}</span>
              <h3 className="h3">{f.title}</h3>
              <p className="muted">{f.text}</p>
              <Phone src={f.img} alt={`${f.title} screen`} className="fcard__phone" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromptBank() {
  const [cur, setCur] = useState(1);
  const p = presets[cur];
  return (
    <section className="section">
      <div className="container pbank">
        <div className="pbank__left">
          <div className="pbank__head">
            <Split as="h2" className="h2" parts={[["Prompt"], ["\n"], ["Bank"]]} />
            <Reveal as="p" className="lead">
              No idea where to start? Pick a ready-made scene, read its prompt, then copy it or recreate it in one tap.
            </Reveal>
          </div>
          <Reveal className="pbank__panel" aria-live="polite">
            <div className="pbank__ptitle">
              <b>{p.name}</b>
              <span className="muted small">Selected</span>
            </div>
            <p>{p.prompt}</p>
            <div className="pbank__btns">
              <button className="btn btn--dark btn--sm" onClick={() => navigator.clipboard?.writeText(p.prompt)}>
                <span>Copy Prompt</span>
              </button>
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="btn btn--white btn--sm"><span>Recreate</span></a>
            </div>
          </Reveal>
        </div>
        <div className="pbank__grid">
          {presets.map((x, i) => (
            <button
              key={x.name}
              className={`preset${i === cur ? " is-on" : ""}`}
              onClick={() => setCur(i)}
              onMouseEnter={() => setCur(i)}
              aria-pressed={i === cur}
              aria-label={`${x.name} preset`}
            >
              <img src={img(x.img)} alt="" loading="lazy" />
              {x.label && (
                <span className="preset__label">
                  {x.name}
                  <Arrow />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Case({ c }: { c: (typeof cases)[number] }) {
  return (
    <div className="case">
      <img src={img(c.img)} alt="" loading="lazy" />
      <div>
        <b>{c.title}</b>
        <span className={`case__mode ${c.mode.startsWith("Image") ? "pink" : "blue"}`}>{c.mode}</span>
        <p className="muted">{c.text}</p>
      </div>
    </div>
  );
}

function UseCases() {
  const a = cases.slice(0, 4);
  const b = cases.slice(3);
  return (
    <section className="section cases">
      <div className="container shead">
        <Split as="h2" className="h2" parts={[["One app,"], ["\n"], ["every kind of scene"]]} />
        <Reveal as="p" className="lead shead__side">
          Lookbooks, travel moments, food, portraits or a walk in open space — start from a prompt or a photo.
        </Reveal>
      </div>
      <div className="cases__rows">
        <Marquee time={60}>{a.map((c) => <Case c={c} key={c.title} />)}</Marquee>
        <Marquee time={60} reverse>{b.map((c) => <Case c={c} key={c.title} />)}</Marquee>
      </div>
      <div className="container cases__list">
        {cases.slice(0, 3).map((c) => <Case c={c} key={c.title} />)}
      </div>
    </section>
  );
}

function AiChat() {
  const ref = useScrollVar<HTMLElement>();
  return (
    <section className="chat" ref={ref}>
      <div className="glow glow--chat" aria-hidden="true" />
      <Reveal as="span" className="overline overline--muted">AI Chat</Reveal>
      <Split as="h2" className="h-hero chat__title" parts={[["Stuck on a prompt?"], ["\n"], ["Just ask.", true]]} />
      <Reveal as="p" className="lead chat__sub">
        Talk an idea through in AI Chat, attach an image for context, then bring the best wording into Create.
      </Reveal>
      <div className="chat__phone">
        <Phone src="/images/phone-aichat.webp" alt="AI Chat screen with a question and an attached-image prompt" />
      </div>
      <div className="chat__fade" aria-hidden="true" />
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="get">
      <div className="container">
        <Reveal className="get__big">
          <div className="get__bigtext">
            <h3 className="h2">Your clip,<br />your settings</h3>
            <div>
              <p className="lead">Before you generate, pick the aspect ratio, resolution, length and whether the clip plays with sound.</p>
              <div className="chips">{settings.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
            </div>
          </div>
          <Phone src="/images/phone-image2video.webp" alt="Create screen with ratio, resolution, length and sound settings" className="get__phone" />
        </Reveal>
        <div className="get__row">
          <Reveal className="get__card get__filters">
            <div className="chips">
              {historyFilters.map((f, i) => <span className={`chip${i === 0 ? " chip--on" : ""}`} key={f}>{f}</span>)}
            </div>
            <div>
              <h3 className="h4">Find any clip fast</h3>
              <p className="muted">History keeps every generation. Filter by type or open your favorites.</p>
            </div>
          </Reveal>
          <div className="get__col">
            <Reveal className="get__card get__lime" delay={80}>
              <h3 className="h4">Write. Set. Generate.<br />That's the whole flow.</h3>
            </Reveal>
            <Reveal className="get__card get__save" delay={160}>
              <div>
                <b>Keep the good ones</b>
                <span className="muted">Like the result? Tap Save and it's yours.</span>
              </div>
              <span className="savebtn">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Save
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <Split as="h2" className="h2" parts={[["Start in three steps"]]} />
        <div className="steps__grid">
          {steps.map((s, i) => (
            <Reveal className="step" key={s.n} delay={i * 80}>
              <div className="step__top">
                {i === 0 && <img src={img("/images/app-icon.png")} alt="" width={72} height={72} className="step__icon" />}
                {i === 1 && (
                  <div className="chips">
                    <span className="chip blue">Text</span>
                    <span className="chip pink">Image</span>
                  </div>
                )}
                {i === 2 && <span className="genbtn"><Spark size={16} />Generate</span>}
                <span className="step__n">{s.n}</span>
              </div>
              <div>
                <b>{s.title}</b>
                <p className="muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final">
      <div className="final__tiles" aria-hidden="true">
        {["t1", "t2 lime", "t3 pink", "t4", "t5", "t6", "t7 blue", "t8", "t9", "t10 lime"].map((t) => <i key={t} className={`tile ${t}`} />)}
      </div>
      <Split as="h2" className="h-hero final__title" parts={[["See what"], ["\n"], ["you'll create"]]} />
      <Reveal as="p" className="lead">Scan to open {site.brand} on the App Store.</Reveal>
      <Reveal className="final__cta" delay={150}>
        <img className="qr" src={img("/images/qr.svg")} alt={`QR code to ${app.url}`} width={152} height={152} />
        <Btn href={app.url}>Download on the App Store</Btn>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <Features />
      <PromptBank />
      <UseCases />
      <AiChat />
      <WhatYouGet />
      <Steps />
      <FinalCta />
    </>
  );
}
