import { useState, type FormEvent } from "react";
import { site } from "../content/site";
import Btn from "./Btn";

type Field = {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  chips?: string[];
  required?: boolean;
  auto?: string;
  placeholder?: string;
};

/**
 * No backend on a static site: the form validates on blur and then opens
 * the visitor's mail app with everything pre-filled (topic goes into the subject).
 */
export default function MailForm({ subject, fields, submit }: { subject: string; fields: Field[]; submit: string }) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.filter((f) => f.chips).map((f) => [f.name, f.chips![0]])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const check = (f: Field, v = values[f.name] ?? "") => {
    if (f.required && !v.trim()) return `Please enter ${f.label.toLowerCase()}.`;
    if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) return "That email doesn't look right — check for typos.";
    return "";
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    fields.forEach((f) => {
      const m = check(f);
      if (m) next[f.name] = m;
    });
    setErrors(next);
    const first = fields.find((f) => next[f.name]);
    if (first) {
      document.getElementById(`f-${first.name}`)?.focus();
      return;
    }
    const topic = fields.find((f) => f.chips);
    const subj = topic ? `${values[topic.name]} — ${subject}` : subject;
    const body = fields.filter((f) => !f.chips).map((f) => `${f.label}: ${values[f.name] ?? ""}`).join("\n\n");
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {fields.map((f) => {
        const id = `f-${f.name}`;
        if (f.chips)
          return (
            <fieldset className="field" key={f.name}>
              <legend>{f.label}</legend>
              <div className="chips" role="radiogroup" aria-label={f.label}>
                {f.chips.map((c) => (
                  <button
                    type="button"
                    key={c}
                    role="radio"
                    aria-checked={values[f.name] === c}
                    className={`chip${values[f.name] === c ? " chip--on" : ""}`}
                    onClick={() => set(f.name, c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>
          );
        const common = {
          id,
          name: f.name,
          value: values[f.name] ?? "",
          placeholder: f.placeholder,
          "aria-invalid": !!errors[f.name],
          "aria-describedby": errors[f.name] ? `${id}-err` : undefined,
          onChange: (e: { target: { value: string } }) => set(f.name, e.target.value),
          onBlur: () => setErrors({ ...errors, [f.name]: check(f) }),
        };
        return (
          <div className="field" key={f.name}>
            <label htmlFor={id}>{f.label}</label>
            {f.textarea ? <textarea {...common} /> : <input {...common} type={f.type ?? "text"} autoComplete={f.auto} />}
            {errors[f.name] && <span className="err" id={`${id}-err`} role="alert">{errors[f.name]}</span>}
          </div>
        );
      })}
      <Btn type="submit" className="form__submit">{submit}</Btn>
      <span className="note">Opens your mail app with the message ready to send.</span>
      {sent && <p className="ok" role="status">Your mail app should open with the message ready. If it didn't, write to {site.email}.</p>}
    </form>
  );
}
