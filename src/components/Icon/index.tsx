import * as lucide from "lucide-react";
import { LucideIcon } from "lucide-react";

export type IconType = keyof typeof lucide;

export const Icon: React.FC<{ icon: IconType, className?: string }> = ({ icon, className }) => {
  const LucideIcon = lucide[icon] as LucideIcon;
  return <LucideIcon className={className} />;
};