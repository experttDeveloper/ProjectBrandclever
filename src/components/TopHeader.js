import React from 'react'

export default function TopHeader({ title }) {

    return (
        <div>
            <section className='main-services'>
                <div className='main-heading'>
                    <h1>{title}</h1>
                </div>
            </section>
        </div>
    )
}
