import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CZlQag6U.mjs';
import { manifest } from './manifest_CDWSNyoB.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/send-email.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/legal.astro.mjs');
const _page7 = () => import('./pages/privacypolicy.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/termsconditions.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/send-email.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/faq.astro", _page5],
    ["src/pages/legal.astro", _page6],
    ["src/pages/privacypolicy.astro", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/termsconditions.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e98c2cf8-b21b-4deb-bac6-2912508a57d7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
