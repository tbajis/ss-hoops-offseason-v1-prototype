import { useTheme } from "../ThemeContext";
import { t } from "../theme";
import type { Division } from "../data";

interface DivisionBadgeProps {
  division: Division;
}

function genderIcon(division: Division): string {
  return division === "Girls" ? "♀" : "♂";
}

export default function DivisionBadge({ division }: DivisionBadgeProps) {
  const { mode } = useTheme();
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full h-[22px] px-2 text-[10px] font-medium whitespace-nowrap"
      style={{
        backgroundColor: t("primaryContainer", mode),
        color: t("onPrimaryContainer", mode),
        letterSpacing: "0.5px",
      }}
    >
      <span className="text-[14px] leading-none">{genderIcon(division)}</span>
      {division}
    </span>
  );
}
