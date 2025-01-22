import { useMemo } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CharCountElementProps {
    className: string;
    currentCharCount: number;
    maxCharCount: number;
    label?: string;
    icon?: IconDefinition;
}

const CharCountElement = ({
    className,
    currentCharCount,
    maxCharCount,
    label,
    icon,
}: CharCountElementProps) => {
    const isOverLimit = useMemo(
        () => currentCharCount > maxCharCount,
        [currentCharCount]
    );

    return (
        <span className={isOverLimit ? "text-red-500" : ""}>
            {icon && (
                <>
                    <FontAwesomeIcon icon={icon} className={className} />{" "}
                </>
            )}
            {label && <span className={className}>{label} </span>}
            {currentCharCount}/{maxCharCount}
        </span>
    );
};

export default CharCountElement;
