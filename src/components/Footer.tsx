import clsx from "clsx";

export default function Footer() {
  const linkClass = "font-medium text-lightGreen hover:text-accentGreen focus-visible:text-accentGreen"
  return (
    <footer class="max-w-md pb-16 text-sm text-slate-200 sm:pb-0">
      <p>
        Coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          class={clsx(linkClass)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>{' '}
        by yours truly. Built with{' '}
        <a
          href="https://nextjs.org/"
          class={clsx(linkClass)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          SolidJS
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com/"
          class={clsx(linkClass)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>{' '}
        and{' '}
        <a
          href="https://sanity.io/"
          class={clsx(linkClass)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Sanity Studio (opens in a new tab)"
        >
          Sanity
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com/"
          class={clsx(linkClass)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        . All text is set in the{' '}
        <a
          href="https://rsms.me/inter/"
          class={clsx(linkClass)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  );
}
