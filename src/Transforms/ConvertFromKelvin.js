export default (kelvin) => {
  const celcius = kelvin - 273.15
  return Math.round(celcius)
}
