import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMastodon } from "@fortawesome/free-brands-svg-icons";
import CharCountElement from "./CharCountElement";
import CharacterCounts from "../types/CharacterCounts";

interface CharCountDisplayProps {
    characterCounts: CharacterCounts;
}

const CharCountDisplay = ({ characterCounts }: CharCountDisplayProps) => {
    return (
        <div className="md:text-md flex flex-grow flex-row flex-wrap items-baseline gap-1 text-sm text-gray-400">
            <CharCountElement
                className="md:text-xl opacity-50 ml-3 translate-y-1/6"
                label="🦋"
                currentCharCount={characterCounts.bluesky}
                maxCharCount={300}
            />
            <CharCountElement
                className="md:text-xl ml-3 translate-y-1/6"
                icon={faMastodon}
                currentCharCount={characterCounts.mastodon}
                maxCharCount={500}
            />
            <CharCountElement
                className="md:text-xl ml-3 translate-y-1/6"
                icon={faAt}
                currentCharCount={characterCounts.threads}
                maxCharCount={500}
            />
            <CharCountElement
                className="md:text-xl ml-3 translate-y-1/6"
                label="𝕏"
                currentCharCount={characterCounts.x}
                maxCharCount={280}
            />
        </div>
    );
};

export default CharCountDisplay;
