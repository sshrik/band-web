import { Group } from "@/components/base/Container";
import { Header } from "@/components/base/Typography";
import { red } from "@/styles/color";

type OutlineContainerProps = {
  border?: number;
  title: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const OutlineContainer: React.FC<OutlineContainerProps> = (props) => {
  const { border = 1, title, style, onClick } = props;

  return (
    <Group
      onClick={onClick}
      style={{
        ...style,
        borderRadius: "64px",
        border: `${border}px solid ${red}`,
        fontWeight: 400,
      }}
    >
      <Header $ff="jiugae" style={{ color: red, marginBottom: "-0.5rem" }}>
        {title}
      </Header>
    </Group>
  );
};

export default OutlineContainer;
