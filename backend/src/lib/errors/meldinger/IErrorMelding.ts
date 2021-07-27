/**
 * Beskriver et error meldings objekt som kan løse meldinger fra funskjoner.
 */
export interface IErrorMelding {
    [key: string]: (...args: Array<string>) => string
}
