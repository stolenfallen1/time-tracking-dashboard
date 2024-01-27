import iconMapping from "../utils/icon-mapping";
import bgColorMapping from "../utils/bg-color-mapping";

interface Timeframe {
    current: number;
    previous: number;
}

interface TrackingData {
    title: string;
    timeframes: {
        daily: Timeframe;
        weekly: Timeframe;
        monthly: Timeframe;
    };
}

interface TrackingCardProps {
    trackingData: TrackingData[];
    selectedTimeFrame: "daily" | "weekly" | "monthly";
    timeFrameLabel: string;
}

export default function TrackingCard({
    trackingData,
    selectedTimeFrame,
    timeFrameLabel,
}: TrackingCardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4">
            {trackingData.map((data, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden w-[295px] h-40 sm:w-[204px] sm:h-48 lg:w-60 lg:h-52 rounded-lg pt-10 flex flex-col"
                >
                    <div
                        className={`absolute top-0 left-0 right-0 bottom-0 rounded-lg ${
                            bgColorMapping[data.title] || "bg-red-300"
                        }`}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: iconMapping[data.title],
                            }}
                        />
                    </div>
                    <div
                        className="relative h-52 z-10 flex flex-col gap-4 bg-darkblue rounded-t-lg p-4"
                        style={{ position: "relative", zIndex: 2 }}
                    >
                        <div className="flex justify-between">
                            <h1 className="text-white mt-4 sm:mt-0">
                                {data.title}
                            </h1>
                            <p className="text-white">...</p>
                        </div>
                        <div className="flex flex-row gap-20 items-center sm:flex-col sm:gap-4 sm:items-start">
                            <p className="text-xl sm:text-3xl lg:text-5xl text-white">
                                {data.timeframes[selectedTimeFrame].current} hrs
                            </p>
                            <p className="text-white/50">{`${timeFrameLabel} - ${data.timeframes[selectedTimeFrame].previous}`}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export type { TrackingData };
