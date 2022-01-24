// styled system
import styled from "styled-components";

// -------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  padding: 62px 36px 0px 110px;

  @media screen and (max-width: 1200px) {
    padding: 62px 20px 0px 70px;
  }
  @media screen and (max-width: 1024px) {
    padding: 10px 10px 0px 20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 120px;
  height: 150px;
  @media screen and (max-width: 1024px) {
    width: 80px;
    height: 100px;
  }
`;

export const Select = styled.select`
  margin-right: 20px;
  width: 200px;
  height: 45px;
  border-radius: 20px;
  padding-left: 20px;

  border: 0.5px solid rgba(224, 224, 255, 0.4);

  appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  background: url(image/dropdown.png) no-repeat 93% rgba(255, 255, 255, 0.4);

  font-size: 18px;
  font-weight: 600;
  font-family: Montserrat;

  & > :nth-child(odd) {
    background-color: white;
  }
  & > :nth-child(even) {
    background-color: #e7e7e7;
  }

  /* @media screen and (max-width: 1200px) {
    width: 200px;
  }
  @media screen and (max-width: 1024px) {
    width: 150px;
  } */
`;

export const Option = styled.option`
  font-size: 18px;
  font-weight: 600;
  font-family: Montserrat;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CreateButton = styled.div`
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  animation-duration: 2s;

  width: 140px;
  height: 45px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  position: relative;
  z-index: 0;

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -3px;
    left: -3px;
    z-index: -1;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    opacity: 1;
    border-radius: 20px;
  }
  :hover::before {
    filter: blur(3px);
    background-size: 400%;
    animation: "glowing" 6s linear forwards 1;
    animation-iteration-count: infinite;
    transition: opacity 0.85s ease-in-out;
  }
  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 20px;
    background-color: #202124;
  }
  /* @media screen and (max-width: 1200px) {
    width: 120px;
  }
  @media screen and (max-width: 1024px) {
    width: 100px;
  } */
`;

export const Button = styled.div`
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  animation-duration: 2s;

  width: 200px;
  height: 58px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  position: relative;
  z-index: 1;

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -3px;
    left: -3px;
    z-index: -1;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    opacity: 1;
    border-radius: 23px;
  }
  :hover::before {
    filter: blur(3px);
    background-size: 400%;
    animation: "glowing" 6s linear forwards 1;
    animation-iteration-count: infinite;
    transition: opacity 0.85s ease-in-out;
  }
  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 23px;
    background-color: #202124;
  }
  /* @media screen and (max-width: 1200px) {
    width: 200px;
  }
  @media screen and (max-width: 1024px) {
    width: 150px;
  } */
`;
export const Backdiv = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: -10px;
  background: linear-gradient(
    89.37deg,
    #fffc84 -24.98%,
    #84ffcf -15.26%,
    #7ce2cf 1.52%,
    #72deff 20.07%,
    #8081e5 32.44%,
    #f44bf1 51%,
    #ff8484 62.48%
  );
`;
