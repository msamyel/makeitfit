import { useEffect, useState } from "react";
import InputArea from "./InputArea";

interface InputAreaArrayProps {
    threadId: number;
}

const InputAreaArray = ({ threadId }: InputAreaArrayProps) => {
    const [inputArray, setInputArray] = useState<string[]>([]);

    useEffect(() => {
        const savedStory = localStorage.getItem(`thread_${threadId}`);
        if (savedStory) {
            setInputArray(JSON.parse(savedStory));
        } else {
            setInputArray([""]);
        }
    }, [threadId]);

    useEffect(() => {
        saveStory();
    }, [inputArray]);

    const saveStory = () => {
        console.log(inputArray);
        localStorage.setItem(`thread_${threadId}`, JSON.stringify(inputArray));
    };

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

    const removeInput = (index: number) => {
        const newInputArray = [...inputArray];
        newInputArray.splice(index, 1);
        setInputArray(newInputArray);
    };

    const moveInputUp = (index: number) => {
        if (index === 0) return;
        const newInputArray = [...inputArray];
        const temp = newInputArray[index - 1];
        newInputArray[index - 1] = newInputArray[index];
        newInputArray[index] = temp;
        setInputArray(newInputArray);
    };

    const moveInputDown = (index: number) => {
        if (index === inputArray.length - 1) return;
        const newInputArray = [...inputArray];
        const temp = newInputArray[index + 1];
        newInputArray[index + 1] = newInputArray[index];
        newInputArray[index] = temp;
        setInputArray(newInputArray);
    };

    return (
        <>
            <h2 className="font-bold text-xl">Thread #{threadId}</h2>
            {inputArray.map((input, index) => (
                <InputArea
                    key={index}
                    position={
                        index === 0
                            ? "first"
                            : index === inputArray.length - 1
                            ? "last"
                            : "middle"
                    }
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
