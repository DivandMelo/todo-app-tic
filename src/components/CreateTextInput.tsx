import { PropsWithChildren, useRef } from 'react';

import { cn } from '@/utils/cn';

import { Text, TextInput, TextInputProps, View } from 'react-native';

import {
  useController,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form';

function FormControll({ children, className }: PropsWithChildren<{className?: string}>) {
  return (
    <View className={cn("gap-2", className)}>
      {children}
    </View>
  )
}

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };

export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps,
    InputControllerType<T> {}


function UncontrolledInput({children, ...rest}: PropsWithChildren<TextInputProps>) {
  const ref = useRef<TextInput>(null);

  return (
    <View
      className="rounded-md relative bg-white py-4"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
      }}
    >
      <TextInput
        className="pl-4"
        ref={ref}
        {...rest}
      />
      {children}
    </View>
  )
}

function ControlledInput<T extends FieldValues>(props: ControlledInputProps<T>) {
  const { name, control, rules, children, ...inputProps } = props;

  const { field } = useController({ control, name, rules });

  return (
    <View
      className="rounded-md relative bg-white py-4"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
      }}
    >
      <TextInput
        className="pl-4"
        ref={field.ref}
        onChangeText={field.onChange}
        value={(field.value as string) || ''}
        {...inputProps}
      />
      {children}
    </View>
  )
}

function Label({ children }: PropsWithChildren) {
  return (
    <Text className="text-lg font-bold">{children}</Text>
  )
}

function Icon({ children }: PropsWithChildren) {
  return (
    <View className="absolute translate-y-1/2 right-4">
      {children}
    </View>
  )
}

export default {
  FormControll,
  Label,
  ControlledInput,
  UncontrolledInput,
  Icon
};
