"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";
import img1 from "./images/IMG.png";
import prof from "./images/prof1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typed from "typed.js";
import img from "./images/logo.png";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "./Footer";
function MainPage() {
  const [clicked3, setclicked3] = useState(false);
  const [clicked1, setclicked1] = useState(true);
  const [clicked2, setclicked2] = useState(false);

  const [text, settext] = useState({
    title: "skills",
    info: [
      {
        title: "Web Development",
        details: "MERN stack developer with 3 years of experience",
      },
      {
        title: "App Development",
        details: "React Native developer",
      },
      {
        title:"Machine Learning",
        details:"Machine Learning using Python"
      }
    ],
  });
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const info = {
    skills: {
      title: "skills",
      info: [
        {
          title: "Web Development",
          details: "MERN stack developer with 3 years of experience",
        },
        {
          title: "App Development",
          details: "React Native developer",
        },
        {
          title:"Machine Learning",
          details:"Machine Learning using Python"
        },
      ],
    },
    education: {
      title: "educaton",
      info: [
        {
          title: "Bachelor Of Technology",
          details: "KIIT University,Bhubaneswar",
        },
      ],
    },
    experiences: {
      title: "experiences",
      info: [
        {
          title: "Internship",
          details: "Done internship under Techsellence Pvt.Ltd. for 2 months",
        },
      ],
    },
  };
  const templateParams = {
    user_name: name,
    user_email: email,
    message: msg,
  };
  const sentemail = () => {
    if (
      templateParams.user_name.length < 3 ||
      templateParams.user_email.length < 5 ||
      templateParams.message.length < 2
    ) {
      toast.error("Sorry! please fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE,
          process.env.NEXT_PUBLIC_TEMPLATE,
          templateParams,
          process.env.NEXT_PUBLIC_API_KEY
        )
        .then(
          () => {
            toast.success("Yay! Message Sent Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setname("");
            setemail("");
            setmsg("");
          },
          (err) => {
            console.log("FAILED...", err);
            setname("");
            setemail("");
            setmsg("");
          }
        );
    }
  };

  useEffect(() => {
    setname("");
    setemail("");
    setmsg("");
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "App Developer"],
      typeSpeed: 100,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const el = useRef(null);
  const toggletext = (name) => {
    if (name == "b1") {
      setclicked1(true);
      setclicked2(false);
      setclicked3(false);
      settext(info.skills);
    } else if (name == "b2") {
      setclicked1(false);
      setclicked2(true);
      setclicked3(false);
      settext(info.experiences);
    } else if (name == "b3") {
      setclicked1(false);
      setclicked2(false);
      setclicked3(true);
      settext(info.education);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="md:flex z-30 justify-between px-10 w-screen items-center font-semibold shadow-lg shadow-slate-800 bg-slate-900 p-5 sticky top-0  text-white ">
        <Link href={"/"}>
          {" "}
          <div className="logo flex justify-center items-center space-x-2 cursor-pointer ">
            <Image width={40} height={40} src={img} alt="img" className="rounded-full border-1 border-white"/>
            <span className="hover:text-blue-500 ">
              Bibaswan&apos;s Portfolio
            </span>
          </div>
        </Link>
        <div className="lists flex items-center md:space-x-10  justify-evenly pt-2 md:pt-0">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-blue-500  hover:scale-105"
          >
            Home
          </Link>
          <Link
            href={"/#about"}
            className="cursor-pointer hover:text-blue-500 hover:scale-105"
          >
            About
          </Link>
          <Link
            href={"/#projects"}
            className="cursor-pointer hover:text-blue-500 hover:scale-105"
          >
            Projects
          </Link>
          <Link
            href={"/#contact"}
            className="cursor-pointer hover:text-blue-500 hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <section id="home" className="p-5 h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center mx-auto justify-evenly text-white">
          <div className="right text-center">
            <div className="mx-auto">
              <div className="md:flex items-center justify-center text-3xl space-x-1">
                <span>Hi,my name is </span>
                <span className="text-blue-600">Bibaswan Nandi</span>
              </div>
              <span className="text-gray-400 text-center text-xl ">
                and I am passionate
              </span>
              <div className="h-14">
                <span className="text-blue-600 text-3xl " ref={el} />
              </div>
            </div>
            <div className="buttons my-1  md:flex items-center justify-center space-x-2">
              <a href="resume.pdf" download="resume.pdf" target="_blank">
                {" "}
                <button className="bg-blue-600 mx-auto flex items-center justify-center  text-white rounded-md px-4 py-2">
                  <AiOutlineCloudDownload className="mx-1 text-lg" /> Download
                  Resume
                </button>
              </a>
              <a
                target="_blank"
                className="flex items-center justify-center md:mt-0 mt-2"
                href="https://github.com/Bibaswan03"
              >
                {" "}
                <button className="bg-blue-600 flex items-center justify-center  text-white rounded-md px-4 py-2">
                  <AiFillGithub className="mx-1 text-lg" /> Github
                </button>
              </a>
            </div>
          </div>
          <div className="left ">
            <Image
              className="lazy  md:w-full h-full w-[95%] md:mt-12  "
              src={img1}
              alt="img"
              width={500}
              height={550}
            />
          </div>
        </div>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <section id="about" className="p-10   h-full md:h-[85vh]">
        <div className="md:flex  mx-auto justify-evenly text-white">
          <div className="left">
            <Image
              className="lazy rounded-lg shadow-sm shadow-slate-600"
              src={prof}
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <div className="right md:p-10 p-4">
            <h1 className="text-blue-400 text-center md:text-start  font-bold text-3xl">
              About Me
            </h1>
            <p className="text-justify mb-4">
              I am a full stack web devloper and currenty i am in <br /> 3rd
              year B.Tech CSE in Kiit Bhubaneswar.
            </p>
            <div>
              <div
                className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                role="group"
              >
                <button
                  onClick={() => {
                    toggletext("b1");
                  }}
                  type="button"
                  className={`inline-block rounded-r ${
                    clicked1 ? "border-b-2 border-blue-600" : ""
                  }    bg-primary px-4 md:px-14 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700`}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    toggletext("b2");
                  }}
                  type="button"
                  className={`inline-block rounded-r ${
                    clicked2 ? "border-b-2 border-blue-600" : ""
                  }    bg-primary px-4 md:px-14 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700`}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Experiences
                </button>
                <button
                  onClick={() => {
                    toggletext("b3");
                  }}
                  type="button"
                  className={`inline-block rounded-r ${
                    clicked3 ? "border-b-2 border-blue-600" : ""
                  }    bg-primary px-4 md:px-14 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700`}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Education
                </button>
              </div>
              {text && (
                <div className="details text-white">
                  <h1 className="text-2xl text-blue-200 py-4 font-bold">
                    {text.title.toUpperCase()}
                  </h1>
                  {Object.values(text.info).map((item, i) => {
                    return (
                      <div key={i}>
                        <p className="text-xl text-blue-500">{item.title}</p>
                        <p className="p-2 text-md">{item.details}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="pb-10 " id="projects">
        <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
        <h1 className="text-blue-400 text-center pt-2 px-20 md:text-start  font-bold text-3xl">
          Projects
        </h1>
        <div className="lg:grid  grid-cols-3 bg-transparent lg:grid-flow-row-dense lg:gap-2 p-6   md:px-24 flex flex-wrap mt-8 ">
          <div className="h-full w-fit   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img
                className="h-[300px] w-[400px] object-cover object-left transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src="https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg"
                alt="crud_op"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                CRUD Operation
              </h1>

              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
              <button className="rounded bg-blue-500  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href="https://github.com/Bibaswan03/crud-UserGivenData">Explore  &rarr;</a>
              </button>
            </div>
          </div>
          <div className="h-full w-fit   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img
                className="h-[300px] w-[400px] object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src="data:image/png;base64,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"
                alt="Facebook_login"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Facebook Login
              </h1>

              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
              <button className="rounded bg-blue-500  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href="https://github.com/Bibaswan03/Facebook-login">Explore  &rarr;</a>
              </button>
            </div>
          </div>
          <div className="h-full w-fit   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img
                className="h-[300px] w-[400px] object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src="https://play-lh.googleusercontent.com/NntMALIH4odanPPYSqUOXsX8zy_giiK2olJiqkcxwFIOOspVrhMi9Miv6LYdRnKIg-3R=w240-h480-rw"
                alt="Google_auth"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Google auth
              </h1>

              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
              <button className="rounded bg-blue-500   py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <Link href={"https://github.com/Bibaswan03/google-authentication"}>
                  Explore  &rarr;
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://github.com/debangan03/">
            <button className="relative inline-flex bg-blue-500 hover:bg-slate-700 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg text-white hover:shadow-md hover:shadow-slate-500">
              <span className="relative px-5 py-2.5 transition-all ease-in hover:bg-blue-500 duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                See More &rarr;
              </span>
            </button>
          </a>
        </div>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <section className="contact md:px-20 px-2" id="contact">
        <h1 className="text-blue-400 text-center pt-2 md:text-start  font-bold text-3xl">
          Contact Me
        </h1>
        <section className="text-gray-800 body-font rounded relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d576.4637378354091!2d88.38690672824079!3d22.882979782228418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUyJzU5LjIiTiA4OMKwMjMnMTMuNyJF!5e1!3m2!1sen!2sin!4v1690724894852!5m2!1sen!2sin"
              />
              <div className="bg-slate-800 relative flex flex-wrap px-2 py-6 md:px-2 rounded shadow-md">
                <div className="w-1/2 hidden md:block">
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-blue-500">
                    Chuchura,Hooghly,West Bengal,India
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <div className="md:hidden py-2">
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-blue-500">
                    Chuchura,Hooghly,West Bengal,India
                  </p>
                  </div>
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:nandibibaswan19@gmail.com"
                    className="text-blue-500 leading-relaxed"
                  >
                    nandibibaswan19@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <a
                    href="tel:+919330277953"
                    className="leading-relaxed text-blue-500"
                  >
                    +91 9330277953
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 shadow-lg shadow-slate-600 bg-slate-900 flex flex-col md:ml-auto w-full px-4 md:py-8 py-6 mt-8 md:mt-0">
              <h2 className="text-blue-400 text-xl mb-1 font-medium title-font">
                Let&apos;s Talk
              </h2>

              <form>
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  id="name"
                  name="name"
                  className="w-full mb-2 bg-slate-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mb-2 bg-slate-700  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  value={msg}
                  id="message"
                  name="message"
                  className="w-full mb-2 bg-slate-700  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />

                <button
                  type="button"
                  onClick={sentemail}
                  className="text-white w-full bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <Footer />
    </>
  );
}

export default MainPage;
