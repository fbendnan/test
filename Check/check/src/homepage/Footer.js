import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
  return (
    <><footer className="bg-black/80 text-white grid grid-cols-3 gap-26 px-20 pb-16 pt-10">
          <div className="flex flex-col gap-10">
              <h1 className="font-bold text-3xl">URBAN OUTFITTERS</h1>
              <p className="font-light text-white/60  text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor.
              </p>
              <div className="font-bold">
                  <p>121 king street, Melbourne 3000</p>
                  <p>+61 3 8376 6284</p>
                  <p>contact@urbanoutfitters.com</p>
              </div>
              <div className="grid grid-cols-4 text-xl">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <TfiYoutube />
              </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
              <div className="flex flex-col gap-10 ">
                  <h1 className="text-lg font-bold">SHOPPING</h1>
                  <ul className="text-sm text-white/80 flex flex-col gap-3">
                      <li>Your cart</li>
                      <li>Your orders</li>
                      <li>Compared items</li>
                      <li>Wishlist items</li>
                      <li>Shipping detail </li>
                  </ul>
              </div>

              <div className="flex flex-col gap-10 ">
                  <h1 className="text-lg font-bold">MORE LINK</h1>
                  <ul className="text-sm text-white/80 flex flex-col gap-3">
                      <li>Blog</li>
                      <li>Gift Center</li>
                      <li>Buying Guides</li>
                      <li>New Arrivals</li>
                      <li>Clearance</li>
                  </ul>
              </div>
          </div>

          <div className="flex flex-col gap-6">
              <h1 className="text-lg font-bold">FROM THE BLOG</h1>
              <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                      <div className="flex gap-2 text-white/60">
                          <h1 className="text-xl">26</h1>
                          <p className="place-self-end">May</p>
                      </div>
                      <p className="text-sm text-white flex flex-col gap-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <p className=" text-white/60 text-xs">3 comments</p>
                  </div>

                  <div className="h-px bg-gray-400 my-4 mr-10" />

                  <div className="flex flex-col gap-3">
                      <div className="flex gap-2 text-white/60">
                          <h1 className="text-xl">27</h1>
                          <p className="place-self-end">May</p>
                      </div>
                      <p className="text-sm text-white flex flex-col gap-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <p className=" text-white/60 text-xs">3 comments</p>
                  </div>


              </div>
          </div>
      </footer><div className="col-span-full bg-black/90 p-3 text-center text-white text-sm font-light">
              Urban Outfitters © – All rights reserved 
          </div></>
  );
}

export default Footer;
