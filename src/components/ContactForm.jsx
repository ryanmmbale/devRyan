import { imageO, imageP, imageL } from "../assets/images";
import Me from "../assets/me.jpeg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactForm() {
  return (
    <>
      <section id="home" className="relative pt-[74px] overflow-hidden">
        <div className="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
          <div className="lg:py-2 py-[2px] md:rounded-lg shadow bg-default-950/40 backdrop-blur-3xl">
            <div className="container relative">
              <div className="absolute top-0">
                <i
                  data-lucide="badge"
                  className="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"
                ></i>
              </div>
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div
                  className="md:col-span-7"
                  data-aos="fade-right"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                >
                  <div className="md:me-6">
                    <div className="lg:col-span-6 col-span-2">
                      <div className="bg-primary/20 rounded-xl">
                        <div className="p-10">
                          <h5 className="text-xl text-white mb-4">
                            <b>Reach Out About Anything</b>
                          </h5>
                          <form className="space-y-2 mb-6">
                            <label htmlFor="name" className="text-base text-white">
                              Name:
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="name"
                                className="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Enter Your name"
                                name="name"
                                required
                              />
                            </div>
                            <label htmlFor="email" className="text-base text-white">
                              Email:
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                className="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Enter Your Email"
                                name="email"
                                required
                              />
                            </div>
                            <label htmlFor="phone" className="text-base text-white">
                              Phone:
                            </label>
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                className="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Your Phone Number"
                                name="phone"
                                required
                              />
                            </div>
                            <label htmlFor="message" className="text-base text-white">
                              Message:
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="message"
                                className="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Your Message"
                                name="message"
                                required
                                span="2"
                              />
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 transition-all bg-primary hover:bg-primary-hover border-primary hover:border-primary-hover text-white rounded-md"
                              >
                                Send Message
                                <i data-lucide="move-right" className="h-4 w-4"></i>
                              </button>
                            </div>
                          </form>
                          <div>
                            <h6 className="text-base text-white mb-4">
                              Follow ME :
                            </h6>
                            <ul className="flex flex-wrap items-center gap-1">
                              <li>
                                <a
                                  target="blank"
                                  href="https://github.com/ryannthegr8;"
                                  className="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaGithub />
                                </a>
                              </li>
                              <li>
                                <a
                                  target="blank"
                                  href="https://x.com/_devRyann"
                                  className="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaTwitter />
                                </a>
                              </li>
                              <li>
                                <a
                                  target="blank"
                                  href="https://www.linkedin.com/in/ryan-mmbale-392220216/"
                                  className="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaLinkedin />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/_devryann/"
                                  className="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaInstagram />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="md:col-span-5"
                  data-aos="fade-left"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                >
                  <div className="flex gap-4 md:gap-6 tilt">
                    <div className="flex flex-col gap-4 md:gap-6 pt-10 md:pt-16 w-full">
                      <img loading="lazy" decoding="async"
                        src={Me}
                        className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                      <img loading="lazy" decoding="async"
                        src={imageO}
                        className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                      <div className="absolute bottom-0 end-0 -z-10">
                        <i
                          data-lucide="triangle"
                          className="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"
                        ></i>
                      </div>
                      <img loading="lazy" decoding="async"
                        src={imageP}
                        className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                      <img loading="lazy" decoding="async"
                        src={imageL}
                        className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
