
import {  DatePicker, Input } from "antd";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";


const ReservationDetails = () => {

    const location = useLocation();
    const { state } = location;

    const {  register, formState: { errors } } = useForm();
   
    // const onChange = (event) => {
    //     event.preventDefault()
    //     const form = event.target;
    //     const name = form.value;
    //     console.log(name);
    // };
    const onChange = (date, dateString) => {
     
        console.log(date, dateString);
      };
   
    return (
        <div className="">
            <h1 className="border-b-2 border-violet-500">Reservation Details</h1>
            
            <form
                onBlur={onChange}
                className="mt-5 space-y-3 border-2 p-3 rounded-md">
               
                    {
                    state && (
                        <div className="space-y-1">
                            <label htmlFor="id">Reservation ID</label>
                        <Input id="id" defaultValue={state.carId} className="w-full max-w-xs" {...register("id")}></Input>    
                        </div>
                        )
                    }
                
                    
                <div className="space-y-1">
                    <label htmlFor="DatePicker">Pickup Date <span className="text-red-500">*</span></label>
                    <DatePicker id="date" onChange={onChange} {...register("date")} className="w-full max-w-xs" />
                </div>
                
                <div className="space-y-1">
                    <label htmlFor="DatePicker">Return Date <span className="text-red-500">*</span></label>
                    <DatePicker id="date" onChange={onChange} {...register("date")} className="w-full max-w-xs" picker="week" />
                </div>
                    
                <div className="space-y-1">
                    <label htmlFor="id">Discount </label>
                    <Input id="id" {...register('id')} className="w-full max-w-xs"></Input>
                </div>
                
           </form>
        </div>
    );
};

export default ReservationDetails;