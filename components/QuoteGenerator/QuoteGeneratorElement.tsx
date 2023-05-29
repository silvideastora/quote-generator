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

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 70vw;
  border: 2px solid #000;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  z-index: 2;

  background:rgba(0, 0, 70, 0.3);
  box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.10);
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  position: absolute;
  width:100%;
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 400;
  text-align: center;
  color: white;
  padding: 0px 20px;
  position: relative;
  /*Media query*/
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
export const QuoteGeneratorSubTitle = styled.div`
  color: white;
  font-family: 'Montserat', sans-serif;
  font-size: 35px;
  font-weight: 100;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0px 20px;

  /*media query*/
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
export const GenerateQuoteBtn = styled.div`
  height: 100px;
  width: 300px;
  border: 2px solid #fffb;
  border-radius: 20px;

  margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  transform-origin: center;

  background: #9d23ee;
  box-shadow: 0 8px 32 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
`;
export const GenerateQuoteBtnText = styled.div`
  color: white;
  font-size: 25px;
  font-family: 'Inter';
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
`;