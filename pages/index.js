import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const SectionUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
 height: 300vh;
  overflow: hidden;
  font-size: 100px;
 

`;

const HologramContainerUI = styled.div`

width: calc(100% / 7 * 2);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  height: 500px;

  z-index: 0;

  @media(max-width: 800px){
    width:  100%;
}

`;

const HologramUI = styled.img`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const ContainerUI = styled.div`
  width: 70%;
  margin: 100px 0 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
 height: 300vh;
  overflow: hidden;
  font-size: 100px;


  @media(max-width: 1200px){

  
}

  @media(max-width: 1200px){
    width: 90%;
 
}


@media(max-width: 1000px){
  flex-direction: column;
}
`;


const HeaderUI = styled.div`
  width: calc(100% / 7 * 4);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 48px;
  font-weight: 400;
 
  z-index: 100;
  @media(max-width: 1200px){
    width: 100%;

}

@media(max-width: 1200px){
  font-size: 36px;
}

`;

const SubHeaderUI = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  overflow: hidden;
  font-size:16px;
  font-weight: 400;
  z-index: 100;
  margin: 50px 0 0 0;

  @media(max-width: 1200px){
    width: 100%;
}

`;


export default function Home() {

  const [hover, setHover] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setLoading(false)
    }, 4000)


  }, [])

  return (
    <div>

      <Loader loading={loading}/>

      <SectionUI>






        <ContainerUI>


          <HeaderUI>
          We are NXT SNDY, the multidisciplinary duo orchestrating the creative collective.

           We aim to create what we value through the help of other artists.

          

          <SubHeaderUI>
          Collaboration | Artistry | Longevity
          </SubHeaderUI>
          
          </HeaderUI>

       
          
        <HologramContainerUI onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <HologramUI style={{opacity: hover ? '0%' : '100%'}} src="/nxt_hologram_black.gif" />
          <HologramUI style={{transform: 'translateX(8px)', opacity: hover ? '100%' : '0%'}} src="/nxt_hologram_colour_white.gif" />
        </HologramContainerUI>

        </ContainerUI>


      </SectionUI>

            

    </div>
  );
}
