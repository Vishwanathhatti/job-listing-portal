import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left ">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-semibold mb-2 text-[#1C64F2]">Let's keep in touch!</h4>
        <p className="text-lg mt-0 mb-2 text-blueGray-600 w-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
        </p>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6 gap-4">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-md font-semibold mb-2 text-[#1C64F2]">Quick Links</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/'>Jobs</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/' >Companies</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/' >Services</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/' >Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2 text-[#1C64F2]">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/'>Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/' >Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to='/' >Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024 </span>
          <a href="" className="text-blueGray-500 hover:text-blueGray-800">Job Portal</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer