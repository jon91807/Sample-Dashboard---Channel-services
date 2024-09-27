import React from "react";
import { socials } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="col-span-1">
            <div className="logo">
              <h1 className="text-3xl font-bold">FBT</h1>
              <p className="mt-4">Questions? Reach us Monday – Friday from 9 am to 6 pm</p>
              <p className="mt-4">+1 001 234 5678</p>
              <p className="mt-4">
                <a href="mailto:info@example.com" target="_blank">
                  info@fbt.com
                </a>
              </p>
              <Button className="mt-6">Request for quote</Button>
              <Button className="mt-4">Get a Callback</Button>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-span-1">
            <h3 className="font-semibold">COMPANY</h3>
            <ul className="mt-4">
              <li className="mt-2">About agency</li>
              <li className="mt-2">Our team</li>
              <li className="mt-2">Showcase</li>
              <li className="mt-2">Blog</li>
              <li className="mt-2">Demo design system</li>
              <li className="mt-2">Contact</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-span-1">
            <h3 className="font-semibold">SERVICES</h3>
            <ul className="mt-4">
              <li className="mt-2">Bulk SMS Marketing</li>
              <li className="mt-2">Bulk Email Marketing (EMM)</li>
              <li className="mt-2">Bulk Whatsapp Marketing</li>
              <li className="mt-2">Digital Marketing</li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col-span-1">
            <h3 className="font-semibold">CONNECT</h3>
            <div className="mt-4 flex gap-5">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="container mx-auto mt-16 flex justify-between">
          <div>
            <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()} Fast Bizz Technologies.
            <br /> All Rights Reserved.
            </p>
          </div>
          <div>
            <p className="caption text-n-4 lg:block">
              FAST BUSINESS TECHNOLOGIES | TERMS & CONDITIONS
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
