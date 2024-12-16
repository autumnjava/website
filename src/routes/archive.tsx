import { Title } from '@solidjs/meta';
import { createResource, For, Match, Suspense, Switch } from 'solid-js';
import ArrowLeftIcon from '~/components/icons/ArrowLeft';
import ArrowUpRightIcon from '~/components/icons/ArrowUpRight';

const fetchProjects = async () => {
  const project_id = 'wrqfno0w';
  const dataset = 'production';

  const query = '*[_type == "project"][0...10]'; // [0...10] first 10 projects (non-inclusive)
  const apiUrl = `https://${project_id}.apicdn.sanity.io/v2024-11-30/data/query/${dataset}/?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(apiUrl, { method: 'GET' });

    if (!response.ok) {
      throw new Error('Failed to fetch documents from Sanity');
    }

    // console.log(await response.json())
    return response.json();
  } catch (error: any) {
    throw error; // Ensure error propagates properly
  }
};

export default function ProjectsArchive() {
  const [projects] = createResource(fetchProjects);

  return (
    <main>
      <Title>Projects archive</Title>
      <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div class="lg:py-24">
          <a
            class="group mb-2 inline-flex items-center font-semibold leading-tight text-accentGreen"
            href="/"
          >
            <ArrowLeftIcon />
            Alexander Smosljajev
          </a>
          <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Match when={projects.error}>
                <span>Error: {projects.error.message}</span>
              </Match>
              <Match when={projects()}>
                <table
                  id="content"
                  class="mt-12 w-full border-collapse text-left"
                >
                  <thead class="sticky top-0 z-10 border-b border-slate-100/10 bg-oliveGreen/75 px-6 py-5 backdrop-blur">
                    <tr>
                      <th class="py-4 pr-8 text-sm font-semibold text-slate-200">
                        Year
                      </th>
                      <th class="py-4 pr-8 text-sm font-semibold text-slate-200">
                        Project
                      </th>
                      <th class="hidden whitespace-nowrap py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                        Made at
                      </th>
                      <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                        Built with
                      </th>
                      <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                        Link
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <For each={projects().result}>
                      {(project) => (
                        <tr class="border-b border-slate-300/10 last:border-none">
                          <td class="py-4 pr-4 align-top text-sm">
                            <div class="translate-y-px">{project.year}</div>
                          </td>
                          <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                            <a
                              class="group/link inline-flex items-baseline text-base font-bold leading-tight text-slate-200 hover:text-accentGreen focus-visible:text-accentGreen"
                              href={project.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Wheels on Fire Azores (opens in a new tab)"
                            >
                              {project.name}
                              <ArrowUpRightIcon extraClass="inline-block sm:hidden" />
                            </a>
                          </td>
                          <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                            {project.made_at}
                          </td>
                          <td class="hidden py-4 pr-4 align-top lg:table-cell">
                            <ul class="flex flex-wrap gap-2">
                              <For each={project.builtWith}>
                                {(technology: string) => (
                                  <li class="rounded-full px-3 py-1 text-xs font-medium bg-lightGreen/10 text-accentGreen">
                                    {technology}
                                  </li>
                                )}
                              </For>
                            </ul>
                          </td>
                          <td class="hidden py-4 align-top sm:table-cell">
                            <a
                              class="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-200 hover:text-accentGreen focus-visible:text-accentGreen"
                              href={project.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="wheelsonfireazores.com (opens in a new tab)"
                            >
                              <span class="whitespace-nowrap">
                                {project.url}
                                <ArrowUpRightIcon />
                              </span>
                            </a>
                          </td>
                        </tr>
                      )}
                    </For>
                  </tbody>
                </table>
              </Match>
            </Switch>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
