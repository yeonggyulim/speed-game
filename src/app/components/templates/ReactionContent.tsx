import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import AdSection from "@organisms/AdSection";
import ReactionTest from "@organisms/ReactionTest";

const ReactionContent: React.FC = () => {
    return (
        <div>
            <section className="bg-blue-900 text-center py-8">
                <Heading level={1} className="text-4xl font-bold mb-4">
                    반응 속도 테스트
                </Heading>
                <Text className="text-2xl mb-6">Reaction Speed Test</Text>
            </section>

            <section className="bg-black py-12 text-center">
                <ReactionTest />
            </section>

            <AdSection />
        </div>
    );
};

export default ReactionContent;
