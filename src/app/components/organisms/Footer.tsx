import Text from "@atoms/Text";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center">
      <div className="border-t border-gray-700 py-4">
        <Text className="text-sm">개인정보 처리방침</Text>
        <Text className="text-sm">&copy; Speed Game. All Rights Reserved</Text>
      </div>
    </footer>
  );
};

export default Footer;
