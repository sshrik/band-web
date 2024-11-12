import { Group, PageWrapper, Stack } from "@/components/base/Container";
import OrderBadge from "@/components/display/OrderBadge";
import TeamNameBadge from "@/components/display/TeamNameBadge";
import Footer from "@/components/display/Footer";
import { Text } from "@/components/base/Typography";
import { Song } from "@/models/Song";
import { Team } from "@/models/Team";
import { darkGray } from "@/styles/color";
import { useNavigate, useParams } from "react-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import { useSwipeable } from "react-swipeable";
import PageTitle from "@/components/base/PageTitle";
import BackButton from "@/components/base/BackButton";
import SongDisplay from "@/components/set-list/SongDisplay";
import MemberDisplay from "@/components/set-list/MemberDisplay";

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

  const { startAt, endAt, teamId, teamName, members, additionalMembers } =
    teams[Number(id) - 1];

  const songList = songs[Number(id) - 1];

  return (
    <PageWrapper
      {...handlers}
      style={{ paddingTop: "5rem", gap: "1rem", justifyContent: "flex-start" }}
    >
      <BackButton to="/timetable">목록으로 돌아가기</BackButton>
      <Group
        $gap="2rem"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "2rem",
        }}
      >
        <ChevronLeft
          onClick={handleNavigateBefore}
          style={{ marginLeft: "-0.25rem", width: "24px", height: "24px" }}
        />
        <PageTitle>Set List</PageTitle>
        <ChevronRight
          onClick={handleNavigateNext}
          style={{ width: "24px", height: "24px" }}
        />
      </Group>
      <Group key={teamId} $gap="0.5rem" style={{ width: "calc(100% - 4rem)" }}>
        <OrderBadge order={teamId} style={{ marginTop: "1.57rem" }} />
        <Stack $gap="0.25rem" style={{ width: "calc(100% - 3.25rem)" }}>
          <Group $gap="0.25rem" style={{ paddingLeft: "1rem" }}>
            <Text $size="xl" style={{ fontWeight: 800, color: darkGray }}>
              {`${startAt} - ${endAt}`}
            </Text>
          </Group>
          <TeamNameBadge name={teamName} />
        </Stack>
      </Group>
      <MemberDisplay members={members} additionalMembers={additionalMembers} />
      <Stack $gap="1rem" style={{ width: "calc(100% - 5rem)", flex: 1 }}>
        {songList.map((song, index) => (
          <SongDisplay song={song} index={index} />
        ))}
      </Stack>
      <Footer />
    </PageWrapper>
  );
};

export default SetListPage;
