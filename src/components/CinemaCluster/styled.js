import styled from 'styled-components'

export const StyledCinemaCluster = styled.div`
padding-top: 60px;
margin-top: -60px;

  .container-cinema-cluster {
    
    .list-group {
    height: 500px;
      background-color: white;
      overflow: scroll;
      img.cluster-logo {
        width: 50px;
      }
    }
    .activeCluster{
    background-color: #f8f9fa;
    font-weight: 700;
    }
    .normalCluster{
    background-color: white;
    &:hover{
    background-color: #f8f9fa;
    }
    }
  }

`
