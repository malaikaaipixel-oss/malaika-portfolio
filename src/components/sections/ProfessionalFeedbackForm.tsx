import { useRef, useState, type FormEvent } from 'react';
import { CheckCircle, AlertCircle, Loader2, Star } from 'lucide-react';
import { StarRating } from '../ui/StarRating';
import { CONTACT } from '../../config/portfolio';

interface FeedbackState {
  name: string;
  email: string;
  role: string;
  company: string;
  relationship: string;
  project: string;
  feedback: string;
  rating: number;
  consent: boolean;
}

interface FeedbackErrors {
  name?: string;
  email?: string;
  role?: string;
  relationship?: string;
  project?: string;
  feedback?: string;
  consent?: string;
}

const RELATIONSHIPS = [
  'Former Colleague',
  'Client',
  'Collaborator',
  'Mentor / Advisor',
  'Other',
] as const;

const BLANK: FeedbackState = {
  name: '',
  email: '',
  role: '',
  company: '',
  relationship: '',
  project: '',
  feedback: '',
  rating: 0,
  consent: false,
};

function validate(d: FeedbackState): FeedbackErrors {
  const e: FeedbackErrors = {};
  if (!d.name.trim()) e.name = 'Please enter your name.';
  if (!d.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email.';
  if (!d.role.trim()) e.role = 'Please enter your professional role.';
  if (!d.relationship) e.relationship = 'Please select your relationship.';
  if (!d.project.trim()) e.project = 'Please briefly describe the project or work.';
  if (!d.feedback.trim()) e.feedback = 'Please write your recommendation.';
  else if (d.feedback.trim().length < 50) e.feedback = 'Please write at least 50 characters.';
  if (!d.consent) e.consent = 'You must authorize display to submit.';
  return e;
}

export function ProfessionalFeedbackForm() {
  const [form, setForm] = useState<FeedbackState>(BLANK);
  const [errors, setErrors] = useState<FeedbackErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FeedbackState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const submittingRef = useRef(false);

  const onChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name as keyof FeedbackState]) {
      const upd = validate({ ...form, [name]: value });
      setErrors((p) => ({ ...p, [name]: upd[name as keyof FeedbackErrors] }));
    }
  };

  const onBlur = (e: { target: { name: string } }) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(form)[name as keyof FeedbackErrors] }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;

    setTouched({
      name: true, email: true, role: true, relationship: true,
      project: true, feedback: true, consent: true,
    });
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
          role: form.role,
          company: form.company || '—',
          relationship: form.relationship,
          project: form.project,
          feedback: form.feedback,
          rating: form.rating > 0 ? `${form.rating}/5` : 'Not provided',
          consent: 'Authorized for public display',
          _subject: `[Recommendation] ${form.name} — ${form.role}${form.company ? ` at ${form.company}` : ''}`,
          _replyto: form.email,
          form_type: 'professional_feedback',
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

  const inputClass = (field: keyof FeedbackErrors) =>
    `w-full bg-plum-2 border px-4 py-3 font-body text-sm text-ivory placeholder:text-lavender-4 outline-none transition-all duration-200 focus:border-orchid/50 focus:bg-plum-3 ${
      errors[field] ? 'border-red-500/50' : 'border-plum-3'
    }`;

  if (done) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 flex items-center justify-center border border-orchid/30 bg-orchid/5 mx-auto mb-5">
          <CheckCircle size={24} className="text-orchid" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ivory mb-3">Thank you!</h2>
        <p className="font-body text-sm text-lavender mb-1.5">
          Your recommendation has been received.
        </p>
        <p className="font-body text-sm text-lavender-2 max-w-sm mx-auto">
          It will be reviewed privately and will never be published without your explicit permission.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Professional recommendation form">
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

      <div className="space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fb-name" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
              Name <span className="text-coral" aria-hidden="true">*</span>
            </label>
            <input
              id="fb-name" name="name" type="text" value={form.name}
              onChange={onChange} onBlur={onBlur} placeholder="Your full name"
              autoComplete="name" aria-required="true"
              className={inputClass('name')}
            />
            {errors.name && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="fb-email" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
              Email <span className="text-coral" aria-hidden="true">*</span>
            </label>
            <input
              id="fb-email" name="email" type="email" value={form.email}
              onChange={onChange} onBlur={onBlur} placeholder="your@email.com"
              autoComplete="email" aria-required="true"
              className={inputClass('email')}
            />
            {errors.email && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.email}</p>}
          </div>
        </div>

        {/* Role + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fb-role" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
              Professional Role <span className="text-coral" aria-hidden="true">*</span>
            </label>
            <input
              id="fb-role" name="role" type="text" value={form.role}
              onChange={onChange} onBlur={onBlur} placeholder="e.g. Product Manager"
              autoComplete="organization-title" aria-required="true"
              className={inputClass('role')}
            />
            {errors.role && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.role}</p>}
          </div>
          <div>
            <label htmlFor="fb-company" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
              Company <span className="font-body text-lavender-4 normal-case font-normal">(optional)</span>
            </label>
            <input
              id="fb-company" name="company" type="text" value={form.company}
              onChange={onChange} placeholder="Where you work or worked"
              autoComplete="organization"
              className="w-full bg-plum-2 border border-plum-3 px-4 py-3 font-body text-sm text-ivory placeholder:text-lavender-4 outline-none transition-all duration-200 focus:border-orchid/50 focus:bg-plum-3"
            />
          </div>
        </div>

        {/* Relationship */}
        <div>
          <label htmlFor="fb-relationship" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
            How We Worked Together <span className="text-coral" aria-hidden="true">*</span>
          </label>
          <select
            id="fb-relationship" name="relationship" value={form.relationship}
            onChange={onChange} onBlur={onBlur} aria-required="true"
            style={{ colorScheme: 'dark' }}
            className={`${inputClass('relationship')} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select your relationship…</option>
            {RELATIONSHIPS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {errors.relationship && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.relationship}</p>}
        </div>

        {/* Project context */}
        <div>
          <label htmlFor="fb-project" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
            Project or Work Context <span className="text-coral" aria-hidden="true">*</span>
          </label>
          <input
            id="fb-project" name="project" type="text" value={form.project}
            onChange={onChange} onBlur={onBlur}
            placeholder="Briefly describe the project or work you collaborated on"
            aria-required="true"
            className={inputClass('project')}
          />
          {errors.project && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.project}</p>}
        </div>

        {/* Recommendation */}
        <div>
          <label htmlFor="fb-feedback" className="font-body text-xs text-lavender-2 tracking-widest uppercase block mb-1.5">
            Recommendation <span className="text-coral" aria-hidden="true">*</span>
          </label>
          <textarea
            id="fb-feedback" name="feedback" rows={5} value={form.feedback}
            onChange={onChange} onBlur={onBlur}
            placeholder="Share your experience working with Malaika…"
            aria-required="true"
            className={`${inputClass('feedback')} resize-none`}
          />
          {errors.feedback && <p className="font-body text-xs text-red-400 mt-1.5" role="alert">{errors.feedback}</p>}
        </div>

        {/* Rating (optional) */}
        <div>
          <p className="font-body text-xs text-lavender-2 tracking-widest uppercase mb-2">
            Rating <span className="font-body text-lavender-4 normal-case font-normal">(optional)</span>
          </p>
          <StarRating value={form.rating} onChange={(r) => setForm((p) => ({ ...p, rating: r }))} size={20} />
          {form.rating > 0 && (
            <button
              type="button"
              onClick={() => setForm((p) => ({ ...p, rating: 0 }))}
              className="font-body text-xs text-lavender-4 hover:text-lavender-2 transition-colors mt-1.5"
            >
              Clear rating
            </button>
          )}
        </div>

        {/* Permission checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setForm((p) => ({ ...p, consent: checked }));
                  if (touched.consent) {
                    const upd = validate({ ...form, consent: checked });
                    setErrors((p) => ({ ...p, consent: upd.consent }));
                  }
                }}
                onBlur={() => {
                  setTouched((p) => ({ ...p, consent: true }));
                  setErrors((p) => ({ ...p, consent: validate(form).consent }));
                }}
                aria-required="true"
                className="sr-only"
              />
              <div
                className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center ${
                  form.consent
                    ? 'bg-orchid border-orchid'
                    : errors.consent
                    ? 'border-red-500/50 bg-plum-2'
                    : 'border-plum-3 bg-plum-2 group-hover:border-plum-4'
                }`}
              >
                {form.consent && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="font-body text-sm text-lavender leading-relaxed">
              I authorize Malaika to display this recommendation on her portfolio website.
              I understand it will be reviewed before publishing and will not appear without my consent.
              <span className="text-coral ml-1" aria-hidden="true">*</span>
            </span>
          </label>
          {errors.consent && <p className="font-body text-xs text-red-400 mt-1.5 ml-7" role="alert">{errors.consent}</p>}
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
            <>Submitting… <Loader2 size={13} className="animate-spin" /></>
          ) : (
            <>Submit Recommendation <Star size={13} /></>
          )}
        </button>
      </div>
    </form>
  );
}
