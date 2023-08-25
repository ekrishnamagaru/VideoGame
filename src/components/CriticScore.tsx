import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let scheme =
    score <= 60 ? "red" : score > 60 && score <= 75 ? "yellow" : "green";

  return (
    <Badge colorScheme={scheme} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
