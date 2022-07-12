export const recordColor = (numOfSteps:number , step: number) => {
    const saturation = '100%';
    const lightness = '50%';
    const alpha = '1';
    const hue = 360*step/numOfSteps;
    return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`
}
