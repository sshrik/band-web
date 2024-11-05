import styled from "styled-components";

type ContainerProps = {
  $p?: number | string;
  $m?: number | string;
  $gap?: number | string;
  $noWrap?: boolean;
};

const toPixel = (value?: number | string) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

export const Stack = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  gap: ${(props) => toPixel(props.$gap) ?? "0"};
  margin: ${(props) => toPixel(props.$m) ?? "0"};
  padding: ${(props) => toPixel(props.$p) ?? "0"};

  white-space: ${(props) => (props.$noWrap ? "nowrap" : "normal")};
`;

export const Group = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  gap: ${(props) => toPixel(props.$gap) ?? "0"};
  margin: ${(props) => toPixel(props.$m) ?? "0"};
  padding: ${(props) => toPixel(props.$p) ?? "0"};

  white-space: ${(props) => (props.$noWrap ? "nowrap" : "normal")};
`;

export const Center = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${(props) => toPixel(props.$gap) ?? "0"};
  margin: ${(props) => toPixel(props.$m) ?? "0"};
  padding: ${(props) => toPixel(props.$p) ?? "0"};
`;

export const Flex = styled.div<ContainerProps>`
  display: flex;

  gap: ${(props) => toPixel(props.$gap) ?? "0"};
  margin: ${(props) => toPixel(props.$m) ?? "0"};
  padding: ${(props) => toPixel(props.$p) ?? "0"};
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;

  @media (min-width: 375px) {
    padding-top: 2rem;
  }

  @media (min-width: 390px) {
    padding-top: 7rem;
  }
`;
