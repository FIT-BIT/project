import React, { useEffect, useState, useRef } from "react";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import "./Yoga.css";

import {
  getAvgConfidence,
  getPoseVector,
  roundnum,
  cosineDistanceMatching,
} from "./utils";
import inputVideoPoses from "./input.json";
import PoseNetComponent from "./components/Posenet";

const FPS = 2;
const frameInterval = 1000 / FPS;
const SIMILARITY_THRESHOLD_EXCELLENT = 0.15;
const SIMILARITY_THRESHOLD_GOOD = 0.35;
const SIMILARITY_THRESHOLD_OKAY = 0.7;

const PlayerControlExample = () => {
  // const [score, setScore] = useState(0);
  const [pose, setPose] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    setIsMobile(
      /Android/i.test(navigator.userAgent) ||
        /iPhone|iPad|iPod/i.test(navigator.userAgent)
    );

    const interval = setInterval(() => {
      findSimilarity({ pose, currentTime });
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [pose, currentTime]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.subscribeToStateChange(handleStateChange);
    }
  }, []);

  const findSimilarity = ({ pose, currentTime }) => {
    if (currentTime && pose) {
      var avgConfidence = getAvgConfidence(pose.keypoints);

      if (avgConfidence > 0.4) {
        var nearestTime = roundnum(frameInterval, currentTime * 1000);
        var poseFromInputVideo =
          inputVideoPoses[(nearestTime / frameInterval).toString()];

        var remark = "";
        if (poseFromInputVideo) {
          var score = cosineDistanceMatching(
            getPoseVector(pose),
            poseFromInputVideo
          ).toFixed(2);

          if (score < SIMILARITY_THRESHOLD_EXCELLENT) {
            remark = `Very Good - ${score}`;
          } else if (score < SIMILARITY_THRESHOLD_GOOD) {
            remark = `Good - ${score}`;
          } else if (score < SIMILARITY_THRESHOLD_OKAY) {
            remark = `Bad - ${score}`;
          } else {
            remark = `Very Bad - ${score}`;
          }
        } else {
          remark = "Waiting For Instructor";
        }

        setStatus(remark);
      } else {
        setStatus(
          "Please Stand in Front of Camera with Whole body visible"
        );
      }
    } else {
      setStatus(
        "Please Stand in Front of Camera with Whole body visible"
      );
    }
  };

  const handleStateChange = (state) => {
    setCurrentTime(state.currentTime);
  };

  const handlePoseChange = (pose) => {
    setPose(pose);
  };

  return (
    <div>
      {isMobile ? (
        <div className="flex-container">
          <div className="status">Please Visit this Page On a Desktop</div>
        </div>
      ) : (
        <div>
          <header className="header">
            <a href="" className="logo">
              <span className="logo-name"> Yoga Pose Feedback</span>
            </a>
          </header>

          <div className="flex-container">
            <div className="player-container">
              <div className="video-header">Your Instructor 👇</div>
              <Player
                fluid={false}
                width={640}
                height={360}
                ref={playerRef}
                autoPlay
              >
                <source src="input.mp4" />
                <ControlBar autoHide={false} />
              </Player>
            </div>
            <div className="camera-container">
              <div className="video-header">You 👇</div>
              
              <PoseNetComponent onChange={handlePoseChange}>
                {(poses) => <div></div>}
              </PoseNetComponent>
            </div>
          </div>
          <div className="status">{status}</div>
          <div className="comment">
            The score is based on how well you copy the Instructor's pose
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerControlExample;
