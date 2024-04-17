import React from 'react'

export default function TopHeader({ title,description}) {

    return (
        <div>
            <section className='main_header'>
                <div className='main-heading_title'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    )
}
