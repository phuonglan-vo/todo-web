//Hàm UNIT: kiểm tra số tiền
export function validateSoTien(sotien){
    if(sotien == "" || sotien == null || sotien == undefined){
        return "Vui lòng nhập số tiền";
    }
    if(sotien < 0){
        return "Số tiền không hợp lệ";
    }
    return "";
}
//Hàm UNIT: kiểm tra phần trăm
export function validatePhanTram(phantram){
    if(phantram == "" || phantram == null || phantram == undefined){
        return "Vui lòng nhập phần trăm giảm giá";
    }
    if(phantram < 0 || phantram > 100){
        return "Phần trăm giảm giá phải từ 0 đến 100";
    }
    return "";
}

//Hàm UNIT
export function tinhTienGiamGia(sotien, phantram) {
    const giamgia = sotien * (phantram/100);
    const kq = sotien - giamgia;
    return kq;
}

//Hàm BUSINESS: tính tiền giảm giá và trả về kết quả
export function tinhTien(sotien, phantram){
    //validate số tiền
    const sotienError = validateSoTien(sotien);
    if(sotienError != "") {
        return sotienError; 
    }
    //validate phần trăm
    const phantramError = validatePhanTram(phantram);
    if(phantramError != "") {
        return phantramError; 
    }
    //tinh tiền
    const kq = tinhTienGiamGia(sotien, phantram);
    return `Số tiền sau khi giảm giá là: ${kq}`;
}

//Giữ tương thích với trang HTML đang gọi tinhTienGiamGia(...) từ window
if(typeof window !== "undefined"){
    window.tinhTien = tinhTien;
}