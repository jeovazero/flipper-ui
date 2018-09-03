import React from 'react'
import { IDefault } from './Advertise'
import Paper from './Paper'

interface IProps extends IDefault {
    minHeight?: number
    children?: React.ReactNode
}

const Box = ({ children, style, minHeight = 400, ...otherProps }: IProps) =>
    <Paper
        padding={ 24 }
        style={ { minHeight, ...style } }
        { ...otherProps }>
        { children }
    </Paper>

export default Box
