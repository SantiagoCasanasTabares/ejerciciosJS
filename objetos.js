const auto = {
    marca : "Chevrolete",
    modelo : "Optra",
    anio : 2006,
    duenos : ["oscar", "senor1", "senor2"]
}

console.log(auto.duenos);
console.log(`El auto es un ${auto.marca} ${auto.modelo}, del año ${auto.anio}`)

for(const dueno of auto.duenos){
    console.log(dueno);
}