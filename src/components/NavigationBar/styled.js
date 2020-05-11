import styled from "styled-components";

export const NavBar = styled.nav`
  .navbar-collapse {
    justify-content: center;

    & .nav-link {
      font-size: 1rem;
      color: whitesmoke;

      &:hover {
        color: seagreen !important;
      }
    }
  }

  .navbar-secondary {
  
    & a {
      align-items: center;

      & .fa-user-circle {
        width: 30px;
        height: 30px;
      }

      & span {
        color: whitesmoke;
      }
    }
  }

  .activeNavLink {
    color: red !important;
  }
`
