// calculate how many slices need
function calculatePackage(numOfPeople, slicesPerPeople){
    let totalSlices = numOfPeople * slicesPerPeople;
    console.log("Total slices they need :" + totalSlices);
    
// define pizza packages as an array of objects
const packages = [
    { size : "small pack", price : 15, slices : 10},
    { size : "medium pack", price : 25, slices : 20},
    { size : "large pack", price : 35, slices : 30},
    { size : "extra pack", price : 50, slices : 50}
];
    let bestValue = Infinity;
    let bestPackage = null;
    packages.forEach(pkg => {
        let packsNeed = Math.ceil(totalSlices/pkg.slices)
        let cost = packsNeed * pkg.price;
        console.log('package Size : ' + pkg.size + ', cost:' + cost + ', packs need: ' + packsNeed);
        
    if(cost < bestValue){
        bestValue = cost;
        bestPackage = pkg;
    }
    });
    console.log('most economical option is ' + bestPackage.size + ' for ' + bestValue);
}
calculatePackage(25,1);

