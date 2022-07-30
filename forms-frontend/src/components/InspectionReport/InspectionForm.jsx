import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    TextField
} from "@mui/material";

import './InspectionReport.css';
import InspectionDetails from "./InspectionDetails";
import CustomerDetails from "./CustomerDetails";
import InvoiceDetails from "./InvoiceDetails";
import VisitInformation from "./VisitInformation";
import AdditionalRequirements from "./AdditionalRequirements";
import Summary from "./Summary";
import {useState} from "react";
import ProductsUsed from "./ProductsUsed";

let READ_ONLY = false
const InspectionForm = ({state, setState}) => {
    const [submitted, setSubmitted] = useState(false)
    const handleCheck = (section, type) => e => {
        setState({
            ...state,
            [section]:{
                ...state[section],
                [type]: e.target.checked
            }
        })
    }

    const onChange = (section, type) => e => {
        setState({
            ...state,
            [section]:{
                ...state[section],
                [type]: e.target.value
            }
        })
    }

    const updateProduct = idx => type => e => {
        let currProducts = state.products
        let val = type == 'product' ? e.target.value : e.target.checked
        currProducts[idx] = {...currProducts[idx], [type]: val}
        setState({
            ...state,
            products: currProducts
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        READ_ONLY = true
    }

    return(
        <FormControl>
            <div className={'InspectionForm'}>
                <InspectionDetails onChange={onChange} details={state.inspectionDetails} readOnly={READ_ONLY}/>
                <CustomerDetails onChange={onChange} details={state.customerDetails} readOnly={READ_ONLY}/>
                <InvoiceDetails details={state.invoiceDetails} onChange={onChange} readOnly={READ_ONLY}/>
                <VisitInformation details={state.visit} onChange={onChange} readOnly={READ_ONLY}/>
                <ProductsUsed updateProduct={updateProduct} details={state.products} readOnly={READ_ONLY}/>
                <AdditionalRequirements details={state.addReq} handleCheck={handleCheck} readOnly={READ_ONLY}/>
                <Summary onChange={onChange} details={state.summary} readOnly={READ_ONLY}/>
                <SubmitButton onSubmit={onSubmit} submitted={submitted}/>
            </div>
        </FormControl>
    )
}

const SubmitButton = ({onSubmit, submitted}) => {
    if(submitted) return(<></>)
    return(
        <div className="col-12">
            <Button onClick={onSubmit} className="btn btn-primary" type="submit">Submit form</Button>
        </div>
    )
}

export default InspectionForm