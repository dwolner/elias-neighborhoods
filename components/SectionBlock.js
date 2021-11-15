import React from 'react'

export default function SectionBlock({ children, customClass, headerText }) {
    return (
        <div className={`w-full py-2 lg:py-8 ${customClass}`}>
            <div className='max-w-6xl mx-auto'>
                {headerText ? (
                    <header className='p-4'>
                        <h1 className='text-4xl lg:text-6xl text-gray-800 dark:text-white fadedSectionHeader'>
                            {headerText}
                        </h1>
                    </header>
                ) : (
                    ''
                )}
                {children}
            </div>
        </div>
    )
}
