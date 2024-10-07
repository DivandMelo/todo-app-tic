import { useState } from 'react'
import {
  TextInput as RNTextInput,
  Text,
  TextInputProps
} from 'react-native'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

interface Props extends TextInputProps {}

const TextAnimated = Animated.createAnimatedComponent(Text)

function TextInput({placeholder, value, ...props}: Props) {
  const [text, setText] = useState('');

  const y = useSharedValue(0);

  const animation = useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }],
    backgroundColor: y.value ? '#FFF' : 'transparent'
  }))

  if(text?.length) {
    y.value = withSpring(-32)
  } else {
    y.value = withSpring(0)
  }

  return (
    <View className="justify-center relative px-6 py-2 rounded-md border border-grey-600 h-16 ">
      <RNTextInput className='flex-1' {...props}
        onChangeText={(e) => {
          if(props.onChangeText) props.onChangeText(e);

          setText(e);
        }}
      />
      <TextAnimated
        className='absolute ml-3 px-3 text-grey-600'
        style={animation}
      >
        {placeholder}
      </TextAnimated>
    </View>
  )
}

export default TextInput
