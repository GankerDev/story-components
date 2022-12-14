/// <reference types="react" />
import './myLabel.css';
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroudColor }: MyLabelProps) => JSX.Element;
