import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center welcome-message">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">You have zero posts</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            This is the platform that allows you to share your feelings and
            helps you to stay connected with the people that you want. It also
            lets you share your pictures and videos. Feel free to use our
            platform.
            <BsEmojiSmileFill />
          </p>
        </div>

      </div>
    </div>
  );
};

export default WelcomeMessage;
