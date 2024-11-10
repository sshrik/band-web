import { Flex, Group, PageWrapper, Stack } from "@/components/base/Container";
import OrderBadge from "@/components/display/OrderBadge";
import TeamNameBadge from "@/components/display/TeamNameBadge";
import Footer from "@/components/display/Footer";
import { Text } from "@/components/base/Typography";
import { Team } from "@/models/Team";
import { darkGray } from "@/styles/color";
import { useNavigate } from "react-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import TimeTableImage from "@/assets/images/TimeTableImage.png";

type TimeTablePageProps = {
  teams: Team[];
};

const TimeTablePage: React.FC<TimeTablePageProps> = (props) => {
  const { teams } = props;

  const navigate = useNavigate();

  const handleNavigate = (teamId: number) => {
    navigate(`/setList/${teamId}`);
  };

  return (
    <PageWrapper style={{ paddingTop: 0, gap: "4rem" }}>
      <Group
        $gap="0.25rem"
        onClick={() => navigate("/")}
        style={{
          alignItems: "center",
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
      >
        <ChevronLeft style={{ width: "12px" }} />
        <Text $size="xs">홈으로 돌아가기</Text>
      </Group>
      <Flex style={{ flex: 1 }} />
      <img
        src={TimeTableImage}
        alt="TimeTableImage"
        style={{ width: "20rem", height: "auto" }}
      />
      <Stack $gap="1.5rem" style={{ padding: "0px 1rem", width: "100%" }}>
        {teams.map((team) => {
          const {
            startAt,
            endAt,
            teamName,
            members,
            additionalMembers,
            teamId,
          } = team;

          return (
            <Group
              key={teamId}
              $gap="0.5rem"
              onClick={() => handleNavigate(teamId)}
            >
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
                <TeamNameBadge withArrow name={teamName} />
                <Group
                  $gap="0.25rem"
                  style={{
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {members.map((member, index) => {
                    return (
                      <>
                        <Text key={index} style={{ fontWeight: 400 }}>
                          {member}
                        </Text>
                        {index !== members.length - 1 && (
                          <Text
                            key={`${index}-dot`}
                            style={{ fontWeight: 400 }}
                          >
                            ·
                          </Text>
                        )}
                      </>
                    );
                  })}
                </Group>
                {additionalMembers && (
                  <Group $gap="0.25rem" style={{ justifyContent: "center" }}>
                    <Text style={{ fontWeight: 400 }}>+</Text>
                    {additionalMembers?.map((member, index) => (
                      <>
                        <Text key={index} style={{ fontWeight: 400 }}>
                          {member}
                        </Text>
                        {index !== additionalMembers.length - 1 && (
                          <Text
                            key={`${index}-dot`}
                            style={{ fontWeight: 400 }}
                          >
                            ·
                          </Text>
                        )}
                      </>
                    ))}
                  </Group>
                )}
              </Stack>
            </Group>
          );
        })}
      </Stack>
      <Flex style={{ flex: 1 }} />
      <Footer />
    </PageWrapper>
  );
};

export default TimeTablePage;
