import { Group } from "@/components/base/Container";
import { To, useNavigate } from "react-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import { Text } from "@/components/base/Typography";

type BackButtonProps = {
  to: To;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const { to, children, style } = props;

  const navigate = useNavigate();

  return (
    <Group
      $gap="0.25rem"
      onClick={() => navigate(to)}
      style={{
        ...style,
        alignItems: "center",
        position: "absolute",
        left: "1rem",
        top: "1rem",
      }}
    >
      <ChevronLeft style={{ width: "12px" }} />
      <Text $size="sm">{children}</Text>
    </Group>
  );
};

export default BackButton;
