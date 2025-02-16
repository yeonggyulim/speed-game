import Heading from "@atoms/Heading";
import Button from "@atoms/Button";
import Text from "@atoms/Text";
import AdSection from "@organisms/AdSection";
import GameList from "@organisms/GameList";

const MainContent: React.FC = () => {
  return (
    <div>
      <section className="bg-blue-900 text-center py-8">
        <Heading level={1} className="text-4xl font-bold mb-4">
          스피드 게임
        </Heading>
        <Text className="text-2xl mb-6">Speed Game</Text>
        {/* <Button className="py-2 px-6 rounded-full bg-green-500 text-black">
          ENJOY MORE
        </Button> */}
      </section>

      <section className="bg-black py-12 text-center">
        <Heading level={2} className="text-3xl font-bold mb-4">
          게임 리스트
        </Heading>
        <Text className="mb-10">핫한 스피드 게임을 만나보세요.</Text>
        <GameList />
      </section>

      <AdSection />
    </div>
  );
};

export default MainContent;
