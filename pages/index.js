import { Fragment } from "react";
import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

import Input from "../components/Input";
import PassedAudit from "../components/PassedAudit";
import FailedAudit from "../components/FailedAudit";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Home() {
  const router = useRouter();

  const { data, error } = useSWRImmutable(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://${router.query.audit}&key=AIzaSyDF0QPz0AwAOi6Zetf_ihxkP4GGrNUx0uQ`,
    fetcher
  );

  if (error) return "An error has occurred.";

  return (
    <Fragment>
      <div className="flex flex-col w-full p-4 justify-center mt-10 drawer-end">
        <div className="text-center text-8xl xxxs:text-6xl xxs:text-6xl xs:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">
          <h1>Measure</h1>
        </div>
        <div className="text-gray-600 text-center font-bold mt-2">
          See how well your website performs on top 24 SEO checks. Get tips to
          improve your user experience.
        </div>
      </div>
      <Input />
      {!data && (
        <h1 className="flex justify-center text-2xl mt-[8%] font-extrabold">
          Nothing to show!
        </h1>
      )}
      {data && data.error && (
        <h1 className="flex justify-center text-2xl mt-[8%] font-extrabold">
          Nothing to show!
        </h1>
      )}
      {data && data.lighthouseResult && data.lighthouseResult.audits && (
        <h2 className="flex justify-center mt-8 text-black text-2xl font-bold">
          Passed:
        </h2>
      )}

      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-passive-event-listeners"].score ===
          1 && (
          <PassedAudit
            title="Uses passive listeners to improve scrolling performance"
            description="Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance."
            link="https://web.dev/uses-passive-event-listeners/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["legacy-javascript"].score === 1 && (
          <PassedAudit
            title="Avoid serving legacy JavaScript to modern browsers"
            description="Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers."
            link="https://philipwalton.com/articles/deploying-es2015-code-in-production-today/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-long-cache-ttl"].score === 1 && (
          <PassedAudit
            title="Uses efficient cache policy on static assets"
            description="A long cache lifetime can speed up repeat visits to your page."
            link="https://web.dev/uses-long-cache-ttl/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unminified-css"].score === 1 && (
          <PassedAudit
            title="Minify CSS"
            description="Minifying CSS files can reduce network payload sizes."
            link="https://web.dev/unminified-css/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["dom-size"].score === 1 && (
          <PassedAudit
            title="Avoids an excessive DOM size"
            description="A large DOM will increase memory usage, cause longer style calculations, and produce costly layout reflows"
            link="https://web.dev/dom-size/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-responsive-images"].score === 1 && (
          <PassedAudit
            title="Properly size images"
            description="Serve images that are appropriately-sized to save cellular data and improve load time."
            link="https://web.dev/uses-responsive-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["efficient-animated-content"].score ===
          1 && (
          <PassedAudit
            title="Use video formats for animated content"
            description="Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes."
            link="https://web.dev/efficient-animated-content/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["redirects"].score === 1 && (
          <PassedAudit
            title="Avoid multiple page redirects"
            description="Redirects introduce additional delays before the page can be loaded."
            link="https://web.dev/redirects/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unminified-javascript"].score === 1 && (
          <PassedAudit
            title="Minify JavaScript"
            description="Minifying JavaScript files can reduce payload sizes and script parse time."
            link="https://web.dev/unminified-javascript/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-rel-preconnect"].score === 1 && (
          <PassedAudit
            title="Preconnect to required origins"
            description="Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins."
            link="https://web.dev/uses-rel-preconnect/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unused-css-rules"].score === 1 && (
          <PassedAudit
            title="Reduce unused CSS"
            description="Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity."
            link="https://web.dev/unused-css-rules/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unused-javascript"].score === 1 && (
          <PassedAudit
            title="Reduce unused JavaScript"
            description="Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity."
            link="https://web.dev/unused-javascript/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["server-response-time"].score === 1 && (
          <PassedAudit
            title="Initial server response time was short"
            description="Keep the server response time for the main document short because all other requests depend on it."
            link="https://web.dev/time-to-first-byte/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unsized-images"].score === 1 && (
          <PassedAudit
            title="Image elements have explicit `width` and `height`"
            description="Set an explicit width and height on image elements to reduce layout shifts and improve CLS."
            link="https://web.dev/optimize-cls/#images-without-dimensions"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["modern-image-formats"].score === 1 && (
          <PassedAudit
            title="Serve images in next-gen formats"
            description="Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption."
            link="https://web.dev/uses-webp-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-optimized-images"].score === 1 && (
          <PassedAudit
            title="Efficiently encode images"
            description="Optimized images load faster and consume less cellular data."
            link="https://web.dev/uses-optimized-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["offscreen-images"].score === 1 && (
          <PassedAudit
            title="Defer offscreen images"
            description="Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive."
            link="https://web.dev/offscreen-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["render-blocking-resources"].score ===
          1 && (
          <PassedAudit
            title="Eliminate render-blocking resources"
            description="Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles."
            link="https://web.dev/render-blocking-resources/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["lcp-lazy-loaded"].score === 1 && (
          <PassedAudit
            title="Largest Contentful Paint image was not lazily loaded"
            description="Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint."
            link="https://web.dev/lcp-lazy-loading/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["duplicated-javascript"].score === 1 && (
          <PassedAudit
            title="Remove duplicate modules in JavaScript bundles"
            description="Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity."
            link="https://www.oscprofessionals.com/blog/remove-duplicate-javascript-and-css/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-text-compression"].score === 1 && (
          <PassedAudit
            title="Enable text compression"
            description="Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes."
            link="https://web.dev/uses-text-compression/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["cumulative-layout-shift"].score === 1 && (
          <PassedAudit
            title="Cumulative Layout Shift"
            description="Cumulative Layout Shift measures the movement of visible elements within the viewport"
            link="https://web.dev/cls/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["total-byte-weight"].score === 1 && (
          <PassedAudit
            title="Avoids enormous network payloads"
            description="Large network payloads cost users real money and are highly correlated with long load times."
            link="https://web.dev/total-byte-weight/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["no-document-write"].score === 1 && (
          <PassedAudit
            title="Avoids `document.write()`"
            description="For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds."
            link="https://web.dev/no-document-write/"
          />
        )}

      {data && data.lighthouseResult && data.lighthouseResult.audits && (
        <h2 className="flex justify-center mt-8 text-black text-2xl font-bold">
          Failed:
        </h2>
      )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-passive-event-listeners"].score !==
          1 && (
          <FailedAudit
            title="Uses passive listeners to improve scrolling performance"
            description="Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance."
            link="https://web.dev/uses-passive-event-listeners/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["legacy-javascript"].score !== 1 && (
          <FailedAudit
            title="Avoid serving legacy JavaScript to modern browsers"
            description="Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers."
            link="https://philipwalton.com/articles/deploying-es2015-code-in-production-today/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-long-cache-ttl"].score !== 1 && (
          <FailedAudit
            title="Uses efficient cache policy on static assets"
            description="A long cache lifetime can speed up repeat visits to your page."
            link="https://web.dev/uses-long-cache-ttl/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unminified-css"].score !== 1 && (
          <FailedAudit
            title="Minify CSS"
            description="Minifying CSS files can reduce network payload sizes."
            link="https://web.dev/unminified-css/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["dom-size"].score !== 1 && (
          <FailedAudit
            title="Avoids an excessive DOM size"
            description="A large DOM will increase memory usage, cause longer style calculations, and produce costly layout reflows"
            link="https://web.dev/dom-size/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-responsive-images"].score !== 1 && (
          <FailedAudit
            title="Properly size images"
            description="Serve images that are appropriately-sized to save cellular data and improve load time."
            link="https://web.dev/uses-responsive-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["efficient-animated-content"].score !==
          1 && (
          <FailedAudit
            title="Use video formats for animated content"
            description="Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes."
            link="https://web.dev/efficient-animated-content/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["redirects"].score !== 1 && (
          <FailedAudit
            title="Avoid multiple page redirects"
            description="Redirects introduce additional delays before the page can be loaded."
            link="https://web.dev/redirects/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unminified-javascript"].score !== 1 && (
          <FailedAudit
            title="Minify JavaScript"
            description="Minifying JavaScript files can reduce payload sizes and script parse time."
            link="https://web.dev/unminified-javascript/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-rel-preconnect"].score !== 1 && (
          <FailedAudit
            title="Preconnect to required origins"
            description="Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins."
            link="https://web.dev/uses-rel-preconnect/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unused-css-rules"].score !== 1 && (
          <FailedAudit
            title="Reduce unused CSS"
            description="Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity."
            link="https://web.dev/unused-css-rules/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unused-javascript"].score !== 1 && (
          <FailedAudit
            title="Reduce unused JavaScript"
            description="Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity."
            link="https://web.dev/unused-javascript/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["server-response-time"].score !== 1 && (
          <FailedAudit
            title="Initial server response time was long"
            description="Keep the server response time for the main document short because all other requests depend on it."
            link="https://web.dev/time-to-first-byte/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["unsized-images"].score !== 1 && (
          <FailedAudit
            title="Image elements have explicit `width` and `height`"
            description="Set an explicit width and height on image elements to reduce layout shifts and improve CLS."
            link="https://web.dev/optimize-cls/#images-without-dimensions"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["modern-image-formats"].score !== 1 && (
          <FailedAudit
            title="Serve images in next-gen formats"
            description="Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption."
            link="https://web.dev/uses-webp-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-optimized-images"].score !== 1 && (
          <FailedAudit
            title="Efficiently encode images"
            description="Optimized images load faster and consume less cellular data."
            link="https://web.dev/uses-optimized-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["offscreen-images"].score !== 1 && (
          <FailedAudit
            title="Defer offscreen images"
            description="Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive."
            link="https://web.dev/offscreen-images/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["render-blocking-resources"].score !==
          1 && (
          <FailedAudit
            title="Eliminate render-blocking resources"
            description="Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles."
            link="https://web.dev/render-blocking-resources/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["lcp-lazy-loaded"].score !== 1 && (
          <FailedAudit
            title="Largest Contentful Paint image was not lazily loaded"
            description="Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint."
            link="https://web.dev/lcp-lazy-loading/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["duplicated-javascript"].score !== 1 && (
          <FailedAudit
            title="Remove duplicate modules in JavaScript bundles"
            description="Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity."
            link="https://www.oscprofessionals.com/blog/remove-duplicate-javascript-and-css/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["uses-text-compression"].score !== 1 && (
          <FailedAudit
            title="Enable text compression"
            description="Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes."
            link="https://web.dev/uses-text-compression/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["cumulative-layout-shift"].score !== 1 && (
          <FailedAudit
            title="Cumulative Layout Shift"
            description="Cumulative Layout Shift measures the movement of visible elements within the viewport"
            link="https://web.dev/cls/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["total-byte-weight"].score !== 1 && (
          <FailedAudit
            title="Avoids enormous network payloads"
            description="Large network payloads cost users real money and are highly correlated with long load times."
            link="https://web.dev/total-byte-weight/"
          />
        )}
      {data &&
        data.lighthouseResult &&
        data.lighthouseResult.audits["no-document-write"].score !== 1 && (
          <FailedAudit
            title="Avoids `document.write()`"
            description="For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds."
            link="https://web.dev/no-document-write/"
          />
        )}
    </Fragment>
  );
}

export default Home;
