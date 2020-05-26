import styled from "styled-components";

export const FooterStyled = styled.div`

  section {
    @background_color_1: transparent;
    padding: 60px 0;

    .section-title {
      text-align: center;
      margin-bottom: 50px;
      text-transform: uppercase;
    }
  }

  #footer {
    //background: #007b5e !important;

    h5 {
      padding-left: 10px;
      border-left: 3px solid #eeeeee;
      padding-bottom: 6px;
      margin-bottom: 20px;
      color: #ffffff !important;
    }

    a {
      color: #ffffff !important;
      text-decoration: none !important;
      background-color: @background_color_1;
      -webkit-text-decoration-skip: objects;
    }

    ul.social {
      li {
        padding: 3px 0;

        a {
          i {
            margin-right: 5px;
            font-size: 25px;
            -webkit-transition: .5s all ease;
            -moz-transition: .5s all ease;
            transition: .5s all ease;
          }

          color: #ffffff !important;

          &:hover {
            color: @color_3;
          }
        }

        &:hover {
          a {
            i {
              font-size: 30px;
              margin-top: -10px;
            }
          }
        }
      }
    }

    ul.quick-links {
      li {
        a {
          color: #ffffff !important;

          i {
            margin-right: 5px;
          }
        }

        padding: 3px 0;
        -webkit-transition: .5s all ease;
        -moz-transition: .5s all ease;
        transition: .5s all ease;

        &:hover {
          padding: 3px 0;
          margin-left: 5px;
          font-weight: 700;

          a {
            i {
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    #footer {
      h5 {
        padding-left: 0;
        border-left: transparent;
        padding-bottom: 0px;
        margin-bottom: 10px;
      }
    }
  }


`