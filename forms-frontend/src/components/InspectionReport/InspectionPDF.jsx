import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import InspectionDetails from "./InspectionDetails";

const InspectionPDF = ({state}) => {
    return(
        <div>
            <InspectionDetails details={state.inspectionDetails} readOnly={true} onChange={()=>{}}/>
            <AdditionalRequirements state={state} handleCheck={()=>{}} />
            <Footer />
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

const Footer = () => {
    return(
        <div>
            <h4>All pesticides remain the property of Country Solutions Ltd</h4>
            <h4>Tel: 07581 789990</h4>
        </div>
    )
}
export default InspectionPDF