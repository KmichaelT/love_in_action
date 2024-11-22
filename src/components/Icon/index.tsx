import * as lucide from "lucide-react";
import { LucideIcon, LucideProps } from "lucide-react";

export type IconType = keyof typeof lucide;

type IconProps = {
  icon: IconType;
} & LucideProps;

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const LucideIcon = lucide[icon] as LucideIcon;
  return <LucideIcon {...props} />;
};