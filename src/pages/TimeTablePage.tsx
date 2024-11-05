import { Center, Group, PageWrapper, Stack } from "@/components/Container";
import { Caption, Text } from "@/components/Typography";
import { Team } from "@/models/Team";

type TimeTablePageProps = {
  teams: Team[];
};

const TimeTablePage: React.FC<TimeTablePageProps> = (props) => {
  const { teams } = props;

  return (
    <PageWrapper>
      <Text>Time Table</Text>
      <Stack>
        {teams.map((team) => {
          const { startAt, endAt, teamName, members, teamId } = team;

          return (
            <Group key={teamId}>
              <Text>{teamId}</Text>
              <Stack>
                <Group>
                  <Text>{startAt}</Text>
                  <Text>~</Text>
                  <Text>{endAt}</Text>
                </Group>
                <Text>{teamName}</Text>
                <Group>
                  {members.map((member, index) => {
                    return (
                      <>
                        <Text key={index}>{member}</Text>
                        {index !== members.length - 1 && <Text>·</Text>}
                      </>
                    );
                  })}
                </Group>
              </Stack>
            </Group>
          );
        })}
      </Stack>
      <Center style={{ padding: "4px" }}>
        <Caption $size="sm">
          Copyright 2024. 밴드의 민족. All rights reserved.
        </Caption>
      </Center>
    </PageWrapper>
  );
};

export default TimeTablePage;
