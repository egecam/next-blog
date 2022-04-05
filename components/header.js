import Link from "next/link";

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-6">
        <Link href="/">
          <a className="link-hover link">About</a>
        </Link>

        <Link href="/music">
          <a className="link-hover link">Music</a>
        </Link>

        <Link href="/photography">
          <a className="link-hover link">Photography</a>
        </Link>

        <Link href="/blog">
          <a className="link-hover link">Blog</a>
        </Link>
      </nav>
    </header>
  );
}
