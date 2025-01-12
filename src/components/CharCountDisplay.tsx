interface CharCountDisplayProps {
    currentCharCount: number;
    maxCharCount: number;
}

const CharCountDisplay = ({
    currentCharCount,
    maxCharCount,
}: CharCountDisplayProps) => {
    return (
        <div>
            {currentCharCount} / {maxCharCount}
        </div>
    );
};

export default CharCountDisplay;
