import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
ol, ul{
  list-style: none;
}
a{
  text-decoration: none;
	color: #fff;
}
html {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}
.fz-aws-1{
  font-size: 1rem !important;
}
.fz-aws-1-5{
  font-size: 1.5rem !important;
}
.fz-aws-1-8{
  font-size: 1.8rem !important;
}
.fz-aws-2{
  font-size: 2rem !important;
}
.fz-aws-2-4{
  font-size: 2.4rem !important;
}
.fz-aws-3{
  font-size: 3rem !important;
}
`;
