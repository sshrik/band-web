import { Flex, PageWrapper, Stack } from "@/components/base/Container";
import Footer from "@/components/display/Footer";
import { Team } from "@/models/Team";
import PageTitle from "@/components/base/PageTitle";
import BackButton from "@/components/base/BackButton";
import TeamInfo from "@/components/timetable/TeamInfo";

type TimeTablePageProps = {
  teams: Team[];
};

const TimeTablePage: React.FC<TimeTablePageProps> = (props) => {
  const { teams } = props;

  return (
    <PageWrapper style={{ paddingTop: 0, gap: "4rem" }}>
      <BackButton to="/">홈으로 돌아가기</BackButton>
      <Flex style={{ flex: 1 }} />
      <PageTitle>Time Table</PageTitle>
      <Stack $gap="1.5rem" style={{ padding: "0px 1rem", width: "100%" }}>
        {teams.map((team) => (
          <TeamInfo team={team} key={team.teamId} />
        ))}
      </Stack>
      <Flex style={{ flex: 1 }} />
      <Footer />
    </PageWrapper>
  );
};

export default TimeTablePage;
