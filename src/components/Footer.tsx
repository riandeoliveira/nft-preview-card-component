import content from "../content/footer.json";
import { FooterArea, Avatar, Author, AuthorName } from "../styles/Footer";
import { avatar } from "../assets/media";

const { avatar_alt, author, author_name } = content;

const Footer: React.FC = () => {
  return (
    <FooterArea>
      <Avatar alt={avatar_alt} src={avatar} />
      <Author>{author}</Author>
      <AuthorName>{author_name}</AuthorName>
    </FooterArea>
  );
};

export default Footer;
