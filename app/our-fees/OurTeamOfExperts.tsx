import Image from "next/image";

export default function OurTeamOfExperts() {
  return (
    <div className="relative py-18 sm:py-24">
      <div className="absolute top-0 left-0 w-full h-full bg-cover brightness-50 bg-[url('https://images.unsplash.com/photo-1513343987712-5da15ea2a9bb?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 h-48 hidden lg:block"
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 200,0 190,50 100,60 10,50" fill="white" />
        </svg>
        <div className="relative mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-white lg:text-gray-900 sm:text-4xl">
            We Are Also Open To:
          </p>
        </div>

        <ul className="relative  mt-8 sm:mt-20 lg:mt-24 max-w-2xl mx-auto">
          <li className="list-disc mt-2 text-lg leading-8 text-white">
            you obtaining independent legal advice on our fee arrangements
          </li>
          <li className="list-disc mt-2 text-lg leading-8 text-white">
            negotiating our retainer fees
          </li>
          <li className="list-disc mt-2 text-lg leading-8 text-white">
            giving you a breakdown of our charges and what you can expect in
            return
          </li>
          <li className="list-disc mt-2 text-lg leading-8 text-white">
            advising you on any help you may be entitled to with regards to
            legal fee payments
          </li>
        </ul>
      </div>
    </div>
  );
}
