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
  {
    startAt: "18:20",
    endAt: "19:00",
    teamName: "초과근무(민호조)",
    members: [
      "강범준",
      "곽해솔",
      "구세라",
      "김기문",
      "김도원",
      "김민호",
      "송지은",
    ],
    teamId: 3,
  },
  {
    startAt: "19:00",
    endAt: "19:40",
    teamName: "은옥조",
    members: ["김경준", "박가진", "이범희", "이신아", "임현호", "조은옥"],
    teamId: 4,
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
  [
    { name: "대관람차", artist: "QWER" },
    { name: "녹아내려요", artist: "DAY6" },
    { name: "Loveholic", artist: "러브홀릭" },
    { name: "반딧불이", artist: "터치드" },
    { name: "불꽃놀이", artist: "하현상" },
    { name: "에필로그", artist: "정승환" },
  ],
  [
    { name: "annie.", artist: "wave to earth" },
    { name: "Find Me!", artist: "The Poles" },
    { name: "Destiny", artist: "SURL" },
    { name: "Tik Tak Tok", artist: "실리카겔" },
    { name: "그건 아마 우리의 잘못은 아닐거야", artist: "백예린" },
    { name: "민수는 혼란스럽다", artist: "민수" },
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
          path="/setList/:id"
          element={<SetListPage teams={teams} songs={songs} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
