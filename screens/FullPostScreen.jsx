import { useState, useEffect } from "react";
import styled from "styled-components/native";
import Loading from "../components/Loading";

const FullPostView = styled.View`
  flex: 1;
  padding: 20px;
`;

const FullPostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const FullPostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = route.params;

  const fetchData = () => {
    navigation.setOptions({ title });
    setIsLoading(true);
    fetch(`https://65daf4893ea883a15290ecda.mockapi.io/news/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setPostData(data))
      .catch((error) => {
        Alert.alert("Ошибка при получении статьи" + error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchData, []);

  return isLoading ? (
    <Loading />
  ) : (
    <FullPostView>
      <FullPostImage source={{ uri: postData.imageUrl }} />
      <FullPostText>{postData.title}</FullPostText>
    </FullPostView>
  );
};
