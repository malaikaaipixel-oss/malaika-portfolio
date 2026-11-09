import { useRef, useState, type FormEvent } from 'react';
import { Mail, Linkedin, GithubIcon, Send, CheckCircle, Info, Loader2, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { CONTACT, IDENTITY } from '../../config/portfolio';

interface FormState { name: string; email: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }

function validate(d: FormState): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim()) e.name = 'Please enter your name.';
  if (!d.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email.';
  if (!d.subject.trim()) e.subject = 'Please enter a subject.';
  if (!d.message.trim()) e.message = 'Please enter a message.';
  else if (d.message.trim().length < 20) e.message = 'Please write at least 20 characters.';
  return e;
}

const BLANK: FormState = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(BLANK);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const submittingRef = useRef(false);

  const onChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name as keyof FormState]) {
      const upd = validate({ ...form, [name]: value });
      setErrors((p) => ({ ...p, [name]: upd[name as keyof FormErrors] }));
    }
  };

  const onBlur = (e: { target: { name: string } }) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(form)[name as keyof FormErrors] }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;

    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (honeypot) {
      setDone(true);
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setServerError(true);
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    setServerError(false);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio Contact — ${form.subject}`,
          _replyto: form.email,
          form_type: 'contact',
        }),
      });
      if (res.ok) {
        setDone(true);
      } else {
        setServerError(true);
      }
    } catch {
      setServerError(true);
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <section id="contact" className="relative py-20 lg:py-28 bg-plum-1" aria-label="Contact">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-14 h-14 flex items-center justify-center border border-orchid/30 bg-orchid/5 mx-auto mb-6">
            <CheckCircle size={24} className="text-orchid" />
          </div>
          <h2 className="font-display text-3xl font-bold text-ivory mb-3">Message sent.</h2>
          <p className="font-body text-sm text-lavender mb-2">
            Your message has been delivered. You'll hear back soon.
          </p>
          <p className="font-body text-sm text-lavender-2 mb-8">
            Or reach out directly: <a href={`mailto:${CONTACT.email}`} className="text-orchid underline underline-offset-2">{CONTACT.email}</a>
          </p>
          <button
            onClick={() => { setDone(false); setForm(BLANK); setErrors({}); setTouched({}); setServerError(false); submittingRef.current = false; }}
            className="btn-outline"
          >
            Send another
          </button>
        </div>
      </section>
    );
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-plum-2 border px-4 py-3 font-body text-sm text-ivory placeholder:text-lavender-4 outline-none transition-all duration-200 focus:border-orchid/50 focus:bg-plum-3 ${
      errors[field] ? 'border-red-500/50' : 'border-plum-3'
    }`;

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-plum-1" aria-label="Contact">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-10 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #FF746C 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: info */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Contact</span>
              <span className="flex-1 h-px bg-plum-3 max-w-12" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory mb-5 leading-[1.2]">
              Let's Create Something<br />
              <span className="text-coral">Amazing Together</span>
            </h2>
            <p className="font-body text-base text-lavender leading-relaxed mb-10">
              Whether it's a product idea, a collaboration, or just a conversation — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail size={14} />, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: <Linkedin size={14} />, label: 'LinkedIn', value: `${IDENTITY.name} on LinkedIn`, href: CONTACT.linkedin },
                { icon: <GithubIcon size={14} />, label: 'GitHub', value: `${IDENTITY.name} on GitHub`, href: CONTACT.github },
              ].filter(({ href }) => !!href).map(({ icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 flex items-center justify-center border border-plum-3 text-lavender-4 group-hover:border-orchid/30 group-hover:text-orchid group-hover:bg-plum-2 transition-all duration-200">
                    {icon}
                  </div>
                  <div>
                    <p className="font-body text-xs text-lavender-4 tracking-widest uppercase leading-none mb-0.5">{label}</p>
                    <p className="font-body text-sm text-lavender group-hover:text-ivory transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={100}>
            {/* Honeypot — hidden from humans */}
            <div aria-hidden="true" className="absolute left-[-9999px] w-0 h-0 overflow-hidden opacity-0">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="flex items-start gap-2 p-3.5 bg-plum-2 border border-plum-3 mb-6">
              <Info size={13} className="text-lavender-4 flex-shrink-0 mt-0.5" />
              <p className="font-body text-xs text-lavender-4 leading-relaxed">
                Messages are delivered via Formspree. Your email is only used to reply to you.
              </p>
            </div>

            <form onSubmit={onSubmit} noValidate aria-label="Contact form">
              <div className="space-y-4">
                {([
                  { id: 'name',    type: 'text',  label: 'Name',    placeholder: 'Your name',          autoComplete: 'name'  },
                  { id: 'email',   type: 'email', label: 'Email',   placeholder: 'your@email.com',     autoComplete: 'email' },
                  { id: 'subject', type: 'text',  label: 'Subject', placeholder: "What's this about?", autoComplete: 'off'   },
                ] as const).map(({ id, type, label, placeholder, autoComplete }) => (
                  <div key={id}>
                    <label htmlFor={id} className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
                      {label} <span className="text-coral" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      value={form[id]}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder={placeholder}
                      autoComplete={autoComplete}
                      aria-required="true"
                      className={inputClass(id)}
                    />
                    {errors[id] && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors[id]}</p>}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
                    Message <span className="text-coral" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Tell me about your project or idea..."
                    aria-required="true"
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.message}</p>}
                </div>

                {serverError && (
                  <div className="flex items-start gap-2 p-3.5 bg-red-950/30 border border-red-500/30" role="alert">
                    <AlertCircle size={13} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="font-body text-xs text-red-400 leading-relaxed">
                      Something went wrong. Please try again or email directly at{' '}
                      <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>Sending… <Loader2 size={13} className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
