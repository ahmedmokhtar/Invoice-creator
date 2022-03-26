let services = []

const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const sendBtn = document.getElementById("send-btn")
const servicesNameEl = document.getElementById("service-name-el")
const servicesCostEl = document.getElementById("service-cost-el")
const totalEl = document.getElementById("total-el")

washBtn.addEventListener("click", function() {
  addService({name: "Wash Car", cost: 10})
  renderServices()
})

mowBtn.addEventListener("click", function() {
  addService({name: "Mow Lawn", cost: 20})
  renderServices()
})

pullBtn.addEventListener("click", function() {
  addService({name: "Pull Weeds", cost: 30})
  renderServices()
})

sendBtn.addEventListener("click", function() {
  washBtn.disabled = false
  mowBtn.disabled = false
  pullBtn.disabled = false
  services = []
  renderServices()
  // console.log(services)
})

function addService(service) {

  services.push(service)

  if (service.name === "Wash Car") {
    washBtn.disabled = true
  }

  if (service.name === "Mow Lawn") {
    mowBtn.disabled = true
  }

  if (service.name === "Pull Weeds") {
    pullBtn.disabled = true
  }

  // console.log(services)
}

function renderServices() {
  let serviceListName = ""
  let serviceListCost = ""

  for (let i = 0; i < services.length; i++) {
    serviceListName += `<li> ${services[i].name} </li>`
    serviceListCost += `<li> ${services[i].cost} </li>`

  }
  servicesNameEl.innerHTML = `<ul>${serviceListName}</ul>`
  servicesCostEl.innerHTML = `<ul>${serviceListCost}</ul>`

  renderTotal()
}

function renderTotal() {
  let total = 0

  for (let i = 0; i < services.length; i++) {
    total += services[i].cost
  }

  totalEl.innerHTML = `Total: $${total}`
}

renderServices()