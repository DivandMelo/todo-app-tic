import { Text } from "react-native";

function ErrorMessage({ errorMessage }: { errorMessage?: string }) {
  if (!errorMessage) return null;

  return (
    <Text className='text-darger'>
      {errorMessage}
    </Text>
  )
}

export default ErrorMessage;
