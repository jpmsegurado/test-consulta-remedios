export function formatMoney(value, decimal = 2) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimal
  });

  return formatter.format(value);
}
