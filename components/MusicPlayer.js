import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useHover } from "../helpers/useHover";
import NavSquare from "./NavSquare";
import { Play, FastForward, Rewind, Pause } from "react-feather";


const SquareUI = styled.div`
  background: white;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-weight: 500;

  background: ${(props) => props.color.primary};
  border: 1px solid ${(props) => props.color.secondary};
`;

const RowUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrackNameUI = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 200%;
  animation: scroll-track 8s linear infinite;
`;


const tracks = [
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20flicker.wav",
    title: "Caleb Klager - flicker",
  },
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20interference.wav",
    title: "Caleb Klager - interference",
  },
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20visions.wav",
    title: "Caleb Klager - visions",
  },
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20waking.wav",
    title: "Caleb Klager - waking",
  },
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20memory%20type.wav",
    title: "Caleb Klager - memory type",
  },
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20%20hologram.wav",
    title: "Caleb Klager - hologram",
  },
  {
    url: "https://media.githubusercontent.com/media/julianmayes/nxtsndy-next/main/public/caleb%20klager%20-%20sunday's%20light.wav",
    title: "Caleb Klager - sunday's light",
  },
];

export default function MusicPlayer({ dark, setDark, color, windowWidth }) {

  const [playing, setPlaying] = useState(false);
  const [song, setSong] = useState(0);
  
  let [playSong, setPlaySong] = useState("/" + tracks[song] + ".wav")

  return (
    <SquareUI color={color} className="nav">
      <RowUI>
        <Rewind
          style={{ margin: " 0 10px 0 0" }}
          onClick={() => {
            song == 0 ? setSong(6) : setSong(song - 1);
            document.getElementById("player").load();
            document.getElementById("player").play();
          }}
        />
        <Play
          onClick={() => {
            document.getElementById("player").play();

            setPlaying(true);
          }}
          style={{ margin: " 0 10px 0 0", display: playing ? "none" : "flex" }}
        />

        <Pause
          onClick={() => {
            document.getElementById("player").pause();
            document.getElementById("player").load();
            setPlaying(false);
          }}
          style={{ margin: " 0 10px 0 0", display: playing ? "flex" : "none" }}
        />
        <FastForward
          onClick={() => {
            song < 6 ? setSong(song + 1) : setSong(0);
            document.getElementById("player").load();
            document.getElementById("player").play();
            setPlaying(true)
          }}
        />
      </RowUI>

      <audio style={{width: '100%'}} id="player">
        <source src={tracks[song].url} type="audio/wav" />
        Your browser does not support the audio tag.
      </audio>

      <TrackNameUI target="_blank" href="https://linktr.ee/klagbass">
        {tracks[song].title}
      </TrackNameUI>
    </SquareUI>
  );
}
