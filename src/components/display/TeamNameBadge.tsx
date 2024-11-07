import { Center } from "@/components/Container";
import { Header } from "@/components/Typography";
import { red } from "@/styles/color";

type TeamNameBadgeProps = {
  name: string;
};

const TeamNameBadge: React.FC<TeamNameBadgeProps> = (props) => {
  const { name } = props;

  return (
    <Center
      style={{
        border: `1px solid ${red}`,
        borderRadius: "20px",
        padding: "0.25rem",
        width: "100%",
      }}
    >
      <Header style={{ fontWeight: 900, color: red }}>{name}</Header>
    </Center>
  );
};

export default TeamNameBadge;
