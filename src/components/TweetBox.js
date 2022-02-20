/* eslint-disable @next/next/no-img-element */
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { useState } from "react";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");

  const postTweet = e => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row border-b border-[#38444d] px-4 pb-4">
      <div className="mr-4">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I6ue6ul3ozCcUYNy63qPsdyJ5zRRK5GenxA4mELWg=s64-c-mo"
          alt="Profile Picture"
          className="h-12 w-12 rounded-full"
        />
      </div>

      <div className="flex-1">
        <form action="">
          <textarea
            className="h-full w-full bg-transparent text-lg outline-none"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={e => setTweetMessage(e.target.value)}
          />

          <div className="flex">
            <div className="flex flex-1 items-center text-[#1d9bf0]">
              <BsCardImage className="mr-2" />
              <RiFileGifLine className="mr-2" />
              <RiBarChartHorizontalFill className="mr-2" />
              <BsEmojiSmile className="mr-2" />
              <IoMdCalendar className="mr-2" />
              <MdOutlineLocationOn className="mr-2" />
            </div>
            <button
              type="submit"
              disabled={!tweetMessage}
              onClick={e => postTweet(e)}
              className={`rounded-3xl px-6 py-2 font-bold ${
                tweetMessage
                  ? "bg-[#1d9bf0] text-white"
                  : "bg-[#196195] text-[#95999e]"
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
