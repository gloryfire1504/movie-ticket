import styled from "styled-components";

export const NavBar = styled.div`
#navbar{
//width: 100%;
height: 60px;
//overflow-x: hidden;

}
  .navbar-collapse {
    justify-content: center;
overflow: visible !important;
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
  .nav-others{
  font-weight: 700;
  font-size: 18px!important;
  }
`
