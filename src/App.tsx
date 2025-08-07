import { useState } from "react";
import "./styles.css";

export default function App() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [despesas, setDespesas] = useState<
    { id: number; descricao: string; valor: number }[]
  >([]);

  const adicionarDespesa = () => {
    if (!descricao || !valor) return;
    const novaDespesa = {
      id: Date.now(),
      descricao,
      valor: parseFloat(valor),
    };
    setDespesas([...despesas, novaDespesa]);
    setDescricao("");
    setValor("");
  };

  const total = despesas.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className="App">
      <h1>Calculadora de Orçamento</h1>

      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button onClick={adicionarDespesa}>Adicionar</button>

      <h2>Despesas:</h2>
      <ul>
        {despesas.map((item) => (
          <li key={item.id}>
            {item.descricao} - R${item.valor.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total: R${total.toFixed(2)}</h3>
    </div>
  );
}
