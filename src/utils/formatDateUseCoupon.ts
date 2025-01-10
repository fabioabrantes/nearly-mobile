// Função para formatar a data no padrão desejado
export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Lembre-se que os meses começam em 0
  const year = String(date.getFullYear()).slice(-2); // Pega os dois últimos dígitos do ano
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} às ${hours}:${minutes}`;
}