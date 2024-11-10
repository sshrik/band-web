import { Group } from "@/components/base/Container";
import { Header } from "@/components/base/Typography";
import { Song } from "@/models/Song";
import { darkGray } from "@/styles/color";

type SongProps = {
  song: Song;
  index: number;
};

const SongDisplay: React.FC<SongProps> = (props) => {
  const { song, index } = props;

  return (
    <Group
      $gap="2rem"
      style={{
        paddingBottom: "0.25rem",
        borderBottom: `1px solid ${darkGray}`,
        alignItems: "center",
      }}
    >
      <Header
        style={{
          fontWeight: 700,
          color: darkGray,
          fontFamily: "Dela Gothic One",
        }}
      >
        {index + 1}
      </Header>
      <Group $gap="0.5rem 0.25rem" style={{ flexWrap: "wrap" }}>
        <Header
          $size="sm"
          style={{
            whiteSpace: "pre",
            fontWeight: 400,
            letterSpacing: "-0.01rem",
          }}
        >
          {song.artist}
        </Header>
        <Header $size="sm" style={{ whiteSpace: "pre", fontWeight: 600 }}>
          -
        </Header>
        <Header
          $size="sm"
          style={{
            whiteSpace: "pre",
            fontWeight: 600,
            letterSpacing: "-0.01rem",
          }}
        >
          {song.name}
        </Header>
      </Group>
    </Group>
  );
};

export default SongDisplay;
