export interface BadgeProps {
    value: string | number,
    max?: number,
    hidden?: boolean,
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
}


export const useMaxNumberShow = (num: number | string, max: number): string => {
    let _num = Number(num)
    if (isNaN(_num)) {
        return num + ''
    } else {
        return String(max) + "+"
    }
}