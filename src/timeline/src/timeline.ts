import {TypeStyle} from "../../constants/TypeStyle.ts";


export interface TimelineItemProps extends TypeStyle {
    color?: string,
    content?: string,
    time?: string,
    title?: string,
}

export interface TimelineProps {
    horizontal?: boolean
}
