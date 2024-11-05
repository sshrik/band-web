import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "@/pages/MainPage";
import { BrowserRouter } from "react-router-dom";
import { Team } from "@/models/Team";
import TimeTablePage from "@/pages/TimeTablePage";
import SetListPage from "@/pages/SetListPage";
import { Song } from "@/models/Song";

const teams: Team[] = [
  {
    startAt: "17:00",
    endAt: "17:40",
    teamName: "네모바퀴(성환조)",
    members: ["신성환", "오세훈", "윤보민", "진은형", "최지연"],
    teamId: 1,
  },
  {
    startAt: "17:40",
    endAt: "18:20",
    teamName: "하늘보리(소연조)",
    members: ["박주영", "송하영", "심규진", "심소연", "윤성희", "최현준"],
    additionalMembers: ["신성환", "윤보민"],
    teamId: 2,
  },
];

const songs: Song[][] = [
  [
    {
      name: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
    },
    {
      name: "아지랑이",
      artist: "쏜애플",
    },
    {
      name: "Back in Time",
      artist: "너드커넥션",
    },
    {
      name: "청록",
      artist: "이츠",
    },
    {
      name: "Hit Me Like a Man",
      artist: "The Pretty Reckless",
    },
  ],
  [
    { name: "Letter", artist: "유다빈밴드" },
    { name: "새벽별", artist: "터치드" },
    { name: "내게 남은 사랑을 다 줄께", artist: "왁스" },
    { name: "끝나지 않은 노래", artist: "노리플라이" },
    { name: "맞네", artist: "루시" },
    { name: "Welcome to the Show", artist: "DAY6" },
  ],
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/timetable" element={<TimeTablePage teams={teams} />} />
        <Route
          path="/set/team1"
          element={<SetListPage team={teams[0]} songs={songs[0]} />}
        />
        <Route
          path="/set/team2"
          element={<SetListPage team={teams[1]} songs={songs[1]} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
