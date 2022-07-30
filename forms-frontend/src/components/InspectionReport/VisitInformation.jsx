import {FormGroup} from "@mui/material";
import {MultilineField, TextFieldReadOnly, TwoOptionRadio} from "../HelperComponents/HelperComponents";

const VisitInformation = ({details, onChange, readOnly}) => {
    return(
        <FormGroup>
            <TwoOptionRadio title={'Risk Assessment'} value={details.risk} onChange={onChange('visit', 'risk')} trueLabel={'Yes'} falseLabel={'No'} readOnly={readOnly}/>
            <MultilineField rows={2} title={'Comments'} onChange={onChange('visit', 'comments')} value={details.comments} readOnly={readOnly}/>
            <TextFieldReadOnly title={'Reason For Visit'} onChange={onChange('visit', 'reason')} value={details.reason} readOnly={readOnly}/>
            <TextFieldReadOnly title={'Areas Covered'} onChange={onChange('visit', 'areas')} value={details.areas} readOnly={readOnly}/>
        </FormGroup>
    )
}

export default VisitInformation