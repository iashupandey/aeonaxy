import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className=" mx-auto   w-full bg-white text-black">
      <div className="max-w-7xl mx-auto  py-16 w-full px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex flex-col ">
          <a href="/" className=" grow md:grow-0">
            <img src="/logo.png" alt="" className="h-10 w-40" />
          </a>

          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2">
              <FontAwesomeIcon icon={faGithub} className=" h-7 w-7 " />
              <div className="bg-black w-fit flex items-center justify-center p-1.5 rounded-full">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" h-4 w-4 text-white"
                />
              </div>
            </div>
            <p className="text-sm text-slate-700">© 2022 RevenueCat</p>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className=" ">
            <ul className="flex flex-col gap-y-4">
              <li className="text-slate-900 font-semibold text-base">
                Resources
              </li>
              <li className="text-sm">About Us</li>
              <li className="text-sm">Blog</li>
              <li className="text-sm">Careers</li>
              <li className="text-sm">Contact</li>
              <li className="text-sm">Customers</li>
              <li className="text-sm">Help Center</li>
              <li className="text-sm">Podcast</li>
            </ul>
          </div>
          <div className=" ">
            <ul className="flex flex-col gap-y-4">
              <li className="text-slate-900 font-semibold text-base">
                Documentation
              </li>
              <li className="text-sm">Quickstart Guide</li>
              <li className="text-sm">System Status</li>
              <li className="text-sm">SDKs</li>
              <li className="text-sm">API Reference</li>
              <li className="text-sm">Sample Apps</li>
              <li className="text-sm">Migration Guide</li>
              <li className="text-sm">View All Docs</li>
            </ul>
          </div>
          <div className=" ">
            <ul className="flex flex-col gap-y-4">
              <li className="text-slate-900 font-semibold text-base">
                Product
              </li>
              <li className="text-sm">Why RevenueCat?</li>
              <li className="text-sm">Integrations</li>
              <li className="text-sm">For Engineering Teams</li>
              <li className="text-sm">For Marketing Teams</li>
              <li className="text-sm">For Product Teams</li>
              <li className="text-sm">Apple Receipt Checker</li>
              <li className="text-sm">Pricing</li>
            </ul>
          </div>
          <div className=" ">
            <ul className="flex flex-col gap-y-4">
              <li className="text-slate-900 font-semibold text-base">Legal</li>
              <li className="text-sm">Privacy Policy</li>
              <li className="text-sm">Terms and Conditions</li>
              <li className="text-sm">GDPR</li>
              <li className="text-sm">Fair Billing Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
