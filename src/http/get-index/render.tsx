import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { DenoVersion } from './index.tsx';

export default function render(version: object) {
  const body = ReactDOMServer.renderToString(<DenoVersion version={version} />);
}
