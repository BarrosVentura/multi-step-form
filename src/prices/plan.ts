import IconArcade from "../../public/images/icon-arcade.svg";
import IconAdvanced from "../../public/images/icon-advanced.svg";
import IconPro from "../../public/images/icon-pro.svg";

export const PLAN_PRICES = [
  {
    name: "arcade",
    monthly: 9,
    yearly: 90,
    icon: IconArcade,
  },
  {
    name: "advanced",
    monthly: 12,
    yearly: 120,
    icon: IconAdvanced,
  },
  {
    name: "pro",
    monthly: 15,
    yearly: 150,
    icon: IconPro,
  },
] as const;
