'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
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
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.label}>
            <Link href={item.url}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCustom;
