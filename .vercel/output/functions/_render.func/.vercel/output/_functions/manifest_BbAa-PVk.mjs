import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C1D9PPnK.mjs';
import { f as decodeKey } from './chunks/astro/server_CC3nx09E.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Lim/Developer/Projects/seniorCare/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jhTitC1I.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jhTitC1I.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"},{"type":"external","src":"/_astro/about.D2YEmgvT.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.zJueHlG9.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"},{"type":"inline","content":"[data-astro-cid-ayff3c4f]:focus{box-shadow:none}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.zJueHlG9.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"},{"type":"inline","content":"[data-astro-cid-ayff3c4f]:focus{box-shadow:none}\n"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jhTitC1I.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"}],"routeData":{"route":"/legal","isIndex":false,"type":"page","pattern":"^\\/legal\\/?$","segments":[[{"content":"legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legal.astro","pathname":"/legal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jhTitC1I.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"}],"routeData":{"route":"/privacypolicy","isIndex":false,"type":"page","pattern":"^\\/privacypolicy\\/?$","segments":[[{"content":"privacypolicy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacypolicy.astro","pathname":"/privacypolicy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jhTitC1I.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"},{"type":"external","src":"/_astro/about.D2YEmgvT.css"},{"type":"inline","content":".before-content[data-astro-cid-rox7micv]{position:relative;overflow:hidden}.before-content[data-astro-cid-rox7micv]:before{content:\"View More\";padding-top:15rem;font-family:Montserrat,sans-serif;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));font-size:18px;position:absolute;inset:0;background:linear-gradient(0deg,#005d7a,#005d7a05);transition:transform .3s}@media (min-width: 768px){.before-content[data-astro-cid-rox7micv]:before{font-size:21px;transform:translateY(100%)}}.before-content[data-astro-cid-rox7micv]:hover:before{transform:translateY(0);cursor:pointer}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jhTitC1I.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"}],"routeData":{"route":"/termsconditions","isIndex":false,"type":"page","pattern":"^\\/termsconditions\\/?$","segments":[[{"content":"termsconditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termsconditions.astro","pathname":"/termsconditions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.zJueHlG9.js"}],"styles":[{"type":"external","src":"/_astro/about.D5CzulVj.css"},{"type":"external","src":"/_astro/about.D2YEmgvT.css"},{"type":"inline","content":"[data-astro-cid-ayff3c4f]:focus{box-shadow:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Lim/Developer/Projects/seniorCare/src/pages/404.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/about.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/legal.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/privacypolicy.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/services.astro",{"propagation":"none","containsHead":true}],["E:/Lim/Developer/Projects/seniorCare/src/pages/termsconditions.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/legal@_@astro":"pages/legal.astro.mjs","\u0000@astro-page:src/pages/privacypolicy@_@astro":"pages/privacypolicy.astro.mjs","\u0000@astro-page:src/pages/termsconditions@_@astro":"pages/termsconditions.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","E:/Lim/Developer/Projects/seniorCare/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","E:/Lim/Developer/Projects/seniorCare/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_BbAa-PVk.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.jhTitC1I.js","/astro/hoisted.js?q=1":"_astro/hoisted.zJueHlG9.js","E:/Lim/Developer/Projects/seniorCare/src/components/common/Slider.jsx":"_astro/Slider.B1Ckw7CT.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.D2YEmgvT.css","/_astro/about.D5CzulVj.css","/favicon.svg","/_astro/client.BY2mA-CD.js","/_astro/hoisted.jhTitC1I.js","/_astro/hoisted.zJueHlG9.js","/_astro/index.B52nOzfP.js","/_astro/Slider.B1Ckw7CT.js","/assets/img/Bild1.jpg","/assets/img/senior_couple__in_the_park.webp","/assets/video/doenerexpress.webm","/assets/css/fonts/fa-brands-400.eot","/assets/css/fonts/fa-brands-400.ttf","/assets/css/fonts/fa-brands-400.woff","/assets/css/fonts/fa-brands-400.woff2","/assets/css/fonts/fa-regular-400.eot","/assets/css/fonts/fa-regular-400.ttf","/assets/css/fonts/fa-regular-400.woff","/assets/css/fonts/fa-regular-400.woff2","/assets/css/fonts/fa-solid-900.eot","/assets/css/fonts/fa-solid-900.ttf","/assets/css/fonts/fa-solid-900.woff","/assets/css/fonts/fa-solid-900.woff2","/assets/css/fonts/Flaticon.ttf","/assets/css/fonts/Flaticon.woff"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Shwb4F+IH7gil0q+vWZv56o/vzbfsaNTZJcwskjLXhE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
