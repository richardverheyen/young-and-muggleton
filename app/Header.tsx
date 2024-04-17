import Image from "next/image";
import Menu from "./Menu";
import logo2 from "./Logo2.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Our Fees", href: "/our-fees" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Image
            src={logo2}
            width={200}
            height={150}
            alt="Randall And Associates Logo"
          />
        </div>
        <div className="flex lg:hidden">
          <Menu navigation={navigation} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
  );
}
