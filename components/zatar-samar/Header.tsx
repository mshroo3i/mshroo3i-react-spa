import Link from 'next/link';

export const Header = () => (<header className="relative z-10">
  <nav aria-label="Top">

    {/* Secondary navigation */}
    <div className="bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo (lg+) */}
            <div className="lg:flex lg:items-center">
              <Link href="/">
              <a>
                <span className="sr-only">ZatarSamar</span>
                <img
                  src="/assets/leaf-logo.png"
                  className="h-8 w-auto"
                  alt="Logo"
                />
              </a>
              </Link>
            </div>

            {/* <div className="flex-1 flex items-center justify-end">
            <div className="flex items-center lg:ml-8">
              <div className="flow-root">
                <a href="/" className="group -m-2 p-2 flex items-center">
                  <ShoppingCartIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>);