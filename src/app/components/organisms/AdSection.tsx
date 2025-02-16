import Image from "@atoms/Image";

const AdSection: React.FC = () => {
  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto text-center">
        <Image
          src="https://placehold.co/728x90"
          width={728}
          height={90}
          alt="Advertisement"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default AdSection;
