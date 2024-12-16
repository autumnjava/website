import { Title } from '@solidjs/meta';
import { HttpStatusCode } from '@solidjs/start';

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div class="flex h-screen flex-col items-center justify-center text-center">
          <div>
            <h1 class="mr-5 inline-block border-r border-r-white/30 pr-6 align-top text-2xl font-medium leading-[49px]">
              404
            </h1>
            <div class="inline-block text-left">
              <h2 class="m-0 text-sm font-normal leading-[49px]">
                This page could not be found.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
