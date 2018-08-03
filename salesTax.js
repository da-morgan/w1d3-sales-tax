var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var results = {};
  for(var i = 0; i < salesData.length; i++){
    if(!results[salesData[i].name]){
      results[salesData[i].name] = {
        totalSales: totalSales(companySalesData[i]),
        totalTaxes: totalTaxes(companySalesData[i])
      }
    } else {
      var sales = totalSales(companySalesData[i]);
      var taxes = totalTaxes(companySalesData[i]);

      results[salesData[i].name].totalSales += sales;
      results[salesData[i].name].totalTaxes += taxes;
    }
  }

  return results;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
  console.log(results);

function totalSales (data){
  var total = data.sales.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  },0);
  return total;
}

function totalTaxes(data){
  var total = totalSales(data) * salesTaxRates[data.province];
  return total;
}



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/