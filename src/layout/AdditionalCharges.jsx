import { Checkbox, Row } from "antd";

const AdditionalCharges = () => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    
    return (
        <div className="size-72">
            <h1 className="border-b-2 border-violet-500">Additional Charge</h1>

            <div className="mt-5 space-y-3 border-2 p-3 rounded-md">
            <Row justify="space-between">
                    <Checkbox onChange={onChange}>Collision Damage Waiver</Checkbox>
                    <span>$</span>
                </Row>
                <Row justify="space-between">
                    <Checkbox onChange={onChange}>Liability Insurance</Checkbox>
                    <span>$</span>
                </Row>
                <Row justify="space-between">
                    <Checkbox onChange={onChange}>Rental Tax</Checkbox>
                    <span>$</span>
                </Row>
            </div>
            
            
        </div>
    );
};

export default AdditionalCharges;