import { Pressable, Text, TextInput, View } from 'react-native';

import { useNavigation } from 'expo-router';

import Header from '@/components/Header';

import { colors } from '@/styles/tokens';

import dayjs from 'dayjs';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CreateTextInput from '@/components/CreateTextInput';

import Feather from '@expo/vector-icons/Feather';
import Button from '@/components/Button';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useBoundStore } from '@/storage/todo';

type Form = {
  title: string;
  date: Date;
  hour: Date;
  note: string;
}

function CreateTodo() {
  const now = dayjs();

  const [showPickerDate, setShowPickerDate] = useState(false);

  const [showPickerHour, setShowPickerHour] = useState(false);

  const insets = useSafeAreaInsets();

  const { addTodo } = useBoundStore();

  const navigator = useNavigation();

  const { handleSubmit, control, watch  } = useForm<Form>({
    defaultValues: {
      title: '',
      date: now.toDate(),
      hour: now.toDate(),
      note: '',
    }
  });

  const datePickerData = watch('date');

  const hourPickerData = watch('hour');

  const dateFormatted = dayjs(datePickerData).format('DD/MM/YYYY');

  const hourFormatted = dayjs(hourPickerData).format('hh:mm');

  function submit({ hour, date, ...rest }: Form) {
    const hourDate = dayjs(hour);

    const id = Math.random().toString(36).slice(2, 9);

    const combined = dayjs(date)
      .hour(hourDate.hour())
      .minute(hourDate.minute())
      .second(hourDate.second())
      .toDate();

    console.log({...rest, combined});

    addTodo({
      ...rest,
      id,
      checked: false,
      date: combined
    });

    navigator.goBack();
  }

  return (
    <>
      <View
        className="p-5 gap-10 justify-center items-center bg-secundary pb-28 mb-2"
        style={{ paddingTop: insets.top + 20 }}
      >
        <Header.Root>
          <Header.Icon onPress={navigator.goBack}>
            <Feather name="chevron-left" size={30} color={colors.primary} />
          </Header.Icon>

          <Header.Text>Bem vindo Usuário Fulano</Header.Text>
        </Header.Root>
      </View>

      <View className="px-5 flex-1">
        <CreateTextInput.FormControll>
          <CreateTextInput.Label>Titulo</CreateTextInput.Label>
          <CreateTextInput.ControlledInput name="title" control={control} placeholder="Aula presencial Polo  Itabuna..." />
        </CreateTextInput.FormControll>

        <View className="flex-row my-20 gap-4">
          <CreateTextInput.FormControll className="flex-1">
            <CreateTextInput.Label>Data</CreateTextInput.Label>
            {
              showPickerDate &&
              <Controller
                name='date'
                control={control}
                render={({ field }) => (
                  <DateTimePicker
                    mode='date'
                    display='spinner'
                    value={datePickerData}
                    onChange={({type}, selectedDate) => {
                      if(showPickerDate) setShowPickerDate(false)

                      if(type === 'set' && selectedDate) {
                        field.onChange(selectedDate)
                      }
                    }}
                    minimumDate={now.toDate()}
                  />
                )}
              />
            }
            <Pressable onPress={() => {
              if(!showPickerDate) setShowPickerDate(true)
            }}>
              <CreateTextInput.UncontrolledInput
                focusable={false}
                editable={false}
                value={dateFormatted}
              >
                <CreateTextInput.Icon>
                  <Feather name="calendar" color={colors.purple[400]} size={25}/>
                </CreateTextInput.Icon>
              </CreateTextInput.UncontrolledInput>
            </Pressable>
          </CreateTextInput.FormControll>

          <CreateTextInput.FormControll className="flex-1">
            <CreateTextInput.Label>Hora</CreateTextInput.Label>
            {
              showPickerHour &&
              <Controller
                name='hour'
                control={control}
                render={({ field }) => (
                  <DateTimePicker
                    mode='time'
                    is24Hour
                    display='spinner'
                    value={hourPickerData}
                    onChange={({type}, selectedDate) => {
                      if(showPickerHour) setShowPickerHour(false)

                      if(type === 'set' && selectedDate) {
                        field.onChange(selectedDate)
                      }
                    }}
                    minimumDate={now.toDate()}
                  />
                )}
              />
            }
            <Pressable onPress={() => {
              if(!showPickerHour) setShowPickerHour(true)
            }}>
              <CreateTextInput.UncontrolledInput
                focusable={false}
                editable={false}
                value={hourFormatted}
              >
                <CreateTextInput.Icon>
                  <Feather name="clock" color={colors.purple[400]} size={25}/>
                </CreateTextInput.Icon>
              </CreateTextInput.UncontrolledInput>
            </Pressable>
          </CreateTextInput.FormControll>
        </View>

        <Controller
          name="note"
          control={control}
          render={({ field }) => (
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Notes"
              value={field.value}
              onChangeText={field.onChange}
              className="rounded-md border grow border-[#E0E0E0] p-4"
              style={{
                textAlignVertical: 'top'
              }}
            />
          )}
        />

        <Button
          className="bg-sucess my-10"
          onPress={handleSubmit(submit)}
        >
          Salvar
        </Button>
      </View>
    </>
  )
}

export default CreateTodo;
