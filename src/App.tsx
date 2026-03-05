import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import PhoneFrame from "./components/PhoneFrame";
import HomeOffSeason from "./screens/HomeOffSeason";
import ChampionsWall from "./screens/ChampionsWall";
import Teams from "./screens/Teams";
import TeamDetail from "./screens/TeamDetail";

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<HomeOffSeason />} />
            <Route path="/champions" element={<ChampionsWall />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<TeamDetail />} />
          </Routes>
        </PhoneFrame>
      </HashRouter>
    </ThemeProvider>
  );
}
