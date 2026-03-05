import { useParams } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BackBar from "../components/BackBar";
import DivisionBadge from "../components/DivisionBadge";
import { useTheme } from "../ThemeContext";
import { t, teamColor } from "../theme";
import { teams } from "../data";

export default function TeamDetail() {
  const { teamId } = useParams<{ teamId: string }>();
  const { mode } = useTheme();
  const team = teams.find((te) => te.id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: t("surface", mode) }}>
      <StatusBar />
      <BackBar title={team.name} to="/teams" />

      <div className="flex flex-col items-center gap-5 px-5 pb-5">
        <span className="text-[20px] font-bold" style={{ color: teamColor(team.initials, mode) }}>
          {team.initials}
        </span>
        <span className="text-[22px] font-medium" style={{ color: t("onSurface", mode) }}>
          {team.name}
        </span>
        <span className="text-[13px] font-medium" style={{ color: t("onSurfaceVariant", mode) }}>
          {team.record} · Seed #{team.seed} · {team.champsCount}x Champs
        </span>
        <DivisionBadge division={team.division} />
      </div>
    </div>
  );
}
