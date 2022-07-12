export const recordColor = (numOfSteps:number , step: number, isHighlighted: boolean) => {
    const saturation = '100%';
    const lightness = isHighlighted? '20%': '50%';
    const alpha = '1';
    const hue = 360*step/numOfSteps;
    return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`
}
