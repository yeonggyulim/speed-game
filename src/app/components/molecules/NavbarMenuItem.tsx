import Link from "@atoms/Link";

interface NavbarMenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ href, children, onClick }) => {
  return (
    <li>
      <Link href={href} className="hover:text-gray-400" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarMenuItem;
