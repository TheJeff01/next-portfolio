import Link from "next/link";
import { Images } from "./assets/images/Images";
function NavBar() {
  return (
    <nav className="flex justify-between p-4 items-center">
      <Link href="/">
        <img src={Images.logo} />
      </Link>
      <ul className="flex space-x-4">
        <Link href="/">
          <li>My Projects</li>
        </Link>
        <Link href="/about">
          <li>About Me</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/blog">
          <li>Portfolio</li>
        </Link>
        <Link href="/login">
          <li>Blog</li>
        </Link>
      </ul>

      <button className="flex border-2 border-black text-black px-4 py-2 rounded-3xl cursor-pointer">
        <img src={Images.contact} />
        Contact Me
      </button>
    </nav>
  );
}
export default NavBar;
