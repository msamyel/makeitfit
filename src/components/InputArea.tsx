import React from "react";
import CharCountDisplay from "./CharCountDisplay";

const InputArea = () => {
    const [currentCharCount, setCurrentCharCount] = React.useState(0);

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentCharCount(event.target.value.length);
    };

    return (
        <>
            <textarea rows={5} cols={50} onInput={handleInput} />
            <CharCountDisplay
                currentCharCount={currentCharCount}
                maxCharCount={280}
            />
        </>
    );
};

export default InputArea;
