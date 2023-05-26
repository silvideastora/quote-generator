import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";


export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #000046, #9d23ee);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  width: 100vw;
  height: 100vh;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const BackgroundImg = styled(Image)`
  position:fixed;
  z-index:1;
  right:-120px;
  bottom:-10px;
  background: transparent;
`;
export const BackgroundImg2 = styled(Image)`
  position:fixed;
  z-index:1;
  left:-120px;
  top:-10px;
  background: transparent;
`;
export const FooterCon = styled.div`
  width:100vw;
  height:50px;
  text-align:center;
  font-family:'Inter', sans-serif;
  font-size: 0.938rem;
  position: absolute;
  bottom: 0%;
  color: #fff;
  z-index: 2;
`;
export const FooterLink = styled(Link)`
  color: #fff;
`;