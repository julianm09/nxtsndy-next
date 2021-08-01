import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ContactForm from "../components/ContactForm";
import ShowcaseList from "../components/ShowcaseList";
import {showcaseQuery} from '../lib/sanity/showcaseQuery'
import { client } from "../lib/sanity/client";

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
width: calc(100% / 7 * 5);

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
  opacity: 50%;
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

export default function Showcase({ dark, scrollPosition, color, windowWidth, showcase }) {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(showcase)

  return (
    <div>
  

  <SectionUI>
        <ContainerUI>
          <TextContainerUI>
            <HeaderUI style={{ top: scrollPosition / 10 }}>
            A collection born from collaborations.
            </HeaderUI>
            <SubHeaderUI style={{ top: scrollPosition / 5 }}>
              Collaboration
            </SubHeaderUI>
          </TextContainerUI>


        </ContainerUI>

        <ContainerUI>
      

        <ShowcaseList color={color} showcase={showcase} scrollPosition={scrollPosition}/>


    
        </ContainerUI>

     

     

      </SectionUI>

    </div>
  );
}


export async function getStaticProps({ params }) {
  const showcase = await client.fetch(showcaseQuery);



  return {
    props: {
      showcase,

    },
  };
}
