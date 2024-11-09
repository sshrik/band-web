import { Center } from "@/components/Container";
import { Header } from "@/components/Typography";
import { red } from "@/styles/color";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";

type TeamNameBadgeProps = {
  name: string;
  withArrow?: boolean;
};

const TeamNameBadge: React.FC<TeamNameBadgeProps> = (props) => {
  const { name, withArrow } = props;

  return (
    <Center
      style={{
        border: `1px solid ${red}`,
        borderRadius: "20px",
        padding: "0.25rem 0px",
        width: "100%",
        height: "3.25rem",
        justifyContent: withArrow ? "space-between" : "center",
      }}
    >
      {withArrow && <div />}
      <Header
        style={{
          fontFamily: "Jiugae",
          fontWeight: 400,
          color: red,
          marginBottom: "-0.5rem",
        }}
      >
        {name}
      </Header>
      {withArrow && <ChevronRight style={{ stroke: red }} />}{" "}
    </Center>
  );
};

export default TeamNameBadge;
