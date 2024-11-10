import { Center } from "@/components/base/Container";
import { Caption } from "@/components/base/Typography";

type FooterProps = {
  style?: React.CSSProperties;
};

const Footer: React.FC<FooterProps> = (props) => (
  <Center style={{ ...props?.style, paddingBottom: "1rem" }}>
    <Caption $size="sm">
      Copyright 2024. 밴드의 민족. All rights reserved.
    </Caption>
  </Center>
);

export default Footer;
