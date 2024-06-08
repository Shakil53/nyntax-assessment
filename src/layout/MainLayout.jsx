import AdditionalCharges from "./AdditionalCharges";
import ChargesSummary from "./ChargesSummary";
import CustomerInformation from "./CustomerInformation";
import ReservationDetails from "./ReservationDetails";
import VehicleInformation from "./VehicleInformation";

const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto p-5">
            <div>
                <h1 className="text-3xl font-bold">Reservation</h1>
            </div>
            <div className="flex">
                 {/* layouts-------- */}
            <div className="flex flex-[3] mt-10">
                {/* Reservation Details----------- */}
                <div>
                    <ReservationDetails></ReservationDetails>
                </div>
            </div>
            {/* Customer info */}
            <div className="flex flex-[3] mt-10">
                
                <div>
                   <CustomerInformation></CustomerInformation>
                </div>
            </div>
            {/* Charge Summary */}
            <div className="flex flex-[4] mt-10">
              
                <div>
                   <ChargesSummary></ChargesSummary>
                </div>
            </div>
           </div>
            <div className="flex gap-20">
                            {/* Vehicle Information */}
                        <div className=" mt-10">
                        
                        <div>
                            <VehicleInformation></VehicleInformation>
                        </div>
                    </div>
                    {/* Additional Charge */}
                    <div className="mt-10">
                        
                        <div>
                            <AdditionalCharges></AdditionalCharges>
                        </div>
                    </div>
           </div>
        </div>
    );
};

export default MainLayout;