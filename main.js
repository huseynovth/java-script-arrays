// 1) Massivin elementlərini çeşidləmək üçün JavaScript proqramını yazın.

const ededler=[ -3, 8, 7, 6, 5, -4, 3, 2, 1]
    ededler.sort(function(a,b){return a-b})
    console.log(ededler)

    
    
//2) İki massivin birləşməsini hesablamaq üçün JavaScript proqramını yazın.

let union=_.union([1,2,3],[100,2,1,10])
union.sort(function(a,b){return a-b})
console.log(union)



//3) Silmək üçün JavaScript funksiyasını yazın. Massivdən 'null', '0', '""', 'false', 'undefined' və 'NaN' dəyərləri.

let array=[NaN,0,15,false,-22,'',undefined,47,null];
let trues=array.filter((a)=>a!=false && a!=undefined && a!=null)
trues.shift()
console.log(trues)


//4) Aşağıdakı obyektlər massivini başlıq dəyərinə görə çeşidləmək üçün JavaScript funksiyasını yazın.

let library=[
    {
        muellif:"Bill Gates",
        basliq:"The Road Ahead",
        libraryID:1254,
    },
    {
        muellif:"Steve Jobs",
        basliq:"Walter Isaacson",
        libraryID:4264,
    },
    {
        muellif:"Suzanne Collins",
        basliq:"Mockingjay:The Final Book of The Hunger Games",
        libraryID:3245,
    }
];
library.map((lib)=>{console.log(`${lib.basliq}`)})