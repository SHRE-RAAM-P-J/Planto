const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Logo */}
        <div>

          <div className="flex items-center gap-3">

            <img
              src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
              alt="logo"
              className="w-10 h-10"
            />

            <h2 className="text-4xl font-semibold">
              Planto.
            </h2>

          </div>

          <p className="text-gray-300 mt-8 leading-relaxed max-w-[350px]">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>

        </div>

        {/* Links */}
        <div>

          <h3 className="text-2xl font-semibold mb-8">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>Home</li>
            <li>Type's Of plant's</li>
            <li>Contact</li>
            <li>Privacy</li>

          </ul>

        </div>

        {/* Subscribe */}
        <div>

          <h3 className="text-2xl font-semibold mb-8">
            For Every Update.
          </h3>

          <div className="flex overflow-hidden rounded-xl border border-white/20">

            <input
              type="text"
              placeholder="Enter Email"
              className="bg-transparent px-5 py-4 outline-none flex-1"
            />

            <button className="bg-white text-black px-6 font-medium">
              SUBSCRIBE
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-20 text-gray-400">

        <div className="flex gap-8 font-medium">
          <span>FB</span>
          <span>TW</span>
          <span>LI</span>
        </div>

        <p>
          planto © all right reserve
        </p>

      </div>

    </footer>
  );
};

export default Footer;