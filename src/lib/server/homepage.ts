import rawHomepage from '$lib/raw/homepage.html?raw';

const ASSET_BASE = '/homepage';
const ASSET_REGEX = /(["'(])assets\//g;
const HEAD_REGEX = /<head[^>]*>([\s\S]*?)<\/head>/i;
const BODY_REGEX = /<body[^>]*>([\s\S]*?)<\/body>/i;
const BOOTSTRAP_SCRIPT = `\n    <script>\n      window.bootstrap = window.bootstrap || {};\n      window.bootstrap.services = Object.assign({\n        userContent: '${ASSET_BASE}/',\n        app: window.location.origin\n      }, window.bootstrap.services || {});\n    </script>\n  `;

export interface HomepagePage {
  head: string;
  body: string;
}

const rewriteAssetPaths = (html: string): string =>
  html.replace(ASSET_REGEX, `$1${ASSET_BASE}/assets/`);

export const getHomepagePage = (): HomepagePage => {
  const processed = rewriteAssetPaths(rawHomepage);
  const headMatch = processed.match(HEAD_REGEX);
  const bodyMatch = processed.match(BODY_REGEX);

  return {
    head: BOOTSTRAP_SCRIPT + (headMatch?.[1] ?? ''),
    body: bodyMatch?.[1] ?? processed
  };
};
