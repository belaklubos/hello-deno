import { React } from 'https://unpkg.com/es-react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { DenoVersion } from '../../components/DenoVersion.tsx';

interface IVersion {
  deno: string;
}

export default function render(version: IVersion) {
  const body = ReactDOMServer.renderToString(
    <DenoVersion version={version.deno} />
  );

  return `
    <!DOCTYPE html>
    <html>
      <body>
        <div id=app>${body}</div>
        <script type="module" src=/_static/browser.js></script>
      </body>
    </html>
  `;
}
