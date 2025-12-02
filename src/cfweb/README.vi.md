# Giao Diện Web TerraDrone

> **English**: See [README.md](README.md) for the English version.

Giao diện web hiện đại để điều khiển thiết bị TerraDrone.

## Tính Năng

- **Quản Lý Kết Nối**: Quét và kết nối với thiết bị TerraDrone
- **Điều Khiển Bay**: Điều khiển bay bằng joystick ảo, gamepad và bàn phím
- **Điều Khiển Bay Theo Lệnh**: Điều khiển cất cánh, hạ cánh và di chuyển hướng
- **Quản Lý Tham Số**: Xem và chỉnh sửa tham số drone theo thời gian thực
- **Dữ Liệu Nhật Ký**: Giám sát và xem dữ liệu nhật ký từ drone
- **Cập Nhật Thời Gian Thực**: Cập nhật trạng thái thời gian thực dựa trên WebSocket
- **Trực Quan Hóa Dữ Liệu**: Chỉ báo tư thế, vẽ đồ thị dữ liệu bay và giám sát lực đẩy động cơ
- **Hỗ Trợ Đa Ngôn Ngữ**: Hỗ trợ tiếng Anh và tiếng Việt
- **Nhiều Giao Diện**: Giao diện Sáng, Tối và Hoàng Hôn
- **Tích Hợp Cửa Hàng**: Trang thương mại điện tử tích hợp sẵn cho sản phẩm TerraDrone

## Cài Đặt

Giao diện web được bao gồm trong gói cfclient. Cài đặt các phụ thuộc:

```bash
pip install -e .
```

## Sử Dụng

Khởi động máy chủ web:

```bash
cfweb
```

Hoặc với host và port tùy chỉnh:

```bash
cfweb --host 0.0.0.0 --port 5000
```

Sau đó mở trình duyệt web và điều hướng đến:

```
http://localhost:5000
```

## Điều Khiển

### Joystick Ảo
- Nhấp và kéo trên canvas joystick để điều khiển roll và pitch
- Con lăn chuột hoặc phím mũi tên (↑/↓) để điều chỉnh lực đẩy
- Phím Q/A để điều khiển yaw

### Phím Tắt Bàn Phím
- **Mũi Tên Lên**: Tăng lực đẩy
- **Mũi Tên Xuống**: Giảm lực đẩy
- **Q**: Tăng yaw
- **A**: Giảm yaw
- **Dừng Khẩn Cấp**: Đặt lại tất cả điều khiển về không

## API Endpoints

Giao diện web cung cấp REST API:

- `GET /api/status` - Lấy trạng thái kết nối
- `POST /api/scan` - Quét giao diện TerraDrone
- `POST /api/connect` - Kết nối với TerraDrone (yêu cầu `uri` trong body)
- `POST /api/disconnect` - Ngắt kết nối với TerraDrone
- `POST /api/control` - Gửi lệnh điều khiển (yêu cầu `roll`, `pitch`, `yaw`, `thrust` trong body)
- `POST /api/commander` - Gửi lệnh bay theo lệnh (takeoff, land, up, down, left, right, forward, back)
- `GET /api/params` - Lấy tất cả tham số
- `GET /api/params/<name>` - Lấy một tham số cụ thể
- `POST /api/params/<name>` - Đặt tham số (yêu cầu `value` trong body)
- `GET /api/logs` - Lấy log TOC
- `POST /api/logs/create` - Tạo cấu hình log
- `POST /api/logs/<name>/start` - Bắt đầu cấu hình log
- `POST /api/logs/<name>/stop` - Dừng cấu hình log

## Sự Kiện WebSocket

Máy chủ phát ra các sự kiện WebSocket sau:

- `connection_status` - Thay đổi trạng thái kết nối
- `link_quality` - Cập nhật chất lượng liên kết
- `param_updated` - Cập nhật giá trị tham số
- `tocs_updated` - Cập nhật TOC (Bảng Mục Lục)
- `log_data` - Dữ liệu log từ các cấu hình log đang hoạt động

## Phát Triển

Để chạy ở chế độ phát triển với đầu ra debug:

```bash
cfweb --debug
```

