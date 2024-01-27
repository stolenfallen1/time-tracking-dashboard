import ImageProfile from "../assets/image-jeremy.png";

export default function ProfileSection() {
    return (
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
    );
}
