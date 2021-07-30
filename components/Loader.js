import styled from "styled-components";
import { useEffect, useState } from "react";

const HeaderUI = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  position: fixed;
  top: 0;
 
  z-index: 100000;
`;

const ContainerUI = styled.div`
  padding: 100px 0 0 0;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: white;
  height: 100vh;
  position: relative;
transition: 0.5s ease;
  @media(max-width: 1200px){
    width: 90%;
}


`;

const GridUI = styled.div`
  width: 100%;
  height: 250px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  grid-gap: 5px;


`;

const SquareUI = styled.div`
  border: 2px solid white;
  background: white;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
  font-weight: 600;



`;

const LogoUI = styled.div`
  font-size: 60px;
  font-weight: 700;
  font-family: din-condensed, sans-serif;
`;

const CoverUI = styled.div`
  width: 100%;
  height: 100px;
`;

const BannerUI = styled.div`
  font-size: 130px;
  font-weight: 700;

  position: fixed;
  display: flex;
  text-align: left;

  height: auto;
  width: 20000px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;
  transform: rotate(90deg) translateY(-30vw) translateX(50vw);
  z-index: -1000;


`;

const BannerInnerUI = styled.div`
  transition: 1s ease;

  animation: 10s scroll linear infinite;
  -webkit-text-stroke-width: 1px;
  color: white;
  -webkit-text-stroke-color: black;
  font-family: 'GeneralSans-Bold';

`;

export default function Loader({loading}) {

  const [background, setBackground] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setBackground(false)
    }, 2000)


  }, [])


  const [page, setPage] = useState("home");
  return (
    <HeaderUI style={{display: loading ? 'flex' : 'none'}}>
      <ContainerUI style={{opacity: background ? '100%' : '0%'}}>
        <LogoUI style={{opacity: 0}}>NXT SNDY</LogoUI>

        <GridUI>
          <SquareUI
            onClick={() => setPage('archive')}
            style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2", animation: '2s blink'  }}
          >
          
          </SquareUI>
          <SquareUI style={{ gridColumn: "3 / span 2", gridRow: "1 / span 1", animation: '2s blink 0.25s' }}>
          
          </SquareUI>

          <SquareUI style={{animation: '2s blink 0.5s' }} />

          <SquareUI style={{ gridColumn: "6 / span 1", gridRow: "1 / span 2", animation: '2s blink 0.75s' }}>
           
          </SquareUI>

          <SquareUI style={{animation: '2s blink 1s' }} />
          <SquareUI style={{animation: '2s blink 1.25s' }} />

          <SquareUI style={{ gridColumn: "4 / span 2", gridRow: "2 / span 1", animation: '2s blink 1.5s' }}>
           
          </SquareUI>

          <SquareUI style={{ animation: '2s black 1.75s' }}></SquareUI>
        </GridUI>
      </ContainerUI>



    </HeaderUI>
  );
}
