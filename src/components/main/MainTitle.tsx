import { Stack } from "@/components/base/Container";
import { Header } from "@/components/base/Typography";
import { red } from "@/styles/color";

type MainTitleProps = {
  style?: React.CSSProperties;
};

const MainTitle: React.FC<MainTitleProps> = (props) => {
  const { style } = props;

  return (
    <Stack $gap={0} style={{ ...style, alignItems: "center" }}>
      <Header
        $ff="dela"
        style={{ color: red, fontSize: "5rem", marginBottom: "-1rem" }}
      >
        2024
      </Header>
      <Header $ff="jiugae" style={{ color: red, fontSize: "4rem" }}>
        밴드의 민족
      </Header>
    </Stack>
  );
};

export default MainTitle;
