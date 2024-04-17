import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Phone",
    description: "(02) 9568 3655",
    icon: PhoneIcon,
  },
  {
    name: "Email",
    description: "tim@youngandmuggleton.com.au",
    icon: EnvelopeIcon,
  },
  {
    name: "Fax",
    description: "(02) 9569 6646",
    icon: PrinterIcon,
  },
  {
    name: "Address",
    description: "99 Percival Road Stanmore, NSW 2048",
    icon: MapPinIcon,
  },
];

export default function ContactYourLocalLegalTeam() {
  return (
    <div className="relative pt-12 pb-12 sm:pt-24 sm:pb-12 bg-white">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-cover brightness-50 bg-[url('https://images.unsplash.com/photo-1706701239626-011980fac0f0?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 h-56 hidden lg:block"
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 200,0 190,50 100,60 10,50" fill="white" />
        </svg> */}
        <div className="relative mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Your Local Legal Team!
          </p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl mt-12 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mb-2 text-base leading-7 text-gray-900">
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
