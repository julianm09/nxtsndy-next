import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useHover } from "../helpers/useHover";
import { archiveQuery } from "../lib/sanity/archiveQuery";
import urlFor from "../lib/sanity/urlFor";
import Image from "next/image";
import PortableText from "react-portable-text";

const ContainerUI = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
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
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 2fr;
  }

`;



const PostContainerUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px 0;
  z-index: 1000;
  transition: 1s ease;
  cursor: pointer;

  
`;

const PostUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  



  @media (max-width: 800px) {
    flex-direction: column;
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






export default function InspirationList({ inspiration, scrollPosition, color }) {
  console.log(inspiration);

  return (
    <ContainerUI>
      {inspiration && inspiration.sort((a, b) => (b.publishedAt < a.publishedAt ? -1 : 1)).map((p) => (
                  <Link key={p._id} href={`/inspiration/${p.slug}`}>

              

                  
<ImageContainerUI color={color}>
  <TitleUI>{p.title}</TitleUI>
{p && <ImageUI objectFit="cover" src={urlFor(p.mainImage)} />}
</ImageContainerUI>

        </Link>
      ))}
    </ContainerUI>
  );
}
