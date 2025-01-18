import React from "react";
import CharCountDisplay from "./CharCountDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusCircle,
    faAngleUp,
    faAngleDown,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface InputAreaProps {
    text: string;
    onUpdateText: (text: string) => void;
    onAppendInput: () => void;
}

const InputArea = ({ text, onUpdateText, onAppendInput }: InputAreaProps) => {
    const [currentCharCount, setCurrentCharCount] = React.useState(0);

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentCharCount(event.target.value.length);
        onUpdateText(event.target.value);
    };

    return (
        <>
            <div id="prefab">
                <div className="relative">
                    <textarea
                        id="textarea_id_placeholder"
                        className="quote-textarea h-24 w-full resize-none border-none bg-gray-50 p-2 pr-[120px] text-xl tracking-wider focus:outline-none"
                        onInput={handleInput}
                        value={text}
                        placeholder="Write your post here.."
                    ></textarea>
                    <div className="absolute right-1 top-1 flex w-16 justify-end gap-3">
                        <button
                            type="button"
                            id="emoji_trigger_placeholder"
                            className="emoji-trigger"
                        >
                            😎
                        </button>
                        <button
                            type="button"
                            onClick={() => {}}
                            className="text-gray-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <FontAwesomeIcon
                                icon={faAngleUp}
                                className="text-2xl"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() => {}}
                            className="text-gray-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                className="text-2xl"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() => {}}
                            className="text-red-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-2xl"
                            />
                        </button>
                    </div>

                    <div className="space-between flex h-[20px] w-full flex-row">
                        <CharCountDisplay
                            currentCharCount={currentCharCount}
                            maxCharCount={280}
                        />
                        <button
                            type="button"
                            onClick={onAppendInput}
                            className="text-green-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                className="text-2xl"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputArea;
