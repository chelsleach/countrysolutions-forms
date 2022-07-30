import {Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";

export const TextFieldReadOnly = ({title, value, onChange, readOnly}) => {
    return(
        <TextField id="outlined-basic"
                   label={title}
                   variant="outlined"
                   InputProps={{readOnly: readOnly}}
                   size="small"
                   onChange={onChange}
                   value={value}
        />
    )
}

export const MultilineField = ({title, value, onChange, readOnly, rows}) => {
    return(
        <TextField id="outlined-multiline-static"
                   label={title}
                   variant="outlined"
                   InputProps={{readOnly}}
                   multiline
                   rows={rows}
                   size="small"
                   onChange={onChange}
                   value={value}
        />
    )
}

export const TwoOptionRadio = ({title, value, onChange, falseLabel, trueLabel, readOnly}) => {
    return(
        <FormGroup>
            <FormLabel id="demo-radio-buttons-group-label" size="small">{title}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={value}
                name="radio-buttons-group"
                onChange={onChange}
                size="small"
            >
                <FormControlLabel value={true} control={<Radio />} label={trueLabel} size="small"/>
                <FormControlLabel value={false} control={<Radio />} label={falseLabel} size="small"/>
            </RadioGroup>
        </FormGroup>
    )
}

export const CheckboxReq = ({checked, handleCheck, title, readOnly}) => {
    return(
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    inputProps={{ 'aria-label': 'controlled', readOnly: readOnly}}
                    size="small" />}
            label={title}
            size="small"/>
    )
}