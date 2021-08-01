import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ContactForm from "../components/ContactForm";
import ArchiveList from '../components/ArchiveList'
import { archiveQuery } from "../lib/sanity/archiveQuery";
import { client } from "../lib/sanity/client";
import Link from "next/link";
import urlFor from "../lib/sanity/urlFor";



const SectionUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  overflow: hidden;
  font-size: 100px;
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

  @media (max-width: 500px) {
    transition: 0s ease;
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

  @media (max-width: 500px) {
    transition: 0s ease;
  }

`;

const SubHeaderUI = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  opacity: 50%;
  position: relative;
  transition: 1s ease;

  font-size: 16px;
  font-weight: 400;
  z-index: 100;
  margin: 50px 0 0 0;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    transition: 0s ease;
  }

`;


export default function Archive({ dark, scrollPosition, color, windowWidth, archive}) {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);

  

  return (
    <div>
  

      <SectionUI>
        <ContainerUI>
          <TextContainerUI>
            <HeaderUI style={{ top: scrollPosition / 10 }}>
                A history of the evolution of NXT SNDY.
            </HeaderUI>
            <SubHeaderUI style={{ top: scrollPosition / 5 }}>
              Longevity
            </SubHeaderUI>
          </TextContainerUI>


        </ContainerUI>

   
   <ContainerUI style={{top: windowWidth < 500 ? 0 : -scrollPosition / 5 }}>

<ArchiveList color={color} archive={archive}/>



   </ContainerUI>




       


     

     

      </SectionUI>
    </div>
  );
}


export async function getStaticProps({ params }) {
    const archive = await client.fetch(archiveQuery);
  

  
    return {
      props: {
        archive,
  
      },
    };
  }

  