import React from 'react';
import {
  HiHome,
  HiClipboardList,
  HiChartPie,
  HiCalendar,
  HiUserGroup,
  HiServer,
  HiArchive,
} from 'react-icons/hi';

import { Link, NavLink } from 'react-router-dom';
import { HiCog6Tooth } from 'react-icons/hi2';

const Sidebar = () => {
  const iconStyles = `p-2 text-[#d0d2f9] block rounded-lg hover:bg-white hover:text-[#444ce7] text-2xl`;
  const iconStylesActive = `p-2 block rounded-lg bg-white text-[#444ce7] text-2xl`;

  return (
    <nav className="fixed left-0 top-0 flex h-dvh w-20 flex-col items-center overflow-hidden bg-[#444ce7]">
      <Link
        to="/"
        className="mt-4 w-full  py-4 text-center font-thin text-white"
      >
        LOGO
      </Link>
      <ul className="mt-24 flex flex-col items-center space-y-4">
        <li className="w-full">
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/"
          >
            <HiHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/data/add"
          >
            <HiClipboardList />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/statistics"
          >
            <HiChartPie />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/events"
          >
            <HiCalendar />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/users"
          >
            <HiUserGroup />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/applications"
          >
            <HiServer />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/archive"
          >
            <HiArchive />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? iconStylesActive : iconStyles;
            }}
            to="/settings"
          >
            <HiCog6Tooth />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
