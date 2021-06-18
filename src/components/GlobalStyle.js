import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
       padding: 0;
       margin: 0;
       box-sizing: border-box;
}

body{
       background:#1b1b1b;
       font-family: 'Lobster', cursive;
       font-family: 'Poppins', sans-serif;
       overflow-x: hidden;
}

html{
    @media (max-width: 1000px){
        font-size: 75%;
    }
    
}

button{
       font-weight: bold;
       font-size: 1.1rem;
       cursor: pointer;
       padding: 1rem 2rem;
       border: 3px solid #23d997;
       background: transparent;
       color:white;
       transition: all 0.5s ease;
       &:hover{
              background-color: #23d997;
              color: white;
       }
}
h2{
       font-weight: lighter;
       font-size: 2.5rem;
}
h3{
       color: white;
}
h4{
       font-weight: bold;
       font-size: 1.2rem;
}
a{
       font-size: 1.1rem;
}
span{
       font-weight: bold;
       color: #23d997;
}
p{
       padding:  1rem 0rem;
       color: #ccc;
       font-size: 1rem;
       line-height: 150%    ;
}
`;

export default GlobalStyle;
