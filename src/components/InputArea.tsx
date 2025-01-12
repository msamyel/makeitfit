import React from "react";
import CharCountDisplay from "./CharCountDisplay";

const InputArea = () => {
    const [currentCharCount, setCurrentCharCount] = React.useState(0);

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentCharCount(event.target.value.length);
    };

    return (
        <>
            <div id="prefab">
                <div className="relative">
                    <textarea
                        id="textarea_id_placeholder"
                        className="quote-textarea h-24 w-full resize-none border-none bg-gray-50 p-2 pr-[120px] text-xl tracking-wider focus:outline-none"
                        onInput={handleInput}
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
                            <i className="fas fa-angle-up text-2xl"></i>
                        </button>
                        <button
                            type="button"
                            onClick={() => {}}
                            className="text-gray-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <i className="fas fa-angle-down text-2xl"></i>
                        </button>
                        <button
                            type="button"
                            onClick={() => {}}
                            className="text-red-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <i className="fas fa-xmark text-2xl"></i>
                        </button>
                    </div>

                    <div className="space-between flex h-[20px] w-full flex-row">
                        <CharCountDisplay
                            currentCharCount={currentCharCount}
                            maxCharCount={280}
                        />
                        <button
                            type="button"
                            onClick={() => {}}
                            className="text-green-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <i className="fas fa-plus-circle text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputArea;
