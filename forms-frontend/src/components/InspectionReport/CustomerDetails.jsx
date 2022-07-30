import {FormGroup} from "@mui/material";
import {MultilineField, TextFieldReadOnly} from "../HelperComponents/HelperComponents";

const CustomerDetails = ({onChange, details, readOnly}) => {
    return(
        <FormGroup>
            <MultilineField
                onChange={onChange('customerDetails','address')}
                readOnly={readOnly}
                title={'Customer Address'}
                rows={4}
                value={details.address}
                />
            <TextFieldReadOnly title={'Phone'} onChange={onChange('customerDetails','phone')} value={details.phone} readOnly={readOnly}/>
            <TextFieldReadOnly title={'Email'} onChange={onChange('customerDetails','email')} value={details.email} readOnly={readOnly}/>
        </FormGroup>
    )
}

export default CustomerDetails