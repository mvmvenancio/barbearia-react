import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    nome: '',
    servico: '',
    data: ''
  });

  const handleAgendar = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${formData.nome}!\nServiço: ${formData.servico}\nData: ${formData.data}`);
    setFormData({ nome: '', servico: '', data: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="booking" id="agendamento">
      <h2>Agendamento</h2>
      <form className="booking-form" onSubmit={handleAgendar}>
        <input 
          type="text" 
          name="nome"
          placeholder="Seu Nome completo" 
          value={formData.nome}
          onChange={handleChange}
          required 
        />
        
        <select 
          name="servico" 
          className="booking-select"
          value={formData.servico}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Selecione o Serviço</option>
          <option value="Corte Masculino">Corte Masculino - R$ 40</option>
          <option value="Barba">Barba - R$ 30</option>
          <option value="Corte + Barba">Corte + Barba - R$ 65</option>
        </select>

        <input 
          type="date" 
          name="data"
          value={formData.data}
          onChange={handleChange}
          required 
        />
        
        <button className="btn" type="submit">
          Confirmar Horário
        </button>
      </form>
    </section>
  );
}