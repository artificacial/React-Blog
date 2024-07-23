import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="bg-teal-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="footer-section px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <h3 className="section-title inline-block text-2xl">
                  React Blog
                </h3>
              </a>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                id tenetur sequi fuga rem nostrum soluta voluptates impedit
                adipisci, quisquam eveniet quia ipsum ex ullam? Dolorem tenetur
                laborum assumenda sed!
              </p>
            </div>

            <div className="footer-section px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="section-title inline-block text-2xl pb-4 mb-4 border-b-4 border-emerald-600">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="section-title inline-block text-2xl pb-4 mb-4 border-b-4 border-emerald-600">
                  Blog
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Getting Started With HTML and CSS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    What Is Flex And When to Use It?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    How TailwindCSS Can Help Your Productivity?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    5 Tips to Make Responsive Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    See More
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="section-title inline-block text-2xl pb-4 mb-4 border-b-4 border-emerald-600">
                  Connect With Us
                </h2>
              </div>
              <div className="social-icons">
                <a
                  href="#"
                  className="social-icon inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-emerald-400 hover:border-emerald-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-emerald-400 hover:border-emerald-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-emerald-400 hover:border-emerald-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5s-57.8-34.5-93.5-36.2c-37-2.1-147.8-2.1-184.8 0-35.7 1.7-67.3 9.9-93.5 36.2s-34.5 57.8-36.2 93.5c-2.1 37-2.1 147.8 0 184.8 1.7 35.7 9.9 67.3 36.2 93.5s57.8 34.5 93.5 36.2c37 2.1 147.8 2.1 184.8 0 35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5c2.1-37 2.1-147.8 0-184.8zm-48.8 224c-7.8 19.7-23.1 35-42.9 42.9-29.7 11.8-100.3 9.1-133.8 9.1s-104.1 2.6-133.8-9.1c-19.7-7.8-35-23.1-42.9-42.9-11.8-29.7-9.1-100.3-9.1-133.8s-2.6-104.1 9.1-133.8c7.8-19.7 23.1-35 42.9-42.9 29.7-11.8 100.3-9.1 133.8-9.1s104.1-2.6 133.8 9.1c19.7 7.8 35 23.1 42.9 42.9 11.8 29.7 9.1 100.3 9.1 133.8s2.7 104.1-9.1 133.8z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-emerald-400 hover:border-emerald-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 90.8 225.9 209 248v-176H145v-72h72v-55.2c0-70.8 42.1-109.8 106.5-109.8 30.9 0 63.3 5.5 63.3 5.5v69h-35.7c-35.2 0-46.1 21.8-46.1 44.1V208h78l-12.5 72h-65.5v176c118.2-22.1 209-124.5 209-248z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
