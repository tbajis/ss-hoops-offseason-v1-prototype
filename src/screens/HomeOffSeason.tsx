import { useTheme } from "../ThemeContext";
import { t, teamColor } from "../theme";
import type { TeamInitials } from "../theme";
import { championsByYear, dynastyTracker, throwbackMoment } from "../data";
import StatusBar from "../components/StatusBar";
import NavBar from "../components/NavBar";
import SectionLabel from "../components/SectionLabel";
import DivisionBadge from "../components/DivisionBadge";

export default function HomeOffSeason() {
  const { mode } = useTheme();
  const champs2024 = championsByYear[0].champions;

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: t("surface", mode) }}>
      {/* Pinned top */}
      <StatusBar />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 px-5 pb-5">

          {/* 1. Header */}
          <div className="flex flex-col items-center gap-1 pt-4">
            <span className="text-[44px] leading-none">🏀</span>
            <span
              className="text-[28px] font-medium"
              style={{ color: t("onSurface", mode) }}
            >
              SS Hoops
            </span>
            <span
              className="text-[12px] font-medium"
              style={{
                color: t("primary", mode),
                letterSpacing: "1.5px",
              }}
            >
              EST. 2013 · SAINT SOPHIA CATHEDRAL
            </span>
          </div>

          {/* 2. Countdown */}
          <div
            className="rounded-[24px] flex flex-col items-center gap-4 p-6"
            style={{
              backgroundColor: t("greenTint", mode),
              boxShadow: "0 2px 6px #00000018",
            }}
          >
            <span
              className="text-[11px] font-medium"
              style={{
                color: t("primary", mode),
                letterSpacing: "2px",
              }}
            >
              2026 TOURNAMENT
            </span>

            <div className="flex items-center gap-2">
              {[
                { value: "16", unit: "DAYS" },
                { value: "08", unit: "HRS" },
                { value: "23", unit: "MIN" },
                { value: "47", unit: "SEC" },
              ].map((tile, i) => (
                <div key={tile.unit} className="flex items-center gap-2">
                  {i > 0 && (
                    <span
                      className="text-[20px] font-bold"
                      style={{ color: t("primary", mode) }}
                    >
                      :
                    </span>
                  )}
                  <div
                    className="flex flex-col items-center justify-center w-16 h-[68px] rounded-[16px]"
                    style={{ backgroundColor: t("primaryContainer", mode) }}
                  >
                    <span
                      className="text-[28px] font-bold"
                      style={{ color: t("primary", mode) }}
                    >
                      {tile.value}
                    </span>
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: t("primary", mode) }}
                    >
                      {tile.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <span
              className="text-[13px] font-medium"
              style={{ color: t("onSurfaceVariant", mode) }}
            >
              October 24–25, 2026
            </span>
          </div>

          {/* 3. 2024 Champions Card */}
          <div
            className="rounded-[28px] flex flex-col gap-3 p-6"
            style={{
              backgroundColor: t("goldContainer", mode),
              boxShadow: "0 1px 4px #0000004D, 0 4px 8px #00000026",
            }}
          >
            <span
              className="text-[11px] font-medium"
              style={{
                color: t("onGoldContainer", mode),
                letterSpacing: "2px",
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

          {/* 4. Dynasty Tracker */}
          <div className="flex flex-col gap-2">
            <SectionLabel label="Dynasty Tracker" />
            <div
              className="rounded-[24px] overflow-hidden"
              style={{
                backgroundColor: t("surfaceContainerLow", mode),
                boxShadow: "0 2px 6px #0000001F",
              }}
            >
              {dynastyTracker.map((entry, i) => (
                <div key={entry.initials}>
                  {i > 0 && (
                    <div
                      style={{
                        height: 1,
                        backgroundColor: t("outlineVariant", mode),
                        opacity: 0.3,
                      }}
                    />
                  )}
                  <div className="flex items-center py-3.5 px-4 gap-3">
                    <span
                      className="text-[14px] font-bold"
                      style={{ color: teamColor(entry.initials, mode) }}
                    >
                      {entry.initials}
                    </span>
                    <span
                      className="text-[14px] font-medium flex-1"
                      style={{ color: t("onSurface", mode) }}
                    >
                      {entry.name}
                    </span>
                    <span
                      className="text-[12px] font-normal"
                      style={{ color: t("onSurfaceVariant", mode) }}
                    >
                      🏆 {entry.titles}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Throwback Moment */}
          <div className="flex flex-col gap-2">
            <SectionLabel emoji="📸" label="Throwback Moment" />
            <div
              className="rounded-[24px] flex flex-col gap-3 p-5"
              style={{
                backgroundColor: t("tealTint", mode),
                boxShadow: "0 2px 6px #00000018",
              }}
            >
              <div
                className="flex items-center justify-center rounded-[16px] h-[110px]"
                style={{ backgroundColor: t("surfaceContainerHigh", mode) }}
              >
                <span
                  className="text-[28px] font-bold"
                  style={{ color: teamColor(throwbackMoment.teamInitials, mode) }}
                >
                  {throwbackMoment.teamInitials}
                </span>
              </div>
              <span
                className="text-[14px] font-medium leading-[1.4]"
                style={{ color: t("onSurface", mode) }}
              >
                {throwbackMoment.text}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Pinned bottom */}
      <NavBar />
    </div>
  );
}
