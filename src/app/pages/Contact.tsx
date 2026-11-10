import { contactTopics, site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__grid">
        <div className="contact__text">
          <Reveal as="span" className="overline">Contact & feedback</Reveal>
          <Split as="h1" className="h-page" parts={[["Say hello"]]} />
          <Reveal as="p" className="lead" delay={150}>
            Questions, ideas or a bug report — send a note and tell us what you were creating.
          </Reveal>
          <Reveal className="contact__mail" delay={220}>
            <span className="eyebrow">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
        <Reveal className="contact__form" delay={120}>
          <MailForm
            subject={`${site.brand} — message from the website`}
            submit="Send message"
            fields={[
              { name: "name", label: "Name", required: true, auto: "name", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email", placeholder: "you@example.com" },
              { name: "topic", label: "Topic", chips: contactTopics },
              { name: "message", label: "Message", textarea: true, required: true, placeholder: "Tell us what happened…" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
