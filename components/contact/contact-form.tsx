'use client';
import { contactAction, verifyCaptchaAction } from '@/app/_action';
import Input from '@/components/ui/form/input';
import P from '@/components/ui/text/p';
import { useFormState } from 'react-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { SubmitButton } from '../ui/form/submit-button';

export default function ContactForm({}: {
  // eslint-disable-next-line no-unused-vars
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function updateStatus(previousState: string, formData: FormData) {
    if (!executeRecaptcha) {
      previousState = 'Votre message a bien été envoyé !';
      return previousState;
    }

    const token = await executeRecaptcha('onSubmit');

    const verified = await verifyCaptchaAction(token);

    if (!verified) {
      previousState = 'Une erreur est survenue, veuillez réessayer plus tard.';
      return previousState;
    }
    previousState = await contactAction(formData);
    return previousState;
  }

  const [state, formAction] = useFormState(updateStatus, '');

  return (
    <section className="flex items-center justify-center">
      <div className="slideInFromRight   glassmorphism-bg flex w-full flex-col gap-small rounded-small border border-primary10 border-opacity-80 p-medium text-primary90   mobile-large:mx-0 mobile-large:max-w-[90vw] tablet:w-fit">
        <form action={formAction} className="flex w-full flex-col gap-small">
          {state && (
            <P
              textType={'body'}
              className={`${
                state === 'Votre message a bien été envoyé !' ? 'text-primary50' : 'text-error50'
              }`}
            >
              {state}
            </P>
          )}
          <div className="flex w-full flex-col justify-between  gap-small mobile-large:flex-row">
            <Input
              intent="primary"
              className="mobile-large:w-1/2"
              minLength={2}
              maxLength={30}
              required
              type="text"
              id={'firstname'}
              placeholder={'Nom'}
              hiddenlabel="true"
            ></Input>
            <Input
              intent="primary"
              className="mobile-large:w-1/2"
              minLength={2}
              maxLength={30}
              required
              type="text"
              id={'lastname'}
              placeholder={'Prénom'}
              hiddenlabel="true"
            ></Input>
          </div>
          <Input
            intent="primary"
            required
            type="email"
            id={'email'}
            placeholder={'Email'}
            hiddenlabel="true"
          ></Input>
          <Input
            intent="primary"
            minLength={2}
            maxLength={30}
            required
            type="number"
            id={'phone'}
            placeholder={'Téléphone'}
            hiddenlabel="true"
          ></Input>

          <Input
            intent="primary"
            minLength={10}
            maxLength={500}
            required
            type="textarea"
            id={'demande'}
            placeholder={'Demande'}
            rows={5}
            cols={3}
            hiddenlabel="true"
          ></Input>
          <SubmitButton></SubmitButton>
        </form>
        <P className={`caption  text-center`}>
          Ce site est protégé par reCAPTCHA, les
          <a className="text-primary50" href="https://policies.google.com/privacy">
            {' '}
            règles de confidentialité
          </a>{' '}
          et les
          <a className="text-primary50" href="https://policies.google.com/terms">
            {' '}
            conditions d&apos;utilisation
          </a>{' '}
          s&apos;y appliquent.
        </P>
      </div>
    </section>
  );
}