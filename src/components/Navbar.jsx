import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-8">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
          alt="logo"
          className="w-8 h-8"
        />

        <h1 className="text-2xl font-semibold">
          Planto.
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-12 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer transition">
          Home
        </li>

        <li className="hover:text-white cursor-pointer transition">
          Plants Type
        </li>

        <li className="hover:text-white cursor-pointer transition">
          More
        </li>

        <li className="hover:text-white cursor-pointer transition">
          Contact
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-5 text-xl">

        <FiSearch className="cursor-pointer hover:text-green-400 transition" />

        <FiShoppingBag className="cursor-pointer hover:text-green-400 transition" />

        <FiMenu className="cursor-pointer hover:text-green-400 transition md:hidden" />

      </div>

    </nav>
  );
};

export default Navbar;