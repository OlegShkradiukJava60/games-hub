import { FC } from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
interface Props {
  starsNumber?: number;
  maxRate?: number;
  rate: number;
}
const Rater: FC<Props> = ({ starsNumber = 5, maxRate = 5, rate }) => {
  const normalizedRate = rate / maxRate;
  const filledStars = Math.floor(normalizedRate * starsNumber);
  const halfFilledStar =
    normalizedRate * starsNumber - filledStars >= 0.25 &&
    normalizedRate * starsNumber - filledStars < 0.75;
  const emptyStars = starsNumber - filledStars - (halfFilledStar ? 1 : 0);

  return (
    <HStack>
      {Array.from({ length: filledStars }, (_, i) => (
        <Icon as={FaStar} key={i} />
      ))}
      {halfFilledStar && <Icon as={FaStarHalf} />}
      {Array.from({ length: emptyStars }, (_, i) => (
        <Icon as={FaRegStar} key={i} />
      ))}
    </HStack>
  );
};

export default Rater;
