import {CheckboxReq, TextFieldReadOnly} from "../HelperComponents/HelperComponents";
import {FormGroup} from "@mui/material";

const ProductsUsed = ({details, updateProduct, readOnly}) => {
    const [a, b] = details
    return(
        <FormGroup>
            <Product info={a} updateProduct={updateProduct(0)} readOnly={readOnly} />
            <Product info={b} updateProduct={updateProduct(1)} readOnly={readOnly} />
        </FormGroup>

    )
}

const Product = ({info, updateProduct, readOnly}) => {
    const {product, pesticide} = info
    return(
        <FormGroup>
            <TextFieldReadOnly title={'Product'} value={product} onChange={updateProduct('product')} readOnly={readOnly} />
            <CheckboxReq title={'Pesticide'} checked={pesticide} handleCheck={updateProduct('pesticide')} readOnly={readOnly} />
        </FormGroup>
    )
}

export default ProductsUsed