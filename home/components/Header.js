import Link from "next/link";

export default function Header() {
  return (
      <div className="w-100 bg-gray-800 h-12 flex items-center">
    <nav className="container mx-auto px-10 uppercase font-bold">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
    </div>
  );
}
