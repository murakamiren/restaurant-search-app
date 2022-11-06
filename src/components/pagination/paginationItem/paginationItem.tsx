import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  number: number;
  onCLick: () => void;
  currentSelected: boolean;
};

const PaginationItem: FC<Props> = ({ number, onCLick, currentSelected }) => {
  return (
    <Button onClick={onCLick} colorScheme={currentSelected ? "primary" : "gray"}>
      {number}
    </Button>
  );
};

const PaginationItemMemo = memo<Props>(({ number, onCLick, currentSelected }) => (
  <PaginationItem number={number} onCLick={onCLick} currentSelected={currentSelected} />
));
PaginationItemMemo.displayName = "PaginationItemMemo";

export default PaginationItemMemo;
