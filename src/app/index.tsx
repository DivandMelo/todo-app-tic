import type { PropsWithChildren } from 'react';

import { Image, Text, View } from 'react-native';

import Logo from '@/assets/icons/logo.svg'
import Google from '@/assets/icons/google.svg'
import Facebook from '@/assets/icons/facebook.svg'
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import ErrorMessage from '@/components/ErrorMessage';

const LoginIcon = ({ children }: PropsWithChildren) => (
  <View
    className='items-center justify-center rounded-full bg-white px-5 py-3'
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

const schema = z.object({
  email: z
    .string({
      required_error: 'digite o seu e-mail'
    })
    .email('formato de e-mail invalido')
    .default(''),
  password: z
    .string({
      required_error: 'digite sua senha'
    })
    .min(6, 'a senha precisa ter ao menos 6 caracteres')
    .default('')
})

type FormSchema = z.infer<typeof schema>;

function Home() {
  const { handleSubmit, control } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const navigator = useNavigation();

  function handleFormSubmit() {
    navigator.navigate('home')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='items-center px-16 pt-16'>
        <Logo />

        <View className='my-14 items-center gap-6'>
          <Text className='text-4xl text-primary'>Seja bem vindo</Text>
          <Text className='text-2xl text-grey-600'>Efetue seu login</Text>
        </View>

        <View className='w-full justify-between flex-row px-11'>
          <LoginIcon>
            <Google />
          </LoginIcon>

          <LoginIcon>
            <Facebook />
          </LoginIcon>
        </View>

        <View className='my-14 min-w-full gap-4'>
          <View>
            <Controller
              name="email"
              control={control}
              render={({ fieldState, field }) => (
                <View className='gap-2'>
                  <TextInput
                    placeholder='E-mail ou usuário'
                    onChangeText={field.onChange}
                    value={field.value}
                  />
                  <ErrorMessage errorMessage={fieldState.error?.message} />
                </View>
              )}
            />
          </View>

          <View>
            <Controller
              name="password"
              control={control}
              render={({ fieldState, field }) => (
                <View className='gap-3'>
                  <TextInput
                    placeholder='Senha'
                    onChangeText={field.onChange}
                    value={field.value}
                  />
                  <ErrorMessage errorMessage={fieldState.error?.message} />
                </View>
              )}
            />
          </View>
        </View>

        <Button onPress={handleSubmit(handleFormSubmit)}>
          Acessar
        </Button>

        <Text className='underline text-purple-400 mt-14'>Esqueceu sua senha?</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;
