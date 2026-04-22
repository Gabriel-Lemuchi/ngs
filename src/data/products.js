import torcedor from "./torcedor.json";
import jogador from "./jogador.json";
import infantil from "./infantil.json";
import retro from "./retro.json";
import pronta from "./pronta-entrega.json";

function createSlug(text) {
  if (!text) return "";

  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const produtos = [
  ...torcedor.map(p => ({ ...p, categoria: "torcedor" })),
  ...jogador.map(p => ({ ...p, categoria: "jogador" })),
  ...infantil.map(p => ({ ...p, categoria: "infantil" })),
  ...retro.map(p => ({ ...p, categoria: "retro" })),
  ...pronta.map(p => ({ ...p, categoria: "pronta-entrega" })),
]
  .filter(produto => produto.name)
  .map((produto, index) => ({
    ...produto,
    id: index + 1,
    slug: createSlug(produto.name),
    price:
      typeof produto.price === "string"
        ? Number(
            produto.price
              .replace("R$", "")
              .replace(".", "")
              .replace(",", ".")
          )
        : Number(produto.price || 0)
  }));

export default produtos;
