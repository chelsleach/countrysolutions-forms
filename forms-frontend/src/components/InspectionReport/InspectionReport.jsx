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
                product: "sadas",
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
        </div>

    )
}

const Header = () => <h2>Country Solutions Ltd</h2>
const Title = () => <h3>Inspection Report</h3>


export default InspectionReport