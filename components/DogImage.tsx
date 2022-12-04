import styled from "styled-components";
import NextImage from "next/image";
interface Props {
  includeMargin?: boolean;
  size?: number;
}

const Image = styled(NextImage)<Props>`
  object-fit: cover;
  border-radius: 5px;
  ${(props) => (props.includeMargin ? "margin: 1rem;" : "")}
`;
export default Image;
