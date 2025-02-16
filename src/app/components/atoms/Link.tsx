import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
