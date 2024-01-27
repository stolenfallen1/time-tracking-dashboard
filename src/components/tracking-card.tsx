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
        <div className="grid grid-cols-3 gap-4">
            {trackingData.map((data, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden w-60 h-48 rounded-lg p-4 flex flex-col gap-10"
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
                        className="relative z-10 flex flex-col gap-4 bg-darkblue"
                        style={{ position: "relative", zIndex: 2 }}
                    >
                        <div className="flex justify-between">
                            <h1>{data.title}</h1>
                            <p>...</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-5xl">
                                {data.timeframes[selectedTimeFrame].current} hrs
                            </p>
                            <p>{`${timeFrameLabel} - ${data.timeframes[selectedTimeFrame].previous}`}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export type { TrackingData };
