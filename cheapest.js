const phones = [
    {Brand: "Samsung", Camera: 108, Storage: 512, Ram: 16, Price:120000, Model:"S22", Color: "Grey"},
    {Brand: "Xiomi", Camera: 108, Storage: 256, Ram: 12, Price:115000, Model:"M12", Color: "White"},
    {Brand: "Asus", Camera: 64, Storage: 512, Ram: 18, Price:95000, Model:"ROG6 PRo", Color: "Mirror Black"},
    {Brand: "OnePlus", Camera: 48, Storage: 256, Ram: 12, Price:75000, Model:"9Pro", Color: "Silver"},
    {Brand: "Realme", Camera: 64, Storage: 512, Ram: 16, Price:120000, Model:"X4 S uper Zoom", Color: "Grey"},
]

function cheapestPhone(phones){
    let myCheapestPhone = [0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.Price < myCheapestPhone.Price){
            myCheapestPhone = phone;
        }
    }
    return myCheapestPhone;
}

let mySelectionPhone = cheapestPhone(phones);
console.log(mySelectionPhone);