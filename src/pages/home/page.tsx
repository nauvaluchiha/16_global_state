import { Footer } from "@/components/footer";
import assets_1 from "@/assets/images/hero-img.png";

const Home = () => {
  return (
    <div>
      <main>
        <section className="w-full bg-[#37517e] h-[calc(100vh-28px-1.75rem-1rem)] min-h-[500px] flex items-center">
          <div className="flex flex-wrap px-[15px] max-w-full min-w-[200px] mx-auto items-center gap-3 md:flex-nowrap md:flex-row md:px-[25px] lg:gap-24 lg:px-[50px]">
            <div className="min-w-[200px] max-w-[375.5px] h-fit mx-auto">
              <h1 className="text-2xl text-white text-center md:text-left">
                Better Solutions For Your Business
              </h1>
              <h5 className="font-light text-lg mt-[5px] text-white opacity-60 text-center md:text-left">
                We are team of talented designers making websites with Bootstrap
              </h5>
              <div className="flex justify-center mt-[45px] md:justify-start">
                <button className="bg-[#47b2e4] rounded-[50px] py-[10px] px-[25px] text-white border-2 border-transparent hover:bg-[#72d2ff] hover:border-white">
                  <a>Get Started</a>
                </button>

                <button className="rounded-[50px] py-[10px] px-[25px] ml-14 text-white border-2 hover:bg-[#4dc6ff] hover:border-transparent">
                  <a>Watch Video</a>
                </button>
              </div>
            </div>
            <div className="min-w-[200px] max-w-[375.5px] h-fit mx-auto md:max-w-[450px]">
              <div className="flex justify-center">
                <img className="mt-6 w-[450px] min-w-[250px]" src={assets_1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f3f5fa] h-[250px] mx-auto flex justify-center">
          <div className="flex flex-col justify-center items-center w-full max-w-[680px] gap-[25px] px-6 text-justify">
            <h2 className="text-[#37517e] text-2xl font-semibold">Join Our Newsletter</h2>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form className="flex justify-center items-center bg-white rounded-[50px] w-full max-w-[750px] h-10">
              <input
                className="min-w-[85%] h-9 text-center rounded-[50px] relative bg-transparent outline-none"
                type="text"
                id="subscribe"
                name="subscribe"
              />
              <button
                className="min-w-[15%] flex-shrink-0 h-full bg-[#47b2e4] px-[5px] rounded-[50px] relative text-center text-white cursor-pointer hover:bg-[#79d5ff]"
                type="submit"
                id="btn-3"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
