import { Group, PageWrapper, Stack } from "@/components/Container";
import OrderBadge from "@/components/display/OrderBadge";
import TeamNameBadge from "@/components/display/TeamNameBadge";
import Footer from "@/components/Footer";
import { Header, Text } from "@/components/Typography";
import { Song } from "@/models/Song";
import { Team } from "@/models/Team";
import { darkGray, gray } from "@/styles/color";
import { useNavigate, useParams } from "react-router";
import LeftIcon from "@/assets/icons/chevron-left.svg";
import SetListImage from "@/assets/images/SetListImage.png";

type SetListPageProps = {
  teams: Team[];
  songs: Song[][];
};

const SetListPage: React.FC<SetListPageProps> = (props) => {
  const { teams, songs } = props;

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  if (!id || !teams[Number(id) - 1]) {
    return <PageWrapper>Not Found Page</PageWrapper>;
  }

  const {
    startAt,
    endAt,
    teamId,
    teamName,
    members,
    additionalMembers = [],
  } = teams[Number(id) - 1];

  const songList = songs[Number(id) - 1];

  return (
    <PageWrapper style={{ paddingTop: 0, gap: "2rem" }}>
      <Group
        $gap="0.5rem"
        onClick={() => navigate("/timetable")}
        style={{
          alignItems: "center",
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
      >
        <img src={LeftIcon} alt="chevron-left" />
        <Text>목록으로 돌아가기</Text>
      </Group>
      <img
        src={SetListImage}
        alt="SetListImage"
        style={{ width: "15rem", height: "auto", paddingBottom: "2rem" }}
      />
      <Group key={teamId} $gap="0.5rem" style={{ width: "calc(100% - 4rem)" }}>
        <OrderBadge order={teamId} style={{ marginTop: "1.3rem" }} />
        <Stack $gap="0.25rem" style={{ width: "calc(100% - 3.25rem)" }}>
          <Group $gap="0.25rem" style={{ paddingLeft: "1rem" }}>
            <Text $size="xl" style={{ fontWeight: 800, color: darkGray }}>
              {startAt}
            </Text>
            <Text $size="xl" style={{ fontWeight: 800, color: darkGray }}>
              -
            </Text>
            <Text $size="xl" style={{ fontWeight: 800, color: darkGray }}>
              {endAt}
            </Text>
          </Group>
          <TeamNameBadge name={teamName} />
        </Stack>
      </Group>
      <Group
        $gap="1rem 2rem"
        style={{
          flexWrap: "wrap",
          width: "100%",
          padding: "1rem 2rem",
          backgroundColor: gray,
          justifyContent: "center",
        }}
      >
        {[...members, ...additionalMembers].map((member, index) => (
          <Text key={index} $size="xl">
            {member}
          </Text>
        ))}
      </Group>
      <Stack $gap="2rem" style={{ width: "calc(100% - 5rem)" }}>
        {songList.map((song, index) => (
          <Group
            $gap="1rem"
            key={index}
            style={{
              borderBottom: `1px solid ${darkGray}`,
              alignItems: "center",
            }}
          >
            <Header style={{ fontWeight: 700, color: darkGray }}>
              {index + 1}
            </Header>
            <Group $gap="0.3rem">
              <Header $size="sm" style={{ whiteSpace: "pre", fontWeight: 400 }}>
                {song.artist}
              </Header>
              <Header $size="sm" style={{ whiteSpace: "pre", fontWeight: 600 }}>
                -
              </Header>
              <Header $size="sm" style={{ whiteSpace: "pre", fontWeight: 600 }}>
                {song.name}
              </Header>
            </Group>
          </Group>
        ))}
      </Stack>
      <Footer />
    </PageWrapper>
  );
};

export default SetListPage;
