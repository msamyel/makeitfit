import InputAreaArray from "../components/InputAreaArray";
import ThreadButton from "../components/ThreadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
    const [selectedThreadId, setSelectedThreadId] = useState<number>(0);
    const [threads, setThreads] = useState<number[]>([1]);

    useEffect(() => {
        const threadsContent = localStorage.getItem(`threads`);
        if (threadsContent) {
            setThreads((_) => {
                const threadIds = JSON.parse(threadsContent);
                console.log(threadIds);
                setSelectedThreadId(Math.max(...threadIds));
                return threadIds;
            });
            return;
        }
        setThreads([1]);
        setSelectedThreadId(1);
    }, []);

    // static
    const saveThreads = (_threads: number[]) => {
        localStorage.setItem(`threads`, JSON.stringify(_threads));
    };

    type FirstWordsGetter = (threadId: number) => string;
    const getFirstWordsOfThread = useCallback<FirstWordsGetter>(
        (threadId: number) => {
            const threadContents = localStorage.getItem(`thread_${threadId}`);
            if (!threadContents) return "New Thread";
            const threadContentsArray = JSON.parse(threadContents);
            if (!threadContentsArray[0]) return "New Thread";
            return threadContentsArray[0].split(" ").slice(0, 10).join(" ");
        },
        [selectedThreadId]
    );

    const addThread = () => {
        const newThreadId = Math.max(...threads) + 1;
        const newThreads = [...threads, newThreadId];
        setThreads(newThreads);
        selectThreadId(newThreadId);
        saveThreads(newThreads);
    };

    const removeThread = (threadId: number) => {
        const confirmation = confirm(
            "Are you sure you want to remove this thread?"
        );
        if (confirmation) {
            confirmRemoveThread(threadId);
        }
    };

    const confirmRemoveThread = (threadId: number) => {
        const newThreads = threads.filter((t) => t !== threadId);
        console.log(newThreads);
        console.log(Math.max(...newThreads));
        saveThreads(newThreads);
        selectThreadId(Math.max(...newThreads));
        setThreads(newThreads);
    };

    const selectThreadId = (threadId: number) => {
        // set thread as most recently selected
        // setThreads((prevThreads) => {
        //     const newThreads = prevThreads.filter((t) => t !== threadId);
        //     newThreads.unshift(threadId);
        //     return newThreads;
        // });

        setSelectedThreadId(threadId);
    };

    return (
        <>
            <main className="w-full h-full flex justify-left items-left pb-[185px]">
                <div className="w-[120px] h-full flex flex-col gap-1 p-1">
                    <button
                        type="button"
                        className="block h-[60px] bg-white hover:bg-sandy-beach px-4 text-nowrap overflow-clip text-sm"
                        onClick={addThread}
                    >
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            className="text-3xl text-green-500"
                        />{" "}
                    </button>
                    {threads
                        .sort((a, b) => b - a)
                        .map((threadId) => (
                            <ThreadButton
                                key={threadId}
                                threadId={threadId}
                                title={getFirstWordsOfThread(threadId)}
                                onSelectThread={() => selectThreadId(threadId)}
                                isSelected={selectedThreadId === threadId}
                                onRemoveThread={() => removeThread(threadId)}
                            ></ThreadButton>
                        ))}
                </div>
                <div className="flex flex-col gap-8 p-8 grow">
                    <InputAreaArray threadId={selectedThreadId} />
                </div>
            </main>
        </>
    );
};

export default Home;
