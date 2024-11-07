import { Center } from "@/components/Container";
import { Caption } from "@/components/Typography";

type FooterProps = {
  style?: React.CSSProperties;
};

const Footer: React.FC<FooterProps> = (props) => (
  <Center
    style={{
      position: "absolute",
      bottom: "4px",
      padding: "4px",
      ...props?.style,
    }}
  >
    <Caption $size="sm">
      Copyright 2024. 밴드의 민족. All rights reserved.
    </Caption>
  </Center>
);

export default Footer;
