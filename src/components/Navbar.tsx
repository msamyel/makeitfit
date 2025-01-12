import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
            <h1 className="hidden">
                Make! It! Fit! Character counter for social media posts
            </h1>
            <div>
                <a href="/">
                    <img src="/images/header.png" alt="Logo" className="h-8" />
                </a>
                <p className="hidden">
                    Will your social media status fit on every platform?
                    Different platforms count characters in a different way.
                    Here you can plan your threads in advance. Get the character
                    count estimate for X/Twitter, Blue Sky, Mastodon, and
                    Threads.
                </p>
                <p className="hidden">
                    Ever copy emoji (emoticons) from Discord to X/Twitter and
                    they disappear? Copy them here first, then copy them to
                    X/Twitter and they will display properly.
                </p>
                <p className="hidden">
                    Especially on Twitter/X, the character count estimation is
                    difficult. Special characters such as emoji, or some
                    language characters (e.g. Japanese) are counted as two
                    characters on Twitter/X. Twitter/X also counts each link as
                    23 characters.
                </p>
            </div>
            <nav>
                <ul className="flex space-x-6 font-semibold">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-gray-300 invisible md:visible"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
