import OutlineContainer from "@/components/display/OutlineContainer";

type TeamNameBadgeProps = {
  name: string;
};

const TeamNameBadge: React.FC<TeamNameBadgeProps> = (props) => {
  const { name } = props;

  return (
    <OutlineContainer
      title={`${name} >>`}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "3.25rem",
      }}
    />
  );
};

export default TeamNameBadge;
