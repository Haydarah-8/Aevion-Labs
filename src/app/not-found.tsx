import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <p className="tag">404</p>
        <h1 className="display mt-6 max-w-[16ch]">That page is not here.</h1>
        <p className="lede prose-measure mt-6">
          It may have moved, or the link may be wrong. Everything on the site is reachable
          from the homepage.
        </p>
        <Link href="/" className="btn mt-10">
          Back to the start
        </Link>
      </div>
    </main>
  );
}
