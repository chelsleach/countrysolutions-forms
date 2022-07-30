import {useState} from "react";
import InspectionForm from "./InspectionForm";
import InspectionPDF from "./InspectionPDF";

const InspectionReport = () => {
    const [state, setState] = useState({
        inspectionDetails: {
            date:"",
            sheet: "",
            nextVisit: "",
        },
        customerDetails:{
            address: "",
            phone: "",
            email: ""
        },
        invoiceDetails:{
            ac: "",
            commercial: true,
            extras: "",
        },
        visit: {
            risk: false,
            riskCom: "",
            reason: "",
            areas: ""
        },
        products: [
            {
                product: "",
                pesticide: false
            },
            {
                product: "",
                pesticide: false
            }
        ],
        addReq: {
            lockedBait: false,
            baitPlan: false,
            guidance: false,
            monitor: false
        },
        summary:{
            comments: "",
            recommendations: ""
        }
    })
    return(
        <div className={'Report'}>
            <Header />
            <Title />
            <InspectionForm state={state} setState={setState} />
            <Footer />
        </div>

    )
}


const Header = () => <h2>Country Solutions Ltd</h2>
const Title = () => <h3>Inspection Report</h3>
const Footer = () => {
    return(
        <div>
            <h4>All pesticides remain the property of Country Solutions Ltd</h4>
            <h4>Tel: 07581 789990</h4>
        </div>
    )
}

export default InspectionReport