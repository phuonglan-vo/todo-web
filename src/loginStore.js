function login(emailInput, passwordInput){
    //1.kiểm tra email
    if(!emailInput){
        return "Vui lòng nhập email";
    }
    //2.kiểm tra password
    if(!passwordInput){
        return "Vui lòng nhập password";
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