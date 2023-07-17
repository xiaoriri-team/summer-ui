export type Size = number | 'small' | 'medium' | 'large'
export type Fit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
export type Shape = 'circle' | 'square'


export type AvatarProps = {
    icon?: string
    size: Size,
    fit: Fit
    shape: Shape
    src: string
    alt: string
}