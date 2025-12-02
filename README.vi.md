# Giao Diện Web TerraDrone

TerraDrone là một nền tảng quadcopter nano được thiết kế cho nghiên cứu, giáo dục và phát triển. Dự án này cung cấp giao diện web hiện đại để điều khiển và giám sát thiết bị TerraDrone, được xây dựng với Flask và có các tính năng điều khiển bay thời gian thực, trực quan hóa dữ liệu và quản lý drone toàn diện.

## Tính Năng

- **Giao Diện Web Hiện Đại**: Giao diện web đẹp, đáp ứng với hỗ trợ đa ngôn ngữ (Tiếng Anh/Tiếng Việt)
- **Điều Khiển Bay Thời Gian Thực**: Giám sát đầu vào gamepad, ước tính trạng thái và lực đẩy động cơ trực tiếp
- **Điều Khiển Bay Theo Lệnh**: Cất cánh, hạ cánh và điều khiển hướng với hoạt ảnh mượt mà
- **Trực Quan Hóa Dữ Liệu**: Chỉ báo tư thế thời gian thực, vẽ đồ thị dữ liệu bay và giám sát tham số
- **Nhiều Giao Diện**: Giao diện Sáng, Tối và Hoàng Hôn để xem thoải mái
- **Tích Hợp Cửa Hàng**: Trang thương mại điện tử tích hợp sẵn cho sản phẩm TerraDrone
- **Tích Hợp TerraAI**: Chatbot trợ lý học tập cho mục đích giáo dục

## Thông Số Kỹ Thuật

- **Vi Điều Khiển**: ESP32-S3 (32-bit RISC-V lõi kép, lên đến 240MHz)
- **Truyền Thông**: Wi-Fi 802.11 b/g/n, Bluetooth 5.0
- **Cảm Biến**: MPU6050 IMU 6 trục (3 trục gia tốc + 3 trục con quay hồi chuyển)
- **Động Cơ**: 4 động cơ coreless với tỷ lệ lực đẩy/trọng lượng 2.7:1
- **Thời Gian Bay**: Lên đến 15 phút với pin Li-Po 2000 mAh
- **Phạm Vi Điều Khiển**: Lên đến 100 mét qua Wi-Fi

## Cài Đặt

### Yêu Cầu

- Python 3.8 trở lên
- Trình quản lý gói pip
- Thư viện [cflib](https://github.com/leeebo/crazyflie-lib-python) đã được fork

### Thiết Lập

1. Clone repository:

```bash
git clone https://github.com/qljz1993/crazyflie-clients-python.git
cd crazyflie-clients-python
```

2. Cài đặt cflib (nếu phát triển với thư viện):

Làm theo [hướng dẫn cài đặt cflib](https://github.com/leeebo/crazyflie-lib-python) để cài đặt thư viện cần thiết.

3. Cài đặt client TerraDrone từ nguồn:

```bash
pip3 install -e .
```

## Chạy Ứng Dụng

### Client Desktop

Chạy client desktop truyền thống:

```bash
cfclient
```

### Giao Diện Web

Khởi động máy chủ web Flask:

```bash
cd src/cfweb
python3 server.py
```

Sau đó mở trình duyệt và điều hướng đến:

```
http://localhost:5000
```

## Tính Năng Giao Diện Web

### Điều Khiển Bay
- Tham số điều khiển bay cơ bản và nâng cao
- Giám sát đầu vào gamepad thời gian thực
- Hiển thị ước tính trạng thái (vị trí, hướng)
- Chỉ báo lực đẩy động cơ
- Điều khiển bay theo lệnh (Cất cánh, Hạ cánh, di chuyển hướng)

### Giám Sát Dữ Liệu
- Chỉ báo tư thế trực tiếp
- Vẽ đồ thị dữ liệu bay
- Giám sát và điều chỉnh tham số
- Quản lý khối nhật ký

### Tính Năng Bổ Sung
- Quản lý kết nối với kết nối nhanh
- Cấu hình thiết bị đầu vào
- Điều khiển vòng LED
- Định vị Lighthouse
- Giao diện điều chỉnh PID
- Trang cửa hàng cho sản phẩm TerraDrone

## Cấu Trúc Dự Án

```
crazyflie-clients-python/
├── src/
│   └── cfweb/
│       ├── static/
│       │   ├── index.html      # Giao diện web chính
│       │   ├── app.js          # JavaScript frontend
│       │   └── style.css       # Styling và giao diện
│       └── server.py           # Máy chủ backend Flask
└── README.md
```

## Giao Thức Truyền Thông

Việc truyền thông với thiết bị TerraDrone và triển khai giao thức CRTP (Crazy Real-Time Protocol) để điều khiển drone được xử lý bởi thư viện [cflib](https://github.com/leeebo/crazyflie-lib-python) đã được sửa đổi.

## Tài Liệu

- **Tài Liệu Client Crazyflie Gốc**: https://www.bitcraze.io/documentation/repository/crazyflie-clients-python/master/

## Về TerraDrone

TerraDrone được sản xuất bởi **TerraTech** và có các tính năng:
- **Vật Liệu**: Khung Aircraft Plywood
- **Độ Tuổi Khuyến Nghị**: 12-18 tuổi
- **Tính Năng**: Điều khiển Wi-Fi qua ứng dụng di động, chatbot trợ lý học tập TerraAI, lập trình qua Arduino IDE
- **Chế Độ Bay**: Ổn định, Giữ độ cao, Giữ vị trí

## Giấy Phép

Dự án này có sẵn cho mục đích nghiên cứu và phát triển.

## Đóng Góp

Đóng góp được chào đón! Vui lòng gửi issues hoặc pull requests.

## Hỗ Trợ

Để được hỗ trợ kỹ thuật, truy cập trang cửa hàng TerraDrone trong giao diện web hoặc liên hệ hỗ trợ qua chatbot TerraAI.

