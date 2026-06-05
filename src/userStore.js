//Hàm UNIT: lấy danh sách người dùng từ API
export async function fetchUsers(apiUrl) {
    //2. gửi yêu cầu đến API
    const response = await fetch(apiUrl); 
    if(!response.ok){
        throw new Error ("ERR001: Không kết nối được API URL");
    }
    //2. bóc tách, xử lý dữ liệu...
    const data = await response.json();
    return data;
}
//Hàm UNIT: kiểm tra cục dữ liệu data
export function validateUser(data){
    //có phải là array không?
    if(!Array.isArray(data)){
        return "Dữ liệu không phải là mảng";
    }
    //mảng có phần tử không?
    if(data.length <= 0){
        return "Không có dữ liệu nào!";
    }
    //các phần tử bên trong (element/item) có đúng cấu trúc quy định không? 
    //quy định: id, name, email, phone...
    const firstUser = data[0];
    var isValid = Boolean (firstUser
        && "id" in firstUser
        && "name" in firstUser
        && "email" in firstUser
        && "phone" in firstUser
    );
    if(!isValid){
        return "Cấu trúc quy định phải có các key id, name, email, phone";
    }
    return "Dữ liệu hợp lệ!";
}
//Hàm BUSINESS: lấy dữ liệu user và trình diễn
export async function loadUsers(apiUrl){
    //1. gọi hàm lấy xử lý API
    const data = await fetchUsers(apiUrl);
    //2. kiểm tra
    const error = validateUser(data);
    if(error != undefined && error != "Dữ liệu hợp lệ!"){
        return error;
    }
    //3. xử lý trình diễn dạng LIST
    var html = '<ul>';
    data.forEach(user => {
        html += '<li>';
        html += `Họ tên: ${user.name} - `;
        html += `Email: ${user.email} - `; 
        html += `City: ${user.address.city}`;
        html += '</li>';
    });
    html += '</ul>';
    return html;
}

//Giữ tương thích với trang HTML đang gọi tinhTienGiamGia(...) từ window
if(typeof window !== "undefined"){
    window.fetchUsers = fetchUsers;
    window.loadUsers = loadUsers;
}