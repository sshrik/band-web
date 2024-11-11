import { Center, Flex, PageWrapper, Stack } from "@/components/base/Container";
import { Header } from "@/components/base/Typography";
import MainImage from "@/assets/images/MainImage.png";
import Footer from "@/components/display/Footer";
import { useNavigate } from "react-router";
import "./MainPage.css";
import OutlineContainer from "@/components/display/OutlineContainer";
import ConcertInformation from "@/components/main/ConcertInformation";
import ConcertBrief from "@/components/main/ConcertBrief";
import MainTitle from "@/components/main/MainTitle";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToTimetable = () => {
    navigate("/timetable");
  };

  return (
    <PageWrapper style={{ gap: "0.8rem" }}>
      <Header $size="sm">우아한형제들 밴드의민족 겨울 정기공연</Header>
      <MainTitle />
      <ConcertBrief />
      <Center>
        <img
          src={MainImage}
          alt="메인 이미지"
          style={{ width: "100%", maxHeight: "20rem" }}
        />
      </Center>
      <Stack $gap="0.5rem" style={{ flex: 1, paddingBottom: "2rem" }}>
        <Flex style={{ justifyContent: "flex-end" }}>
          <OutlineContainer
            border={3}
            title="공연 순서 보러가기 >>"
            onClick={navigateToTimetable}
            styles={{
              header: {
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "-0.75rem",
              },
            }}
            style={{ padding: "0.5rem 1rem" }}
          />
        </Flex>
        <Center>
          <ConcertInformation />
        </Center>
      </Stack>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
