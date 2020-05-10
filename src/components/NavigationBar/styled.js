import styled from "styled-components";

export const NavBar = styled.div`
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
      & img {
        height: 30px;
      }

      & span {
        color: whitesmoke;
      }
    }
  }
`
