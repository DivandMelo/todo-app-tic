import { Text, View } from 'react-native';

import Checkbox from 'expo-checkbox';

import Calendar from '@/assets/icons/calendar.svg';
import { Todo } from '@/storage/todo';

interface TodoListItemProps extends Todo {
  onChange: (id: string, value: boolean) => void;
}

function TodoListItem({ title, checked, onChange, id }: TodoListItemProps) {
  function handleCheck(value: boolean) {
    onChange(id, value);
  }

  return (
    <View className="bg-white px-8 py-4 items-center flex-row justify-between rounded-xl">
      <View
        className="size-12 items-center justify-center rounded-full bg-[#E7E2F3]"
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
        <Calendar />
      </View>

      <Text className="text-primary text-lg" lineBreakMode='tail'>{title}</Text>

      <Checkbox className='p-3' color={'#4A3780'} value={checked} onValueChange={handleCheck} />
    </View>
  )
}

export default TodoListItem;
