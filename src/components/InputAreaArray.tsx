import { useEffect, useState } from "react";
import InputArea from "./InputArea";

interface InputAreaArrayProps {
    postId: number;
}

const InputAreaArray = ({ postId }: InputAreaArrayProps) => {
    const [inputArray, setInputArray] = useState<string[]>([]);

    useEffect(() => {
        const savedStory = localStorage.getItem(`story_${postId}`);
        if (savedStory) {
            setInputArray(JSON.parse(savedStory));
        } else {
            setInputArray([""]);
        }
    }, [postId]);

    const saveStory = () => {
        localStorage.setItem(`story_${postId}`, JSON.stringify(inputArray));
    };

    const handleTextChange = (index: number, text: string) => {
        const newInputArray = [...inputArray];
        newInputArray[index] = text;
        setInputArray(newInputArray);
        saveStory();
    };

    const appendInput = (index: number) => {
        const newInputArray = [...inputArray];
        newInputArray.splice(index + 1, 0, "");
        setInputArray(newInputArray);
    };

    const removeInput = (index: number) => {
        const newInputArray = [...inputArray];
        newInputArray.splice(index, 1);
        setInputArray(newInputArray);
        saveStory();
    };

    const moveInputUp = (index: number) => {
        if (index === 0) return;
        const newInputArray = [...inputArray];
        const temp = newInputArray[index - 1];
        newInputArray[index - 1] = newInputArray[index];
        newInputArray[index] = temp;
        setInputArray(newInputArray);
        saveStory();
    };

    const moveInputDown = (index: number) => {
        if (index === inputArray.length - 1) return;
        const newInputArray = [...inputArray];
        const temp = newInputArray[index + 1];
        newInputArray[index + 1] = newInputArray[index];
        newInputArray[index] = temp;
        setInputArray(newInputArray);
        saveStory();
    };

    return (
        <>
            {inputArray.map((input, index) => (
                <InputArea
                    key={index}
                    index={index}
                    text={input}
                    onUpdateText={(updatedText) =>
                        handleTextChange(index, updatedText)
                    }
                    onAppendInput={() => appendInput(index)}
                    onRemoveInput={() => removeInput(index)}
                    onMoveInputDown={() => moveInputDown(index)}
                    onMoveInputUp={() => moveInputUp(index)}
                />
            ))}
        </>
    );
};

export default InputAreaArray;
