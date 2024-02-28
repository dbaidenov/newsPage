import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Post from "../components/Post";
import Loading from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://65daf4893ea883a15290ecda.mockapi.io/news/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => {
        Alert.alert("Ошибка при получении статьи " + error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchData, []);

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
      }
      data={articles}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FullPost", {
              id: item.id,
              title: item.title,
            });
          }}
        >
          <Post data={item} />
        </TouchableOpacity>
      )}
    />
  );
};
