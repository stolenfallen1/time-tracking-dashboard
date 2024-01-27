interface TimeFrameButtonsProps {
    setSelectedTimeFrame: (timeFrame: "daily" | "weekly" | "monthly") => void;
}

export default function TimeFrameButtons({
    setSelectedTimeFrame,
}: TimeFrameButtonsProps) {
    return (
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
    );
}
