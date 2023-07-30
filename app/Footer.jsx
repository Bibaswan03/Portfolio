'use client'
import React from "react"
import img from "./images/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-transparent  py-6">
      <div className="flex md:justify-around flex-col md:flex-row items-center">
        <div className="left">
          <div className="logo flex justify-center items-center space-x-2 cursor-pointer my-5 md:py-0 ">
            <Image width={40} height={40} src={img} className="img" alt='img' />
            <span className="hover:text-blue-500 text-white">
              Bibaswan&apos;s Portfolio
            </span>
          </div>
        </div>
        <div className="right flex justify-between space-x-10">
          <div className="first">
            <div>
              <h2 className="mb-6 text-center text-lg font-semibold text-blue-500">
                Social
              </h2>
              <ul className="text-gray-500  font-medium">
              <li className="mb-4 text-blue-400 hover:scale-95">
                  <a href="https://www.instagram.com/bibaswan_._19/" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4 text-blue-400 hover:scale-95">
                  <a href="https://www.linkedin.com/in/bibaswan-nandi-60591a227/" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="2nd">
            <div>
              <h2 className="mb-6  text-center text-lg font-semibold text-blue-500">
                Links
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4 text-blue-400 hover:scale-95">
                  <a href="https://github.com/Bibaswan03" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 w-[95%] mx-auto border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex px-20 sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Bibaswan
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex md:mt-4 space-x-5 justify-center mt-0 items-center">
        <a href="https://www.instagram.com/bibaswan_._19/"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        </a>

          <a
            href="https://www.linkedin.com/in/bibaswan-nandi-60591a227/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
            <span className="sr-only">LinkedIn page</span>
          </a>
          
          
          <a
            href="https://github.com/Bibaswan03"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
