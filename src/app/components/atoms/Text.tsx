interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default Text;
