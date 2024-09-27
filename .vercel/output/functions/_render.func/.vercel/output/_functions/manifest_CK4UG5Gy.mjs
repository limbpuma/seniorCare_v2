import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_kODos1Sk.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_CSlR2sdS.mjs';
import 'clsx';

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Lim/Developer/Projects/Integra/seniorCare/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Db_JAlsz.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Db_JAlsz.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"},{"type":"external","src":"/_astro/about.D2YEmgvT.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Byr6aRhi.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"},{"type":"inline","content":"[data-astro-cid-ayff3c4f]:focus{box-shadow:none}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Byr6aRhi.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"},{"type":"inline","content":"[data-astro-cid-ayff3c4f]:focus{box-shadow:none}\n"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Db_JAlsz.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"}],"routeData":{"route":"/legal","isIndex":false,"type":"page","pattern":"^\\/legal\\/?$","segments":[[{"content":"legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legal.astro","pathname":"/legal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Db_JAlsz.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"}],"routeData":{"route":"/privacypolicy","isIndex":false,"type":"page","pattern":"^\\/privacypolicy\\/?$","segments":[[{"content":"privacypolicy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacypolicy.astro","pathname":"/privacypolicy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Db_JAlsz.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"},{"type":"external","src":"/_astro/about.D2YEmgvT.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Db_JAlsz.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"}],"routeData":{"route":"/termsconditions","isIndex":false,"type":"page","pattern":"^\\/termsconditions\\/?$","segments":[[{"content":"termsconditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termsconditions.astro","pathname":"/termsconditions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Byr6aRhi.js"}],"styles":[{"type":"external","src":"/_astro/about.DiAqN4xr.css"},{"type":"external","src":"/_astro/about.D2YEmgvT.css"},{"type":"inline","content":"[data-astro-cid-ayff3c4f]:focus{box-shadow:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/legal.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/privacypolicy.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/services.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/termsconditions.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/legal@_@astro":"pages/legal.astro.mjs","\u0000@astro-page:src/pages/privacypolicy@_@astro":"pages/privacypolicy.astro.mjs","\u0000@astro-page:src/pages/termsconditions@_@astro":"pages/termsconditions.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Lim/Developer/Projects/Integra/seniorCare/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","D:/Lim/Developer/Projects/Integra/seniorCare/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_CK4UG5Gy.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Db_JAlsz.js","/astro/hoisted.js?q=1":"_astro/hoisted.Byr6aRhi.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx":"_astro/Slider.Do2WenMr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.D2YEmgvT.css","/_astro/about.DiAqN4xr.css","/favicon.svg","/_astro/client.BY2mA-CD.js","/_astro/hoisted.Byr6aRhi.js","/_astro/hoisted.Db_JAlsz.js","/_astro/index.B52nOzfP.js","/_astro/Slider.Do2WenMr.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.BB6uRyKX.js","/assets/img/Bild1.jpg","/assets/img/senior_couple__in_the_park.webp","/assets/video/doenerexpress.webm","/assets/css/fonts/fa-brands-400.eot","/assets/css/fonts/fa-brands-400.ttf","/assets/css/fonts/fa-brands-400.woff","/assets/css/fonts/fa-brands-400.woff2","/assets/css/fonts/fa-regular-400.eot","/assets/css/fonts/fa-regular-400.ttf","/assets/css/fonts/fa-regular-400.woff","/assets/css/fonts/fa-regular-400.woff2","/assets/css/fonts/fa-solid-900.eot","/assets/css/fonts/fa-solid-900.ttf","/assets/css/fonts/fa-solid-900.woff","/assets/css/fonts/fa-solid-900.woff2","/assets/css/fonts/Flaticon.ttf","/assets/css/fonts/Flaticon.woff"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"obH3JnHY0nul0LcHbQqfQ+eeFrPVVtZNsMkLXBE2900=","experimentalEnvGetSecretEnabled":false});

export { manifest };
