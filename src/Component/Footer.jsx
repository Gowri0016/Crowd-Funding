import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* Footer Section */}
      <footer className="w-full bg-white py-4 mt-16 shadow-md text-center text-gray-800">
        &copy; {new Date().getFullYear()} Crowdfunding Platform. All Rights Reserved.
      </footer>
    </div>
  )
}
