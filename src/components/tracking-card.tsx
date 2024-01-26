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
                    className="w-60 h-48 bg-darkblue text-white rounded-lg p-4 flex flex-col gap-10"
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
            ))}
        </div>
    );
}

export type { TrackingData };
