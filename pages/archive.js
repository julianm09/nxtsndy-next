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

  @media (max-width: 500px) {
    transition: 0.5s ease;
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

  @media (max-width: 500px) {
    transition: 0.5s ease;
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
    transition: 0.5s ease;
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
    transition: 0.5s ease;
  }

`;


const TitleUI = styled.div`
font-size: 24px;
font-weight: 500;
position: absolute;
z-index: 1000;
opacity: 0%;
padding: 25px;
bottom: 0;
right: 0;

`


const ImageUI = styled.img`

 width:100%;
position: relative;
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: 1s ease;
  overflow: hidden;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;


const ImageContainerUI = styled.div`

  object-fit: contain;
position: relative;
cursor: pointer;
  &:hover ${TitleUI}{
    opacity: 100%;
    
      
      }

      &:hover ${ImageUI}{
        opacity: 20%;
        
          
          }

          background: ${props => props.color.primary};
  z-index: 1000;
  transition: 1s ease;
  
`;


const GridUI = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr ;
  grid-gap: 10px;
  position: relative;

  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  z-index: 1000;
  width: calc(100% / 7  * 5);
  transition: 1s ease;

  @media (max-width: 1200px) {
    width: 100%;
    grid-template-columns: 2fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 2fr;
  }

  @media (max-width: 500px) {
    transition: 0.5s ease;
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

   
   <ContainerUI>

   <GridUI style={{top: -scrollPosition / 5}}>
      {archive && archive.map((p) => (
                  <Link key={p._id} href={`/archive/${p.slug}`}>

              

                  
<ImageContainerUI color={color}>
  <TitleUI>{p.title}</TitleUI>
{p && <ImageUI objectFit="cover" src={urlFor(p.mainImage)} />}
</ImageContainerUI>

        </Link>
      ))}
    </GridUI>



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

  