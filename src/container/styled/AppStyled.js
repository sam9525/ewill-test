import styled, {createGlobalStyle} from 'styled-components'

import bg1 from '../images/bg1.png'
import white_wave from '../images/white_wave.png'
import sup from '../images/sup.svg'
import paddle from '../images/paddle.svg'
import bubble from '../images/bubble.svg'
import sup_fireworks from '../images/sup_fireworks.svg'
import fireworks from '../images/fireworks.svg'
import wave from '../images/wave.png'
import turtle from '../images/turtle.svg'
import sand from '../images/sand.png'
import arrow from '../images/arrow.svg'


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    position: relative;
  }
  html, body {
    font-family: '微軟正黑體', 'Noto Sans TC';
    background-color: #E2D9D3;
  }
  a{
    text-decoration: none;
  }
  .container {
    padding: 0 24px;
  }
`

export const StyledWrapper = styled.div`
  overflow-x: hidden;
  
  .row {
    width: 600px;
    margin: 0 auto;
    padding-top: 64px;
  }
  .row {
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .col-lg-4, .col-md-6 {
    float: left;
    padding: 0;
    margin: 0;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }

  @media screen and (max-width: 600px) {
    .row {
      max-width: 414px;
    }
    .col-md-6 {
      width: 50%;
    }
  }

`

export const StyledHeader = styled.div`
  background-image: url(${bg1});
  background-size: cover;
  
  .container {
    padding-bottom: 52px;
  }
  .white_wave {
    position: absolute;
    height: 700px;
    background-image: url(${white_wave});
    background-size: cover;
  }
  .title {
    text-align: center;
    padding-top: 60px;

    font-weight: 700;
    font-style: normal;
    color: white;
    letter-spacing: 0.2em;
  }
  .one {
    font-size: 30px;
    line-height: 40px;
  }
  .two {
    font-size: 28px;
    line-height: 35px;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 57px;
    margin: 32px auto;
    cursor: pointer;
    color: white;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    background: transparent;
    border: none;

    z-index: 1;

    &:before {
      content: "";

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background: #B57556;
      border-radius: 50px;
      z-index: -1;
    }
    &:after {
      content: "";
      position: absolute;
      left: -2px;
      top: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);

      background: linear-gradient(124deg,#ff2400, #e81d1d, #e8b71d, #e3e81d, 
                  #1de840, #1ddde8, #2b1de8, #dd00f3,#dd00f3 );
      background-size: auto;
      background-size: 400%;
      border-radius: 50px;
      filter: blur(5px);
      z-index: -2;
      
      transition: all 0.3s ease-in-out;
      animation: move 20s linear infinite;
    }
    &:active:before {
      background: #D3A995;
    }
  }
  @keyframes move{
    0%{ background-position: 0 0; }
    50%{ background-position: 400% 0; }
    100%{ background-position: 0 0; }
  }
  .parabox {
    max-width: 808px;
    margin: 0 auto;
    background: #DAE4F1;
    border: 2px solid #B57556;
    border-radius: 20px;
  }
  .box {
    padding: 24px 16px;
  }
  .box_1 {
    padding: 24px 16px 0 16px;
  }
  .sup {
    position: absolute;
    right: 18px;
    top: -32px;
    z-index: 2;
    width: 80px;
    height: 64px;

    background-image: url(${sup});
  }
  .paddle {
    position: absolute;
    right: 20px;
    top: -20px;
    z-index: 2;
    width: 62px;
    height: 45.75px;

    background-image: url(${paddle});

    animation: swing 4s linear infinite;
  }
  @keyframes swing {
    from {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  .bubble {
    position: absolute;
    right: 46px;
    top: -53px;
    z-index: 2;
    width: 20px;
    height: 20px;

    background-image: url(${bubble});

    animation: fadeInUp 2s linear infinite;
  }
  .bubble2 {
    position: absolute;
    right: 30px;
    top: -80px;
    z-index: 2;
    width: 12px;
    height: 12px;

    background-image: url(${bubble});
    background-size: cover;

    animation: fadeInUp 2s linear infinite;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .sup_fireworks {
    position: absolute;
    left: 35px;
    bottom: -40px;
    z-index: 2;
    width: 68px;
    height: 67px;

    background-image: url(${sup_fireworks});
    transform: rotate(-4.53deg);
  }
  .fireworks {
    position: absolute;
    left: 10px;
    bottom: -53px;
    z-index: 2;
    width: 58px;
    height: 58px;

    background-image: url(${fireworks});
    background-size: cover;

    animation: firework 2s linear infinite;
  }
  @keyframes firework { 
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .para_title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
    text-align: center;
    color: #204379;
    padding-bottom: 24px;
  }
  .para {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: #204379;
  }
  .focus_1 {
    font-weight: 800;
    text-decoration: underline;
  }
  .focus_2 {
    font-weight: 800;
  }
`

export const StyledWave = styled.div`
  width: 500%;
  height: 110px;
  background-repeat: repeat-x;
  background-image: url(${wave});
  
  animation: wave 12s linear infinite;
  
  @keyframes wave {
      to {
        transform: translateX(-3128px);
    }
  }
`

export const StyledForm = styled.div`
  padding: 80px 0;
  .form{
    max-width: 808px;
    margin: 0 auto;
  
    background-color: #fff;
    border: 2px solid #B57556;
    box-shadow: 0px 1px 20px rgba(73, 72, 72, 0.25);
    border-radius: 16px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 123px;
    height: 43px;
    top: -30px;
    left: 50%;
    padding-left: 10px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.2em;

    color: #B57556;
    background: #FFFFFF;
    border: 2px solid #B57556;
    box-shadow: 0px 1px 10px rgba(73, 72, 72, 0.25);
    border-radius: 50px;

    transform: translateX(-50%);
  }
  .turtle {
    position: absolute;
    width: 57px;
    height: 53px;
    top: -10px;
    left: 82%;

    transform: matrix(0.99, 0.15, -0.14, 0.99, 0, 0);
    background-image: url(${turtle});
  }
  .select_box {
    padding: 20px 20px 0 20px;
  }
  .select_box:nth-last-child(5) {
    padding-top: 40px;
  }
  .select_box:nth-last-child(1) {
    padding-bottom: 40px;
  }
  .select_title {
    padding-top: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    color: #204379;
  }
  .red {
    color: #B57556;
    padding-left: 4px;
  }
  .name.border_red, .phone.border_red, .amount.border_red {
    border: 3px solid #E06D6D;
  }
  input:focus {
    border: 3px solid #93BBF9;
  }
  select {
    cursor: pointer;
    appearance: none;
    background:url(${arrow}) right 16px center no-repeat;
  }
  select:focus {
    border: 3px solid #93BBF9;
  }
  .store, .name, .phone, .amount, .payment, .react-dropdown-select-input {
    width: 100%;
    height: 57px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    outline: none;
    border: 1px solid #204379;
    border-radius: 20px;
    padding: 17.5px 16px;
  }
  .react-dropdown-select-input {
    border: none;
    padding: 0;
    margin-right: 30px;
  }
  .store input:focus {
    border: none;
  }
  .store .react-dropdown-select-input {
    width: 70%;
    top: -18px;
  }
  .store .react-dropdown-select-content {
    top: 18px;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    
    margin: 50px auto;
    width: 200px;
    height: 57px;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.2em;
    color: white;

    background: #B57556;
    box-shadow: 0px 4px 10px rgba(40, 35, 35, 0.35), 0px -4px 10px rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    border: none;

    &:active {
      background-color: #D3A995;
    }
  }
  .failure {
    color: #FFE3E3;
  }
  .success {
    color: #E6FFB1;
  }
  .disNone {
    display: none;
  }
`

export const StyledLottery = styled.div`
  display: flex;
  justify-content: center;
  
  min-height: 531px;
  background-image: url(${sand});
  
  .prize {
    height: 112px;
    margin: 0 16px;
    margin-bottom: 41px;

    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 8px 0px #EDEEF0;
    border-radius: 20px;
  }
  
  @media screen and (max-width: 400px) {
    .prize {
      width: 85%;
      margin: 0 8px;
      margin-bottom: 41px;
    }
  }
  img {
    position: absolute;
    top: -25px;
    left: 50%;

    transform: translateX(-50%);
  }
  .level {
    position: absolute;
    top: -3px;
    left: 50%;

    font-style: normal;
    font-weight: 700;
    font-size: 16.916px;
    line-height: 125%;
    text-transform: uppercase;
    text-align: center;

    color: #FFFFFF;

    transform: translateX(-50%);
  }
  .green {
    color: #B3B960;
    border: 1px solid #B3B960;
  }
  .blue {
    color: #A0BCC8;
    border: 1px solid #A0BCC8;
  }
  .number {
    position: absolute;
    top: 18px;
    right: 8px;
    width: 45px;
    height: 23px;
    padding: 2px 9px;

    background: #FAFAFA;
    border-radius: 50px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    text-transform: uppercase;
  }
  .text {
    position: absolute;
    width: 100%;
    height: 44px;
    bottom: 10px;

    border: none;

    justify-content: center;
    align-items: center;
    text-align: center;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
  }
`

export const StyledLighthouse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin:40px auto;

  .brown {
    color: #b57556;
  }
  .dark_blue {
    color: #204379;
  }
  .text {
    padding:0 9px 20px;
    width: 274px;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
  }
  .slash {
    position: absolute;
    width: 20px;
    height: 75px;
    left: 5%;
    top: 4px;

    border-left: 1px solid #204379; 
    
    transform: rotate(-20deg);
  }
  .slash:nth-child(1) {
    left: 88%;

    border-left: 0;
    border-right: 1px solid #204379; 
    
    transform: rotate(20deg);
  }
`

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #204379;
  border-radius: 50px 50px 0px 0px;
  .title {
    width: 303px;
    padding: 40px 0 24px;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 200%;

    text-align: center;
    letter-spacing: 0.1em;

    color: #FFFFFF;
  }
  img {
    margin-bottom: 40px;
  }
`