import styled from "styled-components";

export const NavBar = styled.nav`
  .navbar-collapse {
    justify-content: center;

    & .nav-link {
      font-size: 1rem;
      color: whitesmoke;

      &:hover {
        color: red !important;
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

  .normalItem {
    color: white;

    &:hover {
      color: green!important;
    }
  }
  .actived-item{
  color: red!important;
  }
  .some-active-class{
  color: red!important;
  }
`
