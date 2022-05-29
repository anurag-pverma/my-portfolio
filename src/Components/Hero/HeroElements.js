import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  
  flex-direction: column;
  padding-top: 150px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media (max-width: 600px) {
    padding-top: 25px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2rem;
    color: crimson;
    font-weight: 400;
    font-family: 'Quicksand', sans-serif;

  }
  h6{
    font-size: 25px;
    color: blueviolet;
  }
  h3{
    font-size: 2rem;
    color: crimson;
    font-weight: 400;
    font-family: 'Quicksand', sans-serif;
  }
 

  i{
    font-size: 1.6rem;
    color: chocolate;
    margin-bottom: 1rem;
    font-weight: bold;
    font-family: 'Caveat', cursive;
    
  }
  .one{
    color: red;
    font-size: 30px;
  }

  p {
    font-size: 17px;
    color: rgb(119, 119, 121);
    
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
`;





 export const ScrollLink = styled.div`
   display: flex;
   align-items: center;
   font-size: 1.3rem;
   color: #f6f6f6
   img {
     height: 35px;
     width: 35px;
     margin-left: 6px;
   }
 `; 
