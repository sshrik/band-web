import { Center } from "@/components/base/Container";
import { Header } from "@/components/base/Typography";
import { red } from "@/styles/color";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import OutlineContainer from "@/components/display/OutlineContainer";

type TeamNameBadgeProps = {
  name: string;
  withArrow?: boolean;
};

const TeamNameBadge: React.FC<TeamNameBadgeProps> = (props) => {
  const { name, withArrow } = props;

  return (
    <>
      <OutlineContainer title="" />
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
    </>
  );
};

export default TeamNameBadge;
