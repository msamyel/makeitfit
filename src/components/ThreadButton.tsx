interface ThreadButtonProps {
    threadId: number;
    title: string;
    onSelectThread: () => void;
    isSelected: boolean;
}

const ThreadButton = ({
    threadId,
    title,
    onSelectThread,
    isSelected,
}: ThreadButtonProps) => {
    const bgColor = isSelected
        ? "bg-gray-800"
        : "bg-onahau hover:bg-sandy-beach";
    const textColor = isSelected ? "text-white" : "text-gray-800";

    return (
        <>
            <div
                onClick={onSelectThread}
                className={
                    bgColor +
                    " block group py-2 px-4 text-nowrap overflow-clip cursor-pointer"
                }
            >
                <span
                    className={
                        textColor + " block text-right font-bold text-2xl"
                    }
                >
                    #{threadId}
                </span>
                <span
                    className={
                        textColor +
                        " block text-left group-hover:animate-infinite-scroll"
                    }
                >
                    {title}
                </span>
            </div>
        </>
    );
};

export default ThreadButton;
