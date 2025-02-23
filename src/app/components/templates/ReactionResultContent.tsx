'use client';

import { useEffect, useState } from 'react';
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import Button from "@atoms/Button";
import { useRouter, useSearchParams } from 'next/navigation';

export default function ReactionResultContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [results, setResults] = useState<number[]>([]);

    useEffect(() => {
        const savedResults = localStorage.getItem('reactionResults');
        if (savedResults) {
            setResults(JSON.parse(savedResults));
        }
    }, []);

    const score = searchParams.get('score');
    const average = score ? parseInt(score) : (
        results.length > 0
            ? Math.round(results.reduce((a, b) => a + b, 0) / results.length)
            : 0
    );

    const handleShareKaKao = () => {
        const { Kakao, location } = window;
        Kakao.Share.sendScrap({
            requestUrl: location.href,
        });
    };

    return (
        <div>
            <section className="bg-blue-900 text-center py-8">
                <Heading level={1} className="text-4xl font-bold mb-4">
                    반응 속도 테스트 결과
                </Heading>
                <Text className="text-2xl mb-6">Reaction Speed Test Result</Text>
            </section>

            <div className="bg-blue-900 text-white text-center py-12">
                <div className="max-w-md mx-auto bg-white text-black rounded-lg p-6">
                    <Text className="text-xl mb-4">평균 반응 속도: {average}ms</Text>
                    <div className="mb-6">
                        {results.map((result, index) => (
                            <p key={index} className="mb-2">
                                {index + 1}차 시도: {result}ms
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button
                            onClick={() => router.push('/reaction')}
                            className="bg-blue-500 text-white px-6 py-2 rounded"
                        >
                            다시 시도하기
                        </Button>
                        <Button
                            onClick={handleShareKaKao}
                            className="bg-yellow-500 text-white px-6 py-2 rounded"
                        >
                            카카오톡 공유하기
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}