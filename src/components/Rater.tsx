import { HStack } from '@chakra-ui/react';
import { type FC, useMemo } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaStarHalfStroke } from 'react-icons/fa6'
interface Props {
  starsNumber?: number;
  maxRate?: number;
  rate: number
}

const Rater: FC<Props> = ({ starsNumber = 5, maxRate = 5, rate }) => {
  const stars = useMemo(() => {
    const normalisedRate = rate * starsNumber / maxRate;
    const decimalPart = normalisedRate % 1;
    const addFullStar = decimalPart >= 0.75 ? 1 : 0;
    const numFilledStars = Math.floor(normalisedRate) + addFullStar;
    const addHalfFilledStar = (0.25 <= decimalPart && !addFullStar) ? 1 : 0;
    const numEmptyStars = starsNumber - numFilledStars - addHalfFilledStar;

    return [
      Array.from({ length: numFilledStars }, (_, i) => <FaStar key={`fullStar-${i}`} />),
      Array.from({ length: addHalfFilledStar }, (_, i) => <FaStarHalfStroke key={`halfStar-${i}`} />),
      Array.from({ length: numEmptyStars }, (_, i) => <FaRegStar key={`emptyStar-${i}`} />)
    ];
  }, [starsNumber, maxRate, rate]);
  return (
    <HStack>{stars}</HStack>
  )
}

export default Rater