import React from 'react'
import Link from 'next/link'
export default function BreadCrumbs({path,mainbreadCrumb,lastbreadCrumb}) {
  return (
     <ol className="flex items-center whitespace-nowrap w-full" aria-label="Breadcrumb">
      <li className="inline-flex items-center">
        <Link href='/' className="flex items-center text-sm text-gray-500 hover:text-primary focus:outline-none focus:text-primary dark:focus:text-primary">
        {mainbreadCrumb}
        </Link>
        <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </li>
      <li className="inline-flex items-center">
        <p className="cursor-pointer flex items-center text-sm text-gray-500 hover:text-primary focus:outline-none focus:text-primary dark:focus:text-primary">
        {path.split('/')[1]}
          <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </li>
      <li className="cursor-pointer inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
      {path.split('/')[2]} - {lastbreadCrumb}
      </li>
    </ol>
  )
}
