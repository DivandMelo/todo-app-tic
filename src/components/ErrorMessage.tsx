import { Text } from "react-native";

function ErrorMessage({ errorMessage }: { errorMessage?: string }) {
  return (
    <Text className='text-darger'>
      {errorMessage}
    </Text>
  )
}

export default ErrorMessage;
