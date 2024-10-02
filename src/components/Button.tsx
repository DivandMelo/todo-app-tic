import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  className?: string;
}

function Button({ children, className, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <TouchableOpacity activeOpacity={.7} className={cn("py-4 rounded-full bg-purple-400 min-w-full justify-center items-center", className)} {...props}>
      <Text className="text-white font-bold">
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;
