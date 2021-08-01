import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useHover } from "../helpers/useHover";
import NavSquare from "./NavSquare";
import { Menu, X, Instagram} from "react-feather";

const HeaderUI = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;

`;

const ContainerUI = styled.div`
  padding: 50px 0 0 0;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: ${(props) => props.color.primary};

  position: relative;

  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const GridUI = styled.div`
  width: 100%;
  height: 15vw;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  grid-gap: 5px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const SquareUI = styled.div`
  background: white;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
  font-weight: 500;

  background: ${(props) => props.color.primary};
  border: 1px solid ${(props) => props.color.secondary};
`;

const LogoUI = styled.div`
  font-size: 60px;
  font-weight: 700;
  font-family: din-condensed, sans-serif;
  cursor: pointer;
  z-index: 100000;
`;

const MobileMenuButtonUI = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: flex;
    z-index: 100000;
  }
`;

const MobileMenuUI = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: grid;
    position: absolute;  
    flex-direction: column;
    grid-gap: 10px;
    grid-template-columns: 2fr;
    top: 100px;
    padding: 50px 0 0 0;
    left: 0;
    background: ${(props) => props.color.primary};
    width: 100%;
    height: 100vh;
    z-index: 10000;
  }
`;

const MobileSquareUI = styled.div`
  width: 100%;
  height: 5vh;
  height: 50px;
  border: 1px solid black;
  padding: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  &:hover{
    background: ${(props) => props.color.secondary};
    color: ${(props) => props.color.primary};
  }
  
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

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BannerInnerUI = styled.div`
  animation: 10s scroll linear infinite;
  -webkit-text-stroke-width: 1px;
  color: white;
  -webkit-text-stroke-color: ${(props) => props.color.secondary};
  font-family: "GeneralSans-Bold";
  color: ${(props) => props.color.primary};
`;

export default function Header({ dark, setDark, color, windowWidth }) {
  const [page, setPage] = useState("/");
  const [hoverRef, isHovered] = useHover();
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (windowWidth > 1000 && mobileNav) {
      document.body.style.overflow = "auto";
      setMobileNav(false);
    }
  }, [windowWidth]);

  const handleMobileMenu = () => {
    setMobileNav(!mobileNav);
    mobileNav
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <HeaderUI>
      <ContainerUI color={color}>
        <Link href="/">
          <LogoUI onClick={() => setPage("/")}>NXT SNDY</LogoUI>
        </Link>

        <MobileMenuButtonUI onClick={handleMobileMenu}>
          <Menu style={{ display: mobileNav ? "none" : "flex" }} />
          <X style={{ display: mobileNav ? "flex" : "none" }} />
        </MobileMenuButtonUI>
        <MobileMenuUI
          color={color}
          style={{ display: mobileNav ? "flex" : "none" }}
        >
          <Link href="/archive">
            <MobileSquareUI   onClick={handleMobileMenu} color={color}>archive</MobileSquareUI>
          </Link>

          <Link href="/showcase">
            <MobileSquareUI  onClick={handleMobileMenu} color={color}>showcase</MobileSquareUI>
          </Link>

          
          <Link href="/inspiration">
            <MobileSquareUI  onClick={handleMobileMenu} color={color}>inspiration</MobileSquareUI>
          </Link>

          <Link href="/contact">
            <MobileSquareUI  onClick={handleMobileMenu} color={color}>contact</MobileSquareUI>
          </Link>




          <Link href="/archive">
            <MobileSquareUI color={color}><Instagram/></MobileSquareUI>
          </Link>


        </MobileMenuUI>

        <GridUI>
          <NavSquare
            color={color}
            gridColumn="1 / span 2"
            gridRow="1 / span 2"
            link="archive"
            setPage={setPage}
            page={page}
          />

          <NavSquare
            color={color}
            gridColumn="3 / span 2"
            gridRow="1 / span 1"
            link="showcase"
            setPage={setPage}
            page={page}
          />

          <SquareUI
            color={color}
            className="nav"
            onClick={() => setDark(!dark)}
          />

          <NavSquare
            color={color}
            gridColumn="6 / span 1"
            gridRow="1 / span 2"
            link="inspiration"
            setPage={setPage}
            page={page}
          />

          <SquareUI color={color} className="nav" />
          <SquareUI color={color} className="nav" />

          <NavSquare
            color={color}
            gridColumn="4 / span 2"
            gridRow="2 / span 1"
            link="contact"
            setPage={setPage}
            page={page}
          />

          <SquareUI color={color} className="nav" />
        </GridUI>
      </ContainerUI>

      <BannerUI>
        {page === "/" ? (
          <BannerInnerUI color={color}>
            NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT
            SNDY NXT SNDY NXT SNDYNXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY
            NXT SNDY NXT SNDY NXT SNDYNXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT
          </BannerInnerUI>
        ) : (
          ""
        )}

        {page === "archive" ? (
          <BannerInnerUI color={color}>
            ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
            ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
            ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
          </BannerInnerUI>
        ) : (
          ""
        )}

        {page === "showcase" ? (
          <BannerInnerUI color={color}>
            SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE
            SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE
            SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE
          </BannerInnerUI>
        ) : (
          ""
        )}

        {page === "contact" ? (
          <BannerInnerUI color={color}>
            CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
            CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
            CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
          </BannerInnerUI>
        ) : (
          ""
        )}

        {page === "inspiration" ? (
          <BannerInnerUI color={color}>
            INSPIRATION INSPIRATION INSPIRATION INSPIRATION INSPIRATION
            INSPIRATION INSPIRATION INSPIRATION INSPIRATION INSPIRATION
            INSPIRATION INSPIRATION INSPIRATION INSPIRATION INSPIRATION
          </BannerInnerUI>
        ) : (
          ""
        )}
      </BannerUI>
    </HeaderUI>
  );
}
