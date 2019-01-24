import { Fade as MuiFade } from '@material-ui/core'
import React, { ReactElement, SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: ReactElement<{}>
    in: boolean
    timeout?: number | { enter?: number, exit?: number }
}

const Fade: SFC<IProps> = ({ children, padding, margin, style = {}, ...otherProps }) =>
    <MuiFade
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiFade>

export default Fade