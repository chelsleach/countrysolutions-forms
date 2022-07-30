import {FormGroup, TextField} from "@mui/material";
import {TextFieldReadOnly} from "../HelperComponents/HelperComponents";

const InspectionDetails = ({onChange, details, readOnly}) => {
    return(
        <FormGroup>
            <div className={'InspectionDetails'}>
                <TextFieldReadOnly title={'Date'} value={details.date} onChange={onChange('inspectionDetails','date')} readOnly={readOnly}/>
                <TextFieldReadOnly title={'Sheet'} value={details.sheet} onChange={onChange('inspectionDetails', 'sheet')} readOnly={readOnly}/>
                <TextFieldReadOnly title={'Next Visit'} value={details.nextVisit} onChange={onChange('inspectionDetails', 'nextVisit')} readOnly={readOnly}/>
            </div>
        </FormGroup>
    )
}

export default InspectionDetails