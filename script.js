const baseCurrency = "USD"
const targetCurrency = "BRL"

let dolar, real

fetch(`https://v6.exchangerate-api.com/v6/d9489dc4b4199a9fc53ec9a2/latest/${baseCurrency}`)
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      const rates = data.conversion_rates
      dolarRates = rates.USD
      realRates = rates.BRL
    } else {
      console.error("não foi possível obter o valor da moeda")
    }
    let brlValue = document.getElementById("brl-value")
    brlValue.innerHTML = `${realRates.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Reais`
    let dolarInfo = document.getElementById("dolar-info")

    let dateHour = new Date()
    let day = dateHour.getDate()
    let hour = dateHour.getHours()
    if (dateHour.getMinutes() <= 9) {
      minutes = '0' + String(dateHour.getMinutes())
    }
    else {
      minutes = String(dateHour.getMinutes())
    }
    let months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    let currentMonth = dateHour.getMonth()
    let month = months[currentMonth]

    dolarInfo.innerHTML = `1 dólar hoje ${day} de ${month} às ${hour}:${minutes}`
  })
  .catch(error => {
    console.error("Erro:", error)
  })

document.addEventListener('DOMContentLoaded', function () {
  const dolarInput = document.getElementById("dolarInput")
  dolarInput.addEventListener("input", function () {
    let dolarValue = parseFloat(dolarInput.value)
    let realValue = dolarValue * realRates
    realInput.value = realValue.toFixed(2)
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const realInput = document.getElementById("realInput")
  realInput.addEventListener("input", function () {
    let realValue = parseFloat(realInput.value)
    let dolarValue = realValue / realRates
    dolarInput.value = dolarValue.toFixed(2)
  })
})
