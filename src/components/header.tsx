import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-whiter">
      <div className="container mx-auto flex justify-between items-center">
         {/* logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Marcus<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & contact button */}
        <div className="hidden xl:flex lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Lets talk</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden lg:hidden">
          mobile nav
        </div>

      </div>
    </header>
  );
}
