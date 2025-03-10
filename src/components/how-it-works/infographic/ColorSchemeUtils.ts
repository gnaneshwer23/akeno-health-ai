
type ColorScheme = {
  bg: string;
  gradient: string;
  border: string;
  light: string;
  shadow: string;
  iconBg: string;
};

export const getColorClasses = (color: string): ColorScheme => {
  switch(color) {
    case 'indigo':
      return {
        bg: "bg-indigo-50",
        gradient: "from-indigo-500 to-indigo-600",
        border: "border-indigo-200",
        light: "bg-indigo-100",
        shadow: "shadow-indigo-200/50",
        iconBg: "bg-indigo-500/10 text-indigo-600"
      };
    case 'purple':
      return {
        bg: "bg-purple-50",
        gradient: "from-purple-500 to-purple-600",
        border: "border-purple-200",
        light: "bg-purple-100",
        shadow: "shadow-purple-200/50",
        iconBg: "bg-purple-500/10 text-purple-600"
      };
    case 'blue':
      return {
        bg: "bg-blue-50",
        gradient: "from-blue-500 to-blue-600",
        border: "border-blue-200",
        light: "bg-blue-100",
        shadow: "shadow-blue-200/50",
        iconBg: "bg-blue-500/10 text-blue-600"
      };
    case 'cyan':
      return {
        bg: "bg-cyan-50",
        gradient: "from-cyan-500 to-cyan-600",
        border: "border-cyan-200",
        light: "bg-cyan-100",
        shadow: "shadow-cyan-200/50",
        iconBg: "bg-cyan-500/10 text-cyan-600"
      };
    case 'teal':
      return {
        bg: "bg-teal-50",
        gradient: "from-teal-500 to-teal-600",
        border: "border-teal-200",
        light: "bg-teal-100",
        shadow: "shadow-teal-200/50",
        iconBg: "bg-teal-500/10 text-teal-600"
      };
    case 'pink':
      return {
        bg: "bg-pink-50",
        gradient: "from-pink-500 to-pink-600",
        border: "border-pink-200",
        light: "bg-pink-100",
        shadow: "shadow-pink-200/50",
        iconBg: "bg-pink-500/10 text-pink-600"
      };
    case 'amber':
      return {
        bg: "bg-amber-50",
        gradient: "from-amber-500 to-amber-600",
        border: "border-amber-200",
        light: "bg-amber-100",
        shadow: "shadow-amber-200/50",
        iconBg: "bg-amber-500/10 text-amber-600"
      };
    default:
      return {
        bg: "bg-gray-50",
        gradient: "from-gray-500 to-gray-600",
        border: "border-gray-200",
        light: "bg-gray-100",
        shadow: "shadow-gray-200/50",
        iconBg: "bg-gray-500/10 text-gray-600"
      };
  }
};
