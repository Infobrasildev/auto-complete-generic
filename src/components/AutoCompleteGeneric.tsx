import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react";


export const AutoCompleteGeneric = (props: any) => {    // PASSAR -> OPTIONS E LABEL -> SX DO COMPONENTE

    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    let [optionsShow, setOptionsShow] = useState([])


    const onChangeValue = (event: any, newValue: any) => {
        setValue(newValue)
    }

    const onChangeInputValue = (event: any, newInputValue: any) => {
        
        setInputValue(newInputValue)

        if(newInputValue.length < 3){
            setOptionsShow([])
        }
        else{
            setOptionsShow(props.options)
        }
    }


    return(
        <div>
            <Autocomplete
                value={value}
                onChange={onChangeValue}
                inputValue={inputValue}
                onInputChange={onChangeInputValue}
                options={optionsShow}
                renderInput={(params) => <TextField {...params} label={props.label}
                    sx={{
                        width: 300
                    }}
                />}
            />
        </div>
    )
}