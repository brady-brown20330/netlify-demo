
import _ from "lodash";
import React, { useState } from 'react'

const FooterEnd: React.FC<any> = (props: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">Copyright &copy; 2021 Your Company, Inc.</p>
          </div>
  )
}

export { FooterEnd }