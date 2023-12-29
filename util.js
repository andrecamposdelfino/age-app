function calcularIdade(data) {
    const hoje = new Date();
    const nascimento = new Date(data);
  
    // Calcula a diferença em milissegundos entre as datas
    const diferencaEmMilissegundos = hoje - nascimento;
  
    // Calcula a diferença em anos
    const idadeEmAnos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
  
    // Calcula a diferença em meses
    const idadeEmMeses = Math.floor(diferencaEmMilissegundos / (30.44 * 24 * 60 * 60 * 1000));
  
    // Calcula a diferença em dias
    const idadeEmDias = Math.floor(diferencaEmMilissegundos / (24 * 60 * 60 * 1000));
  
    return {
        year: idadeEmAnos,
        month: idadeEmMeses,
        day: idadeEmDias
    };
}
  
  // Exemplo de uso
  const dataNascimento = '1982-10-26';
  console.log(data);
  const idade = calcularIdade(dataNascimento);
  
  console.log(`Idade: ${idade.year} anos, ${idade.month} meses, ${idade.day} dias`);