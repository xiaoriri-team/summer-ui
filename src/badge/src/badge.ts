import {TypeStyle} from "../../constants/TypeStyle.ts";

export interface BadgeProps extends TypeStyle {
    value: string | number,
    max?: number,
    hidden?: boolean,
}


export const useMaxNumberShow = (num: number | string, max: number): string => {
    let _num = Number(num)
    if (isNaN(_num)) {
        return num + ''
    } else {
        return String(max) + "+"
    }
}