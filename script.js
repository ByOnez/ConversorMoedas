const url = "https://v6.exchangerate-api.com/v6/d9489dc4b4199a9fc53ec9a2/latest/BRL"
const urlUSD = "https://v6.exchangerate-api.com/v6/d9489dc4b4199a9fc53ec9a2/latest/USD"

let dolar, real

fetch(urlUSD)
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      const rates = data.conversion_rates
      dolarUSD = rates.USD
      realUSD = rates.BRL
      console.log(`valor dolar ${dolarUSD}`)
      console.log(`valor real ${realUSD}`)
    } else {
      console.error("não foi possível obter o valor da moeda")
    }
    let brlValue = document.getElementById("brl-value")
    brlValue.innerHTML = `${realUSD.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Reais`
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

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      const rates = data.conversion_rates
      dolar = rates.USD
      real = rates.BRL
      console.log(`valor dolar ${dolar}`)
      console.log(`valor real ${real}`)
    } else {
      console.error("não foi possível obter o valor da moeda")
    }
  })
  .catch(error => {
    console.error("Erro:", error)
  })

document.addEventListener('DOMContentLoaded', function () {
  const dolarInput = document.getElementById("dolarInput")
  dolarInput.addEventListener("keyup", function () {
    let dolarCalculate = dolarInput.value / realUSD
    console.log(dolarCalculate)
    let a = document.getElementById("teste")
    a.innerHTML = dolarCalculate.toFixed(2)
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const realInput = document.getElementById("realInput")
  realInput.addEventListener("keyup", function () {
    let realCalculate = realInput.value * dolar
    console.log(realCalculate)
    let a = document.getElementById("teste")
    a.innerHTML = realCalculate.toFixed(2)
  })
}) 