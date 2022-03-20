import data from "../data/data.json";
import { FooterArea, Avatar, Author, AuthorName } from "../styles/Footer";
import avatar from "../assets/images/avatar.png";

const { avatar_alt, author, author_name } = data;

export const Footer: React.FC = () => {
  return (
    <FooterArea>
      <Avatar alt={avatar_alt} src={avatar} />
      <Author>{author}</Author>
      <AuthorName>{author_name}</AuthorName>
    </FooterArea>
  );
};
