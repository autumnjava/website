import { Title } from '@solidjs/meta';
import { createEffect, createSignal, For, onCleanup } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import About from '~/components/About';
import Experience from '~/components/Experience';
import Footer from '~/components/Footer';
import Projects from '~/components/Projects';
import SocialMediaIcons from '~/components/SocialMediaIcons';

const sectionsData = [
  {
    id: 'about',
    label: 'About me',
    title: 'About',
    component: About,
  },
  {
    id: 'experience',
    label: 'Work experience',
    title: 'Experience',
    component: Experience,
  },
  {
    id: 'projects',
    label: 'Selected projects',
    title: 'Projects',
    component: Projects,
  },
];

export default function Home() {
  let sections: HTMLElement[] = [];
  const [activeSection, setActiveSection] = createSignal<string | null>(null);

  const isInViewport = (element: HTMLElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.bottom >= 0 && rect.top <= window.innerHeight;
  };

  createEffect(() => {
    if (!sections) return;

    const changeNav = (entries: IntersectionObserverEntry[]) => {
      let updated = false;

      entries.forEach((entry) => {
        if (updated) return;

        let activeBlock: HTMLElement | null = null;

        if (!entry.isIntersecting) {
          // This element has just left the viewport. This means at least one of 2 possibilities:
          // 1. the next element has its top aligned with the top of the viewport.
          //    In this case the next element should be activated.
          // 2. the previous element is (at least partly) visible.
          //    In this case we need to keep looking at previous elements until
          //    we find the highest one that is still visible.
          const nextSibling = entry.target
            .nextElementSibling as HTMLElement | null;
          const prevSibling = entry.target
            .previousElementSibling as HTMLElement | null;

          if (isInViewport(nextSibling)) {
            // possibility 1.
            activeBlock = nextSibling;
          } else if (isInViewport(prevSibling)) {
            // possibility 2.
            activeBlock = prevSibling;
            while (
              isInViewport(activeBlock?.previousElementSibling as HTMLElement)
            ) {
              activeBlock = activeBlock?.previousElementSibling as HTMLElement;
            }
          }
        } else {
          // This element just entered the viewport. 2 possibilities:
          // 1. The top of the element moved in from the bottom.
          //    In this case nothing needs to happen.
          // 2. The bottom of the element moved in from the top.
          //    In this case the current element should also become active.
          const nextSibling = entry.target
            .nextElementSibling as HTMLElement | null;
          const prevSibling = entry.target
            .previousElementSibling as HTMLElement | null;

          // possibility 1.
          if (!isInViewport(nextSibling)) return;
          else if (!isInViewport(prevSibling)) {
            // possibility 2.
            activeBlock = entry.target as HTMLElement;
          }
        }

        if (!activeBlock) return;

        setActiveSection(activeBlock.getAttribute('id'));
        updated = true;
      });
    };

    const observer = new IntersectionObserver(changeNav, { threshold: [0.9, 1] });

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    onCleanup(() => observer.disconnect());
  });

  return (
    <main>
      <Title>Alexander Smosljajev</Title>
      <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div class="lg:flex lg:justify-between lg:gap-4">
          <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Alexander Smosljajev</a>
              </h1>
              <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Fullstack developer
              </h2>
              <p class="mt-4 max-w-xs leading-normal">
                I create intuitive, accessible digital experiences for the web,
                driven by a passion for problem-solving and continuous learning.
              </p>
              <nav class="nav hidden lg:block" aria-label="In-page jump links">
                <ul class="mt-16 w-max" id="#header-list">
                  <For each={sectionsData}>
                    {(section) => (
                      <li>
                        <a
                          classList={{ active: activeSection() === section.id }}
                          class="group flex items-center py-3"
                          href={`#${section.id}`}
                        >
                          <span class="nav-indicator mr-4 h-px w-8 bg-lightGreen transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span class="nav-text text-xs font-bold uppercase tracking-widest text-lightGreen group-hover:text-slate-200">
                            {section.title}
                          </span>
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </nav>
            </div>

            <SocialMediaIcons />
          </header>

          <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
            <For each={sectionsData}>
              {(section) => (
                <section
                  ref={(el) => sections.push(el)}
                  id={section.id}
                  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  aria-label={section.label}
                >
                  <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-lightGreen/10 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      {section.title}
                    </h2>
                  </div>
                  <Dynamic component={section.component} />
                </section>
              )}
            </For>

            <Footer />
          </main>
        </div>
      </div>
    </main>
  );
}
