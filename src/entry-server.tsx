// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body class="bg-darkGreenGray leading-relaxed text-slate-200 antialiased selection:bg-lightGrayGreen selection:text-teal-900">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
