//Hàm unit: kiểm tra giá trị ô nhập liệu số kwh
export function validateSokwh(sokwh) {
    //Rule 1: Bắt buộc nhập
    if(sokwh == "" || sokwh == null || sokwh == undefined){
        return "Vui lòng nhập số kwh";
    }
    //Rule 2: Phải là số
    const parsedNumber = Number(sokwh);
    if(!Number.isFinite(parsedNumber)){
        return "Số kwh phải là số";
    }
    //Rule 3: Phải lớn hơn 0
    if(parsedNumber < 0){
        return "Số kwh phải lớn hơn 0";
    }
    return ""; //Không bị lỗi gì cả
}

/* 
0-50 kwh: 1.800 VNĐ/kwh
51-100 kwh: 2.000 VNĐ/kwh
Trên 100kwh: 2.500 VNĐ/kwh
*/

//Hàm unit: tính số tiền điện theo số kwh
export function tinhtoan(sokwh) {
    var tongtien = 0;
    if(sokwh <= 50){
        return sokwh * 1800;
    }
    tongtien += 50 * 1800;
    if(sokwh <= 100){
        tongtien += (sokwh - 50) * 2000;
        return tongtien;
    }
    tongtien += 50 * 2000;
    tongtien += (sokwh - 100) * 2500;
    return tongtien;
}

//Hàm business: nghiệp vụ tính tiền điện
export function tinhTienDien(sokwh) {
    const sokwhError = validateSokwh(sokwh);
    if(sokwhError){
        return sokwhError;
    }
    var sotien = tinhtoan(sokwh);
    if(sotien < 20000){
        return `<span style="color: red;">Số tiền điện phải trả là ${sotien} VNĐ</span>`;
    }
    else if(sotien <= 50000){
        return `<span style="color: orange;">Số tiền điện phải trả là ${sotien} VNĐ</span>`;
    }
    else{
        return `<span style="color: blue;">Số tiền điện phải trả là ${sotien} VNĐ</span>`;
    }
}

//Giữ tương thích với trang HTML đang gọi tinhTienDien(...) từ window
if(typeof window !== "undefined"){
    window.tinhTienDien = tinhTienDien;
}