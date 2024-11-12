import { Group, Stack } from "@/components/base/Container";
import { Text } from "@/components/base/Typography";
import { gray } from "@/styles/color";

type MemberDisplayProps = {
  members: string[];
  additionalMembers?: string[];
};

const MemberDisplay: React.FC<MemberDisplayProps> = (props) => {
  const { members, additionalMembers = [] } = props;

  const totalMembers = [...members, ...additionalMembers];

  const firstLine = totalMembers.slice(0, Math.ceil(totalMembers.length / 2));

  const secondLine = totalMembers.slice(Math.ceil(totalMembers.length / 2));

  return (
    <Stack
      $gap="1rem"
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: gray,
      }}
    >
      <Group
        $gap="3rem"
        style={{ letterSpacing: -1, justifyContent: "center" }}
      >
        {firstLine.map((member, index) => (
          <Text key={index} $size="xl">
            {member}
          </Text>
        ))}
      </Group>
      <Group
        $gap="3rem"
        style={{ letterSpacing: -1, justifyContent: "center" }}
      >
        {secondLine.map((member, index) => (
          <Text key={index} $size="xl">
            {member}
          </Text>
        ))}
      </Group>
    </Stack>
  );
};

export default MemberDisplay;
