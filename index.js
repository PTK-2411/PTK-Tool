// --- TRUY XUẤT CÁC PHẦN TỬ DOM ---
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// --- LOGIC ĐÓNG/MỞ SIDEBAR (RESPONSIVE) ---
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.themeToggle = "none"; // Đảm bảo reset trạng thái ẩn
  sideMenu.style.display = "none";
});

// --- LOGIC CHUYỂN ĐỔI DARK MODE ---
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  // Đổi trạng thái active giữa 2 icon mặt trời và mặt trăng
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// --- ĐỔ DỮ LIỆU ĐƠN HÀNG VÀO BẢNG (RECENT ORDERS) ---
Orders.forEach((order) => {
  const tr = document.createElement("tr");

  // Xác định class màu sắc dựa trên trạng thái đơn hàng
  let statusColor = "";
  if (order.shippingStatus === "Đã hủy") {
    statusColor = "danger";
  } else if (order.shippingStatus === "Chờ xử lý") {
    statusColor = "warning";
  } else {
    statusColor = "success";
  }

  // Tạo cấu trúc hàng (row) cho bảng
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${statusColor}">${order.shippingStatus}</td>
    <td class="primary">Chi tiết</td>
  `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
