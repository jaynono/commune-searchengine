"use client"

import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';
import data from '@/app/lib/placeholder-data'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

export default function InvoicesTable() {
  const { sitelist } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(sitelist.length / rowsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, sitelist.length);

  // Slice the sitelist array to get the data for the current page
  const currentPageData = sitelist.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="mt-6 w-[70%] flow-root px-16">
      <table className="w-full text-md shadow-md rounded mb-4 backdrop-blur-lg bg-opacity-50 bg-custom-blue dark:bg-blue-900 dark:backdrop-blur-lg dark:bg-opacity-50 md:table">
        {/* Table Header */}
        <thead>
          <tr className="border-b text-gray-300 ">
            <th scope="col" className="text-center p-3 px-5 sm:pl-6">
              Rank
            </th>
            <th scope="col" className="text-center p-3 px-5 sm:pl-6">
              Name
            </th>
            <th scope="col" className="text-center p-3 px-5 sm:pl-6">
              Location
            </th>
            <th scope="col" className="text-center p-3 px-5 sm:pl-6">
              Users
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="bg-gray-200 backdrop-blur-lg bg-opacity-50 dark:bg-blue-300 dark:backdrop-blur-lg dark:bg-opacity-50">
          {currentPageData.map((site) => (
            <tr key={site.id} className="backdrop-blur-lg bg-opacity-50 dark:bg-blue-900 dark:backdrop-blur-lg dark:bg-opacity-50 border-b hover:bg-green-200 bg-gray-100 dark:hover:bg-green-400">
              <td className="text-center p-3 px-5 text-md font-medium">
                {site.id}
              </td>
              <td className="text-center p-3 px-5 text-lg font-medium">
                {site.name}
              </td>
              <td className="text-center p-3 px-5 text-lg font-medium">
                {site.location}
              </td>
              <td className="text-center p-3 px-5 text-lg font-medium">
                {site.usercount} K
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex gap-2 justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handlePreviousPage} disabled={currentPage === 1}>
          <ArrowLeftIcon className="w-4" />
        </button>
        <div className="flex">
          <span className='inline-block text-xl font-medium'>
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ArrowRightIcon className="w-4" />
        </button>
      </div>
    </div>
  );
}