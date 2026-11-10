import { principles, site } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      <section className="dhero">
        <img className="dhero__art" src={img("/images/app-icon-large.webp")} alt="" width={640} height={640} />
        <div className="dhero__shade" aria-hidden="true" />
        <div className="container dhero__text">
          <Reveal as="span" className="overline">About</Reveal>
          <Split as="h1" className="h-page" parts={[["An idea is enough"]]} />
          <Reveal as="p" className="lead" delay={150}>
            {site.brand} is an AI video generator for iPhone. You bring a few words or a photo — the app handles the rest.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container approach">
          <Reveal as="span" className="eyebrow">Our approach</Reveal>
          <Reveal as="p" className="approach__text">
            Making a short video shouldn't take a crew, a timeline or a tutorial. So we kept it to one screen: describe
            the scene, set the ratio, resolution and length, and tap Generate. Everything you make waits for you in History.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container principles">
          {principles.map((p, i) => (
            <Reveal className="principle" key={p.n} delay={i * 80}>
              <span className="principle__n">{p.n}</span>
              <div>
                <b>{p.title}</b>
                <p className="muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
