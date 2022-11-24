import styled from "styled-components";

interface Props {
  includeMargin?: boolean;
  size?: number;
}

const Image = styled.img<Props>`
  width: ${(props) => (props.size ? props.size : "250")}px;
  height: ${(props) => (props.size ? props.size : "250")}px;
  object-fit: cover;
  border-radius: 5px;
  ${(props) => (props.includeMargin ? "margin: 1rem;" : "")}
`;
export default Image;
