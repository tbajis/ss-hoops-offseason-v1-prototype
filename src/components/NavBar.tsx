import { useNavigate, useLocation } from "react-router-dom";
import { Home, Trophy, Users } from "lucide-react";
import { useTheme } from "../ThemeContext";
import { t } from "../theme";

const tabs = [
  { key: "/", label: "HOME", icon: Home },
  { key: "/champions", label: "HISTORY", icon: Trophy },
  { key: "/teams", label: "TEAMS", icon: Users },
] as const;

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useTheme();

  const activePath = location.pathname;

  return (
    <div className="px-[21px] pt-3 pb-[21px] shrink-0" style={{ backgroundColor: t("surface", mode) }}>
      <div
        className="flex rounded-[36px] h-[62px] p-1"
        style={{
          backgroundColor: t("surfaceContainerLow", mode),
          border: `1px solid ${t("outlineVariant", mode)}`,
          boxShadow: "0 2px 6px #0000001F",
        }}
      >
        {tabs.map(({ key, label, icon: Icon }) => {
          const isActive = key === "/" ? activePath === "/" : activePath.startsWith(key);
          return (
            <button
              key={key}
              onClick={() => navigate(key)}
              className="flex flex-col items-center justify-center flex-1 h-full rounded-[26px] gap-0.5 cursor-pointer"
              style={{
                backgroundColor: isActive ? t("secondaryContainer", mode) : "transparent",
                border: "none",
              }}
            >
              <Icon
                size={20}
                color={isActive ? t("onSecondaryContainer", mode) : t("onSurfaceVariant", mode)}
                opacity={isActive ? 1 : 0.45}
              />
              <span
                className="text-[10px] font-medium"
                style={{
                  color: isActive ? t("onSecondaryContainer", mode) : t("onSurfaceVariant", mode),
                  opacity: isActive ? 1 : 0.45,
                  letterSpacing: "0.5px",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
