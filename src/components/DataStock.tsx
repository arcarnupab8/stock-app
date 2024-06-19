interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    unit: string;
    usesable: number;
    myown: number;
}

export const products = [
    {id: "0001", name: "กระดาษ",price: 1000, quantity: 100, unit: "รีม", usesable:1, myown:1},
    {id: "0002", name: "พลาสตืก",price: 3000, quantity: 100, unit: "ม้วน", usesable:0, myown:0},
    {id: "0003", name: "กระจก",price: 5000, quantity: 150, unit: "แผ่น", usesable:1, myown:1},
    {id: "0004", name: "กระดาษแข็ง",price: 1000, quantity: 200, unit: "แผ่น", usesable:1, myown:0},
    {id: "0005", name: "ทิชชู่",price: 2000, quantity: 180, unit: "แพ็ค", usesable:0, myown:1},
    {id: "0006", name: "กระดาษสีเหลือง",price: 1500, quantity: 120, unit: "รีม", usesable:0, myown:0},
    {id: "0007", name: "พลาสติกกันกระแทก",price: 2500, quantity: 200, unit: "ม้วน", usesable:1, myown:1},
    {id: "0008", name: "กระดาษดำ",price: 2050, quantity: 100, unit: "รีม", usesable:0, myown:1},
    {id: "0009", name: "ไม้",price: 5000, quantity: 500, unit: "แผ่น", usesable:1, myown:1},
];