"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Components/Logo";
import { navInfo } from "../Utility/data";
import Link from "next/link";
import RegisterButton from "../Components/RegisterButton";
import { useRouter } from "next/navigation";
import Starg from "../Components/Starg";
import Starw from "../Components/Starw";
import Starp from "../Components/Starp";
import Flare from "../Components/Flare";
import RegisterModal from "../Components/RegisterModal";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [topic, setTopic] = useState("");
  const [cartegory, setCartegory] = useState(0);
  const [size, setSize] = useState(0);
  const [check, setCheck] = useState(false);

  let base = "https://backend.getlinked.ai";

  const getCategory = async () => {
    try {
      const res = await axios.get(`${base}/hackathon/categories-list`);
      setCategory(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    () => setShowModal(true);
    try {
      const url = `${base}/hackathon/registration`;
      const data: {
        email: string;
        phone_number: string;
        team_name: string;
        group_size: number;
        project_topic: string;
        category: number;
        privacy_poclicy_accepted: boolean;
      } = {
        email: email,
        phone_number: phone,
        team_name: team,
        group_size: size,
        project_topic: topic,
        category: cartegory,
        privacy_poclicy_accepted: check,
      };
      const config: any = { "content-type": "application/json" };
      const response = await axios.post(url, data, config);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="h-fit lg:h-[100vh] px-[2rem] lg:px-[8rem] relative flex items-center justify-center">
      <RegisterModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />

      <Flare
        className={"left-[4rem] top-[3rem] lg:left-[5rem] lg:top-[10rem]"}
      />
      <Flare className={"left-[72rem] hidden lg:flex top-[25rem] h-[20rem]"} />
      <Starp
        className={"top-[8rem] left-[5rem] lg:top-[7rem] lg:left-[15rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <Starw
        className={"top-[35rem] right-[2rem] lg:top-[15rem] lg:right-[5rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <Starg
        className={"bottom-[1rem] left-[1rem] lg:bottom-[4rem] lg:left-[9rem]"}
        aspect={"h-4 lg:h-6"}
      />
      <nav
        className={`h-[4.5rem] lg:h-[7rem] fixed top-0 lg:pt-[1.5rem] w-[100%] px-[2rem] lg:px-[8rem] hidden lg:flex lg:items-center lg:justify-between z-30 `}
      >
        <Logo />
        <div className="w-[35%] hidden lg:flex justify-around">
          {navInfo.map((e, i) => (
            <Link className="text-[1rem] font-[400]" key={i} href={e.route}>
              {e.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <RegisterButton />
        </div>
      </nav>
      <div className="w-[100%] py-[2.5rem] lg:mt-8 lg:pt-[2rem] relative flex flex-col lg:flex-row items-center">
        <img
          className="h-8 absolute flex lg:hidden top-18 left-0"
          src="/images/back.png"
          alt="back"
          onClick={() => router.push("/")}
        />
        <p className="w-[100%] lg:hidden text-[0.95rem] pt-[3.5rem] font-[700] text-left text-[#D434FE]">
          Register
        </p>
        <div className="lg:w-[50%] w-[10rem] lg:h-[100%]">
          <img
            src="/images/register.png"
            width={490}
            height={480}
            alt="register"
          />
        </div>
        <div className="lg:w-[50%] h-[100%] ">
          <div className="w-[100%] px-4 lg:p-[3rem] font-montserrat lg:bg-[#fff] lg:bg-opacity-5  rounded-md flex-col">
            <p className="hidden lg:flex text-[1.1rem] lg:text-[1.2rem] font-[700] text-[#D434FE]">
              Questions or need assistance?
            </p>
            <p className="hidden lg:flex text-[1.1rem] lg:text-[1.2rem] font-[700] text-[#D434FE] mb-4">
              Let us know about it!
            </p>
            <div className="text-[0.8rem] flex items-end lg:hidden lg:text-[1.2rem] font-[400] mb-4">
              <p>Be part of this movement!</p>
              <div className="w-[30%] flex border-b-[2px] border-dashed border-[#D434FE]">
                <img src="/images/man.png" alt="man" />
                <img src="/images/woman.png" alt="woman" />
              </div>
            </div>
            <p className="text-[1rem] lg:hidden lg:text-[1.2rem] font-[400] mb-4">
              CREATE YOUR ACCOUNT
            </p>
            <form className="w-[100%] forms grid grid-cols-2 gap-x-4">
              <section className="mb-4 col-span-2 lg:col-span-1">
                <label htmlFor="team_name">Team's Name</label>
                <input
                  className="w-[100%] bg-inherit border text-[0.85rem] px-2 py-[0.45rem] rounded-[0.25rem]"
                  type="text"
                  name="team_name"
                  id="team_name"
                  value={team}
                  onChange={(e) => {
                    setTeam(e.target.value);
                  }}
                  placeholder="Enter the name of your group"
                  required
                />
              </section>
              <section className="mb-4 col-span-2 lg:col-span-1">
                <label htmlFor="phone_no">Phone</label>
                <input
                  className="w-[100%] bg-inherit border text-[0.85rem] px-2 py-[0.45rem] rounded-[0.25rem]"
                  type="text"
                  name="phone_no"
                  id="phone_no"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter your phone number"
                  required
                />
              </section>
              <section className="mb-4 col-span-2 lg:col-span-1">
                <label htmlFor="email">Email</label>
                <input
                  className="w-[100%] bg-inherit border text-[0.85rem] px-2 py-[0.45rem] rounded-[0.25rem]"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your phone number"
                  required
                />
              </section>
              <section className="mb-4 col-span-2 lg:col-span-1 ">
                <label htmlFor="project_topic">Project Topic</label>
                <input
                  className="w-[100%] bg-inherit border text-[0.85rem] px-2 py-[0.45rem] rounded-[0.25rem]"
                  type="text"
                  name="project_topic"
                  id="project_topic"
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                  placeholder="Enter your project topic"
                  required
                />
              </section>
              <section className="w-[9rem] lg:w-[auto] mb-4">
                <label htmlFor="category">Category</label>
                <select
                  className="w-[100%] bg-inherit border text-[0.85rem] px-2 py-[0.45rem] rounded-[0.25rem]"
                  name="category"
                  id="category"
                  value={cartegory}
                  onChange={(e: any) => {
                    setCartegory(e.target.value);
                  }}
                  required
                >
                  <option className="text-[#150e28]" value="null">
                    Select your category
                  </option>
                  {category.map((e: any, i) => (
                    <option className="text-[#150e28]" key={i} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </section>
              <section className="mb-4 w-[7rem] lg:w-[auto]">
                <label htmlFor="category">Group Size</label>
                <input
                  className="w-[100%] bg-inherit border text-[0.85rem] px-2 py-[0.45rem] rounded-[0.25rem]"
                  name="group-size"
                  type="number"
                  id="group_size"
                  value={size}
                  onChange={(e: any) => {
                    setSize(e.target.value);
                  }}
                  required
                />
              </section>
              <p className="text-[0.85rem] col-span-2 text-[#D434FE]">
                Please review your registration details before submitting
              </p>
              <section className="text-[0.85rem] col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms_agreement"
                  id="terms_agreement"
                />
                I agreed with the event terms and conditions and privacy policy
              </section>
              <section className="col-span-2">
                <button
                  type="submit"
                  className="w-[100%] h-[3rem] mt-4 rounded-[0.25rem] bg-gradient-to-r from-[#D434FE] to-[#903AFF] 
                  hover:border hover:border-[#903AFF] hover:bg-clip-text hover:text-transparent hover:border-6 hover:text-[1.1rem]"
                  onSubmit={handleSubmit}
                >
                  Register Now
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
