import { useEffect } from "react";

//Components
import { Nav, Footer, ContactForm } from "../components";

import aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    aos.init();
  });
  return (
    <>
      <div className="bg-slate-900">
        <div>
          <div className="fixed top-0 -z-10">
            <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div className="fixed top-0 end-0 -z-10">
            <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div className="fixed inset-0 hidden lg:flex items-center justify-center -z-10">
            <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div className="fixed bottom-0 start-0 -z-10">
            <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div className="fixed bottom-0 end-0 -z-10">
            <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
        </div>
        {/* <!-- end body bg gradient --> */}

        {/* <!-- Navbar Start --> */}
        <header id="navbar-sticky" className="navbar">
          <div className="container">
            <Nav />
          </div>
        </header>
        {/* <!-- Navbar End --> */}

        {/* <!-- Hero Section Start --> */}
        <section
          id="home"
          className="relative overflow-hidden pt-40 pb-2"
          data-aos="zoom-out"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="absolute h-14 w-14 bg-primary/10 top-1/2 start-80 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute h-14 w-14 bg-primary/20 top-1/2 end-80 -z-1 rounded-full animate-ping"></div>
          <div className="container">
            <div className="text-center">
              <div className="flex justify-center mt-6">
                <div className="max-w-2xl">
                  <h1 className="text-5xl/tight text-default-100 font-medium mb-6">
                    Contact me
                  </h1>
                  <p className="text-base text-default-300 font-medium lg:max-w-md mx-auto">
                    Get in Touch.
                    <br />
                    ↓↓
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Hero end  --> */}

        {/* Page content */}
        <ContactForm />
        {/* End of Page content */}

        <Footer />

        <button
          id="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed text-xl rounded-full z-10 bottom-5 end-5 h-8 w-8 text-center bg-white backdrop-blur-3xl text-slate-950 flex justify-center items-center transition-all duration-500 hover:bg-primary hover:text-white hover:rounded-lg"
        >
          <i data-lucide="chevron-up" className="h-4 w-4"></i>
        </button>
        {/* <!-- Back To Top End --> */}
      </div>
      {/* End of New design */}
    </>
  );
}

export default Contact;
