import './myLabel.css'

export interface MyLabelProps {
    /** 
    * Este es el mensaje a mostrar en la etiqueta 
    */
    label: string;
    /** 
    * Este es el tamaño de la etiqueta 
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /** 
    * Si quiere todo capitalizado 
    */
    allCaps: boolean;
    /*** 
    * Colores básicos del botón
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /*** 
    * Color personalizado de la fuente
    */
    fontColor?: string;
    /*** 
    * Color para el fondo del label
    */
    backgroudColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No label',
    size = "normal",
    fontColor,
    backgroudColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span className={`${size} text-${color} `}
            style={{ color: fontColor, backgroundColor: backgroudColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

