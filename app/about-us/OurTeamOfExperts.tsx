import Image from "next/image";

export default function OurTeamOfExperts() {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-full h-full bg-cover brightness-50 bg-[url('https://images.unsplash.com/photo-1513343987712-5da15ea2a9bb?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 h-56 hidden lg:block"
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 200,0 190,50 100,60 10,50" fill="white" />
        </svg>
        <div className="relative mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-white lg:text-gray-900 sm:text-4xl">
            Our Team of Friendly Legal Experts
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8  mt-8 sm:mt-20 lg:mt-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 my-auto">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-semibold leading-7 text-white sm:text-4xl">
                  Joshua Randall
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-300">
                  Principle Solicitor
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Tim is passionate about helping people and has a strong focus
                  on providing cost-effective, efficient, and effective legal
                  services to all his clients. He has around 27 years of
                  experience working with the clients at Young & Muggleton.
                </p>
                <p className="mt-6 text-2xl font-bold tracking-tight">
                  Qualifications:
                </p>
                <ul className="mt-2 text-lg leading-8 text-white">
                  <li className="list-disc ml-8">NSW Law Society Accredited</li>
                  <li className="list-disc ml-8">
                    Specialist in Personal Injury Law
                  </li>
                </ul>
                <p className="mt-2 text-lg leading-8 text-white">
                  Tim specialises in education and the needs of teachers, and is
                  uniquely placed to represent this group due to his knowledge
                  of the profession.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
                >
                  Contact Joshua
                </a>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product screenshot"
              className="w-[32rem] sm:w-[46rem] max-w-none rounded-xl shadow-xl float-right ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
              width={1200}
              height={720}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
