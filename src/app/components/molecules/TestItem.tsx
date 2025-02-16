import Image from "@atoms/Image";
import Text from "@atoms/Text";
import Link from "next/link";

interface TestItemProps {
  title: string;
  src: string;
  href: string;
}

const TestItem: React.FC<TestItemProps> = ({ title, src, href }) => {
  return (
    <Link href={href} className="block text-center mb-6 hover:opacity-80 transition-opacity">
      <div className="relative inline-block">
        <Image
          src={src}
          alt={title}
          className="w-40 h-40 mx-auto"
          width={150}
          height={150}
        />
      </div>
      <Text className="mt-2">{title}</Text>
    </Link>
  );
};

export default TestItem;
