import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import InputArea from "./InputArea";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";

interface InputAreaArrayProps {
    threadId: number;
}

interface TextAreaSelection {
    focusedAreaId: number;
    start: number;
    end: number;
}

interface Coordinates {
    x: number;
    y: number;
}

const InputAreaArray = ({ threadId }: InputAreaArrayProps) => {
    const [inputArray, setInputArray] = useState<string[]>([""]);

    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

    const [textAreaSelection, setTextAreaSelection] =
        useState<TextAreaSelection>({ focusedAreaId: 0, start: 0, end: 0 });

    const [emojiPickerPosition, setEmojiPickerPosition] = useState<Coordinates>(
        { x: 0, y: 0 }
    );

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

    const handleTextChange = (
        index: number,
        event: ChangeEvent,
        text: string
    ) => {
        const newInputArray = [...inputArray];
        newInputArray[index] = text;

        // add another input area if this is the last one
        if (index === inputArray.length - 1 && text.length > 0) {
            newInputArray.push("");
        }

        setInputArray(newInputArray);

        // also update cursor
        const textAreaTarget = event.target as HTMLTextAreaElement;
        updateTextAreaSelection(
            index,
            textAreaTarget.selectionStart,
            textAreaTarget.selectionEnd
        );
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

    const handleEmojiButtonClick = (e: MouseEvent) => {
        setEmojiPickerVisible((prev) => !prev);
        const target = e.target as HTMLButtonElement;
        const rect = target.getBoundingClientRect();
        setEmojiPickerPosition({
            x: rect.x,
            y: rect.y,
        });
    };

    const insertEmoji = (
        emojiData: EmojiClickData,
        _: MouseEvent<Element, MouseEvent>
    ) => {
        const emoji = emojiData.emoji;
        const newInputArray = [...inputArray];
        const focusedAreaId = textAreaSelection.focusedAreaId;
        const start = textAreaSelection.start;
        const end = textAreaSelection.end;
        const currentText = newInputArray[focusedAreaId];
        const newText =
            currentText.substring(0, start) +
            emoji +
            currentText.substring(end);
        newInputArray[focusedAreaId] = newText;
        setInputArray(newInputArray);
        setTextAreaSelection((prev) => {
            return {
                ...prev,
                start: start + emoji.length,
                end: end + emoji.length,
            };
        });
    };

    const updateTextAreaSelection = (
        postId: number,
        start: number,
        end: number
    ) => {
        setTextAreaSelection({
            focusedAreaId: postId,
            start: start,
            end: end,
        });
    };

    return (
        <>
            <div
                className="absolute z-10 scale-75 translate-y-[50%]"
                style={{
                    top: emojiPickerPosition.y - 200,
                    left: emojiPickerPosition.x - 350,
                }}
            >
                <EmojiPicker
                    onEmojiClick={insertEmoji}
                    open={emojiPickerVisible}
                />
            </div>
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
                    onUpdateText={(event, updatedText) =>
                        handleTextChange(index, event, updatedText)
                    }
                    onUpdateSelection={(start, end) =>
                        updateTextAreaSelection(index, start, end)
                    }
                    onAppendInput={() => appendInput(index)}
                    onRemoveInput={() => removeInput(index)}
                    onMoveInputDown={() => moveInputDown(index)}
                    onMoveInputUp={() => moveInputUp(index)}
                    onEmojiClick={handleEmojiButtonClick}
                />
            ))}
        </>
    );
};

export default InputAreaArray;
