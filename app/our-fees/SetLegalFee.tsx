import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1658314755907-704182941e3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product screenshot"
            className="justify-self-end my-auto w-[36rem] sm:w-[50rem] max-w-none rounded-xl shadow-xl float-right ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            width={1400}
            height={800}
          />
          <div className="lg:pr-8 lg:pt-4 my-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl">
                A Set Legal Fee
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-indigo-600">
                Taking the Worry Out of Legal Costs
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The legal professionals at Young and Muggleton in Stanmore, NSW,
                are dedicated to providing the very best service to all our
                clients. Which is why we make all efforts to explain things
                upfront so there are no nasty surprises. The same applies to our
                legal fees. We want you to be comfortable with our fee structure
                from day one. So, we&apos;ve made our all our fee engagement
                agreements straightforward and easy to understand.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Most of our work is done on a set legal fee so you&apos;ll
                always know what you&apos;ll be expected to pay. However, for
                some cases we also offer clients a no success, no fee option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
