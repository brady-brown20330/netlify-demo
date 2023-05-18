const footerNavigation = [  
    {
        title: 'solutions',
        links: [
            { name: 'Marketing', href: '#' },
            { name: 'Analytics', href: '#' },
            { name: 'Commerce', href: '#' },
            { name: 'Insights', href: '#' }
        ]
    },
    {
        title: 'support',
        links: [
            { name: 'Pricing', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'Guides', href: '#' },
            { name: 'API Status', href: '#' }
        ]
    },
    {
        title: 'company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Jobs', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Partners', href: '#' }
        ]
    },
    {
        title: 'legal',
        links: [
            { name: 'Claim', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' }
        ]
    }

]
export function Footer () {
    return (
        <footer className='dark:bg-balck' aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
          Footer
            </h2>
            <div className='mx-auto max-w-7xl'>
                <div className='border-t border-gray-200 px-4 sm:px-6 lg:px-8'>
                        
                    <div className='mx-auto mt-16 max-w-5xl'>
                        <div className='flex justify-start flex-wrap md:justify-between'>
                            {footerNavigation.map((navItem, index) => <>
                                <div className={'mb-16 '}> 
                                    {/* ${footerNavigation?.length > 5 ? 'pr-8' : 'pr-16'} */}
                                    <h3 className='text-sm font-medium text-gray-900'>{navItem.title}</h3>
                                    <ul role='list' className='mt-6 space-y-6'>
                                        {navItem.links.map((item) => (
                                            <li key={item.name} className='text-sm'>
                                                <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
  