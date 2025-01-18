import InputAreaArray from "../components/InputAreaArray";

const Home = () => {
    return (
        <>
            <main className="w-full h-full flex justify-left items-left pb-[185px]">
                <div className="w-20 h-full">
                    <div className="w-20 h-20 bg-blue-500 text-white">
                        Post 1
                    </div>
                    <div className="w-20 h-20 bg-blue-500 text-white">
                        Post 1
                    </div>
                    <div className="w-20 h-20 bg-blue-500 text-white">
                        Post 1
                    </div>
                    <div className="w-20 h-20 bg-blue-500 text-white">
                        Post 1
                    </div>
                    <div className="w-20 h-20 bg-blue-500 text-white">
                        Post 1
                    </div>
                </div>
                <div className="flex flex-col gap-8 p-8 grow">
                    <InputAreaArray postId={0} />
                </div>
            </main>
        </>
    );
};

export default Home;
