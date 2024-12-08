export default function Footer() {
  return (
    <footer className="bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-2xl text-black">Funiro.</h3>
          <p className="text-gray-400">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-400 mt-6">Links</h3>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="/home" className="text-gray-400 hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-400 hover:text-yellow-500">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-400 mt-6">Help</h3>
          <ul className="space-y-4 mt-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Payment option
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Return
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-400 mt-6">Newsletter</h3>
          <form className="flex items-center mt-6">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-yellow-500 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="ml-4 border-b-2 border-black text-black focus:border-yellow-500 hover:text-yellow-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Row for gray text */}
      <div className="flex flex-wrap justify-between mt-8 px-4 text-gray-400">
        <p className="text-sm mb-2 sm:mb-0">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA.
        </p>
        <p className="text-sm">
          © 2024 Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
