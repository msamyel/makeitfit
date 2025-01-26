const Terms = () => {
    return (
        <>
            <div className="flex flex-row justify-center content-between flex-wrap max-w-[1000px] mx-auto text-center">
                <div className="px-2">
                    <h1 className="text-4xl font-bold mb-8 mt-8 text-center">
                        Terms of Use
                    </h1>

                    <p className="mb-4">Last updated: 2025 January 26th</p>

                    <p className="mb-4">
                        Welcome to make-it-fit.online (the "Service") By using
                        thie Service, you agree to the following terms:
                    </p>

                    <p className="mb-4">
                        You are free to use the Service for personal or
                        commercial projects without any cost.
                    </p>

                    <p className="mb-4">
                        The author of the Service is not liable for any damages,
                        direct or indirect, that may result from the use of this
                        application.
                    </p>

                    <p className="mb-4">
                        If you encounter any bugs, errors, or issues while using
                        the Service, please report them to the author using one
                        of the{" "}
                        <a
                            href="/contact"
                            className="text-link-primary hover:text-link-secondary"
                        >
                            contacts
                        </a>
                        .
                    </p>

                    <p className="mb-4">
                        If you do not agree with any part of these terms, please
                        refrain from using the application.
                    </p>
                </div>
                <div className="px-2">
                    <h2 className="text-4xl font-bold mt-8 mb-8 text-center">
                        Privacy & Cookies Policy
                    </h2>

                    <div className="text-center">
                        <p className="mb-4">Last updated: 2025 January 26th</p>

                        <p className="mb-4">
                            The application does not store user data on any
                            server. Your data persists between sessions by being
                            stored on your local machine.
                        </p>

                        <p className="mb-4">
                            This website does not use cookies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Terms;
