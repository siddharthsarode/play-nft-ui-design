import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => (
  <footer className="relative w-full px-4 py-12">
    <div className="mx-auto max-w-7xl">
      <div className="md:10 flex flex-wrap justify-between gap-10 lg:gap-30">
        <div className="spay-5 flex flex-col gap-3 lg:ms-6 lg:w-[40%]">
          {/* logo */}
          <Logo />
          <p className="font-poppins text-white/90">
            The World's Largest Digital Marketing place for crypto collections
            and non fungible tokens (NFTs) buys, sell and discover exclusive
            digital assests.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 transition hover:text-blue-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/siddharth_3555/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 transition hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition hover:text-blue-700"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-sarode-b7b6b724b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 transition hover:text-blue-800"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="font-poppins grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <h4 className="text-light mb-2">Explore</h4>
            <ul className="font-poppins space-y-1 text-sm text-white/90">
              <li>Art</li>
              <li>Music</li>
              <li>Games</li>
              <li>Photography</li>
            </ul>
          </div>
          <div>
            <h4 className="text-light mb-2">My Account</h4>
            <ul className="font-poppins space-y-1 text-sm text-white/90">
              <li>My Profile</li>
              <li>My Collections</li>
              <li>My Favorites</li>
              <li>Account Settings</li>
            </ul>
          </div>
          <div>
            <h4 className="text-light mb-2">Resources</h4>
            <ul className="font-poppins space-y-1 text-sm text-white/90">
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Newsletters</li>
            </ul>
          </div>
          <div>
            <h4 className="text-light mb-2">Company</h4>
            <ul className="font-poppins space-y-1 text-sm text-white/90">
              <li>About</li>
              <li>Careers</li>
              <li>Ranking</li>
              <li>Activity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      className="bg-purple/40 md:bg-purple/50 absolute bottom-0 -left-52 z-40 h-96 w-52 rotate-90 rounded-full blur-2xl lg:-left-36"
      style={{
        boxShadow: "0 0 200px 100px rgba(128, 0, 255, 0.4)",
      }}
    ></div>
  </footer>
);

export default Footer;
