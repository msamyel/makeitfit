import TopLevelDomainsList from "tld-list";

function separateGraphemes(text: string): String[] {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    const graphemeIterator = segmenter.segment(text)[Symbol.iterator]();
    const graphemes = [];
    for (let grapheme of graphemeIterator) {
        graphemes.push(grapheme.segment);
    }
    return graphemes;
}

export function getGraphemeCount(text: string): number {
    const iterator1 = separateGraphemes(text);
    let count = 0;
    for (let _ of iterator1) {
        count++;
    }
    return count;
}

export function getXWeighedCharCount(text: string): number {
    let weighedCharCount: number = 0;
    // Regular expression to match two non-whitespace strings connected by a dot
    //   var regex = /S+.S+/;

    const regex = /\b[\u0021-\u007e]+\.[\u0021-\u007e]{2,}/g;
    // Match all occurrences of the pattern in the input string
    var matches = text.match(regex);

    matches?.forEach((match) => {
        let potentialUrl = match;
        if (!match.startsWith("http")) {
            potentialUrl = "http://" + match;
        }
        try {
            const url = new URL(potentialUrl);
            const hostname = url.hostname;
            if (TopLevelDomainsList.find((x) => hostname.endsWith(`.${x}`))) {
                text = text.replace(match, "");
                weighedCharCount += 23;
            }
        } catch {}
    });

    const graphemeIterator = separateGraphemes(text);
    for (let grapheme of graphemeIterator) {
        if (isDoubleWeighCharacter(grapheme)) {
            weighedCharCount += 2;
            continue;
        }
        weighedCharCount += 1;
    }

    return weighedCharCount;
}

export function isDoubleWeighCharacter(char: string): boolean {
    const charCode = char.charCodeAt(0);

    if (charCode >= 0 && charCode <= 4351) {
        return false;
    }

    if (charCode >= 8192 && charCode <= 8205) {
        return false;
    }

    if (charCode >= 8208 && charCode <= 8223) {
        return false;
    }

    if (charCode >= 8242 && charCode <= 8247) {
        return false;
    }

    return true;
}

export function isVariationSelector(char: string): boolean {
    const charCode = char.charCodeAt(0);

    return charCode >= 0xfe00 && charCode <= 0xfe0f;
}

export function getMastodonCharCount(text: string): number {
    let urlCharCount: number = 0;

    const regex = /\bhttp[s]{0,1}:\/\/[\u0021-\u007e]+/g;
    // Match all occurrences of the pattern in the input string
    var matches = text.match(regex);

    matches?.forEach((match) => {
        text = text.replace(match, "");
        urlCharCount += 23;
    });

    const graphemeCount = getGraphemeCount(text);

    return urlCharCount + graphemeCount;
}

export function getBlueskyCharCount(text: string): number {
    let urlCharCount: number = 0;

    const regex = /\bhttp[s]{0,1}:\/\/[\u0021-\u007e]+/g;
    // Match all occurrences of the pattern in the input string
    var matches = text.match(regex);

    matches?.forEach((match) => {
        let linkCharCountTarget = match.replace("http://", "");
        linkCharCountTarget = match.replace("https://", "");
        let linkLength = linkCharCountTarget.length;
        if (match.endsWith("/") && !match.endsWith("//")) {
            linkLength--;
        }
        text = text.replace(match, "");
        urlCharCount += linkLength < 27 ? linkLength : 27;
    });

    const graphemeCount = getGraphemeCount(text);

    return urlCharCount + graphemeCount;
}

export function getThreadsCharCount(text: string): number {
    let charCount = 0;
    for (let char of text) {
        charCount++;
    }
    return charCount;
}
