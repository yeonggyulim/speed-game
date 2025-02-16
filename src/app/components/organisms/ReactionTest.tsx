"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ReactionTest = () => {
    const router = useRouter();
    const [state, setState] = useState<'waiting' | 'ready' | 'now' | 'finished'>('waiting');
    const [message, setMessage] = useState('클릭하여 시작하세요.');
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
    const [currentTry, setCurrentTry] = useState(1);
    const [results, setResults] = useState<number[]>([]);

    const handleClick = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색으로 변하면 클릭하세요!');
            const timeout = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭하세요!');
                setStartTime(Date.now());
            }, Math.floor(Math.random() * 1000) + 2000);
            setTimeoutId(timeout);
        } else if (state === 'ready') {
            clearTimeout(timeoutId);
            setState('waiting');
            setMessage('너무 성급하시네요! 다시 시작하려면 클릭하세요');
        } else if (state === 'now') {
            const endTime = Date.now();
            const result = endTime - startTime;
            setEndTime(result);
            setResults(prev => [...prev, result]);

            if (currentTry === 3) {
                setState('finished');
                localStorage.setItem('reactionResults', JSON.stringify([...results, result]));
                setMessage('결과를 보려면 클릭해 주세요.');
            } else {
                setState('waiting');
                setCurrentTry(prev => prev + 1);
                setMessage(`다음 테스트를 시작하려면 클릭하세요.`);
            }
        } else if (state === 'finished') {
            const averageScore = Math.round(results.reduce((a, b) => a + b, 0) / results.length);
            router.push(`/reaction/result?score=${averageScore}`);
        }
    };

    return (
        <div className="mt-8 flex flex-col items-center">
            <div
                onClick={handleClick}
                className={`w-64 h-64 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${state === 'waiting'
                    ? results.length > 0 && currentTry > 1
                        ? 'bg-blue-500'
                        : 'bg-red-500'
                    : state === 'ready'
                        ? 'bg-red-500'
                        : state === 'now'
                            ? 'bg-green-500'
                            : 'bg-blue-500'
                    }`}
            >
                <p className="text-white text-center px-4 whitespace-pre-line">{message}</p>
            </div>
            {(state === 'waiting' || state === 'finished') && endTime > 0 && (
                <p className="mt-4 text-xl">반응 속도: {endTime}ms</p>
            )}
            <p className="mt-4">
                {currentTry}/3 번째 테스트
            </p>
        </div>
    );
};

export default ReactionTest; 