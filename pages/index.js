import { Fragment } from "react";
import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

import Input from "../components/Input";

import { Collapse, Text, Loading, Link } from "@nextui-org/react";

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
      <div className="flex flex-col">
        <div>
          <div className="flex flex-col w-full p-4 justify-center mt-10  drawer-end">
            <div className="text-center text-8xl font-Poppins xxxs:text-6xl xxs:text-6xl xs:text-6xl font-extrabold text-transparent bg-clip-text bg-[#343a40]">
              <h1>Measure</h1>
               <p className="italic text-gray-600">
                  Made By: &nbsp;&nbsp;
                <a href="https://twitter.com/coderhimanshu" target="blank">
                  Himanshu Srivastava
                </a>
              </p>
              <p className="italic text-gray-600">
                Mini Project - Under the Supervision of Dr. Shiv Prakash
              </p>
            </div>
          </div>
          <Input />
          {!data && (
            <h1 className="flex justify-center text-[#343a40] mb-[50px]">
              <Loading type="points" />
            </h1>
          )}
          {data && data.error && (
            <h1 className="flex justify-center text-2xl text-[#343a40] font-extrabold font-Poppins mb-[50px] ">
              Nothing to display!
            </h1>
          )}
          {data && data.lighthouseResult && data.lighthouseResult.audits && (
            <h1 className="flex justify-center text-gray-700 text-3xl font-extrabold font-Poppins mb-10">
              Passed:
            </h1>
          )}
          <div className="large:w-[1200px] large:mx-auto mb-20">
            <div className="mb-14">
              <Collapse.Group splitted>
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["uses-passive-event-listeners"]
                    .score === 1 && (
                    <Collapse title="Uses passive listeners to improve scrolling performance">
                      <Text>
                        Consider marking your touch and wheel event listeners as
                        `passive` to improve your page's scroll performance.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-passive-event-listeners/"
                      >
                        https://web.dev/uses-passive-event-listeners/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["legacy-javascript"].score ===
                    1 && (
                    <Collapse title="Avoid serving legacy JavaScript to modern browsers">
                      <Text>
                        Polyfills and transforms enable legacy browsers to use
                        new JavaScript features. However, many aren't necessary
                        for modern browsers. For your bundled JavaScript, adopt
                        a modern script deployment strategy using
                        module/nomodule feature detection to reduce the amount
                        of code shipped to modern browsers, while retaining
                        support for legacy browsers.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://philipwalton.com/articles/deploying-es2015-code-in-production-today/"
                      >
                        https://philipwalton.com/articles/deploying-es2015-code-in-production-today/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["uses-long-cache-ttl"].score ===
                    1 && (
                    <Collapse title="Uses efficient cache policy on static assets">
                      <Text>
                        A long cache lifetime can speed up repeat visits to your
                        page.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-long-cache-ttl/"
                      >
                        https://web.dev/uses-long-cache-ttl/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["unminified-css"].score ===
                    1 && (
                    <Collapse title="Minify CSS">
                      <Text>
                        Minifying CSS files can reduce network payload sizes.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/unminified-css/"
                      >
                        https://web.dev/unminified-css/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["dom-size"].score === 1 && (
                    <Collapse title="Avoids an excessive DOM size">
                      <Text>
                        A large DOM will increase memory usage, cause longer
                        style calculations, and produce costly layout reflows
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/dom-size/"
                      >
                        https://web.dev/dom-size/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["uses-responsive-images"]
                    .score === 1 && (
                    <Collapse title="Properly size images">
                      <Text>
                        Serve images that are appropriately-sized to save
                        cellular data and improve load time.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-responsive-images/"
                      >
                        https://web.dev/uses-responsive-images/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["efficient-animated-content"]
                    .score === 1 && (
                    <Collapse title="Use video formats for animated content">
                      <Text>
                        Large GIFs are inefficient for delivering animated
                        content. Consider using MPEG4/WebM videos for animations
                        and PNG/WebP for static images instead of GIF to save
                        network bytes.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/efficient-animated-content/"
                      >
                        https://web.dev/efficient-animated-content/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["redirects"].score === 1 && (
                    <Collapse title="Avoid multiple page redirects">
                      <Text>
                        Redirects introduce additional delays before the page
                        can be loaded.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/redirects/"
                      >
                        https://web.dev/redirects/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["unminified-javascript"]
                    .score === 1 && (
                    <Collapse title="Minify JavaScript">
                      <Text>
                        Minifying JavaScript files can reduce payload sizes and
                        script parse time.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/unminified-javascript/"
                      >
                        https://web.dev/unminified-javascript/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["uses-rel-preconnect"].score ===
                    1 && (
                    <Collapse title="Preconnect to required origins">
                      <Text>
                        Consider adding `preconnect` or `dns-prefetch` resource
                        hints to establish early connections to important
                        third-party origins.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-rel-preconnect/"
                      >
                        https://web.dev/uses-rel-preconnect/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["unused-css-rules"].score ===
                    1 && (
                    <Collapse title="Reduce unused CSS">
                      <Text>
                        Reduce unused rules from stylesheets and defer CSS not
                        used for above-the-fold content to decrease bytes
                        consumed by network activity.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/unused-css-rules/"
                      >
                        https://web.dev/unused-css-rules/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["unused-javascript"].score ===
                    1 && (
                    <Collapse title="Reduce unused JavaScript">
                      <Text>
                        Reduce unused JavaScript and defer loading scripts until
                        they are required to decrease bytes consumed by network
                        activity.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/unused-javascript/"
                      >
                        https://web.dev/unused-javascript/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["server-response-time"].score ===
                    1 && (
                    <Collapse title="Initial server response time was short">
                      <Text>
                        Keep the server response time for the main document
                        short because all other requests depend on it.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/time-to-first-byte/"
                      >
                        https://web.dev/time-to-first-byte/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["unsized-images"].score ===
                    1 && (
                    <Collapse title="Image elements have explicit `width` and `height`">
                      <Text>
                        Set an explicit width and height on image elements to
                        reduce layout shifts and improve CLS.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/optimize-cls/#images-without-dimensions"
                      >
                        https://web.dev/optimize-cls/#images-without-dimensions
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["modern-image-formats"].score ===
                    1 && (
                    <Collapse title="Serve images in next-gen formats">
                      <Text>
                        Image formats like WebP and AVIF often provide better
                        compression than PNG or JPEG, which means faster
                        downloads and less data consumption.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-webp-images/"
                      >
                        https://web.dev/uses-webp-images/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["uses-optimized-images"]
                    .score === 1 && (
                    <Collapse title="Efficiently encode images">
                      <Text>
                        Optimized images load faster and consume less cellular
                        data.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-optimized-images/"
                      >
                        https://web.dev/uses-optimized-images/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["offscreen-images"].score ===
                    1 && (
                    <Collapse title="Defer offscreen images">
                      <Text>
                        Consider lazy-loading offscreen and hidden images after
                        all critical resources have finished loading to lower
                        time to interactive.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/offscreen-images/"
                      >
                        https://web.dev/offscreen-images/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["render-blocking-resources"]
                    .score === 1 && (
                    <Collapse title="Eliminate render-blocking resources">
                      <Text>
                        Resources are blocking the first paint of your page.
                        Consider delivering critical JS/CSS inline and deferring
                        all non-critical JS/styles.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/render-blocking-resources/"
                      >
                        https://web.dev/render-blocking-resources/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["lcp-lazy-loaded"].score ===
                    1 && (
                    <Collapse title="Largest Contentful Paint image was not lazily loaded">
                      <Text>
                        Above-the-fold images that are lazily loaded render
                        later in the page lifecycle, which can delay the largest
                        contentful paint.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/lcp-lazy-loading/"
                      >
                        https://web.dev/lcp-lazy-loading/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["duplicated-javascript"]
                    .score === 1 && (
                    <Collapse title="Remove duplicate modules in JavaScript bundles">
                      <Text>
                        Remove large, duplicate JavaScript modules from bundles
                        to reduce unnecessary bytes consumed by network
                        activity.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://www.oscprofessionals.com/blog/remove-duplicate-javascript-and-css/"
                      >
                        https://www.oscprofessionals.com/blog/remove-duplicate-javascript-and-css/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["uses-text-compression"]
                    .score === 1 && (
                    <Collapse title="Enable text compression">
                      <Text>
                        Text-based resources should be served with compression
                        (gzip, deflate or brotli) to minimize total network
                        bytes.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/uses-text-compression/"
                      >
                        https://web.dev/uses-text-compression/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["cumulative-layout-shift"]
                    .score === 1 && (
                    <Collapse title="Cumulative Layout Shift">
                      <Text>
                        Cumulative Layout Shift measures the movement of visible
                        elements within the viewport
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/cls/"
                      >
                        https://web.dev/cls/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["total-byte-weight"].score ===
                    1 && (
                    <Collapse title="Avoids enormous network payloads">
                      <Text>
                        Large network payloads cost users real money and are
                        highly correlated with long load times.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/total-byte-weight/"
                      >
                        https://web.dev/total-byte-weight/
                      </Link>
                    </Collapse>
                  )}
                {data &&
                  data.lighthouseResult &&
                  data.lighthouseResult.audits["no-document-write"].score ===
                    1 && (
                    <Collapse title="Avoids `document.write()`">
                      <Text>
                        For users on slow connections, external scripts
                        dynamically injected via `document.write()` can delay
                        page load by tens of seconds.
                      </Text>
                      <span className="flex mb-2"></span>
                      <span className="font-bold">
                        Learn More: &nbsp;&nbsp;
                      </span>
                      <Link
                        block
                        target="blank"
                        color="warning"
                        href="https://web.dev/no-document-write/"
                      >
                        https://web.dev/no-document-write/
                      </Link>
                    </Collapse>
                  )}
              </Collapse.Group>
            </div>
            {data && data.lighthouseResult && data.lighthouseResult.audits && (
              <h2 className="flex justify-center text-gray-700 text-3xl font-extrabold font-Poppins mb-10">
                Opportunities:
              </h2>
            )}
            <Collapse.Group splitted>
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["uses-passive-event-listeners"]
                  .score !== 1 && (
                  <Collapse title="Uses passive listeners to improve scrolling performance">
                    <Text>
                      Consider marking your touch and wheel event listeners as
                      `passive` to improve your page's scroll performance.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-passive-event-listeners/"
                    >
                      https://web.dev/uses-passive-event-listeners/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["legacy-javascript"].score !==
                  1 && (
                  <Collapse title="Avoid serving legacy JavaScript to modern browsers">
                    <Text>
                      Polyfills and transforms enable legacy browsers to use new
                      JavaScript features. However, many aren't necessary for
                      modern browsers. For your bundled JavaScript, adopt a
                      modern script deployment strategy using module/nomodule
                      feature detection to reduce the amount of code shipped to
                      modern browsers, while retaining support for legacy
                      browsers.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://philipwalton.com/articles/deploying-es2015-code-in-production-today/"
                    >
                      https://philipwalton.com/articles/deploying-es2015-code-in-production-today/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["uses-long-cache-ttl"].score !==
                  1 && (
                  <Collapse title="Uses efficient cache policy on static assets">
                    <Text>
                      A long cache lifetime can speed up repeat visits to your
                      page.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-long-cache-ttl/"
                    >
                      https://web.dev/uses-long-cache-ttl/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["unminified-css"].score !== 1 && (
                  <Collapse title="Minify CSS">
                    <Text>
                      Minifying CSS files can reduce network payload sizes.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/unminified-css/"
                    >
                      https://web.dev/unminified-css/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["dom-size"].score !== 1 && (
                  <Collapse title="Avoids an excessive DOM size">
                    <Text>
                      A large DOM will increase memory usage, cause longer style
                      calculations, and produce costly layout reflows
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/dom-size/"
                    >
                      https://web.dev/dom-size/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["uses-responsive-images"].score !==
                  1 && (
                  <Collapse title="Properly size images">
                    <Text>
                      Serve images that are appropriately-sized to save cellular
                      data and improve load time.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-responsive-images/"
                    >
                      https://web.dev/uses-responsive-images/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["efficient-animated-content"]
                  .score !== 1 && (
                  <Collapse title="Use video formats for animated content">
                    <Text>
                      Large GIFs are inefficient for delivering animated
                      content. Consider using MPEG4/WebM videos for animations
                      and PNG/WebP for static images instead of GIF to save
                      network bytes.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/efficient-animated-content/"
                    >
                      https://web.dev/efficient-animated-content/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["redirects"].score !== 1 && (
                  <Collapse title="Avoid multiple page redirects">
                    <Text>
                      Redirects introduce additional delays before the page can
                      be loaded.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/redirects/"
                    >
                      https://web.dev/redirects/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["unminified-javascript"].score !==
                  1 && (
                  <Collapse title="Minify JavaScript">
                    <Text>
                      Minifying JavaScript files can reduce payload sizes and
                      script parse time.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/unminified-javascript/"
                    >
                      https://web.dev/unminified-javascript/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["uses-rel-preconnect"].score !==
                  1 && (
                  <Collapse title="Preconnect to required origins">
                    <Text>
                      Consider adding `preconnect` or `dns-prefetch` resource
                      hints to establish early connections to important
                      third-party origins.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-rel-preconnect/"
                    >
                      https://web.dev/uses-rel-preconnect/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["unused-css-rules"].score !==
                  1 && (
                  <Collapse title="Reduce unused CSS">
                    <Text>
                      Reduce unused rules from stylesheets and defer CSS not
                      used for above-the-fold content to decrease bytes consumed
                      by network activity.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/unused-css-rules/"
                    >
                      https://web.dev/unused-css-rules/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["unused-javascript"].score !==
                  1 && (
                  <Collapse title="Reduce unused JavaScript">
                    <Text>
                      Reduce unused JavaScript and defer loading scripts until
                      they are required to decrease bytes consumed by network
                      activity.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/unused-javascript/"
                    >
                      https://web.dev/unused-javascript/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["server-response-time"].score !==
                  1 && (
                  <Collapse title="Initial server response time was short">
                    <Text>
                      Keep the server response time for the main document short
                      because all other requests depend on it.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/time-to-first-byte/"
                    >
                      https://web.dev/time-to-first-byte/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["unsized-images"].score !== 1 && (
                  <Collapse title="Image elements have explicit `width` and `height`">
                    <Text>
                      Set an explicit width and height on image elements to
                      reduce layout shifts and improve CLS.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/optimize-cls/#images-without-dimensions"
                    >
                      https://web.dev/optimize-cls/#images-without-dimensions
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["modern-image-formats"].score !==
                  1 && (
                  <Collapse title="Serve images in next-gen formats">
                    <Text>
                      Image formats like WebP and AVIF often provide better
                      compression than PNG or JPEG, which means faster downloads
                      and less data consumption.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-webp-images/"
                    >
                      https://web.dev/uses-webp-images/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["uses-optimized-images"].score !==
                  1 && (
                  <Collapse title="Efficiently encode images">
                    <Text>
                      Optimized images load faster and consume less cellular
                      data.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-optimized-images/"
                    >
                      https://web.dev/uses-optimized-images/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["offscreen-images"].score !==
                  1 && (
                  <Collapse title="Defer offscreen images">
                    <Text>
                      Consider lazy-loading offscreen and hidden images after
                      all critical resources have finished loading to lower time
                      to interactive.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/offscreen-images/"
                    >
                      https://web.dev/offscreen-images/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["render-blocking-resources"]
                  .score !== 1 && (
                  <Collapse title="Eliminate render-blocking resources">
                    <Text>
                      Resources are blocking the first paint of your page.
                      Consider delivering critical JS/CSS inline and deferring
                      all non-critical JS/styles.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/render-blocking-resources/"
                    >
                      https://web.dev/render-blocking-resources/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["lcp-lazy-loaded"].score !== 1 && (
                  <Collapse title="Largest Contentful Paint image was not lazily loaded">
                    <Text>
                      Above-the-fold images that are lazily loaded render later
                      in the page lifecycle, which can delay the largest
                      contentful paint.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/lcp-lazy-loading/"
                    >
                      https://web.dev/lcp-lazy-loading/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["duplicated-javascript"].score !==
                  1 && (
                  <Collapse title="Remove duplicate modules in JavaScript bundles">
                    <Text>
                      Remove large, duplicate JavaScript modules from bundles to
                      reduce unnecessary bytes consumed by network activity.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://www.oscprofessionals.com/blog/remove-duplicate-javascript-and-css/"
                    >
                      https://www.oscprofessionals.com/blog/remove-duplicate-javascript-and-css/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["uses-text-compression"].score !==
                  1 && (
                  <Collapse title="Enable text compression">
                    <Text>
                      Text-based resources should be served with compression
                      (gzip, deflate or brotli) to minimize total network bytes.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/uses-text-compression/"
                    >
                      https://web.dev/uses-text-compression/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["cumulative-layout-shift"]
                  .score !== 1 && (
                  <Collapse title="Cumulative Layout Shift">
                    <Text>
                      Cumulative Layout Shift measures the movement of visible
                      elements within the viewport
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/cls/"
                    >
                      https://web.dev/cls/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["total-byte-weight"].score !==
                  1 && (
                  <Collapse title="Avoids enormous network payloads">
                    <Text>
                      Large network payloads cost users real money and are
                      highly correlated with long load times.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/total-byte-weight/"
                    >
                      https://web.dev/total-byte-weight/
                    </Link>
                  </Collapse>
                )}
              {data &&
                data.lighthouseResult &&
                data.lighthouseResult.audits["no-document-write"].score !==
                  1 && (
                  <Collapse title="Avoids `document.write()`">
                    <Text>
                      For users on slow connections, external scripts
                      dynamically injected via `document.write()` can delay page
                      load by tens of seconds.
                    </Text>
                    <span className="flex mb-2"></span>
                    <span className="font-bold">Learn More: &nbsp;&nbsp;</span>
                    <Link
                      block
                      target="blank"
                      color="warning"
                      href="https://web.dev/no-document-write/"
                    >
                      https://web.dev/no-document-write/
                    </Link>
                  </Collapse>
                )}
            </Collapse.Group>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
