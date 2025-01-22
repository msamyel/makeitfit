import PageTitle from "../components/PageTitle";

const About = () => {
    return (
        <>
            <PageTitle title={"About"} />
            <main id="article" className="pb-[185px] p-8">
                <h2>
                    Hello,
                    <br />
                    and welcome to{" "}
                    <span className="app-name">Make It Fit!</span>
                </h2>

                <ul className="toc">
                    <li>
                        <a href="#introduction">Introduction</a>
                    </li>
                    <li>
                        <a href="#why-is-it-difficult">
                            Why is it so difficult to predict available
                            character count?
                        </a>
                    </li>
                    <li>
                        <a href="#and-then-there-is-emoji">
                            And then there is emoji...
                        </a>
                    </li>
                    <li>
                        <a href="#how-to-use">How to use this app</a>
                    </li>
                </ul>

                <h3>
                    <a id="introduction">Introduction</a>
                </h3>

                <p>
                    This is a project which I created out of necessity in the
                    time during which I managed multiple social media accounts
                    for a civil society that I was part of. One of our
                    activities was creating informative threads about the newest
                    developments in cybersecurity, social media, and
                    disinformation.
                </p>
                <p>
                    After perfecting each post in a thread, so that it would be
                    easily comprehensible but also fit within the character
                    count limit constraint of e.g. X/Twitter, we would find out
                    that the same text breaks those limits on different social
                    media platforms.
                </p>
                <p>
                    To publish the same text on every social media platform,
                    there was a lot of back and forth, which only slowed us
                    down. This is when I came up with the idea of an editor,
                    which tells you whether the posts in your thread will fit on
                    each social media site.
                </p>
                <p className="my-5 text-center text-xl">
                    If you're looking to make your threads more engaging and
                    improve your reach on social media, check out{" "}
                    <a
                        href="/writing-engaging-threads"
                        className="text-link-primary hover:text-link-secondary"
                    >
                        our guide
                    </a>{" "}
                    with many tips and tricks that will help you achieve that
                    goal.
                </p>

                <h3>
                    <a id="why-is-it-difficult">
                        Why is it so difficult to predict available character
                        count?
                    </a>
                </h3>
                <p>
                    Each social media platform a different number of characters
                    which it allows in a single post. In some cases, such as
                    Facebook or Linkedin, this limit is virtually non-existent,
                    and you can write as long a post as you like. This is why
                    these platforms are not included in this app.
                </p>
                <p>
                    You might suggest to pick the platform with the lowest
                    number of available characters per post, and just make sure
                    to write everything so that it fits there. Then it should
                    also fit on every other social media, right?
                </p>
                <p>
                    Unfortunately, things are not so simple. Take URLs for
                    example. When you want to link an article that you are
                    referencing in your thread, some social media platforms will
                    count every character in that URL, so you'd better use some
                    kind of URL shortener. However, other platforms count each
                    link as a constant number of characters (for example 23 in
                    the case of X/Twitter). Then there are platforms like
                    Bluesky, taking the best of both worlds, where each
                    character in the link will be counted, but only to a maximum
                    of 30 characters. Any character exceeding that limit will
                    not be counted in the total length of your post.
                </p>
                <h3>
                    <a id="and-then-there-is-emoji">
                        And then there is emoji...
                    </a>
                </h3>

                <p>
                    For many people, arrows, smiley faces and other symbols, is
                    an unseparable part of creating a thread. These little
                    picture can attract the readers' attention or help structure
                    the text into a more readable form. Replacing e.g. country
                    names with flag emojis can save some characters.
                </p>
                <p>
                    Unless you're only interested in writing serious threads
                    without any such clutches, you might notice, that not all
                    platforms treat emoji equally. On X/Twitter for example,
                    each emoji is counted as two characters.
                </p>
                <p>
                    I call the resulting character count after applying every
                    emoji as 2 characters the <b>weighted character count</b>.
                    This measure is also important if you’re planning to write
                    in some languages outside of English. Specifically,
                    syllabographic or logographic languages such as Japanese or
                    Korean. Characters of these languages also take up 2
                    character spaces each. This is not the case on other social
                    media platforms, where the characters are not weighed.
                </p>
                <p>
                    Some older users of Twitter/X will remember the times when
                    the character limit was only 140. At this point, weighed
                    character count was not yet introduced, meaning that both
                    English and Japanese user could write exactly 140 characters
                    per post. This greatly benefitted the latter, as the
                    Japanese language is much more compact — the same idea can
                    be expressed in less characters than in English, because
                    most words are just 2 characters long.
                </p>
                <h3>
                    <a id="how-to-use">How to use this app</a>
                </h3>

                <p>
                    Now that you know the complexity of knowing in advance
                    whether your threads are going to fit inside the character
                    limit on each social media website, you are ready to start
                    using the app. Just start by writing your first post, and
                    more input blocks are going to appear for the subsequent
                    posts in your thread.
                </p>
                <p>
                    You can also use the up and down arrows to change the order
                    of posts in your thread. The emoji button will display an
                    emoji picker. And the cross button can be used to remove a
                    post from the thread.
                </p>
                <p>
                    The weighted character count for the following social media
                    platforms will appear below each input: <b>Twitter/X</b>,{" "}
                    <b>Bluesky</b>, <b>Threads</b>, <b>Mastodon</b>.
                </p>
                <p>
                    I'm looking for ways to make this app better and I hope to
                    be able to keep it up to date even if each social media
                    platform's way of weighing characters changes. If you notice
                    any inaccurate results from the app, I will be most
                    appreciative if you could let me know.
                </p>
                <p>
                    The content is saved to local storage, which means that even
                    if you close your browser tab, it will be saved on your
                    device and appear again when you open the app again. For
                    this reason, we recommend to always work with just one
                    instance of this app open per each device.
                </p>
                <p>
                    <b>
                        I wish you luck in your creative writing and hope you
                        will be attract many impressions and a lot of engagement
                        with your threads.
                    </b>
                </p>
            </main>
        </>
    );
};

export default About;
