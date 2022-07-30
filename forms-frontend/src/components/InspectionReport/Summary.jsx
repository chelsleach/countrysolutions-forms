import {FormGroup, TextField} from "@mui/material";
import {MultilineField} from "../HelperComponents/HelperComponents";


const Summary = ({details, onChange, readOnly}) => {
    const {comments, recommendations} = details
    return(
        <FormGroup>
            <MultilineField title={'Comments'} rows={8} onChange={onChange('summary', 'comments')} value={comments} readOnly={readOnly}/>
            <MultilineField title={'Recommendations'} rows={3} onChange={onChange('summary', 'recommendations')} value={recommendations} readOnly={readOnly}/>
        </FormGroup>
    )
}

export default Summary