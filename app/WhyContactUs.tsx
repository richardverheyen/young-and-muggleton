import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function WhyContactUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 my-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl">
                Why Contact Us
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-indigo-600">
                We listen and understand
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a local business in the Inner West who understand the
                needs of the local people well. This enables us to tailor our
                services and approach to suit and assist individual clients
                effectively.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We also pride ourselves on our transparent and
                easy-to-understand fee structure. There are no nasty payment
                surprises for our clients.
              </p>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
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
  );
}
