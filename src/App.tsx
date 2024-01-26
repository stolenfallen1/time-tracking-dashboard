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
            <div className="h-screen flex justify-center items-center gap-8 bg-verydarkblue font-rubik">
                <div className="flex flex-col h-64 w-64">
                    <div className="bg-cardblue rounded-lg p-8">
                        <div>
                            <img
                                src={ImageProfile}
                                alt="Image Profile"
                                className="h-16 w-16 border-2 border-white rounded-full"
                            />
                        </div>
                        <div className="my-8">
                            <p className="text-sm text-white/75">Report for</p>
                            <h2 className="text-4xl text-white">
                                Jeremy
                                <br />
                                Robson
                            </h2>
                        </div>
                    </div>
                    <div className="buttons bg-darkblue flex flex-col justify-center items-start gap-4 p-4 rounded-b-lg">
                        <button
                            onClick={() => setSelectedTimeFrame("daily")}
                            className="text-white/50 hover:text-white"
                        >
                            Daily
                        </button>
                        <button
                            onClick={() => setSelectedTimeFrame("weekly")}
                            className="text-white/50 hover:text-white"
                        >
                            Weekly
                        </button>
                        <button
                            onClick={() => setSelectedTimeFrame("monthly")}
                            className="text-white/50 hover:text-white"
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
