import React, { useEffect, useState, useRef } from 'react';
import { load, PoseNet } from '@tensorflow-models/posenet';

const MILLISECONDS = 500;
const maxVideoSize = 500;

const PoseNetComponent = ({ onChange, children }) => {
  const [poses, setPoses] = useState([]);
  const [video, setVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const loadPosenet = async () => {
      const net = await load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        flipHorizontal: true
      });
      return net;
    };

    const initCapture = async () => {
      if (!videoRef.current || !videoRef.current.videoWidth) {
        setTimeout(initCapture, MILLISECONDS);
        return;
      }

      const videoElement = videoRef.current;

      const allposes = await PoseNet.estimateMultiplePoses(videoElement, {
        flipHorizontal: false,
        maxDetections: 1,
        scoreThreshold: 0.6,
        nmsRadius: 10
      });

      if (allposes.length > 0) {
        setPoses(allposes[0]);
      }

      if (onChange && allposes.length > 0) {
        onChange(allposes[0]);
      }

      setTimeout(initCapture, MILLISECONDS);
    };

    const setupCamera = async () => {
      const videoElement = videoRef.current;
      videoElement.width = maxVideoSize;
      videoElement.height = maxVideoSize;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const mobile = isMobile();
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: 'user',
            width: mobile ? undefined : maxVideoSize,
            height: mobile ? undefined : maxVideoSize
          }
        });
        videoElement.srcObject = stream;
      }
    };

    const isMobile = () => {
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      return isAndroid || isiOS;
    };

    const loadVideo = async () => {
      const videoElement = videoRef.current;
      await setupCamera(videoElement);
      videoElement.play();
      return videoElement;
    };

    const initialize = async () => {
      const net = await loadPosenet();
      setVideo(await loadVideo());
      setTimeout(initCapture, MILLISECONDS);
    };

    initialize();
  }, [onChange]);

  if (!children) {
    return null;
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <video className="video" playsInline ref={videoRef} />
      {children(poses)}
    </div>
  );
};

export default PoseNetComponent;
