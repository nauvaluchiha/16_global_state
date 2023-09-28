export function Footer() {
  return (
      <footer>
        <section className="">
          <div className="grid grid-cols-2 grid-rows-2 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-1 md:px-14">
            <div className="col-start-1 row-start-1 px-[20px] pt-[40px] md:col-start-1 md:row-start-1">
              <div>
                <h1 className="text-[#37517E] text-3xl font-semibold">ARSHA</h1>
                <p className="mb-6">
                  A108 Adam Street <br />
                  New York, NY 535022 United States <br />
                </p>
                <p className="mb-6">
                  <strong>Phone:</strong> +1 5589 55488 55 <br />
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>
            <div className="col-start-2 row-start-1 px-[20px] pt-[40px] md:col-start-2 md:row-start-1">
              <div>
                <h2 className="text-[#37517E] font-semibold text-2xl">Useful Links</h2>
                <ul className="ml-6 mt-6 space-y-5">
                  <li>Home</li>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Term of service</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div className="col-start-1 row-start-2 px-[20px] pt-[40px] md:col-start-3 md:row-start-1">
              <div>
                <h2 className="text-[#37517E] font-semibold text-2xl">Our Services</h2>
                <ul className="ml-6 mt-6 space-y-5">
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Product Management</li>
                  <li>Marketing</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            </div>
            <div className="col-start-2 row-start-2 px-[20px] pt-[40px] md:col-start-4 md:row-start-1">
              <div>
                <h2 className="text-[#37517E] font-semibold text-2xl">Our Social Networks</h2>
                <p className="my-6">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div>
                  <span className="w-10 h-10 bg-[#47B2E4] rounded-full inline-block"></span>
                  <span className="w-10 h-10 bg-[#47B2E4] rounded-full inline-block"></span>
                  <span className="w-10 h-10 bg-[#47B2E4] rounded-full inline-block"></span>
                  <span className="w-10 h-10 bg-[#47B2E4] rounded-full inline-block"></span>
                  <span className="w-10 h-10 bg-[#47B2E4] rounded-full inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-20 bg-[#37517E] flex justify-around items-center mt-12 md:gap-[200px] lg:gap-[550px]">
          <div className="h-5">
            <p className="text-white text-xs">
              © Copyright <strong>Arsha.</strong> All Rights Reserved
            </p>
          </div>
          <div className="h-5 ">
            <p className="text-white text-xs md:text-sm">
              Designed by <span className="text-[#47B2E4]">BootstrapMade</span>
            </p>
          </div>
        </section>
      </footer>
  );
}