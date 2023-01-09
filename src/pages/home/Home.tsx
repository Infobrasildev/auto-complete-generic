import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import { AutoCompleteGeneric } from '../../components/AutoCompleteGeneric';


export const Home = () => {

    const produtos = ['bola', 'computador', 'celular', 'saca de cimento', 'saco de pedra', 'copo']

    return(
        <div>
           <AutoCompleteGeneric
                options={produtos}
                label='Produtos'
           />
        </div>
    )
}