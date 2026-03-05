import { useTheme } from "../ThemeContext";
import { t } from "../theme";

interface SectionLabelProps {
  label: string;
  emoji?: string;
}

export default function SectionLabel({ label, emoji }: SectionLabelProps) {
  const { mode } = useTheme();
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-[16px] font-medium" style={{ color: t("onSurface", mode) }}>
        {emoji && `${emoji} `}{label}
      </span>
    </div>
  );
}
