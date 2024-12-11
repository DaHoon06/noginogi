import {ReactElement, ReactNode} from "react";
import {TableLayout} from "@shared/ui/Table/Table.styled";

interface Props {
  children: ReactNode;
}

export const Table = ({ children }: Props): ReactElement => {
  return <TableLayout>{children}</TableLayout>;
};
