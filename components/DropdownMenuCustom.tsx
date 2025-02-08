'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { FaBars } from 'react-icons/fa6';
import Link from 'next/link';

type MenuItem = {
  label: string;
  url: string;
  target?: string;
};

type MenuItems = {
  menuItems: MenuItem[];
};

const DropdownMenuCustom = ({ menuItems }: MenuItems) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.label}>
            <Link href={item.url} target={item.target}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCustom;
