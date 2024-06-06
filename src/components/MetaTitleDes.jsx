import React from 'react'
import { Helmet } from 'react-helmet'

export default function MetaTitleDes({title,description,pageURL}) {

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={pageURL} />
            </Helmet>
        </div>
    )
}
