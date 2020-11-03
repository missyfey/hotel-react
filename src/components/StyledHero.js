import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

const StyledHero = styled.header`
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 55vh;
  background-image: url(${(props => props.img ?  props.img : defaultImg)} );
`

export default StyledHero
