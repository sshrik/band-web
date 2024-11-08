import {
  Center,
  Flex,
  Group,
  PageWrapper,
  Stack,
} from "@/components/Container";
import { Anchor, Caption, Header, Text } from "@/components/Typography";
import { blue, gray, green, red } from "@/styles/color";
import TitleImage from "@/assets/images/Title.png";
import MainImage from "@/assets/images/MainImage.png";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import "./MainPage.css";
import Footer from "@/components/Footer";

const MainPage: React.FC = () => {
  return (
    <PageWrapper style={{ gap: "0.8rem" }}>
      <Header $size="sm">우아한형제들 밴드의민족 겨울 정기공연</Header>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <img
          src={TitleImage}
          alt="우아한형제들 밴드의민족 타이틀 이미지"
          style={{ height: "140px" }}
        />
      </Stack>
      <Group style={{ gap: "1.5rem", alignItems: "center" }}>
        <Stack>
          <Group>
            <Text $size="lg" style={{ paddingRight: "4px" }}>
              24년
            </Text>
            <Text $size="lg" $bold>
              12월 8일
            </Text>
          </Group>
          <Group>
            <Text style={{ paddingRight: "4px" }}>일요일</Text>
            <Text $bold>오후 5시</Text>
          </Group>
        </Stack>
        <Stack>
          <Group>
            <Text $bold $size="xxl">
              팡타개라지
            </Text>
          </Group>
          <Stack>
            <Caption $size="sm">서울 종로구 경희궁1가길 7</Caption>
            <Caption $size="sm">복합문화공간에무 지하 1층</Caption>
          </Stack>
        </Stack>
        <Stack>
          <Group>
            <Text $size="xl" $bold>
              광화문역
            </Text>
          </Group>
          <Text>도보 10분</Text>
        </Stack>
      </Group>
      <Center>
        <img
          src={MainImage}
          alt="메인 이미지"
          style={{ width: "100%", maxHeight: "20rem" }}
        />
      </Center>
      <Stack $gap="0.5rem" style={{ flex: 1, paddingBottom: "2rem" }}>
        <Flex style={{ justifyContent: "flex-end", alignItems: "center" }}>
          <Anchor
            $underline
            $size="lg"
            to="/timetable"
            style={{ color: blue, zIndex: 20 }}
          >
            공연 순서 보러가기
          </Anchor>
          <ChevronRight style={{ width: "16px", stroke: blue }} />
        </Flex>
        <Center>
          <Stack
            $gap={0}
            style={{
              backgroundColor: gray,
              padding: "0.5rem 2rem",
              borderRadius: "8px",
              fontWeight: 300,
            }}
          >
            <Text
              $size="xxl"
              style={{ marginLeft: "-0.8rem", fontWeight: 600 }}
            >
              공연 안내
            </Text>
            <ul>
              <li>
                <Group $gap="0.25rem">
                  <Text $size="sm">공연 시간은 총 200분으로 </Text>
                  <Text $size="sm" style={{ color: red, fontWeight: 600 }}>
                    17:00부터 19:40
                  </Text>
                  <Text $size="sm">입니다.</Text>
                </Group>
              </li>
              <li>
                <Text>
                  관객석 중앙에서 진행되는 촬영에 많은 양해 부탁드립니다.
                </Text>
              </li>
              <li>
                <Group $gap={2}>
                  <Text $size="sm">바 운영시간은 </Text>
                  <Text style={{ color: red, fontWeight: 600 }}>
                    16:30부터 19:00
                  </Text>
                  <Text>입니다.</Text>
                </Group>
              </li>
              <li>
                <Group $noWrap>
                  <Text style={{ paddingRight: "4px" }}>1층 </Text>
                  <Text $bold>카페 음료는 반입</Text>
                  <Text>이 가능합니다. (외부 주류 반입불가)</Text>
                </Group>
              </li>
              <li>
                <Stack>
                  <Group $noWrap>
                    <Text style={{ paddingRight: "0.25rem" }}>포스터 내</Text>
                    <Text $bold>QR 코드</Text>
                    <Text>를 통해서 자율모금을 진행하고 있으니</Text>
                  </Group>
                  <Group
                    $gap="0.25rem"
                    $noWrap
                    style={{ alignItems: "flex-end" }}
                  >
                    <Text> 많은 관심 부탁드립니다.</Text>
                    <Text $size="xs" style={{ color: green }}>
                      카카오뱅크 12345 구세라
                    </Text>
                  </Group>
                </Stack>
              </li>
            </ul>
          </Stack>
        </Center>
      </Stack>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
