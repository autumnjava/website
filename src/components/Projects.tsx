import { For } from 'solid-js';
import ArrowRightIcon from './icons/ArrowRight';
import ArrowUpRightIcon from './icons/ArrowUpRight';

export default function Projects() {
  return (
    <div>
      <ul class="group/list">
        <li class="mb-12">
          <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightGreen/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.wheelsonfireazores.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Wheels on Fire Azores website (opens in a new tab)"
                >
                  <span>
                    Wheels on Fire Azores
                    <span class="inline-block">
                      <ArrowUpRightIcon />
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                A website for a MTB guide & shuttle company based in Azores,
                Portugal.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <For
                  each={[
                    'JavaScript',
                    'TypeScript',
                    'SolidJS',
                    'Tailwind',
                    'Sanity',
                  ]}
                >
                  {(technology) => (
                    <li class="mr-1.5 mt-2">
                      <div class="flex items-center rounded-full bg-lightGreen/10 px-3 py-1 text-xs font-medium leading-5 text-accentGreen">
                        {technology}
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </div>
            <img
              alt="Wheels on Fire Azores website card"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              class="rounded border-2 border-slate-200/10 transition group-hover:border-accentGreen/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src="/ju_faial-bb3bPDti.jpg"
              style="color: transparent;"
            />
          </div>
        </li>
        <li class="mb-12">
          <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightGreen/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.masystemutbildning.se/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="MA System Utbildning (opens in a new tab)"
                >
                  <span>
                    MA System Utbildning
                    <span class="inline-block">
                      <ArrowUpRightIcon />
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                A website for MA System Utbildning based in Lund, Sweden.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <For
                  each={['WordPress', 'Elementor Pro', 'JavaScript', 'Docker']}
                >
                  {(technology) => (
                    <li class="mr-1.5 mt-2">
                      <div class="flex items-center rounded-full bg-lightGreen/10 px-3 py-1 text-xs font-medium leading-5 text-accentGreen">
                        {technology}
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </div>
            <img
              alt="MA System Utbildning card"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              class="rounded border-2 border-slate-200/10 transition group-hover:border-accentGreen/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src="/ma_system.png"
              style="color: transparent;"
            />
          </div>
        </li>
        {/* <li class="mb-12">
          <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div class="lg:group-hover:bg-lightGreen/10 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.wheelsonfireazores.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Wheels on Fire Azores website (opens in a new tab)"
                >
                  <span>
                    Wheels on Fire Azores website
                    <span class="inline-block">
                      <ArrowUpRightIcon />
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                A website for a MTB guide & shuttle company based in Azores,
                Portugal.
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <For
                  each={[
                    'JavaScript',
                    'TypeScript',
                    'SolidJS',
                    'Tailwind',
                    'Sanity',
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
            <img
              alt="Wheels on Fire Azores website Newline course marketing card"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              class="rounded border-2 border-slate-200/10 transition group-hover:border-accentGreen/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src="/ju_faial-bb3bPDti.jpg"
              style="color: transparent;"
            />
          </div>
        </li> */}
      </ul>
      <div class="mt-12">
        <a
          class="group inline-flex items-center font-semibold leading-tight text-slate-200"
          aria-label="View Full Project Archive"
          href="/archive"
        >
          <span>
            <span class="border-b border-transparent pb-px transition group-hover:border-accentGreen motion-reduce:transition-none">
              View Full Project Archive
            </span>
            <span class="whitespace-nowrap">
              <ArrowRightIcon />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
