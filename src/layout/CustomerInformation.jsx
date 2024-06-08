import { Input } from "antd";

const CustomerInformation = () => {
    return (
        <div className="">
        <h1 className="border-b-2 border-violet-500">Customer Information</h1>
        <form className="mt-5 space-y-3 border-2 p-3 rounded-md">
            <div className="space-y-1">
                <label>First Name<span className="text-red-500">*</span></label>
                <Input className="w-full max-w-xs"></Input>
             </div>
            <div className="space-y-1">
                <label>Last Name<span className="text-red-500">*</span></label>
                <Input className="w-full max-w-xs"></Input>
             </div>
            <div className="space-y-1">
                <label>Email<span className="text-red-500">*</span></label>
                <Input className="w-full max-w-xs"></Input>
                </div>
            <div className="space-y-1">
                <label>Phone<span className="text-red-500">*</span></label>
                <Input className="w-full max-w-xs"></Input>    
            </div>

        </form>
    </div>
    );
};

export default CustomerInformation;