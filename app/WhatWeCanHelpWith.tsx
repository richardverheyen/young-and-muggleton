import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function WhatWeCanHelpWith() {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-full h-full bg-cover brightness-50 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
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
            What we can help with
          </p>
        </div>

        <h2 className="text-2xl relative font-semibold leading-7 text-white lg:text-center mt-16 sm:mt-20 lg:mt-24 mx-auto max-w-2xl lg:max-w-4xl">
          We offer a range of legal services including:
        </h2>

        <div className="mx-auto max-w-2xl lg:max-w-4xl mt-4 sm:mt-8 lg:mt-12">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
