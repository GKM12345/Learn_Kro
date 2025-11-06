import { Avatar } from "@chakra-ui/react";

const AvatarBox = (props) => {
    const {size="lg", shape="rounded", src="https://picsum.photos/200/300", name="Nue Camp"} = props;
  return (
    <Avatar.Root size={size} shape={shape}>
      <Avatar.Image src={src} />
      <Avatar.Fallback name={name} />
    </Avatar.Root>
  );
};

export default AvatarBox;
