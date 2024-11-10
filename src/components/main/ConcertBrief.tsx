import { Group, Stack } from "@/components/base/Container";
import { Caption, Text } from "@/components/base/Typography";

type ConcertBriefProps = {
  style?: React.CSSProperties;
};

const ConcertBrief: React.FC<ConcertBriefProps> = (props) => {
  const { style } = props;

  return (
    <Group style={{ ...style, gap: "1.5rem", alignItems: "center" }}>
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
        <Group style={{ justifyContent: "center" }}>
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
  );
};

export default ConcertBrief;
