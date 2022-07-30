import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";

const InspectionPDF = ({state}) => {
    return(
        <div>
            <InspectionDetails state={state} />
            <AdditionalRequirements state={state} handleCheck={()=>{}} />
            <Footer />
        </div>

    )
}

const InspectionDetails = ({state}) => {
    return(
        <div>
            <TextFieldReadOnly title={'Date'} info={state.date} />
            <TextFieldReadOnly title={'Sheet'} info={state.sheet} />
            <TextFieldReadOnly title={'Next Visit'} info={state.nextVisit} />
        </div>
    )
}

const AdditionalRequirements = ({state, handleCheck}) => {
    return(
        <FormGroup>
            <CheckboxReq checked={state.lockedBait} handleCheck={handleCheck('lockedBait')} title={'Locked Bait Station'} InputProps={{readOnly: true}}/>
            <CheckboxReq checked={state.baitPlan} handleCheck={handleCheck('baitPlan')} title={'Baiting Plan'} />
            <CheckboxReq checked={state.guidance} handleCheck={handleCheck('guidance')} title={'Guidance Note'} />
            <CheckboxReq checked={state.monitor} handleCheck={handleCheck('monitor')} title={'Monitoring Only'} />
        </FormGroup>
    )
}

const CheckboxReq = ({checked, handleCheck, title}) => {
    return(
        <FormControlLabel control={<Checkbox
            checked={checked}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }}
        />} label={title} />
    )
}

const TextFieldReadOnly = ({title, info}) => {
    return(
        <TextField id="outlined-basic" label={title} variant="outlined" defaultValue={info} InputProps={{readOnly: true}}/>
    )
}

const Footer = () => {
    return(
        <div>
            <h4>All pesticides remain the property of Country Solutions Ltd</h4>
            <h4>Tel: 07581 789990</h4>
        </div>
    )
}
export default InspectionPDF