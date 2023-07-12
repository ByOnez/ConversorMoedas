const url = 'https://v6.exchangerate-api.com/v6/d9489dc4b4199a9fc53ec9a2/latest/USD'

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      const rates = data.conversion_rates
      var dolar = rates.USD
      var real = rates.BRL
      console.log(`valor dolar ${dolar}`)
      console.log(`valor real ${real}`)
    } else {
      console.error('não foi possível obter o valor da moeda')
    }
    let brlValue = document.getElementById('brl-value')
    brlValue.innerHTML = `${real.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Reais`
    let dolarInfo = document.getElementById('dolar-info')

    let dateHour = new Date();
    let day = dateHour.getDate()
    let hour = dateHour.getHours()
    let minutes = dateHour.getMinutes()
    let months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    let currentMonth = dateHour.getMonth()
    let month = months[currentMonth]

    console.log(month)

    dolarInfo.innerHTML = `1 Dólar americano hoje ${day} de ${month} às ${hour}:${minutes}`

  })
  .catch(error => {
    console.error('Erro:', error);
  });
