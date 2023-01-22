import {CardHeader,} from "./BlogCard.styled"

export const BlogCard = ({ poster, tag, title, description, name, avatar, postedAt }) => {
  return
    <Card>
  <CardHeader>
    <CardPoster
      src="https://source.unsplash.com/600x400/?computer"
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
    <Tag>Technology</Tag>
    <CardTitle>What's new in 2022 Tech</CardTitle>
    <CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis
      molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
      <UserInfo>
        <UserName>Jane Doe</UserName>
        <Date>2h ago</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>;
};
