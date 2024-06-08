import ReservationDetails from "./ReservationDetails";

const MainLayout = () => {
    return (
        <div className="grid">
            <div>
                <h1>Reservation</h1>
            </div>
            {/* Reservation Details----------- */}
            <div>
                <ReservationDetails></ReservationDetails>
            </div>
        </div>
    );
};

export default MainLayout;