import { useState } from "react";
import TrackingCard, { TrackingData } from "./components/tracking-card";
import trackingData from "./data.json";
import ImageProfile from "./assets/image-jeremy.png";

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
                    <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 lg:flex-col lg:justify-start lg:items-start lg:gap-0 bg-cardblue rounded-lg p-8">
                        <div>
                            <img
                                src={ImageProfile}
                                alt="Image Profile"
                                className="h-14 w-14 lg:h-16 lg:w-16 border-2 border-white rounded-full"
                            />
                        </div>
                        <div className="my-0 sm:my-2 lg:my-8">
                            <p className="text-sm text-white/75">Report for</p>
                            <h2 className="text-xl sm:text-3xl lg:text-4xl text-white">
                                Jeremy
                                <br />
                                Robson
                            </h2>
                        </div>
                    </div>
                    <div className="buttons bg-darkblue flex flex-row lg:flex-col justify-center items-start gap-4 p-4 rounded-b-lg">
                        <button
                            onClick={() => setSelectedTimeFrame("daily")}
                            className="text-white/50 hover:text-white active:text-white focus:text-white"
                        >
                            Daily
                        </button>
                        <button
                            onClick={() => setSelectedTimeFrame("weekly")}
                            className="text-white/50 hover:text-white active:text-white focus:text-white"
                        >
                            Weekly
                        </button>
                        <button
                            onClick={() => setSelectedTimeFrame("monthly")}
                            className="text-white/50 hover:text-white active:text-white focus:text-white"
                        >
                            Monthly
                        </button>
                    </div>
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
