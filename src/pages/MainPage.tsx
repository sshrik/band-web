import { Center, Group, PageWrapper, Stack } from "@/components/Container";
import { Anchor, Caption, Header, Text } from "@/components/Typography";
import { gray, green, red } from "@/styles/color";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <PageWrapper
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: "0.8rem",
      }}
    >
      <Header $size="sm">우아한형제들 밴드의민족 겨울 정기공연</Header>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <img
          src="/public/images/Title.png"
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
          src="/public/images/MainImage.png"
          alt="메인 이미지"
          style={{ width: "100%" }}
        />
      </Center>
      <Center style={{ flex: 1 }}>
        <Stack
          $gap={0}
          style={{
            backgroundColor: gray,
            padding: "0.5rem 2rem",
            borderRadius: "8px",
            fontWeight: 300,
          }}
        >
          <Text $size="xxl" style={{ marginLeft: "-0.8rem", fontWeight: 600 }}>
            공연 안내
          </Text>
          <ul>
            <li>
              <Group $gap={2}>
                <Text $size="sm">공연 시간은 총 100분으로 </Text>
                <Text $size="sm" style={{ color: red, fontWeight: 600 }}>
                  17:00부터 20:40
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
                  <Text style={{ paddingRight: "4px" }}>포스터 내</Text>
                  <Text $bold>QR 코드</Text>
                  <Text>를 통해서 자율모금을 진행하고 있으니</Text>
                </Group>
                <Text> 많은 관심 부탁드립니다.</Text>
              </Stack>
              <ul>
                <li>
                  <Text>{`계좌번호 : ${
                    import.meta.env.VITE_PAYMENT_ACCOUNT
                  }`}</Text>
                </li>
                <li>
                  <Anchor
                    $bold
                    $underline
                    target="_blank"
                    rel="noreferrer"
                    href={import.meta.env.VITE_PAYMENT_LINK}
                    style={{
                      color: green,
                    }}
                  >
                    송금 링크
                  </Anchor>
                </li>
              </ul>
            </li>
          </ul>
        </Stack>
      </Center>
      <Center style={{ padding: "4px" }}>
        <Caption $size="sm">
          Copyright 2024. 밴드의 민족. All rights reserved.
        </Caption>
      </Center>
    </PageWrapper>
  );
};

export default MainPage;
