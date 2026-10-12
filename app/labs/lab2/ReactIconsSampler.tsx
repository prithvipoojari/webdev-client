import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { GiMountainRoad } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { MdSchool } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <GiMountainRoad className="text-green-600" />
        <WiDaySunny className="text-yellow-500" />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdSchool className="text-4xl text-blue-600" />
        <HiRocketLaunch className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}