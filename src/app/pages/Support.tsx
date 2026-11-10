import { useState } from "react";
import { faq, site } from "../content/site";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Chevron = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 9l7 7 7-7" />
  </svg>
);

const topics = [
  { label: "Creating videos", from: 0 },
  { label: "Prompt Bank & History", from: 2 },
  { label: "Subscription", from: 5 },
  { label: "Feedback", from: 7 },
];

export default function Support() {
  const [open, setOpen] = useState(0);
  const go = (i: number) => {
    setOpen(i);
    const el = document.getElementById(`q-${i}`);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 110, behavior: "smooth" });
  };
  const topicOn = topics.reduce((acc, t, i) => (open >= t.from ? i : acc), 0);

  return (
    <>
      <section className="phero">
        <div className="container">
          <Reveal as="span" className="overline">Support</Reveal>
          <Split as="h1" className="h-page" parts={[["How can we help?"]]} />
          <Reveal as="p" className="lead phero__sub" delay={150}>
            Quick answers about creating, saving and subscriptions. Still stuck? Write to us — the address is below.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container faqwrap">
          <aside className="faqwrap__topics">
            <span className="eyebrow">Topics</span>
            {topics.map((t, i) => (
              <button key={t.label} className={i === topicOn ? "is-on" : ""} onClick={() => go(t.from)}>{t.label}</button>
            ))}
          </aside>
          <div className="faq">
            {faq.map((f, i) => {
              const on = open === i;
              return (
                <div className={`faq__item${on ? " is-open" : ""}`} key={f.q} id={`q-${i}`}>
                  <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    <span>{f.q}</span>
                    <Chevron />
                  </button>
                  <div className="faq__a" id={`faq-${i}`} role="region" aria-hidden={!on} {...({ inert: on ? undefined : "" } as object)}>
                    <div className="faq__inner">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="mailbox">
            <div>
              <span className="mailbox__label">Still need help?</span>
              <a className="mailbox__mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <a className="btn btn--ink btn--md" href={`mailto:${site.email}`}>
              <span>Write to us</span>
              <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
