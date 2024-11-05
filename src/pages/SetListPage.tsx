import { Center, Group, PageWrapper, Stack } from "@/components/Container";
import { Caption, Text } from "@/components/Typography";
import { Song } from "@/models/Song";
import { Team } from "@/models/Team";

type SetListPageProps = {
  team: Team;
  songs: Song[];
};

const SetListPage: React.FC<SetListPageProps> = (props) => {
  const { team, songs } = props;

  const { startAt, endAt, teamId, teamName, members } = team;

  return (
    <PageWrapper>
      <Text>Set List</Text>
      <Group>
        <Text>{teamId}</Text>
        <Stack>
          <Group>
            <Text>{startAt}</Text>
            <Text>~</Text>
            <Text>{endAt}</Text>
          </Group>
          <Text>{teamName}</Text>
        </Stack>
      </Group>
      <Group>
        {members.map((member, index) => (
          <Text key={index}>{member}</Text>
        ))}
      </Group>
      <Stack>
        {songs.map((song, index) => (
          <Group key={index}>
            <Text>{song.name}</Text>
            <Text>-</Text>
            <Text>{song.artist}</Text>
          </Group>
        ))}
      </Stack>
      <Center style={{ padding: "4px" }}>
        <Caption $size="sm">
          Copyright 2024. 밴드의 민족. All rights reserved.
        </Caption>
      </Center>
    </PageWrapper>
  );
};

export default SetListPage;
