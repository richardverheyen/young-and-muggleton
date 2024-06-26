import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product screenshot"
            className="justify-self-end my-auto w-[36rem] sm:w-[50rem] max-w-none rounded-xl shadow-xl float-right ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            width={1400}
            height={800}
          />
          <div className="lg:pr-8 lg:pt-4 my-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl">
                More About Young and Muggleton
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-indigo-600">
                Established in 1998
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For the last 30 years, the experts at Young and Muggleton have
                been serving the local community in Sydney&apos;s inner west,
                with a range of skilled legal services. The team is led by our
                principal lawyer Tim Young, who is a law society accredited
                specialist.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Conveniently located within the shopping centre near the
                Stanmore railway station, we have a well-established office with
                state-of-the-art technology to ensure we&apos;re always at the
                forefront of the profession in terms of innovation and new
                developments. We also have access to all the best barristers,
                experts, medical specialists, and forensic accountants to ensure
                that you always receive the highest quality legal advice when
                you come to us for help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
