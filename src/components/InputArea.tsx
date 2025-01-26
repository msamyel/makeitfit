import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import CharCountDisplay from "./CharCountDisplay";
import { Position } from "../types/Position";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusCircle,
    faAngleUp,
    faAngleDown,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
    getBlueskyCharCount,
    getMastodonCharCount,
    getThreadsCharCount,
    getXCharCount,
} from "../services/CharacterCounters";
import CharacterCounts from "../types/CharacterCounts";

interface InputAreaProps {
    position: Position;
    text: string;
    onUpdateText: (event: ChangeEvent, text: string) => void;
    onAppendInput: () => void;
    onMoveInputUp: () => void;
    onMoveInputDown: () => void;
    onRemoveInput: () => void;
    onEmojiClick: (e: React.MouseEvent) => void;
    onUpdateSelection: (start: number, end: number) => void;
}

const InputArea = ({
    position,
    text,
    onUpdateText,
    onAppendInput,
    onMoveInputUp,
    onMoveInputDown,
    onRemoveInput,
    onEmojiClick,
    onUpdateSelection,
}: InputAreaProps) => {
    const [characterCounts, setCharacterCounts] = useState<CharacterCounts>({
        bluesky: 0,
        mastodon: 0,
        threads: 0,
        x: 0,
    });

    const textareaRef = useRef(null);

    useEffect(() => {
        const textArea = textareaRef.current! as HTMLTextAreaElement;
        updateTextAreaHeight(textArea);

        const counts = {
            bluesky: getBlueskyCharCount(text),
            mastodon: getMastodonCharCount(text),
            threads: getThreadsCharCount(text),
            x: getXCharCount(text),
        };

        setCharacterCounts(counts);
    }, [text]);

    const updateTextAreaHeight = (textArea: HTMLTextAreaElement) => {
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
    };

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onUpdateText(event, event.target.value);

        const textAreaTarget = event.target as HTMLTextAreaElement;

        // update textarea height
        updateTextAreaHeight(textAreaTarget);

        // also update cursor

        const selectionStart = textAreaTarget.selectionStart;
        const selectionEnd = textAreaTarget.selectionEnd;
        onUpdateSelection(selectionStart, selectionEnd);
    };

    const handleTextAreaClick = (event: React.MouseEvent) => {
        const textAreaTarget = event.target as HTMLTextAreaElement;
        const selectionStart = textAreaTarget.selectionStart;
        const selectionEnd = textAreaTarget.selectionEnd;
        onUpdateSelection(selectionStart, selectionEnd);
    };

    const handleEmojiButtonClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onEmojiClick(event);
    };

    return (
        <>
            <div>
                <div className="relative">
                    <textarea
                        ref={textareaRef}
                        id="textarea_id_placeholder"
                        className="quote-textarea break-words h-24 w-full resize-none border-none bg-gray-50 p-2 pr-[120px] text-xl tracking-wider focus:outline-none"
                        onInput={handleInput}
                        onClick={handleTextAreaClick}
                        value={text}
                        placeholder="Write your post here.."
                    ></textarea>
                    <div className="absolute right-1 top-1 flex w-16 justify-end gap-3">
                        <button
                            type="button"
                            id="emoji_trigger_placeholder"
                            className="emoji-trigger"
                            onClick={handleEmojiButtonClick}
                        >
                            😎
                        </button>
                        {position !== "first" && (
                            <button
                                type="button"
                                onClick={onMoveInputUp}
                                className="text-gray-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleUp}
                                    className="text-2xl"
                                />
                            </button>
                        )}
                        {position !== "last" && (
                            <button
                                type="button"
                                onClick={onMoveInputDown}
                                className="text-gray-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="text-2xl"
                                />
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={onRemoveInput}
                            className="text-red-700 opacity-25 hover:opacity-100 focus:text-green-800 focus:outline-none"
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-2xl"
                            />
                        </button>
                    </div>

                    <div className="space-between flex h-[20px] w-full flex-row">
                        <CharCountDisplay characterCounts={characterCounts} />
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
