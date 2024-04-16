import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "30 Years of Experience",
    icon: CloudArrowUpIcon,
  },
  {
    name: "The Law Society of NSW Accredication Specialist",
    icon: LockClosedIcon,
  },
  {
    name: "Servicing Areas in and around Sydney's Inner West",
    icon: ArrowPathIcon,
  },
];

export default function Badges() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto pt-12 px-6 lg:max-w-4xl lg:p-8 bg-white lg:rounded-b-lg lg:shadow-xl">
        <dl className="grid max-w-4xl grid-cols-1 gap-x-12 gap-y-12 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-20">
              <dt className="text-base font-semibold leading-7 text-gray-900 pt-3 lg:pt-0">
                <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
