import React, { FC } from 'react'

interface TitleProps {
    title: string
    className: string
}

const Title:FC<TitleProps> = ({title,className}) => {
    return (
        <h4 className={className}>{title}</h4>
    )
}

export default Title
