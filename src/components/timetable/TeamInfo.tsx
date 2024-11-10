import { Group, Stack } from "@/components/base/Container";
import { Text } from "@/components/base/Typography";
import OrderBadge from "@/components/display/OrderBadge";
import TeamNameBadge from "@/components/display/TeamNameBadge";
import Members from "@/components/timetable/Members";
import { Team } from "@/models/Team";
import { darkGray } from "@/styles/color";
import { useNavigate } from "react-router";

type TeamInfoProps = {
  team: Team;
};

const TeamInfo: React.FC<TeamInfoProps> = (props) => {
  const { team } = props;

  const { startAt, endAt, teamName, members, additionalMembers, teamId } = team;

  const navigate = useNavigate();

  const handleNavigate = (teamId: number) => {
    navigate(`/setList/${teamId}`);
  };

  return (
    <Group key={teamId} $gap="0.5rem" onClick={() => handleNavigate(teamId)}>
      <OrderBadge order={teamId} style={{ marginTop: "1.57rem" }} />
      <Stack $gap="0.25rem" style={{ flex: 1 }}>
        <Text
          $size="xl"
          style={{ paddingLeft: "1rem", color: darkGray, fontWeight: 800 }}
        >{`${startAt} - ${endAt}`}</Text>
        <TeamNameBadge name={`${teamName} >>`} />
        <Members members={members} additionalMembers={additionalMembers} />
      </Stack>
    </Group>
  );
};

export default TeamInfo;
