import { DatePicker, InputNumber } from "antd";


const ReservationDetails = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (
        <div className="">
            <h1 className="border-b-2 border-violet-500">Reservation Details</h1>
            
            <form className="mt-5 space-y-3 border-2 p-3 rounded-md">
               
                <div className="space-y-1">
                    <label>Reservation ID</label>
                    <InputNumber className="w-full max-w-xs"></InputNumber>    
                </div>
                    
                <div className="space-y-1">
                    <label>Pickup Date <span className="text-red-500">*</span></label>
                    <DatePicker onChange={onChange} className="w-full max-w-xs" />
                </div>
                
                <div className="space-y-1">
                    <label>Return Date <span className="text-red-500">*</span></label>
                    <DatePicker onChange={onChange} className="w-full max-w-xs" picker="week" />
                </div>
                    
                <div className="space-y-1">
                    <label>Discount </label>
                    <InputNumber className="w-full max-w-xs"></InputNumber>
                </div>
                
           </form>
        </div>
    );
};

export default ReservationDetails;