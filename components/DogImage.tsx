import styled from "styled-components";

interface Props {
  includeMargin?: boolean;
}

const Image = styled.img<Props>`
  width: 250px;
  height: 250px;
  object-fit: cover;
  ${(props) => (props.includeMargin ? "margin: 1rem;" : "")}
`;
export default Image;
