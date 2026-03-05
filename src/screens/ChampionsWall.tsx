import { useTheme } from "../ThemeContext";
import { t, teamColor } from "../theme";
import type { TeamInitials } from "../theme";
import { championsByYear, records, hallOfFame } from "../data";
import StatusBar from "../components/StatusBar";
import TitleBar from "../components/TitleBar";
import NavBar from "../components/NavBar";
import SectionLabel from "../components/SectionLabel";
import DivisionBadge from "../components/DivisionBadge";

export default function ChampionsWall() {
  const { mode } = useTheme();
  const champs2024 = championsByYear[0].champions;
  const historyYears = championsByYear.filter((y) => y.year < 2024);

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: t("surface", mode) }}>
      <StatusBar />
      <TitleBar title="Champions Wall" />

      <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col gap-6 px-5 pb-5">

        {/* 1. 2024 Champions Card */}
        <div
          className="rounded-[28px] flex flex-col gap-3 p-6"
          style={{
            backgroundColor: t("goldContainer", mode),
            boxShadow: "0 1px 4px #0000004D, 0 4px 8px #00000026",
          }}
        >
          <span
            className="text-[13px] font-medium"
            style={{
              color: t("onGoldContainer", mode),
              letterSpacing: "1.5px",
              opacity: 0.8,
            }}
          >
            🏆 2024 CHAMPIONS
          </span>

          {champs2024.map((champ, i) => (
            <div key={champ.division}>
              {i > 0 && (
                <div
                  className="mb-3"
                  style={{
                    height: 1,
                    backgroundColor: t("onGoldContainer", mode),
                    opacity: 0.15,
                  }}
                />
              )}
              <div className="flex items-center gap-3">
                <span
                  className="text-[12px] font-bold"
                  style={{ color: teamColor(champ.initials as TeamInitials, mode) }}
                >
                  {champ.initials}
                </span>
                <DivisionBadge division={champ.division} />
                <div className="flex flex-col flex-1">
                  <span
                    className="text-[14px] font-medium"
                    style={{ color: t("onGoldContainer", mode) }}
                  >
                    {champ.name}
                  </span>
                  {champ.mvp && (
                    <span
                      className="text-[12px]"
                      style={{
                        color: t("onGoldContainer", mode),
                        opacity: 0.7,
                      }}
                    >
                      MVP: {champ.mvp}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Year-by-year History Card */}
        <div
          className="rounded-[24px] overflow-hidden"
          style={{
            backgroundColor: t("surfaceContainerLow", mode),
            boxShadow: "0 2px 6px #0000001F",
          }}
        >
          {historyYears.map((yearData, i) => (
            <div key={yearData.year}>
              {i > 0 && (
                <div
                  style={{
                    height: 1,
                    backgroundColor: t("outlineVariant", mode),
                    opacity: 0.3,
                  }}
                />
              )}

              {/* Cancelled year */}
              {yearData.cancelled ? (
                <div
                  className="flex items-center gap-3 py-3 px-4"
                  style={{ opacity: 0.4 }}
                >
                  <span
                    className="text-[14px] font-medium w-10"
                    style={{ color: t("onSurfaceVariant", mode) }}
                  >
                    {yearData.year}
                  </span>
                  <span
                    className="text-[14px] font-medium"
                    style={{ color: t("onSurfaceVariant", mode) }}
                  >
                    Cancelled
                  </span>
                </div>
              ) : yearData.champions.length === 1 ? (
                /* Single-division year */
                <div className="flex items-center gap-3 py-3 px-4">
                  <span
                    className="text-[14px] font-medium w-10"
                    style={{ color: t("onSurfaceVariant", mode) }}
                  >
                    {yearData.year}
                  </span>
                  <DivisionBadge division={yearData.champions[0].division} />
                  <div className="flex items-center gap-1.5 flex-1">
                    <span
                      className="text-[12px] font-bold"
                      style={{ color: teamColor(yearData.champions[0].initials as TeamInitials, mode) }}
                    >
                      {yearData.champions[0].initials}
                    </span>
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: t("onSurface", mode) }}
                    >
                      {yearData.champions[0].name}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className="text-[11px]"
                      style={{ color: t("onSurfaceVariant", mode) }}
                    >
                      MVP
                    </span>
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: t("onSurface", mode) }}
                    >
                      {yearData.champions[0].mvp}
                    </span>
                  </div>
                </div>
              ) : (
                /* Multi-division year */
                <div className="flex flex-col gap-1 py-2.5 px-4">
                  <span
                    className="text-[13px] font-medium"
                    style={{
                      color: t("onSurfaceVariant", mode),
                      letterSpacing: "1px",
                    }}
                  >
                    {yearData.year}
                  </span>
                  {yearData.champions.map((champ) => (
                    <div
                      key={champ.division}
                      className="flex items-center gap-1.5 w-full"
                    >
                      <span
                        className="text-[12px] font-bold w-5"
                        style={{ color: teamColor(champ.initials as TeamInitials, mode) }}
                      >
                        {champ.initials}
                      </span>
                      <DivisionBadge division={champ.division} />
                      <span
                        className="text-[13px] font-medium flex-1"
                        style={{ color: t("onSurface", mode) }}
                      >
                        {champ.name}
                      </span>
                      <span
                        className="text-[12px]"
                        style={{ color: t("onSurfaceVariant", mode) }}
                      >
                        {champ.mvp}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. All-Time Records */}
        <div className="flex flex-col gap-2">
          <SectionLabel label="All-Time Records" />
          <div
            className="rounded-[24px] overflow-hidden"
            style={{
              backgroundColor: t("surfaceContainerLow", mode),
              boxShadow: "0 2px 6px #0000001F",
            }}
          >
            {records.map((record, i) => (
              <div key={`${record.label}-${record.division}`}>
                {i > 0 && (
                  <div
                    style={{
                      height: 1,
                      backgroundColor: t("outlineVariant", mode),
                      opacity: 0.3,
                    }}
                  />
                )}
                <div className="flex items-center p-4 gap-3">
                  <DivisionBadge division={record.division} />
                  <div className="flex flex-col flex-1">
                    <span
                      className="text-[14px] font-medium"
                      style={{ color: t("onSurface", mode) }}
                    >
                      {record.label}
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: t("onSurfaceVariant", mode) }}
                    >
                      {record.detail}
                    </span>
                  </div>
                  <span
                    className="text-[22px] font-medium"
                    style={{ color: t("primary", mode) }}
                  >
                    {record.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Hall of Fame */}
        <div className="flex flex-col gap-3">
          <SectionLabel label="Hall of Fame" />
          {hallOfFame.map((player) => (
            <div
              key={player.name}
              className="rounded-[24px] flex flex-col items-center gap-3 p-5"
              style={{
                backgroundColor: t("surface", mode),
                border: "1.5px solid #F9A82566",
                boxShadow: "0 1px 3px #0000001A, 0 3px 8px #00000015",
              }}
            >
              <span
                className="text-[14px] font-bold"
                style={{ color: teamColor(player.initials as TeamInitials, mode) }}
              >
                {player.initials}
              </span>
              <span
                className="text-[18px] font-medium"
                style={{ color: t("onSurface", mode) }}
              >
                {player.name}
              </span>
              <span
                className="text-[13px]"
                style={{ color: t("onSurfaceVariant", mode) }}
              >
                {player.team} &middot; {player.years}
              </span>
              <div className="flex gap-3 w-full">
                {player.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 rounded-[16px] py-3 px-4 flex flex-col items-center"
                    style={{ backgroundColor: t("surfaceContainerLow", mode) }}
                  >
                    <span
                      className="text-[20px] font-medium"
                      style={{ color: t("primary", mode) }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[11px]"
                      style={{ color: t("onSurfaceVariant", mode) }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>

      <NavBar />
    </div>
  );
}
