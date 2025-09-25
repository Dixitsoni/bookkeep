// components/FooterNewsletter.js
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';

export default function FooterNewsletter() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="flex justify-center py-16 bg-white">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl px-8 py-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Subscribe Our Newsletter</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-md py-3 px-4 flex-1 outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="bg-teal-500 text-white rounded-md py-3 px-8 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
          {/* Bizkeep */}
          <div>
            <div className="flex items-center mb-4">
              {/* Replace with logo image if available */}
              <span className="text-teal-500 text-4xl mr-2">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="currentColor" d="M8 12h24v16H8V12zm24-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h24z"></path></svg>
              </span>
              <span className="text-3xl font-bold">Bizkeep</span>
            </div>
            <p className="text-gray-300 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-teal-400" />Jl. Raya Puputan No 142</li>
              <li className="flex items-center"><FaEnvelope className="mr-2 text-teal-400" />support@domain.com</li>
              <li className="flex items-center"><FaPhoneAlt className="mr-2 text-teal-400" />(021) 4582 - 3695</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 border-teal-400 border-b pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Services</li>
              <li>Cases</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-3 border-teal-400 border-b pb-2">Useful Links</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Disclaimer</li>
              <li>Support</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Work Hours */}
          <div>
            <h4 className="font-semibold mb-3 border-teal-400 border-b pb-2">Work Hours</h4>
            <div className="mb-2 flex items-center text-teal-400"><FaRegClock className="mr-2" /> <span className="text-white font-semibold">9 AM - 5 PM , Monday - Saturday</span></div>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="bg-teal-500 text-white rounded-md py-3 px-6 font-semibold">
              Make Appointment
            </button>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-12 text-center text-gray-400 pt-4 text-sm">
          Bookkeeping Service Company Template Kit by Jegtheme
          <br />
          Copyright © 2021. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
