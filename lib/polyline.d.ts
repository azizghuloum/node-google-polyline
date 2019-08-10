declare module "google-polyline" {
  const polyline: {
    encode: (points: Array<[number, number]>) => string,
    decode: (polyline: string) => Array<[number, number]>
  };
  export default polyline;
}
