import render from './render.tsx';

export async function handler() {
  return {
    headers: { 'content-type': 'text/html; charset=utf-8' },
    body: render(Deno.versions),
  };
}
