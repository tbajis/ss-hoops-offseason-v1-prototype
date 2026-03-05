export type ThemeMode = "light" | "dark";

const tokens = {
  surface: { light: "#FBFDF8", dark: "#0E1610" },
  surfaceContainerLow: { light: "#F3F5F0", dark: "#1A231B" },
  surfaceContainerHigh: { light: "#E8EAE5", dark: "#252D26" },
  onSurface: { light: "#191C19", dark: "#E1E3DE" },
  onSurfaceVariant: { light: "#414941", dark: "#C1C9BF" },
  primary: { light: "#006D40", dark: "#6FDE9A" },
  primaryContainer: { light: "#94F7BA", dark: "#005230" },
  onPrimaryContainer: { light: "#002110", dark: "#94F7BA" },
  secondaryContainer: { light: "#D0E8D5", dark: "#374B3C" },
  onSecondaryContainer: { light: "#0B1F13", dark: "#D0E8D5" },
  goldContainer: { light: "#FFE170", dark: "#524600" },
  onGoldContainer: { light: "#221B00", dark: "#FFE170" },
  outlineVariant: { light: "#C1C9BF", dark: "#414941" },
  greenTint: { light: "#006D4014", dark: "#6FDE9A14" },
  tealTint: { light: "#38647114", dark: "#A1CED914" },
} as const;

export type TokenName = keyof typeof tokens;

export function t(token: TokenName, mode: ThemeMode): string {
  return tokens[token][mode];
}

const teamColors = {
  SS: { light: "#00A651", dark: "#66BB6A" },
  HT: { light: "#1565C0", dark: "#64B5F6" },
  A: { light: "#F9A825", dark: "#FFD54F" },
  SK: { light: "#29B6F6", dark: "#4FC3F7" },
  SG: { light: "#800020", dark: "#E57373" },
  B: { light: "#212121", dark: "#9E9E9E" },
} as const;

export type TeamInitials = keyof typeof teamColors;

export function teamColor(initials: TeamInitials, mode: ThemeMode): string {
  return teamColors[initials][mode];
}
