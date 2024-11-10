import { Stack, Group } from "@/components/base/Container";
import { Text } from "@/components/base/Typography";
import { gray, red, green } from "@/styles/color";

const ConcertInformation: React.FC = () => {
  return (
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
          <Group $gap="0.25rem">
            <Text $size="sm">공연 시간은 총 200분으로 </Text>
            <Text $size="sm" style={{ color: red, fontWeight: 600 }}>
              17:00부터 19:40
            </Text>
            <Text $size="sm">입니다.</Text>
          </Group>
        </li>
        <li>
          <Text>관객석 중앙에서 진행되는 촬영에 많은 양해 부탁드립니다.</Text>
        </li>
        <li>
          <Group $gap={2}>
            <Text $size="sm">바 운영시간은 </Text>
            <Text style={{ color: red, fontWeight: 600 }}>16:30부터 19:00</Text>
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
            <Group $gap="0.25rem" $noWrap style={{ alignItems: "flex-end" }}>
              <Text> 많은 관심 부탁드립니다.</Text>
              <Text $size="xs" style={{ color: green }}>
                카카오뱅크 12345 구세라
              </Text>
            </Group>
          </Stack>
        </li>
      </ul>
    </Stack>
  );
};

export default ConcertInformation;
