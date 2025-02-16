import TestItem from "@molecules/TestItem";

const GameList: React.FC = () => {
  const testItems = [
    { title: "반응 속도 테스트", index: 1, src: "/reaction-speed-test.png", href: "/reaction" },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-6">
      {testItems.map((item) => (
        <TestItem key={item.index} title={item.title} src={item.src} href={item.href} />
      ))}
    </div>
  );
};

export default GameList;
