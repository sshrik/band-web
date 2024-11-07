import { Link } from "react-router-dom";
import styled from "styled-components";

// 16px 기준

type TypographyProps = {
  $bold?: boolean;
  $italic?: boolean;
  $underline?: boolean;
  $ff?: "nove" | "aileron" | (string & {});
  // 12.15px, 15.3px, 16px, 17.3px, 18.7px, 20px
  $size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

export const Text = styled.p<TypographyProps>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case "xs":
        return "0.76rem";
      case "sm":
        return "0.96rem";
      case "md":
        return "1rem";
      case "lg":
        return "1.08rem";
      case "xl":
        return "1.17rem";
      case "xxl":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
  white-space: nowrap;
  word-break: break-all;
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};
`;

export const Anchor = styled(Link)<TypographyProps>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case "xs":
        return "0.75rem";
      case "sm":
        return "0.875rem";
      case "md":
        return "1rem";
      case "lg":
        return "1.125rem";
      case "xl":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  text-decoration: ${({ $underline }) => ($underline ? "underline" : "none")};

  :visited,
  :hover,
  :active {
    color: inherit;
  }
`;

type CaptionProps = Omit<TypographyProps, "$size"> & {
  // 10px, 9.3px
  $size?: "sm" | "md";
};

export const Caption = styled(Text)<CaptionProps>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "0.625rem";
      case "md":
        return "0.58rem";
      default:
        return "0.625rem";
    }
  }};
`;

type HeaderProps = {
  // 21.3px, 31.9px, 38.9px
  $size?: "sm" | "md" | "lg";
};

export const Header = styled.h1<HeaderProps>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "1.33rem";
      case "md":
        return "2rem";
      case "lg":
        return "2.44rem";
      default:
        return "2rem";
    }
  }};
  font-weight: bold;
`;
