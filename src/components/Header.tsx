import { cn } from "@/utils/cn"
import { PropsWithChildren } from "react"

import { View, Text as RNText, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = {
  className?: string
}

function Header({children, className}: PropsWithChildren<Props>) {
  return (
    <View
      className={cn("rounded-3xl bg-primary py-4 px-12 flex-row gap-5 justify-center items-center", className)}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      }}
    >
      {children}
    </View>
  )
}

function Text({children}: PropsWithChildren) {
  return (
    <RNText className="text-white text-xl">
      {children}
    </RNText>
  )
}

function Icon({children, ...props}: PropsWithChildren<TouchableOpacityProps>) {
  return (
    <TouchableOpacity
      className="rounded-full bg-white items-center justify-center size-14"
      activeOpacity={.7}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}

export default {
  Root: Header,
  Text,
  Icon
}
