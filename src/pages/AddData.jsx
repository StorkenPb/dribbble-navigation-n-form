import React from 'react';
import PageNavigation from '../components/PageNavigation';
import { Link, Outlet } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import PageHeader from '../components/PageHeader';

const AddData = () => {
  return (
    <div className="">
      <PageHeader title="Add New Data" />
      <div className="flex flex-col gap-4 p-8 md:flex-row">
        <PageNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default AddData;
