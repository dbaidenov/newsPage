import styled from "styled-components/native";

const PostView = styled.View`
  padding: 20px;
  display: flex;
  width: 100vw;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex: 1 1 0;
  row-gap: 20px;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const Post = ({ data }) => {
  return (
    <PostView>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostDetails>
        <PostTitle>
          {data.title.length >= 50
            ? data.title.substring(0, 50) + "..."
            : data.title}
        </PostTitle>
        <PostDate>{new Date(data.createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};

export default Post;
