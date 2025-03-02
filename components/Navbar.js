import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold mb-2 md:mb-0">My Website</a>
        </Link>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/"><a className="hover:text-gray-300">Home</a></Link>
          </li>
          <li>
            <Link href="/about"><a className="hover:text-gray-300">About</a></Link>
          </li>
          <li>
             <Link href="/coding"><a className="hover:text-gray-300">Coding</a></Link>
          </li>
          <li>
            <Link href="/pentesting"><a className="hover:text-gray-300">Pentesting</a></Link>
          </li>
          <li>
            <Link href="/anime"><a className="hover:text-gray-300">Anime</a></Link>
          </li>
          <li>
            <Link href="/contact"><a className="hover:text-gray-300">Contact</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}