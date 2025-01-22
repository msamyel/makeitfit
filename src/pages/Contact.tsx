import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import matejv from "../assets/matejv.png";

const Contact = () => {
    return (
        <>
            <main className="flex flex-row justify-center content-between flex-wrap">
                <div className="lg:w-[400px] text-center">
                    <h1 className="text-4xl font-bold mb-8 mt-8 text-center">
                        Contact
                    </h1>

                    <p className="mb-4">
                        This app was created by Matěj Voslař. Feel free to use
                        it to plan your social media posts.
                    </p>

                    <p className="mb-4">
                        <a
                            href="/terms"
                            className="text-link-primary hover:text-link-secondary"
                        >
                            Terms of Use
                        </a>{" "}
                        |{" "}
                        <a
                            href="/terms"
                            className="text-link-primary hover:text-link-secondary"
                        >
                            Privacy policy
                        </a>
                    </p>

                    <p className="mb-4">
                        Uses{" "}
                        <a
                            href="https://www.npmjs.com/package/emoji-picker-react"
                            className="text-link-primary hover:text-link-secondary"
                            target="_blank"
                        >
                            emoji-picker-react
                        </a>
                        {". "}
                        Thanks mock-end for their{" "}
                        <a
                            href="https://github.com/mock-end/tld-list"
                            className="text-link-primary hover:text-link-secondary"
                        >
                            list
                        </a>{" "}
                        of Top Level Domains.
                    </p>
                    <h2 className="text-4xl font-bold mt-8 mb-8 text-center">
                        Support the App
                    </h2>

                    <p className="mb-4">
                        Enjoying the app without ads? Buy me a coffee to keep
                        the lights on!
                    </p>

                    <div className="mb-4 w-full flex flex-row justify-center">
                        <a
                            className="inline-block"
                            href="https://ko-fi.com/X8X13WFO2"
                            target="_blank"
                        >
                            <img
                                className="h-16"
                                src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
                                alt="Support make-it-fit.online on ko-fi.com"
                            />
                        </a>
                    </div>
                </div>

                <div className="lg:w-[400px]">
                    <h2 className="text-4xl font-bold mt-8 mb-8 text-center">
                        Contact
                    </h2>

                    <div className="flex justify-start mb-8 center mx-auto w-9/12">
                        <img
                            src={matejv}
                            alt="Matěj Voslař"
                            className="rounded-full w-32 h-32 mr-4"
                        />
                        <div className="flex-grow">
                            <h2 className="text-xl font-bold">Matěj Voslař</h2>
                            <p className="text-darkslate mb-4">
                                Software engineer
                            </p>
                            <p className="mb-4">
                                Feel free to reach out. I'm always open to
                                connecting with fellow enthusiasts.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="mb-4">
                            Let's connect on LinkedIn:&nbsp;
                            <a
                                href="https://www.linkedin.com/in/mat%C4%9Bj-vosla%C5%99-46a0111a1/"
                                className="text-link-primary hover:text-link-secondary"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} /> Matěj
                                Voslař
                            </a>
                        </p>

                        <p className="mb-4">
                            Visit my website:&nbsp;
                            <a
                                href="https://matejvi.cz/"
                                className="text-link-primary hover:text-link-secondary"
                                target="_blank"
                            >
                                Matejvi.cz
                            </a>
                        </p>

                        <p className="mb-4">
                            For inquiries, please email me at:&nbsp;
                            <a
                                href="mailto:matej94v@gmail.com"
                                className="text-link-primary hover:text-link-secondary"
                            >
                                matej94v@gmail.com
                            </a>
                            <br />
                            or reach me directly on&nbsp;
                            <a
                                href="https://discord.gg/dem3kPGJBe"
                                className="text-link-primary hover:text-link-secondary"
                            >
                                <FontAwesomeIcon icon={faDiscord} /> Discord
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
