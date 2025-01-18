import React, { useEffect } from "react";
import InputArea from "./InputArea";

interface InputAreaArrayProps {
    texts: string[];
}

const InputAreaArray = ({ texts }: InputAreaArrayProps) => {
    const [inputArray, setInputArray] = React.useState<string[]>(texts);

    const handleTextChange = (index: number, text: string) => {
        const newInputArray = [...inputArray];
        newInputArray[index] = text;
        setInputArray(newInputArray);
    };

    const appendInput = (index: number) => {
        const newInputArray = [...inputArray];
        newInputArray.splice(index + 1, 0, "");
        setInputArray(newInputArray);
    };

    return (
        <>
            {inputArray.map((input, index) => (
                <InputArea
                    key={index}
                    text={input}
                    onUpdateText={(updatedText) =>
                        handleTextChange(index, updatedText)
                    }
                    onAppendInput={() => appendInput(index)}
                />
            ))}
        </>
    );
};

export default InputAreaArray;
