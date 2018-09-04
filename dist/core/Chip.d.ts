import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    label: string;
    clickable?: boolean;
    color?: 'default' | 'primary' | 'secondary';
    avatar?: React.ReactElement<any>;
    deleteIcon?: React.ReactElement<any>;
    onDelete?: (value: any) => void;
}
declare const _default: React.ComponentType<import("@material-ui/core").Overwrite<Pick<IProps, "color" | "margin" | "padding" | "label" | "style" | "className" | "avatar" | "clickable" | "deleteIcon" | "onDelete">, import("@material-ui/core/styles/withStyles").StyledComponentProps<"root">>>;
export default _default;
