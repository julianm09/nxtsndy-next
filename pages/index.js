import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ContactForm from "../components/ContactForm";

const SectionUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  overflow: hidden;
  font-size: 100px;
`;

const HologramContainerUI = styled.div`
  width: calc(100% / 7 * 2);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  height: 500px;

  z-index: 0;
  position: relative;
  transition: 1s ease;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const HologramUI = styled.img`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
z-index: 100;
  transition: 0.2s ease;
`;

const ContainerUI = styled.div`
  width: 70%;
  margin: 100px 0 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;


  font-size: 100px;
  position: relative;
  transition: 1s ease;

  @media (max-width: 1200px) {
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TextContainerUI = styled.div`
  width: calc(100% / 7 * 4);
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const HeaderUI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  word-wrap: break-word;

  font-size: 48px;
  font-weight: 400;
  position: relative;
  transition: 1s ease;

  z-index: 100;

  @media (max-width: 1200px) {
    font-size: 36px;
  }
`;

const SubHeaderUI = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: relative;
  transition: 1s ease;

  font-size: 16px;
  font-weight: 400;
  z-index: 100;
  margin: 50px 0 0 0;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const ImageUI = styled.div`

  position: relative;
  transition: 1s ease;
display: flex;
flex-direction: column;
z-index: 1000;
  @media (max-width: 1200px) {
    width: 100%;
 
  }
`;


export default function Home({ dark, scrollPosition }) {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <Loader loading={loading} />

      <SectionUI>
        <ContainerUI>
          <TextContainerUI>
            <HeaderUI style={{ top: scrollPosition / 10 }}>
              We are NXT SNDY, the multidisciplinary duo orchestrating the
              creative collective. We aim to create what we value through the
              help of other artists.
            </HeaderUI>
            <SubHeaderUI style={{ top: scrollPosition / 5 }}>
              Collaboration | Artistry | Longevity
            </SubHeaderUI>
          </TextContainerUI>

          <HologramContainerUI
            style={{ top: scrollPosition / 2 }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {dark ? (
              <>
                <HologramUI
                  style={{ opacity: hover ? "0%" : "100%" }}
                  src="/nxt_hologram_white.gif"
                />
                <HologramUI
                  style={{
                    transform: "translateX(0px)",
                    opacity: hover ? "100%" : "0%",
                  }}
                  src="/nxt_hologram_colour.gif"
                />
              </>
            ) : (
              <>
                <HologramUI
                  style={{ opacity: hover ? "0%" : "100%" }}
                  src="/nxt_hologram_black.gif"
                />
                <HologramUI
                  style={{
                    transform: "translateX(6px) translateY(8px)",
                    opacity: hover ? "100%" : "0%",
                  }}
                  src="/nxt_hologram_colour_white.gif"
                />
              </>
            )}
          </HologramContainerUI>
        </ContainerUI>



        <ContainerUI>
          <ImageUI style={{top: -scrollPosition / 10 }}>
            <Image width="100%" height="100%" src="/profile1.jpg"/>
            <SubHeaderUI >
              Sota Mori 
            </SubHeaderUI>
          </ImageUI>

          <ImageUI style={{top: -scrollPosition / 15 , left: scrollPosition / 10}}>
            <Image width="100%" height="100%" src="/profile2.jpg"/>
            <SubHeaderUI >
              Tom Powers
            </SubHeaderUI>
          </ImageUI>
     
        </ContainerUI>

        <ContainerUI>
<ContactForm/>
     
        </ContainerUI>
      </SectionUI>
    </div>
  );
}
