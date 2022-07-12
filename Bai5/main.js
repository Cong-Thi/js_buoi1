/**
 * Mô hình 3 khối: Tổng 2 ký số
 * Đầu vào:
 * - Tạo biến n gán giá trị 92
 * Xử lý:
 * - Tạo biến hangChuc = Math.floor(n / 10)
 * - Tạo biến hangDV = n % 10
 * - Tạo biến tong = hangChuc + hangDV
 * Đầu ra:
 * - Đưa ra thông báo tổng giá trị của 2 ký số
 */
var n = 92;
var hangChuc = Math.floor(n / 10);
var hangDV = n % 10;
var tong = hangChuc + hangDV;
console.log("Tổng 2 ký số của " + n + " là: " + tong);