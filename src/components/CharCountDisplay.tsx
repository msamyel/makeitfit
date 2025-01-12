interface CharCountDisplayProps {
    currentCharCount: number;
    maxCharCount: number;
}

const CharCountDisplay = ({
    currentCharCount,
    maxCharCount,
}: CharCountDisplayProps) => {
    return (
        <div className="md:text-md flex flex-grow flex-row flex-wrap items-baseline gap-1 text-sm text-gray-400">
            {currentCharCount} / {maxCharCount}
        </div>
    );
};

export default CharCountDisplay;
