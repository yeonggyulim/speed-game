import Link from "@atoms/Link";

interface NavbarMenuItemProps {
  href: string;
  children: React.ReactNode;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="hover:text-gray-400">
        {children}
      </Link>
    </li>
  );
};

export default NavbarMenuItem;
