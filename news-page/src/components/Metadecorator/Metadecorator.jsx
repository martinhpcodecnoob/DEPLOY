import React from 'react'
import {Helmet} from "react-helmet"
import Proptypes from 'prop-types'

export default function Metadecorator({title,description,imageUrl,imageAlt}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property='og:title' content={title}/>
            <meta name='description' content={description}/>
            <meta property='og:description' content={description}/>
            <meta property='og:image' content={imageUrl}/>
            <meta property='og:url' content={window.location.pathname + window.location.search}/>
            <meta name='twitter:card' content="summary_large_image"/>
            <meta name='twitter:image:alt' content={imageAlt}/>
        </Helmet>
    )
}

Metadecorator.prototype = {
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    imageUrl: Proptypes.string.isRequired,
    imageAlt: Proptypes.string.isRequired
}
