const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
 
  // Start coding here
  return carCollection.includes(carBrand)
    ? `${carBrand} has already existed in the ${
        carCollection.indexOf(carBrand) 
      } position of car collection.`
    : carCollection.push(carBrand) &&
        `new car collection is : ${carCollection.join(", ")}.`;
}


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("fiat")); //toyota has already existed in the 1 position of car collection.