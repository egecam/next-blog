import Link from "next/link";

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-8">
        <Link href="/">
          <a className="link-hover p-1">About</a>
        </Link>

        <Link href="/music">
          <a className="link-hover p-1">Music</a>
        </Link>

        <Link href="/photography">
          <a className="link-hover p-1">Photography</a>
        </Link>

        <Link href="/blog">
          <a className="link-hover p-1">Blog</a>
        </Link>
      </nav>
    </header>
  );
}
