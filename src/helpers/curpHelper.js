const validateCurp = (curp) => {
  let re =
    /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  let validado = curp.match(re);

  if (!validado) return false;

  const digitoVerificador = (curpToValidate) => {
    let diccionario = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let lngSuma = 0,
      lngDigito = 0;

    for (let i = 0; i < 17; i++) {
      lngSuma =
        lngSuma + diccionario.indexOf(curpToValidate.charAt(i)) * (18 - i);
    }

    lngDigito = 10 - (lngSuma % 10);
    if (lngDigito == 10) return 0;
    return lngDigito;
  };

  if (validado[2] != digitoVerificador(validado[1])) return false;

  return true; //Validado
};

module.exports = { validateCurp };
