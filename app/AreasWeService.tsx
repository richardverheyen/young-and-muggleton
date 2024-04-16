export default function AreasWeService() {
  return (
    <div className="text-center px-6 pt-14 lg:px-8 relative isolate py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Areas We Service
      </h3>
      <p className="mt-4 text-2xl font-bold tracking-tight text-indigo-600">
        A Local Business Serving Local Needs
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
        Our practice is very conveniently located in the shopping centre near
        the Stanmore railway station, making it easy for our clients to pop in
        and see us whenever they require legal assistance. Our lawyers provide
        legal services to the following areas:
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 p-4 mt-4 text-lg leading-8 text-gray-600 bg-white shadow-2xl sm:rounded-3xl sm:px-16 lg:gap-x-20 max-w-4xl mx-auto text-left *:ml-8">
        <li className="list-disc">Annandale</li>
        <li className="list-disc">Enmore</li>
        <li className="list-disc">Marrickville</li>
        <li className="list-disc">Petersham</li>
        <li className="list-disc">Camperdown</li>
        <li className="list-disc">Leichhardt</li>
        <li className="list-disc">Newtown</li>
        <li className="list-disc">Stanmore</li>
      </ul>
      <p className="mt-4 text-lg leading-8 text-gray-200">
        and all other areas around Sydney's Inner West.
      </p>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
