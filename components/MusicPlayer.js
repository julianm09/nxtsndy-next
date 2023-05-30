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

  @media (max-width: 1000px) {
    height: 150px;
  }
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
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/1+-+flicker.wav",
    title: "Caleb Klager - flicker",
  },
  {
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/2+-+interference.wav",
    title: "Caleb Klager - interference",
  },
  {
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/3+-+visions.wav",
    title: "Caleb Klager - visions",
  },
  {
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/4+-+Waking.wav",
    title: "Caleb Klager - waking",
  },
  {
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/5+-+memory+type.wav",
    title: "Caleb Klager - memory type",
  },
  {
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/6+-+hologram.wav",
    title: "Caleb Klager - hologram",
  },
  {
    url: "https://nxt-sndy.s3.us-west-2.amazonaws.com/7+-+sunday_s+light.wav",
    title: "Caleb Klager - sunday's light",
  },
];

export default function MusicPlayer({ dark, setDark, color, windowWidth }) {
  const [playing, setPlaying] = useState(false);
  let [song, setSong] = useState(0);
  const [loading, setLoading] = useState(false);

  const play = () => {


    document.getElementById("playerSource").src = tracks[song].url;

    document.getElementById("player").load();

    document.getElementById("player").play();

    setPlaying(true);
  };

  return (
    <SquareUI color={color} className="nav">
      <RowUI>
        <Rewind
          style={{ margin: " 0 10px 0 0" }}
          onClick={() => {
            if (song < 7 && song > 0){

              let prev = song - 1;

              setSong(prev);


              document.getElementById("playerSource").src = tracks[prev].url;

              document.getElementById("player").load();
        
              document.getElementById("player").play();
            
              setPlaying(true)

            } else{

              let prev = 6;

              setSong(prev);


              document.getElementById("playerSource").src = tracks[prev].url;

              document.getElementById("player").load();
        
              document.getElementById("player").play();
            
              setPlaying(true)
            }
          }}
        />
        <Play
          onClick={() => {

            document.getElementById("playerSource").src = tracks[song].url;
        
            document.getElementById("player").load();
        
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

              if (song < 6){

                let next = song + 1;

                setSong(next);
  
                document.getElementById("playerSource").src = tracks[next].url;
  
                document.getElementById("player").load();
          
                document.getElementById("player").play();
              
                setPlaying(true)

              } else{

                let next = 0;

                setSong(next);
  
                document.getElementById("playerSource").src = tracks[next].url;
  
                document.getElementById("player").load();
          
                document.getElementById("player").play();
              
                setPlaying(true)
              }


        




        
          }}
        />
      </RowUI>

      <audio style={{ width: "100%" }} id="player">
        <source src={tracks[0].url} type="audio/wav" id="playerSource" />
        Your browser does not support the audio tag.
      </audio>

      <TrackNameUI target="_blank" href="https://linktr.ee/klagbass">
        {tracks[song].title}
      </TrackNameUI>
    </SquareUI>
  );
}
