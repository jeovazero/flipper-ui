import { Zoom as MuiZoom } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactElement<{}>
    in: boolean
    timeout?: number | { enter?: number, exit?: number }
}

const Zoom: SFC<IProps> = ({ children, padding, margin, style = {}, ...otherProps }) =>
    <MuiZoom
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiZoom>

export default Zoom
