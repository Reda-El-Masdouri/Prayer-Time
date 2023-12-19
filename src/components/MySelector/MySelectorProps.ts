import { ReactNode } from "react";
import { Country } from "../../features/reducers/countriesSlice";
import { SelectChangeEvent } from "@mui/material";

export default interface MySelectorProps {
    handleChange: ((event: SelectChangeEvent<string>, child: ReactNode) => void) | undefined,
    subject: string,
    data: Country[] | string[],
    value: string
}