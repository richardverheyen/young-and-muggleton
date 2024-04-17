export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      <div className="relative px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <p className="text-lg leading-8 text-gray-200">
            Personalised, Professional, Cost-Effective.
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mt-4">
            Experienced Solicitors Servicing Sydney&apos;s Inner West &amp;
            Surrounds
          </h2>
          <a
            href="#"
            className="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
          >
            Get Expert Advice
          </a>
        </div>
      </div>
    </div>
  );
}
