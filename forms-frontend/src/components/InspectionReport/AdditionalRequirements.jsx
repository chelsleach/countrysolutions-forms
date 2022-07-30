import {FormGroup} from "@mui/material";
import {CheckboxReq} from "../HelperComponents/HelperComponents";

const AdditionalRequirements = ({details, handleCheck, readOnly}) => {
    const {lockedBait, baitPlan, guidance, monitor} = details
    return(
        <FormGroup>
            <CheckboxReq checked={lockedBait} handleCheck={handleCheck('addReq', 'lockedBait')} title={'Locked Bait Station'} readOnly={readOnly}/>
            <CheckboxReq checked={baitPlan} handleCheck={handleCheck('addReq', 'baitPlan')} title={'Baiting Plan'} readOnly={readOnly} />
            <CheckboxReq checked={guidance} handleCheck={handleCheck('addReq', 'guidance')} title={'Guidance Note'} readOnly={readOnly} />
            <CheckboxReq checked={monitor} handleCheck={handleCheck('addReq', 'monitor')} title={'Monitoring Only'} readOnly={readOnly} />
        </FormGroup>
    )
}

export default AdditionalRequirements