import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PageNav = () => {
  const linkStyles = `border-l-2 p-2 hover:border-[#444ce7] hover:text-[#444ce7] hover:font-medium`;
  const linkStylesActive = `border-l-2 p-2 border-[#444ce7] text-[#444ce7] font-medium`;
  return (
    <nav className="flex w-60 flex-col text-gray-600">
      <NavLink
        to="/data/add/identity"
        className={({ isActive }) => {
          return isActive ? linkStylesActive : linkStyles;
        }}
      >
        Identity
      </NavLink>
      <NavLink
        to="/data/add/employer"
        className={({ isActive }) => {
          return isActive ? linkStylesActive : linkStyles;
        }}
      >
        Employer Details
      </NavLink>
      <NavLink
        to="/data/add/school"
        className={({ isActive }) => {
          return isActive ? linkStylesActive : linkStyles;
        }}
      >
        School Details
      </NavLink>
      <NavLink
        to="/data/add/currentSpouse"
        className={({ isActive }) => {
          return isActive ? linkStylesActive : linkStyles;
        }}
      >
        Current Spouse
      </NavLink>
      <NavLink
        to="/data/add/currentSpousePrior"
        className={({ isActive }) => {
          return isActive ? linkStylesActive : linkStyles;
        }}
      >
        Current Spouse Prior Spouse
      </NavLink>
      <NavLink
        to="/data/add/priorSpouse"
        className={({ isActive }) => {
          return isActive ? linkStylesActive : linkStyles;
        }}
      >
        Prior Spouse
      </NavLink>
    </nav>
  );
};

export default PageNav;
