/**
 * Mô hình 3 khối: Đổi tiền USD --> VND
 * Đầu vào:
 * - Tạo biến giaUSD gán giá trị 23500
 * - Tạo biến tienUSD gán giá trị 3
 * Xử lý:
 * - Tạo biến chuyenDoi = giaUSD * tienUSD
 * Đầu ra:
 * - Đưa ra thông báo số tiền sau khi quy đổi
 */
var giaUSD = 23500;
var tienUSD = 3;
var chuyenDoi = giaUSD * tienUSD;
console.log("Số tiền quy đổi "+ tienUSD +" USD sang VNĐ là: " + chuyenDoi);