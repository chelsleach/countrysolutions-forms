import {FormGroup} from "@mui/material";
import {MultilineField, TextFieldReadOnly, TwoOptionRadio} from "../HelperComponents/HelperComponents";

const InvoiceDetails = ({details, onChange, readOnly}) => {
    return(
        <FormGroup>
            <TextFieldReadOnly title={'A/C'} onChange={onChange('invoiceDetails', 'ac')} value={details.ac} readOnly={readOnly}/>
            <TwoOptionRadio value={details.commercial} onChange={onChange('invoiceDetails','commercial')} trueLabel={'Commercial'} falseLabel={'Domestic'} readOnly={readOnly}/>
            <MultilineField title={'Invoice Extras'} onChange={onChange('invoiceDetails', 'extras')} value={details.extras} readOnly={readOnly} rows={2}/>
        </FormGroup>
    )
}

export default InvoiceDetails