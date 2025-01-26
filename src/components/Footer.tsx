const Footer = () => {
    return (
        <footer className="md:fixed bottom-0 w-full">
            <div className="bg-gray-800 text-white py-4 px-8 h-[40px] flex justify-between items-center">
                <p>Created by Matěj Voslař</p>
                <p>
                    <span id="cookie-disclaimer" className="text-white"></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
