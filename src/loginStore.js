//Hàm unit: kiểm tra email hợp lệ
export function checkEmail(email) {
    if(email == ""){
        return false;
    }
    return true;
}

//Hàm unit: kiểm tra password hợp lệ
export function checkPassword(password) {
    if(password == ""){
        return false;
    }
    return true;
}

//Hàm nghiệp vụ lớn
function login(emailInput, passwordInput){
    //1.kiểm tra email
    var isEmailValid = checkEmail(emailInput);
    if(!isEmailValid){
        return "Email không hợp lệ";
    }
    //2.kiểm tra password
    var isPasswordValid = checkPassword(passwordInput);
    if(!isPasswordValid){
        return "Password không hợp lệ";
    }
    //3.kiểm tra logic/nghiệp vụ
    //tài khoản có đúng không
    //giả sử: nhập admin@gmail.com và 123456 là đúng
    if(emailInput == "admin@gmail.com" && passwordInput == "123456"){
        return "Đăng nhập thành công!";
    }else{
        return "Đăng nhập thất bại!";
    }
}

//Giữ tương thích với trang HTML đang gọi login(...) từ window
if(typeof window !== "undefined"){
    window.login = login;
}