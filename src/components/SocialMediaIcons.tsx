import EnvelopeIcon from './icons/Envelope';
import GitHubIcon from './icons/GitHub';
import LinkedInIcon from './icons/LinkedIn';

export default function SocialMediaIcons() {
  return (
    <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li class="mr-5 shrink-0 text-xs">
        <a
          class="block hover:text-neutral-100"
          href="https://github.com/autumnjava"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon />
        </a>
      </li>
      <li class="mr-5 shrink-0 text-xs">
        <a
          class="block hover:text-neutral-100"
          href="https://www.linkedin.com/in/alexander-smosljajev/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span class="sr-only">LinkedIn</span>
          <LinkedInIcon />
        </a>
      </li>
      <li class="mr-5 shrink-0 text-xs">
        <a
          class="block hover:text-neutral-100"
          href="mailto:a.smosljajev@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Email me (opens in a new tab)"
          title="Email"
        >
          <span class="sr-only">Email</span>
          <EnvelopeIcon />
        </a>
      </li>
    </ul>
  );
}
