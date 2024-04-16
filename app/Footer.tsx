import { MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "./Logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
          <div className="max-w-xl lg:max-w-lg lg:col-start-1 lg:col-span-2">
            <Image
              src={logo}
              width={400}
              height={300}
              alt="Randall And Associates Logo"
            />
          </div>
          <div className="flex flex-col items-start lg:col-start-3">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <MapIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt className="mt-4 mb-2 font-semibold text-white">
              Browse Our Website
            </dt>
            <dd className="mt-1 leading-7 text-gray-400">
              <Link href="/">Home</Link>
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">
              <Link href="/">About Us</Link>
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">
              <Link href="/">Our Services</Link>
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">
              <Link href="/">Our Fees</Link>
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">
              <Link href="/">Contact Us</Link>
            </dd>
          </div>
          <div className="flex flex-col items-start lg:col-start-4 lg:col-span-2">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt className="mt-4 font-semibold text-white">
              Contact Information
            </dt>
            <dd className="mt-1 leading-7 text-gray-400">
              Address: 99 Percival Road Stanmore, NSW 2048
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">
              Phone: <a href="tel:0295683655">(02) 9568 3655</a>
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">
              Email: tim@youngandmuggleton.com.au
            </dd>
            <dd className="mt-1 leading-7 text-gray-400">ABN: </dd>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
