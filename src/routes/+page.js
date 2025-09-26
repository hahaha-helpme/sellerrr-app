import rawHomepage from './homepage.html?raw';

const ASSET_BASE = '/homepage';
const ASSET_REGEX = /(["'(])assets\//g;

export const prerender = true;

const rewriteAssetPaths = (html) => html.replace(ASSET_REGEX, `$1${ASSET_BASE}/assets/`);

export async function load() {
  const processed = rewriteAssetPaths(rawHomepage);

  const headMatch = processed.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = processed.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  const bootstrapScript = `\n    <script>\n      window.bootstrap = window.bootstrap || {};\n      window.bootstrap.services = Object.assign({\n        userContent: '${ASSET_BASE}/',\n        app: window.location.origin\n      }, window.bootstrap.services || {});\n    </script>\n  `;

  const head = headMatch?.[1] ?? '';
  const body = bodyMatch?.[1] ?? processed;

  return {
    page: {
      head: bootstrapScript + head,
      body
    }
  };
}
