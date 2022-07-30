import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";

import './InspectionReport.css';
import {useState} from "react";

const InspectionForm = ({state, setState}) => {
    const [submitted, setSubmitted] = useState(false)

    const handleCheck = type => e => {
        if(submitted) {
            e.preventDefault()
            return
        }
        setState({
            ...state,
            [type]: e.target.checked
        })
    }

    const onChange = type => e => {
        if(submitted) {
            e.preventDefault()
            return
        }
        setState({
            ...state,
            [type]: e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }
    return(
        <FormControl>
            <div className={'InspectionForm'}>
                <InspectionDetails onChange={onChange}/>
                <CustomerDetails onChange={onChange}/>
                <InvoiceDetails state={state} onChange={onChange}/>
                <VisitInformation risk={state.risk} onChange={onChange} />
                <ProductsUsed onChange={onChange} />
                <AdditionalRequirements state={state} handleCheck={handleCheck}/>
                <Comments onChange={onChange} />
                <SubmitButton submitted={submitted} onSubmit={onSubmit}/>
            </div>
        </FormControl>
    )
}

const InspectionDetails = ({onChange}) => {
    return (
        <FormGroup>
            <div className={'InspectionDetails'}>
                <TextField id="outlined-basic" label={'Date'} variant="outlined" onChange={onChange('date')} size="small"/>
                <TextField id="outlined-basic" label={'Sheet'} variant="outlined" onChange={onChange('sheet')} size="small"/>
                <TextField id="outlined-basic" label={'Next Visit'} variant="outlined" onChange={onChange('nextVisit')} size="small"/>
            </div>
        </FormGroup>
    )
}

const CustomerDetails = ({onChange}) => {
    return(
        <FormGroup>
            <TextField
                id="outlined-multiline-static"
                label="Customer Address"
                multiline
                rows={4}
                onChange={onChange('address')}
                size="small"
            />
            <TextField id="outlined-basic" label={'Phone'} variant="outlined" onChange={onChange('phone')} size="small"/>
            <TextField id="outlined-basic" label={'Email'} variant="outlined" onChange={onChange('email')} size="small"/>
        </FormGroup>
    )
}

const InvoiceDetails = ({state, onChange}) => {
    return(
        <FormGroup>
            <TextField id="outlined-basic" label={'A/C'} variant="outlined" onChange={onChange('ac')} size="small"/>
            <TwoOptionRadio value={state.comdom} onChange={onChange('comdom')} trueLabel={'Commercial'} falseLabel={'Domestic'} size="small"/>
            <TextField id="outlined-basic" label={'Invoice Extras'} variant="outlined" onChange={onChange('extras')} multiline rows={2} size="small"/>
        </FormGroup>
    )
}

const VisitInformation = ({risk, onChange}) => {
    return(
        <FormGroup>
            <TwoOptionRadio title={'Risk Assessment'} value={risk} onChange={onChange('risk')} trueLabel={'Yes'} falseLabel={'No'} size="small"/>
            <TextField id="outlined-basic" label={'Comments'} variant="outlined" onChange={onChange('riskCom')} multiline rows={2} size="small"/>
            <TextField id="outlined-basic" label={'Reason for Visit'} variant="outlined" onChange={onChange('reason')} size="small"/>
            <TextField id="outlined-basic" label={'Areas Covered'} variant="outlined" onChange={onChange('areas')} size="small"/>
        </FormGroup>
    )
}

const TwoOptionRadio = ({title, value, onChange, falseLabel, trueLabel}) => {
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

const ProductsUsed = ({onChange}) => {
    return(
        <FormGroup>
            <TextField id="outlined-basic" label={'Product'} variant="outlined" onChange={onChange('product1')} size="small"/>
            <TextField id="outlined-basic" label={'Pesticide'} variant="outlined" onChange={onChange('pesticide1')} size="small"/>
            <TextField id="outlined-basic" label={'Product'} variant="outlined" onChange={onChange('product2')} size="small"/>
            <TextField id="outlined-basic" label={'Pesticide'} variant="outlined" onChange={onChange('pesticide2')} size="small"/>
        </FormGroup>

    )
}

const AdditionalRequirements = ({state, handleCheck}) => {
    return(
        <FormGroup>
            <CheckboxReq checked={state.lockedBait} handleCheck={handleCheck('lockedBait')} title={'Locked Bait Station'} size="small"/>
            <CheckboxReq checked={state.baitPlan} handleCheck={handleCheck('baitPlan')} title={'Baiting Plan'} size="small"/>
            <CheckboxReq checked={state.guidance} handleCheck={handleCheck('guidance')} title={'Guidance Note'} size="small"/>
            <CheckboxReq checked={state.monitor} handleCheck={handleCheck('monitor')} title={'Monitoring Only'} size="small"/>
        </FormGroup>
    )
}

const CheckboxReq = ({checked, handleCheck, title}) => {
    return(
        <FormControlLabel control={<Checkbox
            checked={checked}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }}
            size="small"
        />} label={title}
            size="small"/>
    )
}

const Comments = ({onChange}) => {
    return(
        <FormGroup>
            <TextField id="outlined-basic" label={'Comments'} variant="outlined" onChange={onChange('comments')} multiline rows={8} size="small"/>
            <TextField id="outlined-basic" label={'Recommendations'} variant="outlined" onChange={onChange('recommendations')} multiline rows={3} size="small"/>
        </FormGroup>
    )
}

const SubmitButton = ({submitted, onSubmit}) => {
    if(!submitted){
        return(
            <div className="col-12">
                <Button onClick={onSubmit} className="btn btn-primary" type="submit">Submit form</Button>
            </div>
        )
    }
    return(
        <></>
    )
}

export default InspectionForm