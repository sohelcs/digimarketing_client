import React from 'react';

const Footer = () => {
    return (
       <footer className=" bg-[#fff] mt-20">
        <div className="max-w-[1400px] w-full footer grid-rows-2 p-10 text-[#FE6B01] mx-auto">
  <nav className="">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover text-[#333] font-medium">Branding</a>
    <a className="link link-hover text-[#333] font-medium">Design</a>
    <a className="link link-hover text-[#333] font-medium">Marketing</a>
    <a className="link link-hover text-[#333] font-medium">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover text-[#333] font-medium">About us</a>
    <a className="link link-hover text-[#333] font-medium">Contact</a>
    <a className="link link-hover text-[#333] font-medium">Jobs</a>
    <a className="link link-hover text-[#333] font-medium">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover text-[#333] font-medium">Terms of use</a>
    <a className="link link-hover text-[#333] font-medium">Privacy policy</a>
    <a className="link link-hover text-[#333] font-medium">Cookie policy</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <a className="link link-hover text-[#333] font-medium">Twitter</a>
    <a className="link link-hover text-[#333] font-medium">Instagram</a>
    <a className="link link-hover text-[#333] font-medium">Facebook</a>
    <a className="link link-hover text-[#333] font-medium">Github</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Explore</h6> 
    <a className="link link-hover text-[#333] font-medium">Features</a>
    <a className="link link-hover text-[#333] font-medium">Enterprise</a>
    <a className="link link-hover text-[#333] font-medium">Security</a>
    <a className="link link-hover text-[#333] font-medium">Pricing</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Apps</h6> 
    <a className="link link-hover text-[#333] font-medium">Mac</a>
    <a className="link link-hover text-[#333] font-medium">Windows</a>
    <a className="link link-hover text-[#333] font-medium">iPhone</a>
    <a className="link link-hover text-[#333] font-medium">Android</a>
  </nav>
  </div>
</footer>
    );
};

export default Footer;