import {useState} from "react";
import InspectionForm from "./InspectionForm";
import InspectionPDF from "./InspectionPDF";

const InspectionReport = () => {
    const [state, setState] = useState({
        date: "",
        sheet: "",
        nextVisit: "",
        address: "",
        phone: "",
        email: "",
        ac: "",
        comdom: true,
        extras: "",
        risk: false,
        riskCom: "",
        reason: "",
        areas: "",
        product1: "",
        product2: "",
        pesticide1: "",
        pesticide2: "",
        lockedBait: false,
        baitPlan: false,
        guidance: false,
        monitor: false,
        comments: "",
        recommendations: ""
    })
    return(
        <div className={'Report'}>
            <Header />
            <Title />
            <InspectionForm state={state} setState={setState}/>
            {/*{*/}
            {/*    state.submitted ? <InspectionPDF state={state} /> :*/}
            {/*        <InspectionForm state={state} setState={setState}/>*/}
            {/*}*/}
        </div>

    )
}

const Header = () => <h2>Country Solutions Ltd</h2>
const Title = () => <h3>Inspection Report</h3>


export default InspectionReport