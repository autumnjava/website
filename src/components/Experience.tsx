import { For } from 'solid-js';
import ArrowUpRightIcon from './icons/ArrowUpRight';

export default function Experience() {
  return (
    <div>
      <ol class="group/list">
        <li class="mb-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="lg:group-hover:bg-lightGreen/10 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="text-lightGreen z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
              aria-label="Jun 2022 — Jan 2024"
            >
              Jun 2022 — Jan 2024
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    class="group/link hover:text-accentGreen focus-visible:text-accentGreen inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
                    href="https://www.24hr.se"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Fullstack web developer at 24HR (opens in a new tab)"
                  >
                    <span class="inline-block">
                      Fullstack web developer · 24HR
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                Developed and delivered tailored web applications for clients,
                overseeing the entire development cycle from planning to
                deployment. Collaborated closely with stakeholders to ensure
                high-quality results. Key clients included Orkla, Sony, Resurs
                Bank, Atos Medical, Gullviks, and others, delivering scalable
                and reliable solutions.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <For
                  each={[
                    'JavaScript',
                    'TypeScript',
                    'HTML & CSS',
                    'Tailwind',
                    'React',
                    'SolidJS',
                    'Node.js',
                    'GraphQL',
                    'PostgreSQL',
                    'WordPress',
                    'Docker',
                    'Kubernetes',
                  ]}
                >
                  {(technology) => (
                    <li class="mr-1.5 mt-2">
                      <div class="bg-lightGreen/10 text-accentGreen flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5">
                        {technology}
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
        </li>

        <li class="mb-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="lg:group-hover:bg-lightGreen/10 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="text-lightGreen z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
              aria-label="Jan 2022 - May 2022"
            >
              Jan 2022 - May 2022
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    class="group/link hover:text-accentGreen focus-visible:text-accentGreen inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
                    href="https://www.24hr.se"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Internship at 24HR (opens in a new tab)"
                  >
                    <span class="inline-block">
                      Internship · 24HR
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                Participated in an internship focused on web development,
                primarily building WordPress websites using Elementor Pro. Began
                contributing to a complex Solid.js project for a client,
                Gullviks, collaborating on a highly advanced web application to
                deliver a tailored and robust solution.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <For
                  each={[
                    'JavaScript',
                    'TypeScript',
                    'HTML & CSS',
                    'Styled Components',
                    'SolidJS',
                    'Node.js',
                    'WordPress',
                    'Elementor',
                    'Docker',
                    'Kubernetes',
                  ]}
                >
                  {(technology) => (
                    <li class="mr-1.5 mt-2">
                      <div class="bg-lightGreen/10 text-accentGreen flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5">
                        {technology}
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
        </li>

        <li class="mb-12">
          <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="lg:group-hover:bg-lightGreen/10 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              class="text-lightGreen z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
              aria-label="Apr 2021 - May 2021"
            >
              Apr 2021 - May 2021
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <span class="inline-block">
                    Internship · Dooli
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                Contributed to the development of an internal tool designed to
                enable non-technical users to interact with a database through a
                user-friendly interface. Took part in planning and building both
                front-end and back-end components, delivering a solution that
                streamlined internal workflows.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <For
                  each={[
                    'JavaScript',
                    'TypeScript',
                    'HTML & CSS',
                    'Vue2',
                    'Node.js',
                    'Neo4j',
                  ]}
                >
                  {(technology) => (
                    <li class="mr-1.5 mt-2">
                      <div class="bg-lightGreen/10 text-accentGreen flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5">
                        {technology}
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
        </li>
      </ol>
      <div class="mt-12">
        <a
          class="group/link hover:text-accentGreen focus-visible:text-accentGreen inline-flex items-baseline text-base font-semibold leading-tight text-slate-200"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full Résumé
            <span class="inline-block">
              <ArrowUpRightIcon />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
