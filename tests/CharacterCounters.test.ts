import { expect, test } from "vitest";

import {
    getBlueskyCharCount,
    getMastodonCharCount,
    getXCharCount,
    getThreadsCharCount,
    isVariationSelector,
    getGraphemeCount,
} from "../src/services/CharacterCounters";

test("test assumptions about character counts", () => {
    const example1 = "Hello, world!";
    expect(example1.length).toBe(13);

    const example2 = "🌍";
    expect(example2.length).toBe(2);

    const example3 = "👷‍♂️";
    expect(example3.length).toBe(5);
    let example3len = 0;
    for (let _ of example3) {
        example3len++;
    }
    expect(example3len).toBe(4);

    let example3len2 = 0;
    for (let char of example3) {
        if (isVariationSelector(char)) {
            continue;
        }
        example3len2++;
    }
    expect(example3len2).toBe(3);

    const segmenterFr = new Intl.Segmenter("en", { granularity: "grapheme" });
    const string1 = "Hello, world!👷‍♂️‍";

    const iterator1 = segmenterFr.segment(string1)[Symbol.iterator]();
    let count = 0;
    for (let _ of iterator1) {
        count++;
    }
    expect(count).toBe(14);
});

test("test grapheme counter assumptions", () => {
    expect(getGraphemeCount("Hello, world!")).toBe(13);
    expect(getGraphemeCount("🌍")).toBe(1);
    expect(getGraphemeCount("👷‍♂️")).toBe(1);
});

test("test character counts for predefined posts", () => {
    const example1 = "Hello, world!";
    expect(getXCharCount(example1)).toBe(13);
    expect(getMastodonCharCount(example1)).toBe(13);
    expect(getBlueskyCharCount(example1)).toBe(13);
    expect(getThreadsCharCount(example1)).toBe(13);

    const example2 = "Hello, world! 🌍";
    expect(getXCharCount(example2)).toBe(16);
    expect(getMastodonCharCount(example2)).toBe(15);
    expect(getBlueskyCharCount(example2)).toBe(15);
    expect(getThreadsCharCount(example2)).toBe(15);

    const example3 = "Hello, world! 👷‍♂️";
    //　any emoji (?) should be counted as 2 characters on X
    expect(getXCharCount(example3)).toBe(16);
    expect(getMastodonCharCount(example3)).toBe(15);
    expect(getBlueskyCharCount(example3)).toBe(15);
    expect(getThreadsCharCount(example3)).toBe(18);
});

test("test character counts for URLs", () => {
    const shortUrl = "https://example.com/";
    expect(getXCharCount(shortUrl)).toBe(23);
    expect(getMastodonCharCount(shortUrl)).toBe(23);
    expect(getBlueskyCharCount(shortUrl)).toBe(11);
    expect(getThreadsCharCount(shortUrl)).toBe(20);

    const longUrl =
        "https://example.com/this/is/a/long/url/this/is/a/long/url/this/is/a/long/url/this/is/a/long/url/";
    expect(getXCharCount(longUrl)).toBe(23);
    expect(getMastodonCharCount(longUrl)).toBe(23);
    expect(getBlueskyCharCount(longUrl)).toBe(27);
    expect(getThreadsCharCount(longUrl)).toBe(96);

    const trailingSlashUrl = "https://e.com/";
    const doubleTrailingSlashUrl = "https://e.com//";
    expect(getBlueskyCharCount(trailingSlashUrl)).toBe(5);
    expect(getBlueskyCharCount(doubleTrailingSlashUrl)).toBe(7);
});
