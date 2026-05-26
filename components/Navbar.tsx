import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
   <header>
    <nav>
         <Link href='/' className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

                    <p>DevEvent</p>
                </Link>

                <ul className="flex items-center gap-8 list-none">
  <li>
    <Link
      href="/"
      className="
        relative
        transition-all duration-300
        hover:text-cyan-400
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-cyan-400
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      href="/events"
      className="
        relative
        transition-all duration-300
        hover:text-cyan-400
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-cyan-400
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      Events
    </Link>
  </li>

  <li>
    <Link
      href="/create-event"
      className="
        relative
        transition-all duration-300
        hover:text-cyan-400
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-cyan-400
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      Create Event
    </Link>
  </li>
</ul>
    </nav>
   </header>
  )
}

export default Navbar