function calcularDataRetorno(tipoUsuario, dataReserva) {
  const prazoDias = tipoUsuario === 'aluno' ? 14 : 30;
  const data = new Date(dataReserva);
  data.setDate(data.getDate() + prazoDias);
  return data.toISOString().split('T')[0]; // Formato: yyyy-mm-dd
}

module.exports = { calcularDataRetorno };
