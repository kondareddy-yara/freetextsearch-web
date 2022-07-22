import ShowMoreText from "react-show-more-text";

const ShowMoreTextComponent: React.FC<{
  description: string;
  onClick: () => void;
  expand: boolean;
}> = ({ description, onClick, expand }) => {
  return (
    <ShowMoreText lines={2} onClick={onClick} less={""} expanded={expand}>
      {description}
    </ShowMoreText>
  );
};

export default ShowMoreTextComponent;
