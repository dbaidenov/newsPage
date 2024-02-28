import { Text } from "react-native";
import styled from "styled-components/native";

const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

const LoadingImage = styled.Image`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 30px;
`;

const Loading = () => {
  return (
    <LoadingView>
      <LoadingImage source={require("../assets/loadingGIF.gif")} />
      <Text>Загрузка...</Text>
    </LoadingView>
  );
};

export default Loading;
