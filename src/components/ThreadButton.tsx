import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ThreadButtonProps {
    threadId: number;
    title: string;
    onSelectThread: () => void;
    isSelected: boolean;
    onRemoveThread: () => void;
}

const ThreadButton = ({
    threadId,
    title,
    onSelectThread,
    isSelected,
    onRemoveThread,
}: ThreadButtonProps) => {
    const bgColor = isSelected
        ? "bg-gray-800"
        : "bg-onahau hover:bg-sandy-beach";
    const textColor = isSelected ? "text-white" : "text-gray-800";

    const onClickRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onRemoveThread();
    };

    return (
        <>
            <div
                onClick={onSelectThread}
                className={
                    bgColor +
                    " relative block group py-2 px-4 text-nowrap overflow-clip cursor-pointer"
                }
            >
                {isSelected && (
                    <button
                        type="button"
                        onClick={onClickRemove}
                        className="absolute text-white opacity-25 hover:opacity-100 focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>
                )}
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
