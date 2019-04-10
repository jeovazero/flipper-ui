import {
    List as MuiList,
    ListSubheader as MuiListHeader
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    title?: string
    children?: ReactNode
    dense?: boolean
    classes: {
        default: string
        inherit: string
        primary: string
        secondary: string
    }
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
}

const styles = theme => ({
    default: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    },
    inherit: {
        backgroundColor: 'inherit',
        color: 'inherit'
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    secondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
})

const List: SFC<IProps> = ({
    title,
    padding,
    margin,
    style = {},
    children,
    className,
    classes,
    color = 'default',
    ...otherProps
}) =>
    <MuiList
        subheader={
            title
                ? (
                    <MuiListHeader className={ classes[color] }>
                        { title }
                    </MuiListHeader>
                )
                : undefined
        }
        className={ `${classes[color]} ${className}` }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiList>

export default withStyles(styles)(List)
