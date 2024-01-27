import { useState } from "react";
import TrackingCard, { TrackingData } from "./components/tracking-card";
import trackingData from "./data.json";
import ProfileSection from "./components/profile-section";
import TimeFrameButtons from "./components/time-frame-buttons";

function App() {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState<
        "daily" | "weekly" | "monthly"
    >("daily");

    const getTimeFrameLabel = (selectedTimeFrame: string) => {
        switch (selectedTimeFrame) {
            case "daily":
                return "Yesterday";
            case "weekly":
                return "Last Week";
            case "monthly":
                return "Last Month";
            default:
                return "Yesterday";
        }
    };
    return (
        <>
            <div className="h-full py-4 sm:py-0 sm:h-screen flex flex-col lg:flex-row justify-center items-center gap-4 bg-verydarkblue font-rubik">
                <div className="flex flex-col w-[295px] sm:w-[350px] lg:w-64">
                    <ProfileSection />
                    <TimeFrameButtons
                        setSelectedTimeFrame={setSelectedTimeFrame}
                    />
                </div>
                <TrackingCard
                    trackingData={trackingData as TrackingData[]}
                    selectedTimeFrame={selectedTimeFrame}
                    timeFrameLabel={getTimeFrameLabel(selectedTimeFrame)}
                />
            </div>
        </>
    );
}

export default App;
