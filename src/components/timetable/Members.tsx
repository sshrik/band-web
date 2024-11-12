import { Group, Stack } from "@/components/base/Container";
import { Text } from "@/components/base/Typography";

type MembersProps = {
  members: string[];
  additionalMembers?: string[];
  style?: React.CSSProperties;
};

const Members: React.FC<MembersProps> = (props) => {
  const { members, additionalMembers, style } = props;

  return (
    <Stack style={{ ...style, alignItems: "center" }}>
      <Group
        $gap="0.25rem"
        style={{
          width: members.length > 6 ? "80%" : "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {members.map((member, index) => {
          return (
            <>
              <Text key={index} style={{ letterSpacing: -1, fontWeight: 400 }}>
                {member}
              </Text>
              {index !== members.length - 1 && (
                <Text key={`${index}-dot`} style={{ fontWeight: 400 }}>
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
          {additionalMembers.map((member, index) => (
            <>
              <Text key={index} style={{ fontWeight: 400 }}>
                {member}
              </Text>
              {index !== additionalMembers.length - 1 && (
                <Text key={`${index}-dot`} style={{ fontWeight: 400 }}>
                  ·
                </Text>
              )}
            </>
          ))}
        </Group>
      )}
    </Stack>
  );
};

export default Members;
