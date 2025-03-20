import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">404</h1>
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Product Not Found</h2>
          <p className="mt-4 text-base text-gray-500">
            The product you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 