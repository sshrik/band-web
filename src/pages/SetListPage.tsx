import { Flex, Group, PageWrapper, Stack } from "@/components/base/Container";
import OrderBadge from "@/components/display/OrderBadge";
import TeamNameBadge from "@/components/display/TeamNameBadge";
import Footer from "@/components/display/Footer";
import { Header, Text } from "@/components/base/Typography";
import { Song } from "@/models/Song";
import { Team } from "@/models/Team";
import { darkGray, gray } from "@/styles/color";
import { useNavigate, useParams } from "react-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import SetListImage from "@/assets/images/SetListImage.png";
import { useSwipeable } from "react-swipeable";

type SetListPageProps = {
  teams: Team[];
  songs: Song[][];
};

const SetListPage: React.FC<SetListPageProps> = (props) => {
  const { teams, songs } = props;

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const handleNavigateBefore = () => {
    const beforeId = Number(id) - 1 === 0 ? teams.length : Number(id) - 1;
    navigate(`/setList/${beforeId}`);
  };

  const handleNavigateNext = () => {
    const nextId = Number(id) === teams.length ? 1 : Number(id) + 1;
    navigate(`/setList/${nextId}`);
  };

  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === "Right") {
        handleNavigateBefore();
      }

      if (dir === "Left") {
        handleNavigateNext();
      }
    },
  });

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
    <PageWrapper {...handlers} style={{ paddingTop: 0, gap: "2rem" }}>
      <Group
        $gap="0.25rem"
        onClick={() => navigate("/timetable")}
        style={{
          alignItems: "center",
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
      >
        <ChevronLeft style={{ width: "12px" }} />
        <Text $size="xs">목록으로 돌아가기</Text>
      </Group>
      <Flex style={{ flex: 1 }} />
      <Group
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "2rem",
        }}
      >
        <ChevronLeft
          onClick={handleNavigateBefore}
          style={{ marginLeft: "-0.25rem", width: "36px", height: "36px" }}
        />
        <img
          src={SetListImage}
          alt="SetListImage"
          style={{ width: "15rem", height: "auto" }}
        />
        <ChevronRight
          onClick={handleNavigateNext}
          style={{ width: "36px", height: "36px" }}
        />
      </Group>
      <Group key={teamId} $gap="0.5rem" style={{ width: "calc(100% - 4rem)" }}>
        <OrderBadge order={teamId} style={{ marginTop: "1.57rem" }} />
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
      <Stack $gap="1rem" style={{ width: "calc(100% - 5rem)" }}>
        {songList.map((song, index) => (
          <Group
            $gap="2rem"
            key={index}
            style={{
              paddingBottom: "0.25rem",
              borderBottom: `1px solid ${darkGray}`,
              alignItems: "center",
            }}
          >
            <Header
              style={{
                fontWeight: 700,
                color: darkGray,
                fontFamily: "Dela Gothic One",
              }}
            >
              {index + 1}
            </Header>
            <Group $gap="0.5rem 0.25rem" style={{ flexWrap: "wrap" }}>
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
      <Flex style={{ flex: 1 }} />
      <Footer />
    </PageWrapper>
  );
};

export default SetListPage;
