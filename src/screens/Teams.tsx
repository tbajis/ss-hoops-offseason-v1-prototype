import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import TitleBar from "../components/TitleBar";
import NavBar from "../components/NavBar";
import DivisionBadge from "../components/DivisionBadge";
import DivisionFilter from "../components/DivisionFilter";
import { useTheme } from "../ThemeContext";
import { t, teamColor } from "../theme";
import { filterTeams, type DivisionGroup } from "../data";

export default function Teams() {
  const { mode } = useTheme();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<DivisionGroup>("All");
  const filteredTeams = filterTeams(activeFilter);

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: t("surface", mode) }}>
      <StatusBar />
      <TitleBar title="Teams" />

      <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col gap-4 px-5 pb-5">
        <DivisionFilter active={activeFilter} onChange={setActiveFilter} />

        <div
          className="rounded-[24px] overflow-hidden"
          style={{
            backgroundColor: t("surfaceContainerLow", mode),
            boxShadow: "0 2px 6px #0000001F",
          }}
        >
          {filteredTeams.map((team, i) => (
            <div key={team.id}>
              {i > 0 && (
                <div className="w-full h-px" style={{ backgroundColor: t("outlineVariant", mode), opacity: 0.3 }} />
              )}
              <button
                onClick={() => navigate(`/teams/${team.id}`)}
                className="flex items-center gap-3 py-3.5 px-4 w-full text-left cursor-pointer"
                style={{ background: "none", border: "none" }}
              >
                <span className="text-[16px] font-bold" style={{ color: teamColor(team.initials, mode) }}>
                  {team.initials}
                </span>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-[14px] font-medium" style={{ color: t("onSurface", mode) }}>
                    {team.name}
                  </span>
                  <span className="text-[12px]" style={{ color: t("onSurfaceVariant", mode) }}>
                    Seed #{team.seed} · {team.champsCount}x Champs
                  </span>
                </div>
                <DivisionBadge division={team.division} />
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>

      <NavBar />
    </div>
  );
}
