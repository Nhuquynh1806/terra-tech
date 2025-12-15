// Translations
const translations = {
    en: {
        // Navigation
        connect: 'Connect',
        inputDevice: 'Input Device',
        settings: 'Settings',
        view: 'View',
        shop: 'Shop',
        disconnected: 'Disconnected',
        connected: 'Connected',
        connecting: 'Connecting...',
        disconnecting: 'Disconnecting...',
        // Flight Control
        flightControl: 'Flight Control',
        gamepadInput: 'Gamepad Input',
        stateEstimate: 'State Estimate',
        takeOff: 'Take off',
        land: 'Land',
        up: 'Up',
        down: 'Down',
        left: 'Left',
        right: 'Right',
        forward: 'Forward',
        back: 'Back',
        // Shop
        shopTitle: 'TerraDrone Store',
        shopSubtitle: 'Professional-grade nano quadcopters for research and development',
        addToCart: 'Add to Cart',
        buyNow: 'Buy Now',
        inStock: 'In Stock',
        quantity: 'Quantity',
        secureTransaction: 'Secure transaction',
        addToWishList: 'Add to Wish List',
        visitStore: 'Visit the TerraDrone Store',
        productTitle: 'TerraDrone 2.1 Nano Quadcopter',
        ratings: 'ratings',
        answeredQuestions: 'answered questions',
        mrp: 'M.R.P.:',
        youSave: 'You Save:',
        comingSoon: 'Coming Soon...',
        inclusiveTaxes: 'Inclusive of all taxes',
        productInfo: 'Product Information',
        name: 'Name:',
        origin: 'Origin:',
        material: 'Material:',
        features: 'Features:',
        recommendedAge: 'Recommended Age:',
        technicalSpecs: 'Technical Specifications',
        sizeWeight: 'Size & Weight:',
        batteryFlightTime: 'Battery & Flight Time:',
        controlRange: 'Control Range:',
        inTheBox: 'What\'s in the Box',
        warrantyPolicy: 'Warranty & Policy',
        warrantyPeriod: 'Warranty Period:',
        returnPolicy: 'Return Policy:',
        techSupport: 'Technical Support:',
        dayReturns: '30-Day Returns',
        yearWarranty: '1 Year Warranty',
        professionalSupport: 'Professional Support',
        professionalSupportDesc: 'Expert technical support and comprehensive documentation',
        selectDelivery: 'Select delivery location',
        updateLocation: 'Update location',
        newFrom: 'New (2) from',
        customersAlsoViewed: 'Customers who viewed this item also viewed',
        otherProducts: 'Other TerraTech Products',
        home: 'Home',
        electronics: 'Electronics',
        drones: 'Drones & Quadcopters',
        featuresValue: 'Wi-Fi control via mobile app, TerraAI learning assistant chatbot, programmable via Arduino IDE, multiple flight modes (Stabilize, Altitude Hold, Position Hold)',
        recommendedAgeValue: 'Suitable for children aged 12-18 years',
        sizeWeightValue: '40x60 cm, weighs 250 grams',
        microcontroller: 'Microcontroller:',
        microcontrollerValue: 'ESP32-S3 (32-bit RISC-V dual-core, up to 240MHz, Wi-Fi & Bluetooth 5.0)',
        sensors: 'Sensors:',
        sensorsValue: 'MPU6050 6-axis IMU (3-axis accelerometer + 3-axis gyroscope) for precise motion control',
        motors: 'Motors:',
        motorsValue: '4 coreless motors, ~17g thrust each, 2.7:1 thrust-to-weight ratio for stable flight',
        batteryFlightTimeValue: '2000 mAh Li-Po battery, maximum flight time 15 minutes, full charge time 60 minutes',
        controlRangeValue: 'Up to 100 meters via Wi-Fi connection (mobile app or gamepad)',
        communication: 'Communication:',
        communicationValue: 'Wi-Fi 802.11 b/g/n, Bluetooth 5.0 for app control and TerraAI integration',
        flightModes: 'Flight Modes:',
        flightModesValue: 'Stabilize, Altitude Hold, Position Hold for different skill levels',
        frame: 'Frame & PCB:',
        frameValue: 'Aircraft Plywood frame (4g), 4-layer integrated PCB with motor drivers and LED indicators',
        expandability: 'Expandability:',
        expandabilityValue: 'GPIO pinouts for adding sensors, servos, and expansion modules',
        boxItem1: 'TerraDrone body with integrated ESP32-S3 flight controller',
        boxItem2: '4 propellers (2 spare pairs) - optimized for coreless motors',
        boxItem3: '2000 mAh Li-Po battery with protection circuit',
        boxItem4: 'USB-C charging cable and programming interface',
        boxItem5: 'Detailed user manual with programming guide',
        boxItem6: 'Replacement accessories set (propellers, screws, tools)',
        boxItem7: 'Warranty card and quick start guide',
        boxItem8: 'TerraAI mobile app access code',
        warrantyPeriodValue: '6 months hardware, 12 months software',
        returnPolicyValue: 'Free returns within 30 days from purchase date (product must be intact, unused)',
        techSupportValue: '24/7 support via TerraAI chatbot and email',
        shipping: 'Shipping:',
        shippingValue: '',
        relatedProduct1: 'TerraCar',
        relatedProduct2: 'TerraShip',
        terracarTitle: 'TerraCar',
        terracarFeatures: 'Remote control, autonomous navigation, obstacle avoidance, programmable via Arduino IDE, STEAM education',
        terracarAge: 'Suitable for ages 10+',
        terracarSize: '25x15 cm, weighs 180 grams',
        terracarMCU: 'ESP32-S3 with Wi-Fi and Bluetooth connectivity',
        terracarSensors: 'Ultrasonic distance sensor, line following sensors, IMU for balance',
        terracarMotors: '2 DC motors with gearbox, differential drive system',
        terracarBattery: 'Rechargeable Li-Po battery, up to 30 minutes continuous operation',
        terracarRange: 'Up to 50 meters via Wi-Fi remote control',
        terracarComm: 'Wi-Fi 802.11 b/g/n, Bluetooth 5.0 for app control',
        terracarModes: 'Manual control, autonomous navigation, line following, obstacle avoidance',
        terracarBox1: 'TerraCar body with laser-cut wooden pieces',
        terracarBox2: 'ESP32-S3 controller board with motor drivers',
        terracarBox3: '2 DC motors with gearbox',
        terracarBox4: 'Ultrasonic sensor and line following sensors',
        terracarBox5: 'Rechargeable Li-Po battery and USB-C charger',
        terracarBox6: 'Remote control (Wi-Fi enabled)',
        terracarBox7: 'Assembly instructions and programming guide',
        terracarBox8: 'TerraAI mobile app access code',
        terraboatTitle: 'TerraShip',
        terraboatFeatures: 'Remote control, autonomous navigation, GPS positioning, water depth sensor, programmable via Arduino IDE, STEAM education',
        terraboatAge: 'Suitable for ages 12+',
        terraboatSize: '30x20 cm, weighs 250 grams',
        terraboatMCU: 'ESP32-S3 with Wi-Fi, Bluetooth, and GPS module',
        terraboatSensors: 'GPS module, water depth sensor, IMU for balance, compass sensor',
        terraboatMotors: '2 waterproof DC motors with propellers, differential steering',
        terraboatBattery: 'Waterproof Li-Po battery, up to 45 minutes continuous operation',
        terraboatRange: 'Up to 100 meters via Wi-Fi remote control, GPS tracking up to 1 km',
        terraboatComm: 'Wi-Fi 802.11 b/g/n, Bluetooth 5.0, GPS for autonomous navigation',
        terraboatModes: 'Manual control, autonomous navigation, GPS waypoint following, depth monitoring',
        terraboatWaterResistance: 'IP67 waterproof rating, suitable for freshwater and saltwater',
        terraboatBox1: 'TerraShip hull with waterproof body',
        terraboatBox2: 'ESP32-S3 controller board with GPS module',
        terraboatBox3: '2 waterproof DC motors with propellers',
        terraboatBox4: 'GPS module, water depth sensor, and compass sensor',
        terraboatBox5: 'Waterproof Li-Po battery and USB-C charger',
        terraboatBox6: 'Remote control (Wi-Fi enabled)',
        terraboatBox7: 'Assembly instructions and programming guide',
        terraboatBox8: 'TerraAI mobile app access code',
        terraboatBox9: 'Waterproof storage case',
        waterResistance: 'Water Resistance',
        terradroneTitle: 'TerraDrone 2.1',
        vehicles: 'Autonomous Vehicles',
        about: 'About',
        aboutCompanyTitle: 'I. Company Introduction:',
        aboutCompanyIntro: 'TerraTech Limited Liability Company is a Vietnamese educational technology startup specializing in developing STEM assembly kits for students aged 12–18. The company was established as an LLC with 5 investors, aiming to ensure legal safety and create flexibility in cooperation and business expansion.',
        aboutProducts: 'TerraTech builds a DIY product ecosystem including TerraDrone (self-assembly drone), TerraShip (self-assembly boat), and TerraCar (self-assembly car). All products use eco-friendly wood materials, are easy to assemble and repair, and especially share a standard control board. In the future, all devices will be connected through a single Android/iOS application for control, status monitoring, and experience synchronization.',
        aboutMission: 'The company aims to become the leading STEM DIY brand in Vietnam, helping young generations develop logical thinking, creativity, and readiness for international integration. TerraTech\'s mission is to provide intuitive learning experiences that combine play with STEM education, thereby fostering students\' problem-solving abilities and technical thinking.',
        aboutValues: 'TerraTech\'s core values include: Innovation – Easy Access – Learning Through Experience – Sustainability – Community & Collaboration.',
        // Chatbot
        aiAssistant: 'AI Assistant',
        chatbotWelcome: 'Hello! I am TerraTech\'s AI assistant. I can help you with product information, usage guides, and technical support. What do you need help with?',
        chatbotPlaceholder: 'Type your question...',
        // Common
        search: 'Search',
        notifications: 'Notifications',
        // Sidebar Navigation
        flight: 'Flight',
        logs: 'Logs',
        params: 'Params',
        plotter: 'Plotter',
        loco: 'Loco',
        light: 'Light',
        console: 'Console',
        led: 'LED',
        tuning: 'Tuning',
        // Quick Connect
        quickConnect: 'Quick Connect',
        disconnect: 'Disconnect',
        clickToConfigure: 'Click to configure connection',
        // Flight Control Sections
        basicFlightControl: 'Basic Flight Control',
        advancedFlightControl: 'Advanced Flight Control',
        flightData: 'Flight Data',
        commandBasedFlightControl: 'Command Based Flight Control',
        // Flight Control Labels
        flightMode: 'Flight Mode',
        assistMode: 'Assist Mode',
        rollTrim: 'Roll Trim',
        pitchTrim: 'Pitch Trim',
        controlMode: 'Control Mode',
        maxAngleRate: 'Max angle/rate:',
        maxYawAngleRate: 'Max Yaw angle/rate:',
        maxThrust: 'Max thrust (%):',
        minThrust: 'Min thrust (%):',
        // Control Modes
        attitudeControl: 'Attitude control',
        rateControl: 'Rate control',
        // Flight Mode Options
        normal: 'Normal',
        advanced: 'Advanced',
        // Assist Mode Options
        none: 'None',
        altitudeHold: 'Altitude hold',
        positionHold: 'Position hold',
        heightHold: 'Height hold',
        hover: 'Hover',
        // Data Labels
        thrust: 'Thrust',
        pitch: 'Pitch',
        roll: 'Roll',
        yaw: 'Yaw',
        height: 'Height',
        x: 'X',
        y: 'Y',
        z: 'Z',
        // Motor Labels
        motorThrust: 'Thrust',
        motor1: 'M1',
        motor2: 'M2',
        motor3: 'M3',
        motor4: 'M4',
        // Connection
        connectionFailed: 'Connection Failed',
        connectedTo: 'Connected to',
        connectingTo: 'Connecting to',
        scanningDevices: 'Scanning for devices...',
        noDevicesFound: 'No devices found. Opening connection settings...',
        error: 'Error',
        device: 'device',
        // Advanced Flight Control
        slewLimit: 'SlewLimit (%):',
        thrustLoweringSlewRate: 'Thrust lowering slewrate (%/sec):',
        // Expansion Boards
        expansionBoards: 'Expansion boards',
        ledRingEffect: 'LED-ring effect:',
        ledRingHeadlight: 'LED-ring headlight',
        // LED Effects
        off: 'Off',
        solid: 'Solid',
        blink: 'Blink',
        fade: 'Fade',
        spinner: 'Spinner',
        doubleSpinner: 'Double spinner',
    },
    vi: {
        // Navigation
        connect: 'Kết nối',
        inputDevice: 'Thiết bị đầu vào',
        settings: 'Cài đặt',
        view: 'Xem',
        shop: 'Cửa hàng',
        disconnected: 'Đã ngắt kết nối',
        connected: 'Đã kết nối',
        connecting: 'Đang kết nối...',
        disconnecting: 'Đang ngắt kết nối...',
        // Flight Control
        flightControl: 'Điều khiển bay',
        gamepadInput: 'Đầu vào Gamepad',
        stateEstimate: 'Ước tính trạng thái',
        takeOff: 'Cất cánh',
        land: 'Hạ cánh',
        up: 'Lên',
        down: 'Xuống',
        left: 'Trái',
        right: 'Phải',
        forward: 'Tiến',
        back: 'Lùi',
        // Shop
        shopTitle: 'Cửa hàng TerraDrone',
        shopSubtitle: 'Quadcopter nano chuyên nghiệp cho nghiên cứu và phát triển',
        addToCart: 'Thêm vào giỏ',
        buyNow: 'Mua ngay',
        inStock: 'Còn hàng',
        quantity: 'Số lượng',
        secureTransaction: 'Giao dịch an toàn',
        addToWishList: 'Thêm vào danh sách yêu thích',
        visitStore: 'Truy cập cửa hàng TerraDrone',
        productTitle: 'TerraDrone 2.1 Nano Quadcopter',
        ratings: 'đánh giá',
        answeredQuestions: 'câu hỏi đã trả lời',
        mrp: 'Giá niêm yết:',
        youSave: 'Bạn tiết kiệm:',
        comingSoon: 'Sắp ra mắt...',
        inclusiveTaxes: 'Đã bao gồm tất cả thuế',
        productInfo: 'Thông tin sản phẩm',
        name: 'Tên:',
        origin: 'Nguồn gốc:',
        material: 'Vật liệu:',
        features: 'Tính năng:',
        recommendedAge: 'Độ tuổi khuyến nghị:',
        technicalSpecs: 'Thông số kỹ thuật',
        sizeWeight: 'Kích thước & Trọng lượng:',
        batteryFlightTime: 'Pin & Thời gian bay:',
        controlRange: 'Khoảng cách điều khiển:',
        inTheBox: 'Bộ sản phẩm bao gồm',
        warrantyPolicy: 'Chính sách & Bảo hành',
        warrantyPeriod: 'Thời gian bảo hành:',
        returnPolicy: 'Chính sách đổi trả:',
        techSupport: 'Hỗ trợ kỹ thuật:',
        shipping: 'Vận chuyển:',
        dayReturns: 'Đổi trả 30 ngày',
        yearWarranty: 'Bảo hành 1 năm',
        professionalSupport: 'Hỗ trợ chuyên nghiệp',
        professionalSupportDesc: 'Hỗ trợ kỹ thuật chuyên nghiệp và tài liệu toàn diện',
        selectDelivery: 'Chọn địa điểm giao hàng',
        updateLocation: 'Cập nhật địa điểm',
        newFrom: 'Mới (2) từ',
        customersAlsoViewed: 'Khách hàng xem sản phẩm này cũng xem',
        otherProducts: 'Sản phẩm TerraTech khác',
        home: 'Trang chủ',
        electronics: 'Điện tử',
        drones: 'Máy bay không người lái & Quadcopter',
        featuresValue: 'Điều khiển Wi-Fi qua ứng dụng di động, trợ lý học tập chatbot TerraAI, lập trình qua Arduino IDE, nhiều chế độ bay (Ổn định, Giữ độ cao, Giữ vị trí)',
        recommendedAgeValue: 'Sản phẩm phù hợp cho trẻ từ 12 - 18 tuổi',
        sizeWeightValue: '40x60 cm, nặng 250 gram',
        microcontroller: 'Vi điều khiển:',
        microcontrollerValue: 'ESP32-S3 (32-bit RISC-V lõi kép, lên đến 240MHz, Wi-Fi & Bluetooth 5.0)',
        sensors: 'Cảm biến:',
        sensorsValue: 'MPU6050 IMU 6 trục (3 trục gia tốc + 3 trục con quay hồi chuyển) cho điều khiển chuyển động chính xác',
        motors: 'Động cơ:',
        motorsValue: '4 động cơ coreless, mỗi động cơ tạo lực đẩy ~17g, tỷ lệ lực đẩy/trọng lượng 2.7:1 cho bay ổn định',
        batteryFlightTimeValue: 'Pin Li-Po 2000 mAh, thời gian bay tối đa 15 phút, thời gian sạc đầy 60 phút',
        controlRangeValue: 'Lên đến 100 mét qua kết nối Wi-Fi (ứng dụng di động hoặc gamepad)',
        communication: 'Truyền thông:',
        communicationValue: 'Wi-Fi 802.11 b/g/n, Bluetooth 5.0 cho điều khiển app và tích hợp TerraAI',
        flightModes: 'Chế độ bay:',
        flightModesValue: 'Ổn định, Giữ độ cao, Giữ vị trí cho các cấp độ kỹ năng khác nhau',
        frame: 'Khung & PCB:',
        frameValue: 'Khung Aircraft Plywood (4g), PCB 4 lớp tích hợp driver động cơ và đèn LED',
        expandability: 'Khả năng mở rộng:',
        expandabilityValue: 'Chân GPIO để thêm cảm biến, servo và module mở rộng',
        boxItem1: 'Thân máy TerraDrone với bộ điều khiển bay ESP32-S3 tích hợp',
        boxItem2: '4 cánh quạt (2 cặp dự phòng) - tối ưu cho động cơ coreless',
        boxItem3: 'Pin Li-Po 2000 mAh với mạch bảo vệ',
        boxItem4: 'Cáp sạc USB-C và giao diện lập trình',
        boxItem5: 'Hướng dẫn sử dụng chi tiết kèm hướng dẫn lập trình',
        boxItem6: 'Bộ phụ kiện thay thế (cánh quạt, vít, công cụ)',
        boxItem7: 'Thẻ bảo hành và hướng dẫn khởi động nhanh',
        boxItem8: 'Mã truy cập ứng dụng TerraAI trên điện thoại',
        warrantyPeriodValue: '6 tháng phần cứng, 12 tháng phần mềm',
        returnPolicyValue: 'Đổi trả miễn phí trong vòng 30 ngày kể từ ngày mua hàng (sản phẩm phải còn nguyên vẹn, chưa sử dụng)',
        techSupportValue: 'Hỗ trợ 24/7 qua chatbot TerraAI và email',
        shippingValue: '',
        relatedProduct1: 'TerraCar | Xe tự hành | Định vị thông minh',
        relatedProduct2: 'TerraShip | Phương tiện nước | Robot biển',
        terracarTitle: 'TerraCar | Xe tự hành | Định vị thông minh | Đồ chơi STEAM DIY',
        terracarFeatures: 'Điều khiển từ xa, điều hướng tự động, tránh chướng ngại vật, lập trình qua Arduino IDE, giáo dục STEAM',
        terracarAge: 'Phù hợp cho độ tuổi 10+',
        terracarSize: '25x15 cm, nặng 180 gram',
        terracarMCU: 'ESP32-S3 với kết nối Wi-Fi và Bluetooth',
        terracarSensors: 'Cảm biến khoảng cách siêu âm, cảm biến theo dõi đường, IMU để cân bằng',
        terracarMotors: '2 động cơ DC với hộp số, hệ thống dẫn động vi sai',
        terracarBattery: 'Pin Li-Po sạc được, hoạt động liên tục lên đến 30 phút',
        terracarRange: 'Lên đến 50 mét qua điều khiển Wi-Fi từ xa',
        terracarComm: 'Wi-Fi 802.11 b/g/n, Bluetooth 5.0 cho điều khiển app',
        terracarModes: 'Điều khiển thủ công, điều hướng tự động, theo dõi đường, tránh chướng ngại vật',
        terracarBox1: 'Thân xe TerraCar với các mảnh gỗ cắt laser',
        terracarBox2: 'Bảng điều khiển ESP32-S3 với driver động cơ',
        terracarBox3: '2 động cơ DC với hộp số',
        terracarBox4: 'Cảm biến siêu âm và cảm biến theo dõi đường',
        terracarBox5: 'Pin Li-Po sạc được và bộ sạc USB-C',
        terracarBox6: 'Điều khiển từ xa (bật Wi-Fi)',
        terracarBox7: 'Hướng dẫn lắp ráp và hướng dẫn lập trình',
        terracarBox8: 'Mã truy cập ứng dụng TerraAI trên điện thoại',
        terraboatTitle: 'TerraShip | Phương tiện nước | Robot biển | Đồ chơi STEAM DIY',
        terraboatFeatures: 'Điều khiển từ xa, điều hướng tự động, định vị GPS, cảm biến độ sâu nước, lập trình qua Arduino IDE, giáo dục STEAM',
        terraboatAge: 'Phù hợp cho độ tuổi 12+',
        terraboatSize: '30x20 cm, nặng 250 gram',
        terraboatMCU: 'ESP32-S3 với Wi-Fi, Bluetooth và module GPS',
        terraboatSensors: 'Module GPS, cảm biến độ sâu nước, IMU để cân bằng, cảm biến la bàn',
        terraboatMotors: '2 động cơ DC chống nước với cánh quạt, lái vi sai',
        terraboatBattery: 'Pin Li-Po chống nước, hoạt động liên tục lên đến 45 phút',
        terraboatRange: 'Lên đến 100 mét qua điều khiển Wi-Fi từ xa, theo dõi GPS lên đến 1 km',
        terraboatComm: 'Wi-Fi 802.11 b/g/n, Bluetooth 5.0, GPS cho điều hướng tự động',
        terraboatModes: 'Điều khiển thủ công, điều hướng tự động, theo dõi điểm GPS, giám sát độ sâu',
        terraboatWaterResistance: 'Xếp hạng chống nước IP67, phù hợp cho nước ngọt và nước mặn',
        terraboatBox1: 'Thân tàu TerraShip với vỏ chống nước',
        terraboatBox2: 'Bảng điều khiển ESP32-S3 với module GPS',
        terraboatBox3: '2 động cơ DC chống nước với cánh quạt',
        terraboatBox4: 'Module GPS, cảm biến độ sâu nước và cảm biến la bàn',
        terraboatBox5: 'Pin Li-Po chống nước và bộ sạc USB-C',
        terraboatBox6: 'Điều khiển từ xa (bật Wi-Fi)',
        terraboatBox7: 'Hướng dẫn lắp ráp và hướng dẫn lập trình',
        terraboatBox8: 'Mã truy cập ứng dụng TerraAI trên điện thoại',
        terraboatBox9: 'Hộp lưu trữ chống nước',
        waterResistance: 'Chống nước',
        terradroneTitle: 'TerraDrone 2.1',
        vehicles: 'Phương tiện tự hành',
        about: 'Giới thiệu',
        aboutCompanyTitle: 'I. Giới thiệu về công ty:',
        aboutCompanyIntro: 'TerraTech Limited Liability Company là một startup công nghệ giáo dục của Việt Nam, chuyên phát triển các bộ lắp ráp STEM dành cho học sinh 12–18 tuổi. Công ty được thành lập dưới mô hình công ty TNHH với 5 nhà đầu tư, nhằm đảm bảo an toàn pháp lý và tạo sự linh hoạt trong hợp tác cũng như mở rộng kinh doanh.',
        aboutProducts: 'TerraTech xây dựng một hệ sinh thái sản phẩm DIY bao gồm TerraDrone (drone tự lắp ráp), TerraShip (tàu thủy tự lắp ráp) và TerraCar (xe tự lắp ráp). Tất cả sản phẩm sử dụng vật liệu gỗ thân thiện với môi trường, dễ lắp, dễ sửa và đặc biệt là dùng chung một bảng mạch điều khiển tiêu chuẩn. Trong tương lai, toàn bộ thiết bị sẽ được kết nối thông qua một ứng dụng duy nhất trên Android/iOS để điều khiển, theo dõi trạng thái và đồng bộ trải nghiệm.',
        aboutMission: 'Công ty hướng tới mục tiêu trở thành thương hiệu STEM DIY hàng đầu Việt Nam, giúp thế hệ trẻ phát triển tư duy logic, sáng tạo và sẵn sàng hội nhập quốc tế. Sứ mệnh của TerraTech là mang đến trải nghiệm học tập trực quan, kết hợp vui chơi với giáo dục STEM, từ đó thúc đẩy khả năng giải quyết vấn đề và tư duy kỹ thuật của học sinh.',
        aboutValues: 'Các giá trị cốt lõi của TerraTech gồm: Đổi mới – Tiếp cận dễ dàng – Học tập qua trải nghiệm – Bền vững – Cộng đồng & Hợp tác.',
        // Chatbot
        aiAssistant: 'Trợ lý',
        chatbotWelcome: 'Xin chào! Tôi là trợ lý AI của TerraTech. Tôi có thể giúp bạn với thông tin về sản phẩm, hướng dẫn sử dụng, và hỗ trợ kỹ thuật. Bạn cần hỗ trợ gì?',
        chatbotPlaceholder: 'Nhập câu hỏi của bạn...',
        // Common
        search: 'Tìm kiếm',
        notifications: 'Thông báo',
        // Sidebar Navigation
        flight: 'Bay',
        logs: 'Nhật ký',
        params: 'Tham số',
        plotter: 'Đồ thị',
        loco: 'Loco',
        light: 'Ánh sáng',
        console: 'Bảng điều khiển',
        led: 'LED',
        tuning: 'Điều chỉnh',
        // Quick Connect
        quickConnect: 'Kết nối nhanh',
        disconnect: 'Ngắt kết nối',
        clickToConfigure: 'Nhấp để cấu hình kết nối',
        // Flight Control Sections
        basicFlightControl: 'Điều khiển bay cơ bản',
        advancedFlightControl: 'Điều khiển bay nâng cao',
        flightData: 'Dữ liệu bay',
        commandBasedFlightControl: 'Điều khiển bay theo lệnh',
        // Flight Control Labels
        flightMode: 'Chế độ bay:',
        assistMode: 'Chế độ hỗ trợ:',
        rollTrim: 'Cân bằng Roll:',
        pitchTrim: 'Cân bằng Pitch:',
        controlMode: 'Chế độ điều khiển:',
        maxAngleRate: 'Góc/tốc độ tối đa:',
        maxYawAngleRate: 'Góc/tốc độ Yaw tối đa:',
        maxThrust: 'Lực đẩy tối đa (%):',
        minThrust: 'Lực đẩy tối thiểu (%):',
        // Control Modes
        attitudeControl: 'Điều khiển tư thế',
        rateControl: 'Điều khiển tốc độ',
        // Flight Mode Options
        normal: 'Bình thường',
        advanced: 'Nâng cao',
        // Assist Mode Options
        none: 'Không',
        altitudeHold: 'Giữ độ cao',
        positionHold: 'Giữ vị trí',
        heightHold: 'Giữ chiều cao',
        hover: 'Lơ lửng',
        // Data Labels
        thrust: 'Lực đẩy',
        pitch: 'Pitch',
        roll: 'Roll',
        yaw: 'Yaw',
        height: 'Chiều cao',
        x: 'X',
        y: 'Y',
        z: 'Z',
        // Motor Labels
        motorThrust: 'Lực đẩy',
        motor1: 'M1',
        motor2: 'M2',
        motor3: 'M3',
        motor4: 'M4',
        // Connection
        connectionFailed: 'Kết nối thất bại',
        connectedTo: 'Đã kết nối tới',
        connectingTo: 'Đang kết nối tới',
        scanningDevices: 'Đang quét thiết bị...',
        noDevicesFound: 'Không tìm thấy thiết bị. Đang mở cài đặt kết nối...',
        error: 'Lỗi',
        device: 'thiết bị',
        // Advanced Flight Control
        slewLimit: 'Giới hạn Slew (%):',
        thrustLoweringSlewRate: 'Tốc độ giảm lực đẩy (%/giây):',
        // Expansion Boards
        expansionBoards: 'Bảng mở rộng',
        ledRingEffect: 'Hiệu ứng LED-ring:',
        ledRingHeadlight: 'Đèn pha LED-ring',
        // LED Effects
        off: 'Tắt',
        solid: 'Đặc',
        blink: 'Nhấp nháy',
        fade: 'Mờ dần',
        spinner: 'Quay',
        doubleSpinner: 'Quay đôi',
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Translation function
function t(key) {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

// Currency conversion: 1 USD = 25,000 VND
const USD_TO_VND = 25000;

// Format price based on current language
function formatPrice(usdAmount) {
    if (currentLanguage === 'vi') {
        const vndAmount = Math.round(usdAmount * USD_TO_VND);
        return vndAmount.toLocaleString('vi-VN') + ' ₫';
    } else {
        return '$' + usdAmount.toFixed(2);
    }
}

// Update all prices on the page based on current language
function updatePrices() {
    document.querySelectorAll('[data-price]').forEach(element => {
        const usdAmount = parseFloat(element.getAttribute('data-price'));
        if (!isNaN(usdAmount)) {
            element.textContent = formatPrice(usdAmount);
        }
    });
}

// Apply translations to the page
function applyTranslations() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
            // Preserve HTML structure for elements that might have nested content
            if (element.children.length > 0) {
                // For elements with children, only update text nodes
                const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
                textNodes.forEach(node => {
                    if (node.textContent.trim()) {
                        node.textContent = t(key);
                    }
                });
            } else {
                element.textContent = t(key);
            }
        }
    });
    
    // Navigation buttons
    const connectBtn = document.querySelector('.nav-pill[onclick="showConnectionDialog()"]');
    if (connectBtn) connectBtn.textContent = t('connect');
    
    const inputDeviceBtn = document.querySelector('.nav-pill[onclick="showInputConfigDialog()"]');
    if (inputDeviceBtn) inputDeviceBtn.textContent = t('inputDevice');
    
    const settingsBtn = document.querySelector('.nav-pill[onclick="showLogConfigDialog()"]');
    if (settingsBtn) settingsBtn.textContent = t('settings');
    
    const viewBtn = document.querySelector('.nav-pill[onclick="toggleViewMenu()"]');
    if (viewBtn) viewBtn.textContent = t('view');
    
    const shopBtn = document.querySelector('.nav-pill[onclick="switchToShop()"]');
    if (shopBtn) shopBtn.textContent = t('shop');
    
    // Status text
    const statusText = document.getElementById('statusText');
    if (statusText && !isConnected) {
        if (statusText) statusText.textContent = t('disconnected');
    }
    
    // Flight control buttons
    const takeOffBtn = document.getElementById('takeOffBtn');
    if (takeOffBtn) takeOffBtn.textContent = t('takeOff');
    
    const landBtn = document.getElementById('landBtn');
    if (landBtn) landBtn.textContent = t('land');
    
    const upBtn = document.getElementById('upBtn');
    if (upBtn) upBtn.textContent = t('up');
    
    const downBtn = document.getElementById('downBtn');
    if (downBtn) downBtn.textContent = t('down');
    
    const leftBtn = document.getElementById('leftBtn');
    if (leftBtn) leftBtn.title = t('left');
    
    const rightBtn = document.getElementById('rightBtn');
    if (rightBtn) rightBtn.title = t('right');
    
    const forwardBtn = document.getElementById('forwardBtn');
    if (forwardBtn) forwardBtn.title = t('forward');
    
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.title = t('back');
    
    // Sidebar navigation - check for both English and Vietnamese
    const sidebarTabs = document.querySelectorAll('.nav-tab span');
    sidebarTabs.forEach(span => {
        const text = span.textContent.trim();
        if (text === 'Flight' || text === 'Bay') span.textContent = t('flight');
        else if (text === 'Logs' || text === 'Nhật ký') span.textContent = t('logs');
        else if (text === 'Params' || text === 'Tham số') span.textContent = t('params');
        else if (text === 'Plotter' || text === 'Đồ thị') span.textContent = t('plotter');
        else if (text === 'Loco') span.textContent = t('loco');
        else if (text === 'Light' || text === 'Ánh sáng') span.textContent = t('light');
        else if (text === 'Console' || text === 'Bảng điều khiển') span.textContent = t('console');
        else if (text === 'LED') span.textContent = t('led');
        else if (text === 'Tuning' || text === 'Điều chỉnh') span.textContent = t('tuning');
        else if (text === 'Shop' || text === 'Cửa hàng') span.textContent = t('shop');
    });
    
    // Sidebar tab titles
    const sidebarTabButtons = document.querySelectorAll('.nav-tab[title]');
    sidebarTabButtons.forEach(btn => {
        const title = btn.getAttribute('title');
        if (title === 'Flight Control') btn.title = t('flightControl');
        else if (title === 'Log Blocks') btn.title = t('logs');
        else if (title === 'Parameters') btn.title = t('params');
        else if (title === 'Plotter') btn.title = t('plotter');
        else if (title === 'Loco Positioning') btn.title = t('loco');
        else if (title === 'Lighthouse') btn.title = t('light');
        else if (title === 'Console') btn.title = t('console');
        else if (title === 'LED') btn.title = t('led');
        else if (title === 'Tuning') btn.title = t('tuning');
        else if (title === 'Shop') btn.title = t('shop');
    });
    
    // Flight control section titles - check both languages
    const gamepadInputSection = document.querySelector('.gamepad-input-section h4');
    if (gamepadInputSection) {
        const text = gamepadInputSection.textContent.trim();
        if (text === 'Gamepad Input' || text === 'Đầu vào Gamepad' || text.includes('Gamepad Input') || text.includes('Đầu vào Gamepad')) {
            gamepadInputSection.textContent = t('gamepadInput');
        }
    }
    
    const stateEstimateSection = document.querySelector('.state-estimate-section h4');
    if (stateEstimateSection) {
        const text = stateEstimateSection.textContent.trim();
        if (text === 'State Estimate' || text === 'Ước tính trạng thái' || text.includes('State Estimate') || text.includes('Ước tính trạng thái')) {
            stateEstimateSection.textContent = t('stateEstimate');
        }
    }
    
        // Shop translations - translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
                let translatedText = t(key);
                
                // Apply bold styling to specific phrases in about page paragraphs
                if (element.classList.contains('about-paragraph')) {
                    const phrasesToBold = currentLanguage === 'vi' 
                        ? [
                            'TerraTech Limited Liability Company',
                            'TerraDrone',
                            'TerraShip',
                            'TerraCar',
                            'thương hiệu STEM DIY hàng đầu Việt Nam',
                            'Đổi mới – Tiếp cận dễ dàng – Học tập qua trải nghiệm – Bền vững – Cộng đồng & Hợp tác'
                          ]
                        : [
                            'TerraTech Limited Liability Company',
                            'TerraDrone',
                            'TerraShip',
                            'TerraCar',
                            'leading STEM DIY brand in Vietnam',
                            'Innovation – Easy Access – Learning Through Experience – Sustainability – Community & Collaboration'
                          ];
                    
                    phrasesToBold.forEach(phrase => {
                        const regex = new RegExp(`(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                        translatedText = translatedText.replace(regex, '<strong>$1</strong>');
                    });
                    
                    element.innerHTML = translatedText;
                } else if (element.tagName === 'SPAN' && element.parentElement && element.parentElement.textContent.includes(element.textContent)) {
                    element.textContent = translatedText;
                } else {
                    element.textContent = translatedText;
                }
            }
        });
        
        // Shop translations - always update (for elements without data-i18n)
        const shopTitle = document.querySelector('.shop-header h2');
        if (shopTitle && !shopTitle.hasAttribute('data-i18n')) {
            shopTitle.textContent = t('shopTitle');
        }
        
        const shopSubtitle = document.querySelector('.shop-subtitle');
        if (shopSubtitle && !shopSubtitle.hasAttribute('data-i18n')) {
            shopSubtitle.textContent = t('shopSubtitle');
        }
        
        // Shop buttons (fallback for buttons without data-i18n)
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            if (!btn.hasAttribute('data-i18n')) {
                btn.textContent = t('addToCart');
            }
        });
        
        document.querySelectorAll('.btn-buy-now').forEach(btn => {
            if (!btn.hasAttribute('data-i18n')) {
                btn.textContent = t('buyNow');
            }
        });
        
        const inStockEl = document.querySelector('.in-stock');
        if (inStockEl && !inStockEl.hasAttribute('data-i18n')) {
            const inStockSpan = inStockEl.querySelector('span[data-i18n="inStock"]');
            if (!inStockSpan) {
                inStockEl.textContent = '✓ ' + t('inStock');
            }
        }
        
        const quantityLabel = document.querySelector('.quantity-selector label');
        if (quantityLabel) quantityLabel.textContent = t('quantity') + ':';
        
        const secureTransactionEl = document.querySelector('.secure-transaction span');
        if (secureTransactionEl) secureTransactionEl.textContent = t('secureTransaction');
        
        const wishlistBtn = document.querySelector('.btn-wishlist');
        if (wishlistBtn) wishlistBtn.textContent = t('addToWishList');
    
    // Update all buttons with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // Update all elements with title-i18n attribute
    document.querySelectorAll('[title-i18n]').forEach(el => {
        const key = el.getAttribute('title-i18n');
        el.title = t(key);
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
            el.placeholder = t(key);
        }
    });
    
    // Quick Connect
    const quickConnectBtn = document.getElementById('quickConnectBtn');
    if (quickConnectBtn) {
        const svg = quickConnectBtn.querySelector('svg');
        quickConnectBtn.innerHTML = '';
        if (svg) quickConnectBtn.appendChild(svg);
        quickConnectBtn.appendChild(document.createTextNode(' ' + t('quickConnect')));
    }
    
    const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
    if (quickDisconnectBtn) {
        const svg = quickDisconnectBtn.querySelector('svg');
        quickDisconnectBtn.innerHTML = '';
        if (svg) quickDisconnectBtn.appendChild(svg);
        quickDisconnectBtn.appendChild(document.createTextNode(' ' + t('disconnect')));
    }
    
    const quickConnectInfo = document.getElementById('quickConnectInfo');
    if (quickConnectInfo && !isConnected) {
        quickConnectInfo.textContent = t('clickToConfigure');
    }
    
    // Flight Control Sections - find all h3 in control-panel and panel (always update)
    const flightControlContainer = document.querySelector('.flight-control-left');
    if (flightControlContainer) {
        const allControlPanels = flightControlContainer.querySelectorAll('.control-panel h3, .panel h3');
        allControlPanels.forEach((h3, index) => {
            const text = h3.textContent.trim();
            const parentPanel = h3.closest('.control-panel, .panel');
            const firstLabel = parentPanel ? parentPanel.querySelector('label') : null;
            const firstLabelText = firstLabel ? firstLabel.textContent.trim() : '';
            
            // Check for Basic Flight Control (both languages or by context)
            if (text === 'Basic Flight Control' || text === 'Điều khiển bay cơ bản' || 
                text.includes('Basic Flight Control') || text.includes('Điều khiển bay cơ bản') ||
                (index === 0 && (firstLabelText.includes('Flight Mode') || firstLabelText.includes('Chế độ bay')))) {
                h3.textContent = t('basicFlightControl');
            } 
            // Check for Advanced Flight Control (both languages or by context)
            else if (text === 'Advanced Flight Control' || text === 'Điều khiển bay nâng cao' || 
                     text.includes('Advanced Flight Control') || text.includes('Điều khiển bay nâng cao') ||
                     (firstLabelText.includes('Max angle') || firstLabelText.includes('Góc/tốc độ tối đa'))) {
                h3.textContent = t('advancedFlightControl');
            } 
            // Check for Expansion boards (both languages or by context)
            else if (text === 'Expansion boards' || text === 'Bảng mở rộng' || 
                     text.includes('Expansion boards') || text.includes('Bảng mở rộng') ||
                     (firstLabelText.includes('LED-ring') || firstLabelText.includes('Hiệu ứng LED-ring'))) {
                h3.textContent = t('expansionBoards');
            }
        });
    }
    
    // Flight Data section - always update
    const flightDataH3 = document.querySelector('.flight-data-panel h3');
    if (flightDataH3) {
        const text = flightDataH3.textContent.trim();
        if (text === 'Flight Data' || text === 'Dữ liệu bay' || text.includes('Flight Data') || text.includes('Dữ liệu bay')) {
            flightDataH3.textContent = t('flightData');
        }
    }
    
    // Command Based Flight Control - always update
    const commandBasedControl = document.querySelector('.command-flight-control h4');
    if (commandBasedControl) {
        const text = commandBasedControl.textContent.trim();
        if (text === 'Command Based Flight Control' || text === 'Điều khiển bay theo lệnh' || text.includes('Command Based Flight Control') || text.includes('Điều khiển bay theo lệnh')) {
            commandBasedControl.textContent = t('commandBasedFlightControl');
        }
    }
    
    // Flight Control Labels - check both English and Vietnamese
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        const text = label.textContent.trim();
        if (text === 'Flight Mode:' || text === 'Chế độ bay:') label.textContent = t('flightMode');
        else if (text === 'Assist Mode:' || text === 'Chế độ hỗ trợ:') label.textContent = t('assistMode');
        else if (text === 'Roll Trim:' || text === 'Cân bằng Roll:') label.textContent = t('rollTrim');
        else if (text === 'Pitch Trim:' || text === 'Cân bằng Pitch:') label.textContent = t('pitchTrim');
        else if (text === 'Control Mode:' || text === 'Chế độ điều khiển:') label.textContent = t('controlMode');
        else if (text === 'Max angle/rate:' || text === 'Góc/tốc độ tối đa:') label.textContent = t('maxAngleRate');
        else if (text === 'Max Yaw angle/rate:' || text === 'Góc/tốc độ Yaw tối đa:') label.textContent = t('maxYawAngleRate');
        else if (text === 'Max thrust (%):' || text === 'Lực đẩy tối đa (%):') label.textContent = t('maxThrust');
        else if (text === 'Min thrust (%):' || text === 'Lực đẩy tối thiểu (%):') label.textContent = t('minThrust');
        else if (text === 'SlewLimit (%):' || text === 'Giới hạn Slew (%):') label.textContent = t('slewLimit');
        else if (text === 'Thrust lowering slewrate (%/sec):' || text === 'Tốc độ giảm lực đẩy (%/giây):') label.textContent = t('thrustLoweringSlewRate');
        else if (text === 'LED-ring effect:' || text === 'Hiệu ứng LED-ring:') label.textContent = t('ledRingEffect');
        else if (text.includes('LED-ring headlight') || text.includes('Đèn pha LED-ring')) {
            const checkbox = label.querySelector('input');
            label.innerHTML = '';
            if (checkbox) {
                checkbox.id = 'ledRingHeadlight';
                label.appendChild(checkbox);
            }
            label.appendChild(document.createTextNode(' ' + t('ledRingHeadlight')));
        }
        else if (text === 'Thrust:' || text === 'Lực đẩy:') label.textContent = t('thrust') + ':';
        else if (text === 'Pitch:') label.textContent = t('pitch') + ':';
        else if (text === 'Roll:') label.textContent = t('roll') + ':';
        else if (text === 'Yaw:') label.textContent = t('yaw') + ':';
        else if (text === 'Height:' || text === 'Chiều cao:') label.textContent = t('height') + ':';
        else if (text === 'X:') label.textContent = t('x') + ':';
        else if (text === 'Y:') label.textContent = t('y') + ':';
        else if (text === 'Z:') label.textContent = t('z') + ':';
    });
    
    // Radio button labels - check both languages
    const radioLabels = document.querySelectorAll('.radio-group label');
    radioLabels.forEach(label => {
        const text = label.textContent.trim();
        const input = label.querySelector('input[type="radio"]');
        const isChecked = input && input.checked;
        if (text.includes('Attitude control') || text.includes('Điều khiển tư thế')) {
            label.innerHTML = `<input type="radio" name="controlMode" value="attitude" ${isChecked ? 'checked' : ''}> ${t('attitudeControl')}`;
        } else if (text.includes('Rate control') || text.includes('Điều khiển tốc độ')) {
            label.innerHTML = `<input type="radio" name="controlMode" value="rate" ${isChecked ? 'checked' : ''}> ${t('rateControl')}`;
        }
    });
    
    // Select options - always translate by value, not by current text
    const flightModeSelect = document.getElementById('flightMode');
    if (flightModeSelect) {
        Array.from(flightModeSelect.options).forEach(option => {
            if (option.value === 'Normal') option.text = t('normal');
            else if (option.value === 'Advanced') option.text = t('advanced');
        });
    }
    
    const assistModeSelect = document.getElementById('assistMode');
    if (assistModeSelect) {
        Array.from(assistModeSelect.options).forEach(option => {
            if (option.value === 'none') option.text = t('none');
            else if (option.value === 'althold') option.text = t('altitudeHold');
            else if (option.value === 'poshold') option.text = t('positionHold');
            else if (option.value === 'heighthold') option.text = t('heightHold');
            else if (option.value === 'hover') option.text = t('hover');
        });
    }
    
    // LED Ring Effect options - always translate by value
    const ledRingEffectSelect = document.getElementById('ledRingEffect');
    if (ledRingEffectSelect) {
        Array.from(ledRingEffectSelect.options).forEach(option => {
            if (option.value === '0') option.text = t('off');
            else if (option.value === '1') option.text = t('solid');
            else if (option.value === '2') option.text = t('blink');
            else if (option.value === '3') option.text = t('fade');
            else if (option.value === '4') option.text = t('spinner');
            else if (option.value === '5' || option.value === '6') option.text = t('doubleSpinner');
        });
    }
    
    // Motor labels - check both languages
    const motorLabels = document.querySelectorAll('.motor-header-label');
    motorLabels.forEach((label, index) => {
        const text = label.textContent.trim();
        if (text === 'Thrust' || text === 'Lực đẩy') label.textContent = t('motorThrust');
        else if (text === 'M1') label.textContent = t('motor1');
        else if (text === 'M2') label.textContent = t('motor2');
        else if (text === 'M3') label.textContent = t('motor3');
        else if (text === 'M4') label.textContent = t('motor4');
    });
    
    // Data labels in gamepad and state estimate sections - check both languages
    const dataLabels = document.querySelectorAll('.data-label');
    dataLabels.forEach(label => {
        const text = label.textContent.trim().replace(':', '');
        if (text === 'Thrust' || text === 'Lực đẩy') label.textContent = t('thrust') + ':';
        else if (text === 'Pitch') label.textContent = t('pitch') + ':';
        else if (text === 'Roll') label.textContent = t('roll') + ':';
        else if (text === 'Yaw') label.textContent = t('yaw') + ':';
        else if (text === 'Height' || text === 'Chiều cao') label.textContent = t('height') + ':';
        else if (text === 'X') label.textContent = t('x') + ':';
        else if (text === 'Y') label.textContent = t('y') + ':';
        else if (text === 'Z') label.textContent = t('z') + ':';
    });
    
    // Update prices based on current language
    updatePrices();
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyTranslations();
    updatePrices();
    updateLanguageSelector();
}

// Update language selector display
function updateLanguageSelector() {
    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.value = currentLanguage;
    }
}

// WebSocket connection
let socket = null;
if (typeof io !== 'undefined') {
    socket = io();
} else {
    console.error('Socket.IO library not loaded. Please check your network connection or use a local copy of socket.io.min.js');
    // Create a dummy socket object to prevent errors
    socket = {
        on: function() { console.warn('Socket.IO not available'); },
        emit: function() { console.warn('Socket.IO not available'); },
        connect: function() { console.warn('Socket.IO not available'); },
        disconnect: function() { console.warn('Socket.IO not available'); }
    };
}

// State
let isConnected = false;
let currentRoll = 0.0;
let currentPitch = 0.0;
let currentYaw = 0.0;
let currentThrust = 0;
let joystickActive = false;
let joystickX = 0;
let joystickY = 0;
let allParams = {};
let plotterChart = null;
let flightDataLogConfig = null;
let poseDataLogConfig = null;

// DOM elements - Connection
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const statusDot = statusIndicator.querySelector('.status-dot');
const linkQuality = document.getElementById('linkQuality');
const linkQualityValue = document.getElementById('linkQualityValue');
const batteryIndicator = document.getElementById('batteryIndicator');
const batteryValue = document.getElementById('batteryValue');
const scanBtn = document.getElementById('scanBtn');
const interfaceSelect = document.getElementById('interfaceSelect');
const addressInput = document.getElementById('addressInput');
const autoReconnect = document.getElementById('autoReconnect');
const connectBtn = document.getElementById('connectBtn');
const disconnectBtn = document.getElementById('disconnectBtn');
const scanResults = document.getElementById('scanResults');

// DOM elements - Flight Control
const flightMode = document.getElementById('flightMode');
const assistModeBtn = document.getElementById('assistModeBtn');
const rollTrim = document.getElementById('rollTrim');
const pitchTrim = document.getElementById('pitchTrim');
const maxAngle = document.getElementById('maxAngle');
const maxYawRate = document.getElementById('maxYawRate');
const maxThrust = document.getElementById('maxThrust');
const minThrust = document.getElementById('minThrust');
const slewLimit = document.getElementById('slewLimit');
const thrustLoweringSlewRate = document.getElementById('thrustLoweringSlewRate');
const ledRingEffect = document.getElementById('ledRingEffect');
const ledRingHeadlight = document.getElementById('ledRingHeadlight');
const targetThrust = document.getElementById('targetThrust');
const actualThrust = document.getElementById('actualThrust');
const targetPitch = document.getElementById('targetPitch');
const actualPitch = document.getElementById('actualPitch');
const targetRoll = document.getElementById('targetRoll');
const actualRoll = document.getElementById('actualRoll');
const targetYaw = document.getElementById('targetYaw');
const actualYaw = document.getElementById('actualYaw');
const targetHeight = document.getElementById('targetHeight');
const actualX = document.getElementById('actualX');
const actualY = document.getElementById('actualY');
const actualZ = document.getElementById('actualZ');
const assistMode = document.getElementById('assistMode');
const motor1Bar = document.getElementById('motor1Bar');
const motor2Bar = document.getElementById('motor2Bar');
const motor3Bar = document.getElementById('motor3Bar');
const motor4Bar = document.getElementById('motor4Bar');
const thrustBar = document.getElementById('thrustBar');
const joystickCanvas = document.getElementById('joystickCanvas');
const emergencyStop = document.getElementById('emergencyStop');
const takeOffBtn = document.getElementById('takeOffBtn');
const landBtn = document.getElementById('landBtn');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const forwardBtn = document.getElementById('forwardBtn');
const backBtn = document.getElementById('backBtn');

// DOM elements - Console
const clearConsoleBtn = document.getElementById('clearConsoleBtn');
const dumpSystemLoadBtn = document.getElementById('dumpSystemLoadBtn');
const dumpAssertBtn = document.getElementById('dumpAssertBtn');
const propellerTestBtn = document.getElementById('propellerTestBtn');
const batteryTestBtn = document.getElementById('batteryTestBtn');
const storageStatsBtn = document.getElementById('storageStatsBtn');
const consoleOutput = document.getElementById('consoleOutput');

// DOM elements - LED
const ledIntensity = document.getElementById('ledIntensity');
const ledIntensityValue = document.getElementById('ledIntensityValue');
const ledColor = document.getElementById('ledColor');
const setAllLedsBtn = document.getElementById('setAllLedsBtn');
const clearAllLedsBtn = document.getElementById('clearAllLedsBtn');

// DOM elements - Log Blocks
const createLogBlockBtn = document.getElementById('createLogBlockBtn');
const logBlockSearch = document.getElementById('logBlockSearch');
const logBlocksList = document.getElementById('logBlocksList');

// DOM elements - Plotter
const plotterLogConfig = document.getElementById('plotterLogConfig');
const startPlotBtn = document.getElementById('startPlotBtn');
const stopPlotBtn = document.getElementById('stopPlotBtn');
const clearPlotBtn = document.getElementById('clearPlotBtn');
const plotterCanvas = document.getElementById('plotterCanvas');

// DOM elements - Parameters
const paramSearch = document.getElementById('paramSearch');
const paramsList = document.getElementById('paramsList');

// Attitude indicator state (must be declared before init() is called)
let attitudeRoll = 0;
let attitudePitch = 0;
let attitudeHeight = 0;

// Initialize
init();

function init() {
    setupTabs();
    
    // Debug: Verify About tab exists
    const aboutTab = document.getElementById('about-tab');
    const aboutNavTab = document.querySelector('.nav-tab[data-tab="about"]');
    if (aboutTab) {
        console.log('✓ About tab content found in DOM');
    } else {
        console.error('✗ About tab content NOT found in DOM!');
    }
    if (aboutNavTab) {
        console.log('✓ About nav tab button found in DOM');
    } else {
        console.error('✗ About nav tab button NOT found in DOM!');
    }
    
    setupEventListeners();
    setupJoystick();
    setupKeyboardControls();
    setupLEDRing();
    setupPlotter();
    setupAttitudeIndicator();
    setupTouchSupport();
    setupKeyboardNavigation();
    setupModalCloseHandlers();
    setupProductGallery();
    checkStatus();
    
    // Initialize translations
    updateLanguageSelector();
    applyTranslations();
    
    // Periodically update control values display
    setInterval(() => {
        updateControlValues();
    }, 100);
    
    // Setup chatbot Enter key handler
    const chatbotInput = document.getElementById('chatbotInput');
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatbotMessage();
            }
        });
    }
}

// Touch Support
function setupTouchSupport() {
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    // Improve touch feedback
    document.querySelectorAll('.btn, .tab-btn, .menu-item, .dropdown-item').forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        el.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
}

// Tab Swipe Support
function setupTabSwipe() {
    // Only enable swipe on mobile devices
    if (window.innerWidth > 768) return;
    
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTime = 0;
    
    mainContent.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startTime = Date.now();
        isDragging = true;
    }, { passive: true });
    
    mainContent.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    }, { passive: true });
    
    mainContent.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        const diffTime = Date.now() - startTime;
        const threshold = 50;
        const maxTime = 300; // Max swipe time in ms
        
        // Only register swipe if it's fast enough and far enough
        if (Math.abs(diffX) > threshold && diffTime < maxTime) {
            const activeTab = document.querySelector('.nav-tab.active');
            const allTabs = Array.from(document.querySelectorAll('.nav-tab:not([style*="display: none"])'));
            const currentIndex = allTabs.indexOf(activeTab);
            
            if (diffX > threshold && currentIndex < allTabs.length - 1) {
                // Swipe left - next tab
                e.preventDefault();
                allTabs[currentIndex + 1].click();
            } else if (diffX < -threshold && currentIndex > 0) {
                // Swipe right - previous tab
                e.preventDefault();
                allTabs[currentIndex - 1].click();
            }
        }
    });
    
    // Re-enable on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth <= 768) {
                setupTabSwipe();
            }
        }, 250);
    });
}

// Keyboard Navigation
function setupKeyboardNavigation() {
    // Tab navigation with arrow keys
    document.addEventListener('keydown', (e) => {
        // Alt + Arrow keys for tab navigation
        if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            e.preventDefault();
            const activeTab = document.querySelector('.nav-tab.active');
            const allTabs = Array.from(document.querySelectorAll('.nav-tab:not([style*="display: none"])'));
            const currentIndex = allTabs.indexOf(activeTab);
            
            if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
                allTabs[currentIndex - 1].click();
                allTabs[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < allTabs.length - 1) {
                allTabs[currentIndex + 1].click();
                allTabs[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="block"]');
            if (openModal) {
                const closeBtn = openModal.querySelector('.modal-close');
                if (closeBtn) closeBtn.click();
            }
        }
    });
    
    // Make all interactive elements keyboard accessible
    document.querySelectorAll('.btn, .nav-tab, .menu-item, .dropdown-item').forEach(el => {
        if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
    });
}

// Tab Management
function setupTabs() {
    // Setup nav-tab (sidebar) navigation only
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    const handleTabSwitch = (tabName) => {
        // Remove active class from all tabs
        navTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to selected elements
        const navTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
        const targetContent = document.getElementById(`${tabName}-tab`);
        
        if (navTab) navTab.classList.add('active');
        if (targetContent) {
            targetContent.classList.add('active');
            // Scroll to top on mobile
            if (window.innerWidth <= 768) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };
    
    // Setup nav-tab clicks (sidebar)
    navTabs.forEach(tab => {
        const clickHandler = (e) => {
            e.preventDefault();
            handleTabSwitch(tab.dataset.tab);
        };
        
        tab.addEventListener('click', clickHandler);
        tab.addEventListener('touchend', clickHandler);
        
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                clickHandler(e);
            }
        });
    });
    
    // Swipe support for tabs on mobile
    setupTabSwipe();
}

// Product Gallery Setup
function setupProductGallery() {
    const thumbnails = document.querySelectorAll('.image-thumbnails .thumbnail');
    const mainImageContainer = document.getElementById('mainImageContainer');
    const mainProductImage = document.getElementById('mainProductImage');
    const sketchfabViewer = document.getElementById('sketchfabViewer');
    
    if (!thumbnails.length || !mainImageContainer || !mainProductImage || !sketchfabViewer) {
        return;
    }
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            const type = thumbnail.dataset.type;
            const src = thumbnail.dataset.src;
            
            if (type === '3d') {
                // Show 3D model, hide image
                mainImageContainer.style.display = 'none';
                sketchfabViewer.style.display = 'block';
            } else {
                // Show image, hide 3D model
                sketchfabViewer.style.display = 'none';
                mainImageContainer.style.display = 'flex';
                // Reset image display in case it was hidden due to error
                if (mainProductImage) {
                    mainProductImage.style.display = 'block';
                    mainProductImage.src = src;
                    // Handle image load errors
                    mainProductImage.onerror = function() {
                        this.style.display = 'none';
                        if (!mainImageContainer.querySelector('.error-message')) {
                            const errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.style.cssText = 'color: var(--text-secondary); padding: 2rem; text-align: center; width: 100%;';
                            errorMsg.textContent = 'Image not available';
                            mainImageContainer.appendChild(errorMsg);
                        }
                    };
                    mainProductImage.onload = function() {
                        const errorMsg = mainImageContainer.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    };
                }
            }
        });
    });
}

// TerraCar Gallery Setup
function setupTerraCarGallery() {
    const thumbnails = document.querySelectorAll('#terracar-detail-view .image-thumbnails .thumbnail');
    const mainImageContainer = document.getElementById('terracarMainImageContainer');
    const mainProductImage = document.getElementById('terracarMainProductImage');
    const terracarSketchfabViewer = document.getElementById('terracarSketchfabViewer');
    
    if (!thumbnails.length || !mainImageContainer || !mainProductImage || !terracarSketchfabViewer) {
        return;
    }
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            const type = thumbnail.dataset.type;
            const src = thumbnail.dataset.src;
            
            if (type === '3d') {
                // Show 3D model, hide image
                mainImageContainer.style.display = 'none';
                terracarSketchfabViewer.style.display = 'block';
            } else {
                // Show image, hide 3D model
                terracarSketchfabViewer.style.display = 'none';
                mainImageContainer.style.display = 'flex';
                // Reset image display in case it was hidden due to error
                if (mainProductImage) {
                    mainProductImage.style.display = 'block';
                    mainProductImage.src = src;
                    // Handle image load errors
                    mainProductImage.onerror = function() {
                        this.style.display = 'none';
                        if (!mainImageContainer.querySelector('.error-message')) {
                            const errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.style.cssText = 'color: var(--text-secondary); padding: 2rem; text-align: center; width: 100%;';
                            errorMsg.textContent = 'Image not available';
                            mainImageContainer.appendChild(errorMsg);
                        }
                    };
                    mainProductImage.onload = function() {
                        const errorMsg = mainImageContainer.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    };
                }
            }
        });
    });
}

// TerraShip Gallery Setup
function setupTerraShipGallery() {
    const thumbnails = document.querySelectorAll('#terraboat-detail-view .image-thumbnails .thumbnail');
    const mainImageContainer = document.getElementById('terraboatMainImageContainer');
    const mainProductImage = document.getElementById('terraboatMainProductImage');
    const terraboatSketchfabViewer = document.getElementById('terraboatSketchfabViewer');
    
    if (!thumbnails.length || !mainImageContainer || !mainProductImage) {
        return;
    }
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            const type = thumbnail.dataset.type;
            const src = thumbnail.dataset.src;
            
            if (type === '3d' && terraboatSketchfabViewer) {
                // Show 3D model, hide image
                mainImageContainer.style.display = 'none';
                terraboatSketchfabViewer.style.display = 'block';
            } else {
                // Show image, hide 3D model
                if (terraboatSketchfabViewer) terraboatSketchfabViewer.style.display = 'none';
                mainImageContainer.style.display = 'flex';
                // Reset image display in case it was hidden due to error
                if (mainProductImage) {
                    mainProductImage.style.display = 'block';
                    mainProductImage.src = src;
                    // Handle image load errors
                    mainProductImage.onerror = function() {
                        this.style.display = 'none';
                        if (!mainImageContainer.querySelector('.error-message')) {
                            const errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.style.cssText = 'color: var(--text-secondary); padding: 2rem; text-align: center; width: 100%;';
                            errorMsg.textContent = 'Image not available';
                            mainImageContainer.appendChild(errorMsg);
                        }
                    };
                    mainProductImage.onload = function() {
                        const errorMsg = mainImageContainer.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    };
                }
            }
        });
    });
}

// Toggle functions for header icons
function toggleSearch() {
    console.log('Search toggled');
    // Implement search functionality
}

function toggleNotifications() {
    console.log('Notifications toggled');
    // Implement notifications functionality
}

function switchToShop() {
    // Switch to shop tab
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Remove active class from all tabs
    navTabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Add active class to shop tab
    const shopTab = document.querySelector('.nav-tab[data-tab="shop"]');
    const shopContent = document.getElementById('shop-tab');
    
    if (shopTab) shopTab.classList.add('active');
    if (shopContent) {
        shopContent.classList.add('active');
        // Show TerraDrone product detail view by default
        const terradroneView = document.getElementById('terradrone-detail-view');
        const terracarView = document.getElementById('terracar-detail-view');
        const terraboatView = document.getElementById('terraboat-detail-view');
        const shopHomeView = document.getElementById('shop-home-view');
        if (terradroneView) terradroneView.style.display = 'block';
        if (terracarView) terracarView.style.display = 'none';
        if (terraboatView) terraboatView.style.display = 'none';
        if (shopHomeView) shopHomeView.style.display = 'none';
        // Scroll to top on mobile
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function showShopHome() {
    const terradroneView = document.getElementById('terradrone-detail-view');
    const terracarView = document.getElementById('terracar-detail-view');
    const terraboatView = document.getElementById('terraboat-detail-view');
    const shopHomeView = document.getElementById('shop-home-view');
    if (terradroneView) terradroneView.style.display = 'none';
    if (terracarView) terracarView.style.display = 'none';
    if (terraboatView) terraboatView.style.display = 'none';
    if (shopHomeView) shopHomeView.style.display = 'block';
}

function showTerraDrone() {
    const terradroneView = document.getElementById('terradrone-detail-view');
    const terracarView = document.getElementById('terracar-detail-view');
    const terraboatView = document.getElementById('terraboat-detail-view');
    const shopHomeView = document.getElementById('shop-home-view');
    const shopContainer = document.querySelector('.shop-container');
    const terradroneBreadcrumbs = shopContainer ? shopContainer.querySelector('.breadcrumbs:first-of-type') : null;
    
    if (terradroneView) terradroneView.style.display = 'block';
    if (terracarView) terracarView.style.display = 'none';
    if (terraboatView) terraboatView.style.display = 'none';
    if (shopHomeView) shopHomeView.style.display = 'none';
    // Show TerraDrone breadcrumbs (they're at shop-container level)
    if (terradroneBreadcrumbs) terradroneBreadcrumbs.style.display = 'flex';
    
    // Apply translations
    applyTranslations();
    updatePrices();
    // Scroll to top
    if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showTerraCar() {
    const terradroneView = document.getElementById('terradrone-detail-view');
    const terracarView = document.getElementById('terracar-detail-view');
    const terraboatView = document.getElementById('terraboat-detail-view');
    const shopHomeView = document.getElementById('shop-home-view');
    const shopContainer = document.querySelector('.shop-container');
    const terradroneBreadcrumbs = shopContainer ? shopContainer.querySelector('.breadcrumbs:first-of-type') : null;
    
    if (terradroneView) terradroneView.style.display = 'none';
    if (terracarView) terracarView.style.display = 'block';
    if (terraboatView) terraboatView.style.display = 'none';
    if (shopHomeView) shopHomeView.style.display = 'none';
    // Hide TerraDrone breadcrumbs (they're at shop-container level, TerraCar has its own)
    if (terradroneBreadcrumbs) terradroneBreadcrumbs.style.display = 'none';
    
    // Setup TerraCar gallery
    setupTerraCarGallery();
    // Apply translations
    applyTranslations();
    updatePrices();
    // Scroll to top
    if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showTerraShip() {
    const terradroneView = document.getElementById('terradrone-detail-view');
    const terracarView = document.getElementById('terracar-detail-view');
    const terraboatView = document.getElementById('terraboat-detail-view');
    const shopHomeView = document.getElementById('shop-home-view');
    const shopContainer = document.querySelector('.shop-container');
    const terradroneBreadcrumbs = shopContainer ? shopContainer.querySelector('.breadcrumbs:first-of-type') : null;
    
    if (terradroneView) terradroneView.style.display = 'none';
    if (terracarView) terracarView.style.display = 'none';
    if (terraboatView) terraboatView.style.display = 'block';
    if (shopHomeView) shopHomeView.style.display = 'none';
    // Hide TerraDrone breadcrumbs (they're at shop-container level, TerraShip has its own)
    if (terradroneBreadcrumbs) terradroneBreadcrumbs.style.display = 'none';
    
    // Setup TerraShip gallery
    setupTerraShipGallery();
    // Apply translations
    applyTranslations();
    updatePrices();
    // Scroll to top
    if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleViewMenu() {
    // Show/hide tabs view options
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content modal-small">
            <div class="modal-header">
                <h2>View Options</h2>
                <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <h3>Visible Tabs</h3>
                <div id="viewOptionsContent"></div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Populate with tab checkboxes
    const container = modal.querySelector('#viewOptionsContent');
    const tabs = ['flight', 'logblocks', 'logtoc', 'params', 'plotter', 'loco', 'lighthouse', 'console', 'led', 'tuning', 'logclient', 'crptshark'];
    const names = {
        flight: 'Flight Control',
        logblocks: 'Log Blocks',
        logtoc: 'Log TOC',
        params: 'Parameters',
        plotter: 'Plotter',
        loco: 'Loco Positioning',
        lighthouse: 'Lighthouse',
        console: 'Console',
        led: 'LED',
        tuning: 'Tuning',
        logclient: 'Log Client',
        crptshark: 'CRTP Shark'
    };
    
    tabs.forEach(tab => {
        const navTab = document.querySelector(`.nav-tab[data-tab="${tab}"]`);
        const checked = navTab && navTab.style.display !== 'none';
        
        const label = document.createElement('label');
        label.style.display = 'block';
        label.style.marginBottom = '10px';
        label.innerHTML = `<input type="checkbox" data-tab="${tab}" ${checked ? 'checked' : ''}> ${names[tab]}`;
        label.querySelector('input').addEventListener('change', (e) => {
            const tabEl = document.querySelector(`.nav-tab[data-tab="${tab}"]`);
            if (tabEl) {
                tabEl.style.display = e.target.checked ? 'flex' : 'none';
            }
        });
        container.appendChild(label);
    });
}

function toggleTheme() {
    const hasDark = document.body.classList.contains('dark-theme');
    const hasSunset = document.body.classList.contains('sunset-theme');
    
    let newTheme;
    if (!hasDark && !hasSunset) {
        // light -> dark
        newTheme = 'dark';
    } else if (hasDark && !hasSunset) {
        // dark -> sunset
        newTheme = 'sunset';
    } else {
        // sunset -> light
        newTheme = 'light';
    }
    
    applyTheme(newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (theme === 'dark') {
            // Sunset icon for switching to sunset theme
            themeIcon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
        } else if (theme === 'sunset') {
            // Moon icon for switching to dark theme
            themeIcon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
        } else {
            // Sun icon for switching to light theme
            themeIcon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
        }
    }
}

function setupEventListeners() {
    // Connection
    const quickConnectBtn = document.getElementById('quickConnectBtn');
    const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
    
    // Update address input when interface selection changes
    if (interfaceSelect && addressInput) {
        interfaceSelect.addEventListener('change', (e) => {
            if (e.target.value) {
                addressInput.value = e.target.value;
            }
        });
    }
    
    if (quickConnectBtn) quickConnectBtn.addEventListener('click', handleQuickConnect);
    if (quickDisconnectBtn) quickDisconnectBtn.addEventListener('click', handleDisconnect);
    
    if (scanBtn) scanBtn.addEventListener('click', handleScan);
    if (connectBtn) connectBtn.addEventListener('click', handleConnect);
    if (disconnectBtn) disconnectBtn.addEventListener('click', handleDisconnect);
    
    // Flight Control
    if (flightMode) flightMode.addEventListener('change', handleFlightModeChange);
    if (assistMode) assistMode.addEventListener('change', handleAssistModeChange);
    if (rollTrim) rollTrim.addEventListener('change', () => setParam('stabilizer.rollTrim', rollTrim.value));
    if (pitchTrim) pitchTrim.addEventListener('change', () => setParam('stabilizer.pitchTrim', pitchTrim.value));
    if (maxAngle) maxAngle.addEventListener('change', () => setParam('stabilizer.maxAngle', maxAngle.value));
    if (maxYawRate) maxYawRate.addEventListener('change', () => setParam('stabilizer.maxYawRate', maxYawRate.value));
    if (maxThrust) maxThrust.addEventListener('change', () => setParam('stabilizer.maxThrust', maxThrust.value));
    if (minThrust) minThrust.addEventListener('change', () => setParam('stabilizer.minThrust', minThrust.value));
    if (ledRingEffect) ledRingEffect.addEventListener('change', () => setParam('ring.effect', ledRingEffect.value));
    if (ledRingHeadlight) ledRingHeadlight.addEventListener('change', () => setParam('ring.headlightEnable', ledRingHeadlight.checked ? '1' : '0'));
    if (emergencyStop) emergencyStop.addEventListener('click', handleEmergencyStop);
    if (takeOffBtn) takeOffBtn.addEventListener('click', () => sendCommanderCommand('takeoff'));
    if (landBtn) landBtn.addEventListener('click', () => sendCommanderCommand('land'));
    if (upBtn) upBtn.addEventListener('click', () => sendCommanderCommand('up'));
    if (downBtn) downBtn.addEventListener('click', () => sendCommanderCommand('down'));
    if (leftBtn) leftBtn.addEventListener('click', () => sendCommanderCommand('left'));
    if (rightBtn) rightBtn.addEventListener('click', () => sendCommanderCommand('right'));
    if (forwardBtn) forwardBtn.addEventListener('click', () => sendCommanderCommand('forward'));
    if (backBtn) backBtn.addEventListener('click', () => sendCommanderCommand('back'));
    
    // Console
    if (clearConsoleBtn && consoleOutput) clearConsoleBtn.addEventListener('click', () => consoleOutput.textContent = '');
    if (dumpSystemLoadBtn) dumpSystemLoadBtn.addEventListener('click', () => setParam('system.taskDump', '1'));
    if (dumpAssertBtn) dumpAssertBtn.addEventListener('click', () => setParam('system.assertInfo', '0x08'));
    if (propellerTestBtn) propellerTestBtn.addEventListener('click', () => setParam('health.startPropTest', '1'));
    if (batteryTestBtn) batteryTestBtn.addEventListener('click', () => setParam('health.startBatTest', '1'));
    if (storageStatsBtn) storageStatsBtn.addEventListener('click', () => setParam('system.storageStats', '1'));
    
    // LED
    if (ledIntensity && ledIntensityValue) {
        ledIntensity.addEventListener('input', (e) => {
            ledIntensityValue.textContent = e.target.value + '%';
        });
    }
    if (setAllLedsBtn) setAllLedsBtn.addEventListener('click', handleSetAllLeds);
    if (clearAllLedsBtn) clearAllLedsBtn.addEventListener('click', handleClearAllLeds);
    
    // Log Blocks
    if (createLogBlockBtn) createLogBlockBtn.addEventListener('click', handleCreateLogBlock);
    if (logBlockSearch) logBlockSearch.addEventListener('input', filterLogBlocks);
    
    // Plotter
    if (startPlotBtn) startPlotBtn.addEventListener('click', handleStartPlotting);
    if (stopPlotBtn) stopPlotBtn.addEventListener('click', handleStopPlotting);
    if (clearPlotBtn) {
        clearPlotBtn.addEventListener('click', () => {
            if (plotterChart) {
                plotterChart.data.labels = [];
                plotterChart.data.datasets.forEach(dataset => dataset.data = []);
                plotterChart.update();
            }
        });
    }
    
    // Parameters
    if (paramSearch) paramSearch.addEventListener('input', filterParams);
    
    // Log TOC
    const logtocSearch = document.getElementById('logtocSearch');
    if (logtocSearch) {
        logtocSearch.addEventListener('input', filterLogTOC);
    }
    
    // Loco Positioning
    const locoStartBtn = document.getElementById('locoStartBtn');
    const locoStopBtn = document.getElementById('locoStopBtn');
    const locoResetBtn = document.getElementById('locoResetBtn');
    if (locoStartBtn) {
        locoStartBtn.addEventListener('click', () => startLocoPositioning());
        locoStopBtn.addEventListener('click', () => stopLocoPositioning());
        locoResetBtn.addEventListener('click', () => resetLocoPositioning());
    }
    
    // Lighthouse
    const lighthouseLoadConfigBtn = document.getElementById('lighthouseLoadConfigBtn');
    const lighthouseSaveConfigBtn = document.getElementById('lighthouseSaveConfigBtn');
    const lighthouseManageGeometryBtn = document.getElementById('lighthouseManageGeometryBtn');
    const lighthouseChangeSystemTypeBtn = document.getElementById('lighthouseChangeSystemTypeBtn');
    const lighthouseManageModeBtn = document.getElementById('lighthouseManageModeBtn');
    
    if (lighthouseLoadConfigBtn) {
        lighthouseLoadConfigBtn.addEventListener('click', () => loadLighthouseConfig());
    }
    if (lighthouseSaveConfigBtn) {
        lighthouseSaveConfigBtn.addEventListener('click', () => saveLighthouseConfig());
    }
    if (lighthouseManageGeometryBtn) {
        lighthouseManageGeometryBtn.addEventListener('click', () => manageLighthouseGeometry());
    }
    if (lighthouseChangeSystemTypeBtn) {
        lighthouseChangeSystemTypeBtn.addEventListener('click', () => changeLighthouseSystemType());
    }
    if (lighthouseManageModeBtn) {
        lighthouseManageModeBtn.addEventListener('click', () => manageLighthouseMode());
    }
    
    // Log Client
    const clearLogClientBtn = document.getElementById('clearLogClientBtn');
    if (clearLogClientBtn) {
        clearLogClientBtn.addEventListener('click', () => {
            document.getElementById('logClientOutput').innerHTML = '';
        });
    }
    
    // CRTP Shark
    const clearCrptsharkBtn = document.getElementById('clearCrptsharkBtn');
    const saveCrptsharkBtn = document.getElementById('saveCrptsharkBtn');
    const crptsharkMasterCheck = document.getElementById('crptsharkMasterCheck');
    
    if (clearCrptsharkBtn) {
        clearCrptsharkBtn.addEventListener('click', () => {
            const tbody = document.getElementById('crptsharkTableBody');
            if (tbody) {
                tbody.innerHTML = '<tr><td colspan="4" class="info-text">Packet data will appear here</td></tr>';
            }
        });
    }
    if (saveCrptsharkBtn) {
        saveCrptsharkBtn.addEventListener('click', () => saveCrptsharkData());
    }
    if (crptsharkMasterCheck) {
        crptsharkMasterCheck.addEventListener('change', (e) => {
            // Enable/disable CRTP packet capture based on master checkbox
            // This could trigger backend to start/stop packet capture
            const enabled = e.target.checked;
            if (enabled) {
                // Start packet capture
                fetch('/api/crptshark/start', { method: 'POST' }).catch(err => {
                    console.error('Start CRTP Shark error:', err);
                });
            } else {
                // Stop packet capture
                fetch('/api/crptshark/stop', { method: 'POST' }).catch(err => {
                    console.error('Stop CRTP Shark error:', err);
                });
            }
        });
    }
    
    // Continuous status polling as fallback (especially when Socket.IO isn't working)
    let statusPollInterval = null;
    function startStatusPolling() {
        if (statusPollInterval) return; // Already polling
        statusPollInterval = setInterval(() => {
            checkStatus();
        }, 2000); // Poll every 2 seconds
    }
    function stopStatusPolling() {
        if (statusPollInterval) {
            clearInterval(statusPollInterval);
            statusPollInterval = null;
        }
    }
    
    // Start polling immediately (will continue as fallback)
    startStatusPolling();
    
    // WebSocket events
    socket.on('connect', () => {
        console.log('WebSocket connected');
        // Status will be automatically sent by server on connect
        // But also do a manual check as backup
        setTimeout(() => {
            checkStatus();
        }, 100);
        // Keep polling as fallback even when WebSocket is connected
    });
    
    socket.on('disconnect', () => {
        console.log('WebSocket disconnected');
        // Optionally show a reconnection message
    });
    
    socket.on('connect_error', (error) => {
        console.error('WebSocket connection error:', error);
    });
    
    socket.on('connection_status', (data) => {
        console.log('Received connection_status event:', data);
        updateConnectionStatus(data);
    });
    
    socket.on('link_quality', (data) => {
        updateLinkQuality(data.percentage);
    });
    
    socket.on('param_updated', (data) => {
        updateParamDisplay(data.name, data.value);
    });
    
    socket.on('tocs_updated', (data) => {
        loadParams(data.param);
        loadLogTOC(data.log);
        // TOC is now loaded, set up logging if connected
        if (isConnected) {
            // Small delay to ensure TOC is fully processed
            setTimeout(() => {
                setupFlightDataLogging();
            }, 500);
        }
    });
    
    socket.on('crpt_packet', (data) => {
        displayCrptsharkPacket(data);
    });
    
    socket.on('log_data', (data) => {
        handleLogData(data);
    });
    
    socket.on('log_error', (data) => {
        console.error(`Log error [${data.name}]: ${data.message}`);
        // If pose_data or flight_data log errors, try to restart it
        if (data.name === 'pose_data' || data.name === 'flight_data' || data.name === 'battery_data') {
            console.warn(`Attempting to restart ${data.name} log...`);
            setTimeout(() => {
                restartLog(data.name);
            }, 1000);
        }
    });
    
    socket.on('console_output', (data) => {
        appendConsoleOutput(data.text);
    });
}

// Connection Management
async function checkStatus() {
    try {
        const response = await fetch('/api/status');
        const data = await response.json();
        
        // Only update if status actually changed to avoid unnecessary UI updates
        const currentConnecting = statusText && (statusText.textContent === t('connecting') || statusText.textContent === 'Connecting...');
        const shouldUpdate = (data.connected && !isConnected) || 
                            (!data.connected && isConnected) ||
                            (data.connecting && !currentConnecting && !data.connected);
        
        if (shouldUpdate) {
            updateConnectionStatus({
                event: 'status',
                connected: data.connected,
                connecting: data.connecting,
                uri: data.uri
            });
        }
    } catch (err) {
        console.error('Status check error:', err);
    }
}

async function handleScan() {
    scanBtn.disabled = true;
    scanResults.textContent = 'Scanning...';
    scanResults.style.display = 'block';
    
    try {
        const response = await fetch('/api/scan', { method: 'POST' });
        const data = await response.json();
        
        if (data.status === 'success') {
            interfaceSelect.innerHTML = '<option value="">Select interface...</option>';
            
            // Sort interfaces to put UDP interfaces first
            const sortedInterfaces = [...data.interfaces].sort((a, b) => {
                const aIsUDP = a.uri && a.uri.startsWith('udp://');
                const bIsUDP = b.uri && b.uri.startsWith('udp://');
                if (aIsUDP && !bIsUDP) return -1;
                if (!aIsUDP && bIsUDP) return 1;
                return 0;
            });
            
            let selectedIndex = 0;
            sortedInterfaces.forEach((iface, index) => {
                const option = document.createElement('option');
                option.value = iface.uri;
                option.textContent = `${iface.uri} - ${iface.info || ''}`;
                interfaceSelect.appendChild(option);
                
                // Select first UDP interface by default
                if (index === 0 && iface.uri && iface.uri.startsWith('udp://')) {
                    selectedIndex = index + 1; // +1 because of "Select interface..." option
                }
            });
            
            // Set default selection to first UDP interface
            if (selectedIndex > 0) {
                interfaceSelect.selectedIndex = selectedIndex;
                // Update address input with selected URI
                const addressInput = document.getElementById('addressInput');
                if (addressInput && interfaceSelect.value) {
                    addressInput.value = interfaceSelect.value;
                }
            }
            
            scanResults.textContent = `Found ${data.interfaces.length} interface(s)`;
            
            // Enable connect button if interfaces found
            if (data.interfaces.length > 0 && connectBtn) {
                connectBtn.disabled = false;
            }
        } else {
            if (scanResults) scanResults.textContent = `Error: ${data.message}`;
        }
    } catch (err) {
        if (scanResults) scanResults.textContent = `Error: ${err.message}`;
    } finally {
        if (scanBtn) scanBtn.disabled = false;
    }
}

async function handleConnect() {
    // Get URI from interface select or address input
    let uri = interfaceSelect.value;
    
    // If no interface selected, try to use address input
    if (!uri) {
        const addressInput = document.getElementById('addressInput');
        uri = addressInput ? addressInput.value.trim() : '';
    }
    
    if (!uri) {
        alert('Please select an interface or enter an address');
        return;
    }
    
    if (connectBtn) connectBtn.disabled = true;
    
    try {
        const response = await fetch('/api/connect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uri })
        });
        const data = await response.json();
        
        if (data.status === 'success') {
            // Poll for connection status as fallback if WebSocket event is missed
            let pollCount = 0;
            const maxPolls = 20; // Poll for up to 10 seconds (20 * 500ms)
            const pollInterval = setInterval(async () => {
                pollCount++;
                try {
                    const statusResponse = await fetch('/api/status');
                    const statusData = await statusResponse.json();
                    
                    if (statusData.connected) {
                        // Connection completed - update UI
                        updateConnectionStatus({
                            event: 'connected',
                            uri: statusData.uri
                        });
                        clearInterval(pollInterval);
                        closeConnectionDialog();
                        // Logging will be set up when TOC is updated via WebSocket event
                    } else if (!statusData.connecting && pollCount > 2) {
                        // Connection failed or was cancelled
                        clearInterval(pollInterval);
                        if (connectBtn) connectBtn.disabled = false;
                    } else if (pollCount >= maxPolls) {
                        // Timeout - stop polling
                        clearInterval(pollInterval);
                        if (!isConnected) {
                            alert('Connection timeout - please check if the device is reachable');
                            if (connectBtn) connectBtn.disabled = false;
                        }
                    }
                } catch (err) {
                    console.error('Status poll error:', err);
                    if (pollCount >= maxPolls) {
                        clearInterval(pollInterval);
                        if (connectBtn) connectBtn.disabled = false;
                    }
                }
            }, 500);
            
            // Also wait for WebSocket event (this should be faster)
            setTimeout(() => {
                if (isConnected) {
                    clearInterval(pollInterval);
                    closeConnectionDialog();
                    // Logging will be set up when TOC is updated via WebSocket event
                }
            }, 1000);
        } else {
            alert(`Connection failed: ${data.message}`);
            if (connectBtn) connectBtn.disabled = false;
        }
    } catch (err) {
        alert(`Connection error: ${err.message}`);
        if (connectBtn) connectBtn.disabled = false;
    }
}

async function handleDisconnect() {
    console.log('Disconnect button clicked');
    // Immediately update UI to show disconnecting state
    isConnected = false;
    updateMenuConnectText();
    if (statusDot) {
        statusDot.classList.remove('connected', 'connecting');
    }
    if (statusText) statusText.textContent = t('disconnecting');
    if (connectBtn) connectBtn.disabled = true;
    if (disconnectBtn) disconnectBtn.disabled = true;
    
    try {
        const response = await fetch('/api/disconnect', { method: 'POST' });
        const data = await response.json();
        if (data.status === 'success') {
            console.log('Disconnected successfully');
            // Update UI immediately, don't wait for WebSocket event
            updateConnectionStatus({
                event: 'disconnected',
                uri: null
            });
        } else {
            console.error('Disconnect failed:', data.message);
            alert(`Disconnect failed: ${data.message}`);
            // Re-enable buttons on failure
            if (connectBtn) connectBtn.disabled = false;
            if (disconnectBtn) disconnectBtn.disabled = false;
        }
    } catch (err) {
        console.error('Disconnect error:', err);
        alert(`Disconnect error: ${err.message}`);
        // Re-enable buttons on error
        if (connectBtn) connectBtn.disabled = false;
        if (disconnectBtn) disconnectBtn.disabled = false;
    }
}

// Quick Connect - Auto scan and connect to first available device
async function handleQuickConnect() {
    const quickConnectBtn = document.getElementById('quickConnectBtn');
    const quickConnectInfo = document.getElementById('quickConnectInfo');
    
    if (isConnected) {
        // If already connected, just open the connection dialog
        showConnectionDialog();
        return;
    }
    
    // Disable button and show loading state
    if (quickConnectBtn) {
        quickConnectBtn.disabled = true;
        quickConnectBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path d="M12 6v6l4 2"></path>
            </svg>
            Connecting...
        `;
    }
    if (quickConnectInfo) {
        quickConnectInfo.textContent = t('scanningDevices');
    }
    
    try {
        // First, scan for devices
        const scanResponse = await fetch('/api/scan', { method: 'POST' });
        const scanData = await scanResponse.json();
        
        if (scanData.status === 'success' && scanData.interfaces && scanData.interfaces.length > 0) {
            // Auto-connect to the first available device
            const firstDevice = scanData.interfaces[0];
            if (quickConnectInfo) {
                quickConnectInfo.textContent = `${t('connectingTo')} ${firstDevice.uri}...`;
            }
            
            const connectResponse = await fetch('/api/connect', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uri: firstDevice.uri })
            });
            
            const connectData = await connectResponse.json();
            
            if (connectData.status === 'success') {
                // Update interface select in dialog if it exists
                const interfaceSelect = document.getElementById('interfaceSelect');
                if (interfaceSelect) {
                    interfaceSelect.innerHTML = '<option value="">Select interface...</option>';
                    scanData.interfaces.forEach(iface => {
                        const option = document.createElement('option');
                        option.value = iface.uri;
                        option.textContent = `${iface.uri} - ${iface.info || ''}`;
                        if (iface.uri === firstDevice.uri) {
                            option.selected = true;
                        }
                        interfaceSelect.appendChild(option);
                    });
                }
                
                // Wait for connection status update via WebSocket
                // Logging will be set up when TOC is updated via WebSocket event
                // This ensures TOC is fully loaded before creating logs
            } else {
                // Connection failed, open dialog for manual connection
                if (quickConnectInfo) {
                    quickConnectInfo.textContent = `${t('connectionFailed')}: ${connectData.message || 'Unknown error'}`;
                }
                setTimeout(() => {
                    showConnectionDialog();
                }, 1500);
            }
        } else {
            // No devices found, open connection dialog
            if (quickConnectInfo) {
                quickConnectInfo.textContent = t('noDevicesFound');
            }
            setTimeout(() => {
                showConnectionDialog();
            }, 1500);
        }
    } catch (err) {
        console.error('Quick connect error:', err);
        if (quickConnectInfo) {
            quickConnectInfo.textContent = `${t('error')}: ${err.message}`;
        }
        setTimeout(() => {
            showConnectionDialog();
        }, 1500);
    } finally {
        // Re-enable button after a delay
        setTimeout(() => {
            if (quickConnectBtn && !isConnected) {
                quickConnectBtn.disabled = false;
                quickConnectBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                    Quick Connect
                `;
            }
        }, 2000);
    }
}

// Show connection dialog
function showConnectionDialog() {
    const dialog = document.getElementById('connectionDialog');
    if (dialog) {
        dialog.style.display = 'block';
        
        // Set default UDP interface if available
        const interfaceSelect = document.getElementById('interfaceSelect');
        const addressInput = document.getElementById('addressInput');
        
        // Get local IP address for default UDP URI
        const defaultIP = getLocalIPAddress();
        const defaultPort = 2390;
        const defaultURI = `udp://${defaultIP}:${defaultPort}`;
        
        // Set default address input to show the URI format
        if (addressInput) {
            if (!addressInput.value || addressInput.value === '0xE7E7E7E7E7') {
                addressInput.value = defaultURI;
            }
            addressInput.placeholder = defaultURI;
        }
        
        // Auto-scan when dialog opens
        if (!isConnected) {
            setTimeout(() => {
                handleScan().then(() => {
                    // After scan, try to select UDP interface by default
                    if (interfaceSelect) {
                        // Look for UDP interface in the options
                        for (let i = 0; i < interfaceSelect.options.length; i++) {
                            const option = interfaceSelect.options[i];
                            if (option.value && option.value.startsWith('udp://')) {
                                interfaceSelect.selectedIndex = i;
                                // Update address input with the selected URI
                                if (addressInput) {
                                    addressInput.value = option.value;
                                }
                                break;
                            }
                        }
                    }
                });
            }, 300);
        }
    }
}

function getLocalIPAddress() {
    // Try to get local IP from WebRTC or use default
    // Default to a common local network IP as shown in the image
    return '192.168.43.42';
}

// Close connection dialog
function closeConnectionDialog() {
    const dialog = document.getElementById('connectionDialog');
    if (dialog) {
        dialog.style.display = 'none';
    }
}

// Setup modal click-outside-to-close functionality
function setupModalCloseHandlers() {
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Prevent modal content clicks from closing the modal
    document.querySelectorAll('.modal-content').forEach(modalContent => {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

function updateConnectionStatus(data) {
    console.log('updateConnectionStatus called with:', data);
    if (data.event === 'connecting') {
        isConnected = false;
        updateMenuConnectText();
        if (statusDot) {
            statusDot.classList.add('connecting');
            statusDot.classList.remove('connected');
        }
        if (statusText) statusText.textContent = t('connecting');
        if (connectBtn) connectBtn.disabled = true;
        // Enable disconnect button during connecting so user can cancel
        if (disconnectBtn) disconnectBtn.disabled = false;
        
        // Update quick connect buttons
        const quickConnectBtn = document.getElementById('quickConnectBtn');
        const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
        const quickConnectInfo = document.getElementById('quickConnectInfo');
        if (quickConnectBtn) quickConnectBtn.style.display = 'none';
        // Show and enable quick disconnect button during connecting
        if (quickDisconnectBtn) {
            quickDisconnectBtn.style.display = 'flex';
            quickDisconnectBtn.disabled = false;
        }
        if (quickConnectInfo) quickConnectInfo.textContent = `${t('connectingTo')} ${data.uri || t('device')}...`;
    } else if (data.event === 'connected') {
        isConnected = true;
        updateMenuConnectText();
        if (statusDot) {
            statusDot.classList.add('connected');
            statusDot.classList.remove('connecting');
        }
        if (statusText) statusText.textContent = t('connected');
        console.log('Connection status updated to: Connected', data.uri);
        if (connectBtn) connectBtn.disabled = true;
        if (disconnectBtn) disconnectBtn.disabled = false;
        if (batteryIndicator) batteryIndicator.style.display = 'flex';
        
        // Update quick connect buttons
        const quickConnectBtn = document.getElementById('quickConnectBtn');
        const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
        const quickConnectInfo = document.getElementById('quickConnectInfo');
        if (quickConnectBtn) quickConnectBtn.style.display = 'none';
        if (quickDisconnectBtn) quickDisconnectBtn.style.display = 'flex';
            if (quickConnectInfo) quickConnectInfo.textContent = `${t('connectedTo')} ${data.uri || t('device')}`;
        if (takeOffBtn) takeOffBtn.disabled = false;
        if (landBtn) landBtn.disabled = false;
        if (upBtn) upBtn.disabled = false;
        if (downBtn) downBtn.disabled = false;
        if (leftBtn) leftBtn.disabled = false;
        if (rightBtn) rightBtn.disabled = false;
        if (forwardBtn) forwardBtn.disabled = false;
        if (backBtn) backBtn.disabled = false;
        
        // Enable loco positioning controls
        const locoStartBtn = document.getElementById('locoStartBtn');
        const locoStopBtn = document.getElementById('locoStopBtn');
        const locoResetBtn = document.getElementById('locoResetBtn');
        if (locoStartBtn) {
            locoStartBtn.disabled = false;
            locoStopBtn.disabled = false;
            locoResetBtn.disabled = false;
        }
        
        // Enable lighthouse controls
        const lighthouseLoadConfigBtn = document.getElementById('lighthouseLoadConfigBtn');
        const lighthouseSaveConfigBtn = document.getElementById('lighthouseSaveConfigBtn');
        const lighthouseManageGeometryBtn = document.getElementById('lighthouseManageGeometryBtn');
        const lighthouseChangeSystemTypeBtn = document.getElementById('lighthouseChangeSystemTypeBtn');
        const lighthouseManageModeBtn = document.getElementById('lighthouseManageModeBtn');
        if (lighthouseLoadConfigBtn) {
            lighthouseLoadConfigBtn.disabled = false;
            lighthouseSaveConfigBtn.disabled = false;
            lighthouseManageGeometryBtn.disabled = false;
            lighthouseChangeSystemTypeBtn.disabled = false;
            lighthouseManageModeBtn.disabled = false;
        }
        
        loadParams();
        loadLogTOC();
        // Logging will be set up when TOC is updated via WebSocket event
        // This ensures TOC is fully loaded before creating logs
    } else if (data.event === 'disconnected') {
        isConnected = false;
        // Reset log timestamps when disconnected
        Object.keys(lastLogDataTime).forEach(key => {
            lastLogDataTime[key] = 0;
        });
        updateMenuConnectText();
        if (statusDot) statusDot.classList.remove('connected', 'connecting');
        if (statusText) statusText.textContent = t('disconnected');
        if (connectBtn) connectBtn.disabled = false;
        if (disconnectBtn) disconnectBtn.disabled = true;
        if (batteryIndicator) batteryIndicator.style.display = 'none';
        
        // Update quick connect buttons
        const quickConnectBtn = document.getElementById('quickConnectBtn');
        const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
        const quickConnectInfo = document.getElementById('quickConnectInfo');
        if (quickConnectBtn) quickConnectBtn.style.display = 'flex';
        if (quickDisconnectBtn) quickDisconnectBtn.style.display = 'none';
        if (quickConnectInfo) quickConnectInfo.textContent = 'Click to configure connection';
        if (takeOffBtn) takeOffBtn.disabled = true;
        if (landBtn) landBtn.disabled = true;
        if (upBtn) upBtn.disabled = true;
        if (downBtn) downBtn.disabled = true;
        if (leftBtn) leftBtn.disabled = true;
        if (rightBtn) rightBtn.disabled = true;
        if (forwardBtn) forwardBtn.disabled = true;
        if (backBtn) backBtn.disabled = true;
    } else if (data.event === 'failed' || data.event === 'lost') {
        isConnected = false;
        if (statusDot) statusDot.classList.remove('connected', 'connecting');
        if (statusText) statusText.textContent = t('connectionFailed');
        if (connectBtn) connectBtn.disabled = false;
        if (disconnectBtn) disconnectBtn.disabled = true;
        if (batteryIndicator) batteryIndicator.style.display = 'none';
    } else if (data.event === 'status') {
        // Handle status check - update UI based on current connection state
        const wasConnected = isConnected;
        isConnected = data.connected;
        updateMenuConnectText();
        
        // If status changed from connecting to connected, update UI accordingly
        if (data.connected && !wasConnected) {
            // Force update to 'connected' event style
            if (statusDot) {
                statusDot.classList.add('connected');
                statusDot.classList.remove('connecting');
            }
            if (statusText) statusText.textContent = t('connected');
            console.log('Status poll detected connection:', data.uri);
        } else if (data.connected) {
            // Already connected - just ensure UI is correct
            if (statusDot) {
                statusDot.classList.add('connected');
                statusDot.classList.remove('connecting');
            }
            if (statusText) statusText.textContent = t('connected');
            if (connectBtn) connectBtn.disabled = true;
            if (disconnectBtn) disconnectBtn.disabled = false;
            if (batteryIndicator) batteryIndicator.style.display = 'flex';
            
            // Update quick connect buttons
            const quickConnectBtn = document.getElementById('quickConnectBtn');
            const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
            const quickConnectInfo = document.getElementById('quickConnectInfo');
            if (quickConnectBtn) quickConnectBtn.style.display = 'none';
            if (quickDisconnectBtn) quickDisconnectBtn.style.display = 'flex';
            if (quickConnectInfo) quickConnectInfo.textContent = `${t('connectedTo')} ${data.uri || 'device'}`;
            
            // Enable flight control buttons
            if (takeOffBtn) takeOffBtn.disabled = false;
            if (landBtn) landBtn.disabled = false;
            if (upBtn) upBtn.disabled = false;
            if (downBtn) downBtn.disabled = false;
            if (leftBtn) leftBtn.disabled = false;
            if (rightBtn) rightBtn.disabled = false;
            if (forwardBtn) forwardBtn.disabled = false;
            if (backBtn) backBtn.disabled = false;
            
            // Enable loco positioning controls
            const locoStartBtn = document.getElementById('locoStartBtn');
            const locoStopBtn = document.getElementById('locoStopBtn');
            const locoResetBtn = document.getElementById('locoResetBtn');
            if (locoStartBtn) {
                locoStartBtn.disabled = false;
                locoStopBtn.disabled = false;
                locoResetBtn.disabled = false;
            }
            
            // Enable lighthouse controls
            const lighthouseLoadConfigBtn = document.getElementById('lighthouseLoadConfigBtn');
            const lighthouseSaveConfigBtn = document.getElementById('lighthouseSaveConfigBtn');
            const lighthouseManageGeometryBtn = document.getElementById('lighthouseManageGeometryBtn');
            const lighthouseChangeSystemTypeBtn = document.getElementById('lighthouseChangeSystemTypeBtn');
            const lighthouseManageModeBtn = document.getElementById('lighthouseManageModeBtn');
            if (lighthouseLoadConfigBtn) {
                lighthouseLoadConfigBtn.disabled = false;
                lighthouseSaveConfigBtn.disabled = false;
                lighthouseManageGeometryBtn.disabled = false;
                lighthouseChangeSystemTypeBtn.disabled = false;
                lighthouseManageModeBtn.disabled = false;
            }
            
            // Load data if not already loaded
            loadParams();
            loadLogTOC();
            // Logging will be set up when TOC is updated via WebSocket event
        } else {
            // Disconnected state
            if (statusDot) statusDot.classList.remove('connected', 'connecting');
            if (statusText) statusText.textContent = t('disconnected');
            if (connectBtn) connectBtn.disabled = false;
            // Keep disconnect button enabled so user can cancel if needed
            if (disconnectBtn) disconnectBtn.disabled = false;
            if (linkQuality) linkQuality.style.display = 'none';
            if (batteryIndicator) batteryIndicator.style.display = 'none';
            
            // Update quick connect buttons
            const quickConnectBtn = document.getElementById('quickConnectBtn');
            const quickDisconnectBtn = document.getElementById('quickDisconnectBtn');
            const quickConnectInfo = document.getElementById('quickConnectInfo');
            if (quickConnectBtn) quickConnectBtn.style.display = 'flex';
            if (quickDisconnectBtn) quickDisconnectBtn.style.display = 'none';
            if (quickConnectInfo) quickConnectInfo.textContent = t('clickToConfigure');
            
            // Disable flight control buttons
            if (takeOffBtn) takeOffBtn.disabled = true;
            if (landBtn) landBtn.disabled = true;
            if (upBtn) upBtn.disabled = true;
            if (downBtn) downBtn.disabled = true;
            if (leftBtn) leftBtn.disabled = true;
            if (rightBtn) rightBtn.disabled = true;
            if (forwardBtn) forwardBtn.disabled = true;
            if (backBtn) backBtn.disabled = true;
        }
    }
}

function updateLinkQuality(percentage) {
    linkQualityValue.textContent = `${percentage.toFixed(0)}%`;
}

// Flight Control
function setupJoystick() {
    if (!joystickCanvas) return;
    
    const ctx = joystickCanvas.getContext('2d');
    const centerX = joystickCanvas.width / 2;
    const centerY = joystickCanvas.height / 2;
    const radius = 100;
    
    function drawJoystick() {
        ctx.clearRect(0, 0, joystickCanvas.width, joystickCanvas.height);
        
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
        
        const x = centerX + joystickX * radius;
        const y = centerY + joystickY * radius;
        ctx.fillStyle = '#667eea';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX - radius, centerY);
        ctx.lineTo(centerX + radius, centerY);
        ctx.moveTo(centerX, centerY - radius);
        ctx.lineTo(centerX, centerY + radius);
        ctx.stroke();
    }
    
    function getJoystickPos(e, type) {
        const rect = joystickCanvas.getBoundingClientRect();
        let clientX, clientY;
        
        if (type === 'touch') {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        const x = clientX - rect.left - centerX;
        const y = clientY - rect.top - centerY;
        const distance = Math.sqrt(x * x + y * y);
        
        if (distance > radius) {
            const angle = Math.atan2(y, x);
            return {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            };
        }
        return { x, y };
    }
    
    function resetJoystick() {
        joystickActive = false;
        joystickX = 0;
        joystickY = 0;
        updateControlValues();
        sendControlCommand();
        drawJoystick();
    }
    
    // Mouse events
    joystickCanvas.addEventListener('mousedown', (e) => {
        e.preventDefault();
        joystickActive = true;
        const pos = getJoystickPos(e, 'mouse');
        joystickX = pos.x / radius;
        joystickY = pos.y / radius;
        updateControlValues();
        drawJoystick();
    });
    
    joystickCanvas.addEventListener('mousemove', (e) => {
        if (joystickActive) {
            const pos = getJoystickPos(e, 'mouse');
            joystickX = pos.x / radius;
            joystickY = pos.y / radius;
            updateControlValues();
            sendControlCommand();
            drawJoystick();
        }
    });
    
    joystickCanvas.addEventListener('mouseup', () => {
        resetJoystick();
    });
    
    joystickCanvas.addEventListener('mouseleave', () => {
        if (joystickActive) {
            resetJoystick();
        }
    });
    
    // Touch events for mobile
    joystickCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        joystickActive = true;
        const pos = getJoystickPos(e, 'touch');
        joystickX = pos.x / radius;
        joystickY = pos.y / radius;
        updateControlValues();
        drawJoystick();
    }, { passive: false });
    
    joystickCanvas.addEventListener('touchmove', (e) => {
        if (joystickActive) {
            e.preventDefault();
            const pos = getJoystickPos(e, 'touch');
            joystickX = pos.x / radius;
            joystickY = pos.y / radius;
            updateControlValues();
            sendControlCommand();
            drawJoystick();
        }
    }, { passive: false });
    
    joystickCanvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        resetJoystick();
    }, { passive: false });
    
    joystickCanvas.addEventListener('touchcancel', () => {
        resetJoystick();
    });
    
    // Make canvas responsive
    function resizeCanvas() {
        const container = joystickCanvas.parentElement;
        if (container && window.innerWidth <= 768) {
            const maxWidth = Math.min(container.clientWidth - 20, 300);
            joystickCanvas.style.width = maxWidth + 'px';
            joystickCanvas.style.height = maxWidth + 'px';
        }
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    drawJoystick();
}

function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (!isConnected) return;
        
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                currentThrust = Math.min(65535, currentThrust + 1000);
                updateControlValues();
                sendControlCommand();
                break;
            case 'ArrowDown':
                e.preventDefault();
                currentThrust = Math.max(0, currentThrust - 1000);
                updateControlValues();
                sendControlCommand();
                break;
            case 'q':
            case 'Q':
                currentYaw = Math.min(200, currentYaw + 10);
                updateControlValues();
                sendControlCommand();
                break;
            case 'a':
            case 'A':
                currentYaw = Math.max(-200, currentYaw - 10);
                updateControlValues();
                sendControlCommand();
                break;
        }
    });
    
    document.addEventListener('wheel', (e) => {
        if (!isConnected) return;
        e.preventDefault();
        currentThrust = Math.max(0, Math.min(65535, currentThrust - e.deltaY * 10));
        updateControlValues();
        sendControlCommand();
    }, { passive: false });
}

function updateControlValues() {
    // Only update from joystick/keyboard input, don't modify currentThrust here
    currentRoll = joystickX * 30;
    currentPitch = -joystickY * 30;
    
    if (targetRoll) targetRoll.value = currentRoll.toFixed(1);
    if (targetPitch) targetPitch.value = currentPitch.toFixed(1);
    if (targetYaw) targetYaw.value = currentYaw.toFixed(1);
    // Display current thrust value (only updated by user input, not randomly)
    if (targetThrust) targetThrust.value = currentThrust;
    // Update height from state estimate if available
    if (targetHeight) {
        targetHeight.value = attitudeHeight.toFixed(2);
    }
}

function sendControlCommand() {
    if (!isConnected) return;
    
    fetch('/api/control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            roll: currentRoll,
            pitch: currentPitch,
            yaw: currentYaw,
            thrust: currentThrust
        })
    }).catch(err => console.error('Control error:', err));
}

function handleEmergencyStop() {
    currentRoll = 0;
    currentPitch = 0;
    currentYaw = 0;
    currentThrust = 0;
    joystickX = 0;
    joystickY = 0;
    updateControlValues();
    sendControlCommand();
}

function handleFlightModeChange() {
    const mode = flightMode.value;
    // Enable/disable advanced controls based on mode
    const advancedControls = [maxAngle, maxYawRate, maxThrust, minThrust, slewLimit, thrustLoweringSlewRate];
    advancedControls.forEach(ctrl => {
        ctrl.disabled = mode !== 'Advanced';
    });
}

function handleAssistModeChange() {
    const mode = assistMode.value;
    // Handle assist mode changes
    if (mode === 'althold') {
        setParam('flightmode.althold', '1');
    } else if (mode === 'poshold') {
        setParam('flightmode.poshold', '1');
    } else if (mode === 'heighthold') {
        setParam('flightmode.heighthold', '1');
    } else if (mode === 'hover') {
        setParam('flightmode.hover', '1');
    } else {
        setParam('flightmode.althold', '0');
        setParam('flightmode.poshold', '0');
        setParam('flightmode.heighthold', '0');
        setParam('flightmode.hover', '0');
    }
}

async function sendCommanderCommand(action) {
    if (!isConnected) {
        console.warn('Cannot send command: not connected');
        return;
    }
    
    try {
        const response = await fetch('/api/commander', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action })
        });
        
        const result = await response.json();
        
        if (!response.ok || result.status === 'error') {
            console.error(`Commander command error (${action}):`, result.message || 'Unknown error');
            alert(`Error: ${result.message || 'Failed to execute command'}`);
        } else {
            console.log(`Commander command success (${action})`);
        }
    } catch (err) {
        console.error('Commander command error:', err);
        alert(`Error: ${err.message || 'Failed to send command'}`);
    }
}

// Flight Data Logging
async function setupFlightDataLogging() {
    if (!isConnected) return;
    
    try {
        // Create flight data log config
        // Keep this log lightweight to avoid overloading the TerraDrone log
        // subsystem and to prevent \"log configuration is too large\" errors.
        // We log only the stabilizer setpoints used by the UI.
        const flightDataConfig = {
            name: 'flight_data',
            // 40 ms update period is sufficient for UI and reduces bandwidth
            period: 40,
            variables: [
                'stabilizer.thrust',
                'stabilizer.roll',
                'stabilizer.pitch',
                'stabilizer.yaw'
            ]
        };
        
        const flightCreateResponse = await fetch('/api/logs/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(flightDataConfig)
        });
        
        if (flightCreateResponse.ok) {
            const flightStartResponse = await fetch('/api/logs/flight_data/start', { method: 'POST' });
            if (!flightStartResponse.ok) {
                const errorData = await flightStartResponse.json().catch(() => ({}));
                console.warn('Failed to start flight_data log:', errorData.message || 'Unknown error');
            } else {
                console.log('Flight data logging started successfully');
            }
        } else {
            const errorData = await flightCreateResponse.json().catch(() => ({}));
            console.warn('Failed to create flight_data log:', errorData.message || 'Unknown error');
        }
        
        // Pose data logging (stateEstimate.*) is now handled entirely by the
        // backend, which creates and starts a dedicated pose_data logger when
        // the TOCs are ready (mirroring cfclient's PoseLogger behavior). The
        // frontend only listens to log_data events with name 'pose_data'.
        
        // Create battery monitoring log config
        const batteryConfig = {
            name: 'battery_data',
            period: 1000, // Every second
            variables: ['pm.vbat']
        };
        
        const batteryCreateResponse = await fetch('/api/logs/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(batteryConfig)
        });
        
        if (batteryCreateResponse.ok) {
            const startResponse = await fetch('/api/logs/battery_data/start', { method: 'POST' });
            if (!startResponse.ok) {
                const errorData = await startResponse.json().catch(() => ({}));
                console.warn('Failed to start battery_data log:', errorData.message || 'Unknown error');
            } else {
                console.log('Battery logging started successfully');
            }
        } else {
            const errorData = await batteryCreateResponse.json().catch(() => ({}));
            console.warn('Failed to create battery_data log:', errorData.message || 'Unknown error');
        }
    } catch (err) {
        console.error('Flight data logging setup error:', err);
    }
}

// Track last log data timestamps (currently used only for debugging/metrics).
const lastLogDataTime = {
    'flight_data': 0,
    'pose_data': 0,
    'battery_data': 0
};

// Track restart attempts to prevent multiple simultaneous restarts
const restartingLogs = new Set();

async function restartLog(logName) {
    if (!isConnected) return;
    if (restartingLogs.has(logName)) return; // Already restarting
    
    restartingLogs.add(logName);
    
    try {
        console.log(`Restarting ${logName} log...`);
        
        // For pose_data we never explicitly stop the log based on timeouts.
        // Stopping deletes the log block on the TerraDrone and introduces a
        // visible gap in pose streaming. We only ever restart pose_data on
        // backend log_error events and by trying to (re)start it.
        const shouldStopBeforeRestart = logName !== 'pose_data';
        if (shouldStopBeforeRestart) {
            // Stop the log first (ignore errors if it doesn't exist)
            await fetch(`/api/logs/${logName}/stop`, { method: 'POST' }).catch(() => {});
            
            // Wait a bit before restarting
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Try to restart first, if that fails, recreate the log
        let response = await fetch(`/api/logs/${logName}/start`, { method: 'POST' });
        
        if (!response.ok) {
            // Log doesn't exist or can't be started, recreate it
            console.log(`${logName} log not found or can't be started, recreating...`);
            
            let config;
            if (logName === 'flight_data') {
                config = {
                    name: 'flight_data',
                    period: 20,
                    variables: ['stabilizer.thrust', 'motor.m1', 'motor.m2', 'motor.m3', 'motor.m4', 'stabilizer.roll', 'stabilizer.pitch', 'stabilizer.yaw']
                };
            } else if (logName === 'pose_data') {
                config = {
                    name: 'pose_data',
                    period: 40,
                    variables: ['stateEstimate.x', 'stateEstimate.y', 'stateEstimate.z', 'stateEstimate.roll', 'stateEstimate.pitch', 'stateEstimate.yaw']
                };
            } else if (logName === 'battery_data') {
                config = {
                    name: 'battery_data',
                    period: 1000,
                    variables: ['pm.vbat']
                };
            }
            
            if (config) {
                // Create the log
                const createResponse = await fetch('/api/logs/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(config)
                });
                
                if (createResponse.ok) {
                    // Now start it
                    response = await fetch(`/api/logs/${logName}/start`, { method: 'POST' });
                } else {
                    const errorData = await createResponse.json().catch(() => ({}));
                    console.error(`Failed to recreate ${logName} log:`, errorData.message || 'Unknown error');
                }
            }
        }
        
        if (response && response.ok) {
            console.log(`${logName} log restarted successfully`);
            // Reset timestamp to prevent immediate re-trigger
            lastLogDataTime[logName] = Date.now();
        } else {
            const errorData = await response.json().catch(() => ({}));
            console.error(`Failed to restart ${logName} log:`, errorData.message || 'Unknown error');
        }
    } catch (err) {
        console.error(`Error restarting ${logName} log:`, err);
    } finally {
        restartingLogs.delete(logName);
    }
}

function handleLogData(data) {
    // Update last received time for this log
    if (lastLogDataTime.hasOwnProperty(data.name)) {
        lastLogDataTime[data.name] = Date.now();
    }
    // Handle both 'data' and 'values' properties
    const logData = data.data || data.values || {};
    
    if (data.name === 'battery_data') {
        // Debug: log received battery data
        console.log('Battery data received:', logData);
        // Check if we have battery voltage data
        const voltage = logData['pm.vbat'];
        if (voltage !== undefined && voltage !== null) {
            console.log('Battery voltage:', voltage, 'V');
            // Convert voltage to percentage (3.0V = 0%, 4.2V = 100%)
            const minVoltage = 3.0;
            const maxVoltage = 4.2;
            const percentage = Math.max(0, Math.min(100, ((voltage - minVoltage) / (maxVoltage - minVoltage)) * 100));
            
            if (batteryValue) {
                batteryValue.textContent = Math.round(percentage);
            }
            if (batteryIndicator) {
                batteryIndicator.style.display = 'flex';
                // Change color based on battery level
                if (percentage < 20) {
                    batteryIndicator.style.color = 'rgba(239, 68, 68, 0.9)'; // Red
                } else if (percentage < 40) {
                    batteryIndicator.style.color = 'rgba(245, 158, 11, 0.9)'; // Orange
                } else {
                    batteryIndicator.style.color = 'rgba(16, 185, 129, 0.9)'; // Green
                }
            }
        } else {
            // Log for debugging if battery data is missing
            console.warn('Battery data received but pm.vbat is missing:', logData);
        }
    } else if (data.name === 'flight_data') {
        // Debug: log received flight data
        console.log('Flight data received:', logData);
        
        // Update motor bars
        const maxThrust = 65535;
        if (logData['motor.m1'] !== undefined && motor1Bar) {
            const m1Percent = (logData['motor.m1'] / maxThrust) * 100;
            motor1Bar.style.height = m1Percent + '%';
        }
        if (logData['motor.m2'] !== undefined && motor2Bar) {
            const m2Percent = (logData['motor.m2'] / maxThrust) * 100;
            motor2Bar.style.height = m2Percent + '%';
        }
        if (logData['motor.m3'] !== undefined && motor3Bar) {
            const m3Percent = (logData['motor.m3'] / maxThrust) * 100;
            motor3Bar.style.height = m3Percent + '%';
        }
        if (logData['motor.m4'] !== undefined && motor4Bar) {
            const m4Percent = (logData['motor.m4'] / maxThrust) * 100;
            motor4Bar.style.height = m4Percent + '%';
        }
        if (logData['stabilizer.thrust'] !== undefined) {
            const thrustPercent = (logData['stabilizer.thrust'] / maxThrust) * 100;
            if (actualThrust) {
                actualThrust.value = thrustPercent.toFixed(2) + '%';
            }
            if (thrustBar) {
                thrustBar.style.height = thrustPercent + '%';
            }
        }
        // Note: Roll, Pitch, Yaw in State Estimate section should come from pose_data (stateEstimate.*)
        // stabilizer.* values are for internal control, stateEstimate.* are the actual estimated values
        // We update attitude indicator from stabilizer for immediate feedback, but State Estimate display
        // should use stateEstimate values from pose_data
        if (logData['stabilizer.roll'] !== undefined) {
            // Only update attitude indicator, not State Estimate display
            attitudeRoll = logData['stabilizer.roll'];
            if (typeof drawAttitudeIndicator === 'function') {
                drawAttitudeIndicator();
            }
        }
        if (logData['stabilizer.pitch'] !== undefined) {
            // Only update attitude indicator, not State Estimate display
            attitudePitch = logData['stabilizer.pitch'];
            if (typeof drawAttitudeIndicator === 'function') {
                drawAttitudeIndicator();
            }
        }
    } else if (data.name === 'pose_data') {
        // Debug: log received pose data
        console.log('Pose data received:', logData);
        
        if (logData['stateEstimate.x'] !== undefined && actualX) {
            actualX.value = logData['stateEstimate.x'].toFixed(2);
        }
        if (logData['stateEstimate.y'] !== undefined && actualY) {
            actualY.value = logData['stateEstimate.y'].toFixed(2);
        }
        if (logData['stateEstimate.z'] !== undefined) {
            if (actualZ) {
                actualZ.value = logData['stateEstimate.z'].toFixed(2);
            }
            // Update attitude height (declared at top level)
            attitudeHeight = logData['stateEstimate.z'];
            // Update target height display
            if (targetHeight) {
                targetHeight.value = logData['stateEstimate.z'].toFixed(2);
            }
        }
        if (logData['stateEstimate.roll'] !== undefined) {
            // Update State Estimate Roll display
            if (actualRoll) actualRoll.value = logData['stateEstimate.roll'].toFixed(2);
            attitudeRoll = logData['stateEstimate.roll'];
            if (typeof drawAttitudeIndicator === 'function') {
                drawAttitudeIndicator();
            }
        }
        if (logData['stateEstimate.pitch'] !== undefined) {
            // Update State Estimate Pitch display
            if (actualPitch) actualPitch.value = logData['stateEstimate.pitch'].toFixed(2);
            attitudePitch = logData['stateEstimate.pitch'];
            if (typeof drawAttitudeIndicator === 'function') {
                drawAttitudeIndicator();
            }
        }
        if (logData['stateEstimate.yaw'] !== undefined && actualYaw) {
            // Update State Estimate Yaw display
            actualYaw.value = logData['stateEstimate.yaw'].toFixed(2);
        }
    }
    
    // Update plotter if active
    if (plotterChart && data.name === plotterLogConfig.value) {
        updatePlotter(data);
    }
}

// Console
function appendConsoleOutput(text) {
    consoleOutput.textContent += text;
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// LED Ring
function setupLEDRing() {
    const leds = document.querySelectorAll('.led');
    leds.forEach((led, index) => {
        led.addEventListener('click', () => {
            const color = ledColor.value;
            const intensity = ledIntensity.value;
            setLED(index, color, intensity);
        });
    });
}

async function setLED(index, color, intensity) {
    if (!isConnected) return;
    
    try {
        const rgb = hexToRgb(color);
        const r = Math.floor(rgb.r * intensity / 100);
        const g = Math.floor(rgb.g * intensity / 100);
        const b = Math.floor(rgb.b * intensity / 100);
        
        await fetch('/api/led', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index, r, g, b })
        });
        
        const led = document.getElementById(`led${index}`);
        led.style.backgroundColor = color;
        led.classList.add('active');
    } catch (err) {
        console.error('Set LED error:', err);
    }
}

function handleSetAllLeds() {
    const color = ledColor.value;
    const intensity = ledIntensity.value;
    for (let i = 0; i < 12; i++) {
        setLED(i, color, intensity);
    }
}

function handleClearAllLeds() {
    for (let i = 0; i < 12; i++) {
        setLED(i, '#000000', 0);
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

// Log Blocks
async function handleCreateLogBlock() {
    const name = prompt('Enter log block name:');
    if (!name) return;
    
    const period = prompt('Enter period (ms):', '10');
    if (!period) return;
    
    const variables = prompt('Enter variables (comma-separated):');
    if (!variables) return;
    
    try {
        const response = await fetch('/api/logs/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                period: parseInt(period),
                variables: variables.split(',').map(v => v.trim())
            })
        });
        
        if (response.ok) {
            loadLogBlocks();
        }
    } catch (err) {
        console.error('Create log block error:', err);
    }
}

async function loadLogBlocks() {
    // Implementation for loading log blocks
}

function filterLogBlocks() {
    // Implementation for filtering log blocks
}

// Plotter
function setupPlotter() {
    const ctx = plotterCanvas.getContext('2d');
    plotterCanvas.width = plotterCanvas.offsetWidth;
    plotterCanvas.height = plotterCanvas.offsetHeight;
    
    if (typeof Chart === 'undefined') {
        console.error('Chart.js library not loaded. Plotter functionality will not work.');
        return;
    }
    
    plotterChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

async function handleStartPlotting() {
    const logConfigName = plotterLogConfig.value;
    if (!logConfigName) return;
    
    try {
        await fetch(`/api/logs/${logConfigName}/start`, { method: 'POST' });
        startPlotBtn.disabled = true;
        stopPlotBtn.disabled = false;
    } catch (err) {
        console.error('Start plotting error:', err);
    }
}

async function handleStopPlotting() {
    const logConfigName = plotterLogConfig.value;
    if (!logConfigName) return;
    
    try {
        await fetch(`/api/logs/${logConfigName}/stop`, { method: 'POST' });
        startPlotBtn.disabled = false;
        stopPlotBtn.disabled = true;
    } catch (err) {
        console.error('Stop plotting error:', err);
    }
}

function updatePlotter(data) {
    if (!plotterChart) return;
    
    const timestamp = new Date(data.timestamp / 1000).toLocaleTimeString();
    
    Object.keys(data.data).forEach(key => {
        let dataset = plotterChart.data.datasets.find(d => d.label === key);
        if (!dataset) {
            dataset = {
                label: key,
                data: [],
                borderColor: getRandomColor(),
                backgroundColor: 'transparent',
                tension: 0.1
            };
            plotterChart.data.datasets.push(dataset);
        }
        
        dataset.data.push({ x: timestamp, y: data.data[key] });
        
        // Keep only last 100 points
        if (dataset.data.length > 100) {
            dataset.data.shift();
        }
    });
    
    if (plotterChart.data.labels.length > 100) {
        plotterChart.data.labels.shift();
    }
    plotterChart.data.labels.push(timestamp);
    
    plotterChart.update();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function loadLogTOC(logTOC) {
    if (!logTOC) {
        // Try to fetch from API
        fetch('/api/logs').then(r => r.json()).then(data => {
            if (data.status === 'success') {
                displayLogTOC(data.logs);
            }
        });
        return;
    }
    displayLogTOC(logTOC);
}

function displayLogTOC(logTOC) {
    const tree = document.getElementById('logtocTree');
    if (!tree) return;
    
    if (!logTOC || Object.keys(logTOC).length === 0) {
        tree.innerHTML = '<p class="info-text">No log variables available</p>';
        return;
    }
    
    tree.innerHTML = '';
    
    for (const group in logTOC) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'logtoc-group';
        
        const groupHeader = document.createElement('div');
        groupHeader.className = 'logtoc-group-header';
        groupHeader.textContent = group;
        groupHeader.onclick = () => {
            const variables = groupDiv.querySelector('.logtoc-variables');
            variables.style.display = variables.style.display === 'none' ? 'block' : 'none';
        };
        
        const variablesDiv = document.createElement('div');
        variablesDiv.className = 'logtoc-variables';
        
        for (const name in logTOC[group]) {
            const varInfo = logTOC[group][name];
            const varDiv = document.createElement('div');
            varDiv.className = 'logtoc-variable';
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'logtoc-variable-name';
            nameSpan.textContent = name;
            
            const infoSpan = document.createElement('span');
            infoSpan.className = 'logtoc-variable-info';
            infoSpan.textContent = `ID: ${varInfo.ident || 'N/A'}, Type: ${varInfo.type || 'N/A'}`;
            
            varDiv.appendChild(nameSpan);
            varDiv.appendChild(infoSpan);
            variablesDiv.appendChild(varDiv);
        }
        
        groupDiv.appendChild(groupHeader);
        groupDiv.appendChild(variablesDiv);
        tree.appendChild(groupDiv);
    }
}

function filterLogTOC() {
    const search = document.getElementById('logtocSearch').value.toLowerCase();
    const variables = document.querySelectorAll('.logtoc-variable');
    
    variables.forEach(v => {
        const name = v.querySelector('.logtoc-variable-name').textContent.toLowerCase();
        const group = v.closest('.logtoc-group').querySelector('.logtoc-group-header').textContent.toLowerCase();
        const match = name.includes(search) || group.includes(search);
        v.style.display = match ? '' : 'none';
    });
}

// Loco Positioning
async function startLocoPositioning() {
    try {
        await fetch('/api/loco/start', { method: 'POST' });
    } catch (err) {
        console.error('Start loco positioning error:', err);
    }
}

async function stopLocoPositioning() {
    try {
        await fetch('/api/loco/stop', { method: 'POST' });
    } catch (err) {
        console.error('Stop loco positioning error:', err);
    }
}

async function resetLocoPositioning() {
    try {
        await fetch('/api/loco/reset', { method: 'POST' });
    } catch (err) {
        console.error('Reset loco positioning error:', err);
    }
}

// Lighthouse
async function loadLighthouseConfig() {
    try {
        const response = await fetch('/api/lighthouse/config/load', { method: 'POST' });
        const data = await response.json();
        if (data.status === 'success') {
            alert('Lighthouse configuration loaded');
        } else {
            alert(`Load failed: ${data.message || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Load lighthouse config error:', err);
        alert(`Error: ${err.message}`);
    }
}

async function saveLighthouseConfig() {
    try {
        const response = await fetch('/api/lighthouse/config/save', { method: 'POST' });
        const data = await response.json();
        if (data.status === 'success') {
            alert('Lighthouse configuration saved');
        } else {
            alert(`Save failed: ${data.message || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Save lighthouse config error:', err);
        alert(`Error: ${err.message}`);
    }
}

async function manageLighthouseGeometry() {
    try {
        const response = await fetch('/api/lighthouse/geometry', { method: 'POST' });
        const data = await response.json();
        if (data.status === 'success') {
            alert('Lighthouse geometry management opened');
        } else {
            alert(`Operation failed: ${data.message || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Manage lighthouse geometry error:', err);
        alert(`Error: ${err.message}`);
    }
}

async function changeLighthouseSystemType() {
    try {
        const systemType = prompt('Enter system type (1 for V1, 2 for V2):');
        if (systemType) {
            const response = await fetch('/api/lighthouse/system/type', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: parseInt(systemType) })
            });
            const data = await response.json();
            if (data.status === 'success') {
                alert('Lighthouse system type changed');
            } else {
                alert(`Change failed: ${data.message || 'Unknown error'}`);
            }
        }
    } catch (err) {
        console.error('Change lighthouse system type error:', err);
        alert(`Error: ${err.message}`);
    }
}

async function manageLighthouseMode() {
    try {
        const response = await fetch('/api/lighthouse/mode', { method: 'POST' });
        const data = await response.json();
        if (data.status === 'success') {
            alert('Lighthouse mode management opened');
        } else {
            alert(`Operation failed: ${data.message || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Manage lighthouse mode error:', err);
        alert(`Error: ${err.message}`);
    }
}

// CRTP Shark
function displayCrptsharkPacket(data) {
    const tbody = document.getElementById('crptsharkTableBody');
    if (!tbody) return;
    
    // Remove placeholder if exists
    if (tbody.children.length === 1 && tbody.children[0].querySelector('.info-text')) {
        tbody.innerHTML = '';
    }
    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${data.timestamp}</td>
        <td class="direction-${data.direction.toLowerCase()}">${data.direction}</td>
        <td>${data.port}/${data.channel}</td>
        <td>${data.data}</td>
    `;
    
    tbody.appendChild(row);
    
    // Keep only last 1000 packets
    while (tbody.children.length > 1000) {
        tbody.removeChild(tbody.firstChild);
    }
    
    // Auto-scroll to bottom
    const table = tbody.closest('.crptshark-table');
    if (table) {
        table.scrollTop = table.scrollHeight;
    }
}

function saveCrptsharkData() {
    const rows = document.querySelectorAll('#crptsharkTableBody tr');
    let csv = 'ms,Direction,Port/Chan,Data\n';
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 4) {
            csv += `${cells[0].textContent},${cells[1].textContent},${cells[2].textContent},${cells[3].textContent}\n`;
        }
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `crptshark_${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Parameters
async function loadParams(params) {
    if (!params) {
        try {
            const response = await fetch('/api/params');
            const data = await response.json();
            if (data.status === 'success') {
                params = data.params;
                allParams = data.cache || {};
            }
        } catch (err) {
            console.error('Load params error:', err);
            return;
        }
    }
    
    if (!params || Object.keys(params).length === 0) {
        paramsList.innerHTML = '<p class="info-text">No parameters available</p>';
        return;
    }
    
    paramsList.innerHTML = '';
    
    for (const group in params) {
        for (const name in params[group]) {
            const fullName = `${group}.${name}`;
            const param = params[group][name];
            const value = allParams[fullName] || param.value || '';
            
            const item = document.createElement('div');
            item.className = 'param-item';
            item.dataset.paramName = fullName;
            
            item.innerHTML = `
                <div class="param-name">${fullName}</div>
                <div class="param-value">
                    <input type="text" class="param-input" value="${value}" data-param="${fullName}">
                    <button class="btn btn-primary param-btn" onclick="setParam('${fullName}')">Set</button>
                </div>
            `;
            
            paramsList.appendChild(item);
        }
    }
}

function filterParams() {
    const search = paramSearch.value.toLowerCase();
    const items = paramsList.querySelectorAll('.param-item');
    
    items.forEach(item => {
        const name = item.dataset.paramName.toLowerCase();
        item.style.display = name.includes(search) ? '' : 'none';
    });
}

async function setParam(name) {
    const input = document.querySelector(`input[data-param="${name}"]`);
    const value = input.value;
    
    try {
        const response = await fetch(`/api/params/${encodeURIComponent(name)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        });
        const data = await response.json();
        
        if (data.status === 'success') {
            input.value = data.value;
        }
    } catch (err) {
        console.error('Set param error:', err);
    }
}

function updateParamDisplay(name, value) {
    const input = document.querySelector(`input[data-param="${name}"]`);
    if (input) {
        input.value = value;
    }
    allParams[name] = value;
}

// Attitude Indicator
function setupAttitudeIndicator() {
    drawAttitudeIndicator();
    // Redraw periodically
    setInterval(drawAttitudeIndicator, 50);
}

function drawAttitudeIndicator() {
    const canvas = document.getElementById('attitudeIndicator');
    if (!canvas) return;
    
    // Get the actual rendered size of the canvas
    const container = canvas.parentElement;
    const w = container ? container.clientWidth : canvas.offsetWidth || 500;
    const h = container ? container.clientHeight : canvas.offsetHeight || 280;
    
    // Set canvas internal resolution to match rendered size for crisp rendering
    if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
    }
    
    // Use try-catch to safely access attitude variables (they're declared at top level)
    let roll = 0;
    let pitch = 0;
    let height = 0;
    try {
        roll = attitudeRoll || 0;
        pitch = attitudePitch || 0;
        height = attitudeHeight || 0;
    } catch (e) {
        // Variables not yet initialized, use defaults
        roll = 0;
        pitch = 0;
        height = 0;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, w, h);
    
    // Save context
    ctx.save();
    
    // Translate to center
    ctx.translate(w / 2, h / 2);
    
    // Rotate by roll
    ctx.rotate(roll * Math.PI / 180);
    
    // Translate by pitch
    ctx.translate(0, (pitch * h) / 50);
    
    // Draw blue sky (top half)
    ctx.fillStyle = '#003d90'; // Dark blue
    ctx.fillRect(-w, -h, 3 * w, 3 * h);
    
    // Draw brown ground (bottom half)
    ctx.fillStyle = '#3b2927'; // Dark brown
    ctx.fillRect(-w, 0, 3 * w, 3 * h);
    
    // Draw horizon line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-w, 0);
    ctx.lineTo(3 * w, 0);
    ctx.stroke();
    
    // Draw pitch lines
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';
    ctx.font = '7px serif';
    ctx.textAlign = 'left';
    
    for (let offset of [-180, 0, 180]) {
        for (let i = -900; i < 900; i += 25) {
            const pos = ((i / 10.0) + 25 + offset) * h / 50.0;
            
            let length;
            if (i % 100 === 0) {
                length = 0.35 * w;
                if (i !== 0) {
                    const label = offset === 0 ? (-i / 10).toString() : (i / 10).toString();
                    // After translate to center, coordinates are relative to center
                    ctx.fillText(label, (length / 2) + (w * 0.06), pos);
                    ctx.fillText(label, -(length / 2) - (w * 0.08), pos);
                }
            } else if (i % 50 === 0) {
                length = 0.2 * w;
            } else {
                length = 0.1 * w;
            }
            
            // After translate to center, coordinates are relative to center
            ctx.beginPath();
            ctx.moveTo(-(length / 2), pos);
            ctx.lineTo(length / 2, pos);
            ctx.stroke();
        }
    }
    
    // Restore context
    ctx.restore();
    
    // Draw fixed horizon line (black)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    
    // Draw height text
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(height.toFixed(2), w - 10, h / 2 + 15);
}

// Input Device Menu
async function loadInputDevices() {
    try {
        const response = await fetch('/api/input/devices');
        const data = await response.json();
        if (data.status === 'success') {
            const normalMuxMenu = document.getElementById('normalMuxMenu');
            // In the web UI we might not have the full cfclient input device menu.
            // If the element is missing, just skip building the menu instead of
            // throwing a null reference error.
            if (!normalMuxMenu) {
                console.warn('normalMuxMenu element not found in DOM; skipping input device menu render');
                return;
            }

            normalMuxMenu.innerHTML = '';
            
            data.devices.forEach(device => {
                const deviceItem = document.createElement('div');
                deviceItem.className = 'dropdown-item has-submenu';
                deviceItem.innerHTML = `<span>${device.name}</span>`;
                
                const inputMapMenu = document.createElement('div');
                inputMapMenu.className = 'submenu';
                
                if (device.mappings && device.mappings.length > 0) {
                    device.mappings.forEach(mapping => {
                        const mappingItem = document.createElement('div');
                        mappingItem.className = 'dropdown-item';
                        mappingItem.textContent = mapping;
                        mappingItem.onclick = () => selectInputMapping(device.name, mapping);
                        inputMapMenu.appendChild(mappingItem);
                    });
                }
                
                deviceItem.appendChild(inputMapMenu);
                normalMuxMenu.appendChild(deviceItem);
            });
        }
    } catch (err) {
        console.error('Load input devices error:', err);
    }
}

function selectInputMapping(deviceName, mappingName) {
    fetch('/api/input/select', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device: deviceName, mapping: mappingName })
    }).catch(err => console.error('Select input mapping error:', err));
}

function rescanInputDevices() {
    loadInputDevices();
}

// Input Device Configuration Dialog
let currentInputConfig = {
    device: null,
    axes: {
        roll: { value: 0, axis: null },
        pitch: { value: 0, axis: null },
        yaw: { value: 0, axis: null },
        thrust: { value: 0, axis: null }
    },
    buttons: {
        assistedControl: null,
        emergencyStop: null,
        arm: null,
        exitApp: null,
        alt1: null,
        alt2: null,
        muxSwitch: null
    },
    calibration: {
        pitchPos: false,
        rollNeg: false,
        rollPos: false,
        pitchNeg: false
    }
};

function showInputConfigDialog() {
    const dialog = document.getElementById('inputConfigDialog');
    dialog.style.display = 'block';
    loadInputDevicesForConfig();
    loadInputProfiles();
    // Reset config when opening
    currentInputConfig = {
        device: null,
        axes: {
            roll: { value: 0, axis: null },
            pitch: { value: 0, axis: null },
            yaw: { value: 0, axis: null },
            thrust: { value: 0, axis: null }
        },
        buttons: {},
        calibration: {
            pitchPos: false,
            rollNeg: false,
            rollPos: false,
            pitchNeg: false
        }
    };
}

function closeInputConfigDialog() {
    const dialog = document.getElementById('inputConfigDialog');
    dialog.style.display = 'none';
}

async function loadInputDevicesForConfig() {
    try {
        const response = await fetch('/api/input/devices');
        const data = await response.json();
        if (data.status === 'success') {
            const selector = document.getElementById('inputDeviceSelector');
            selector.innerHTML = '<option value="">Select device...</option>';
            data.devices.forEach(device => {
                const option = document.createElement('option');
                option.value = device.name;
                option.textContent = device.name;
                selector.appendChild(option);
            });
        }
    } catch (err) {
        console.error('Load input devices for config error:', err);
    }
}

async function loadInputProfiles() {
    try {
        const response = await fetch('/api/input/profiles');
        const data = await response.json();
        if (data.status === 'success') {
            const selector = document.getElementById('profileSelector');
            selector.innerHTML = '<option value="">Select profile...</option>';
            data.profiles.forEach(profile => {
                const option = document.createElement('option');
                option.value = profile;
                option.textContent = profile;
                selector.appendChild(option);
            });
        }
    } catch (err) {
        console.error('Load input profiles error:', err);
    }
}

// Configure device - enable controls
async function configureInputDevice() {
    const deviceName = document.getElementById('inputDeviceSelector').value;
    if (!deviceName) {
        alert('Please select a device');
        return;
    }
    
    currentInputConfig.device = deviceName;
    
    try {
        const response = await fetch('/api/input/configure', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ device: deviceName })
        });
        
        const data = await response.json();
        if (data.status === 'success') {
            // Enable all sliders and controls
            document.querySelectorAll('.slider').forEach(slider => {
                slider.disabled = false;
            });
            document.querySelectorAll('#detectRoll, #detectPitch, #detectYaw, #detectThrust').forEach(btn => {
                btn.disabled = false;
            });
            document.querySelectorAll('.btn-secondary.btn-small').forEach(btn => {
                btn.disabled = false;
            });
        } else {
            alert(`Configuration failed: ${data.message}`);
        }
    } catch (err) {
        console.error('Configure device error:', err);
        alert(`Error: ${err.message}`);
    }
}

// Detect input (axis or button)
async function detectInput(type, name) {
    const deviceName = currentInputConfig.device || document.getElementById('inputDeviceSelector').value;
    if (!deviceName) {
        alert('Please select and configure a device first');
        return;
    }
    
    const button = event.target;
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Listening...';
    
    try {
        const response = await fetch('/api/input/detect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                device: deviceName,
                type: type,
                name: name
            })
        });
        
        const data = await response.json();
        if (data.status === 'success') {
            // Update UI based on type
            if (type === 'axis') {
                // Update slider value (this would normally come from actual input)
                const sliderId = name + 'Slider';
                const valueId = name === 'thrust' ? 'thrustSliderValue' : name + 'Value';
                const slider = document.getElementById(sliderId);
                const valueDisplay = document.getElementById(valueId);
                
                if (slider && valueDisplay) {
                    // In a real implementation, this would update from actual input events
                    // For now, show a message
                    alert(`Move ${name} axis on your device. Detection started.`);
                }
            } else if (type === 'button') {
                alert(`Press ${name} button on your device. Detection started.`);
            }
        } else {
            alert(`Detection failed: ${data.message}`);
        }
    } catch (err) {
        console.error('Detect input error:', err);
        alert(`Error: ${err.message}`);
    } finally {
        button.disabled = false;
        button.textContent = originalText;
    }
}

// Save input configuration
async function saveInputConfig(profileName) {
    if (!profileName) {
        profileName = document.getElementById('profileSelector').value || prompt('Enter profile name:');
    }
    
    if (!profileName) {
        return;
    }
    
    // Collect current configuration
    const config = {
        device: currentInputConfig.device,
        axes: {},
        buttons: {},
        calibration: {}
    };
    
    // Get axis values
    ['roll', 'pitch', 'yaw', 'thrust'].forEach(axis => {
        const slider = document.getElementById(axis + 'Slider');
        if (slider) {
            config.axes[axis] = {
                value: parseInt(slider.value),
                axis: currentInputConfig.axes[axis].axis
            };
        }
    });
    
    // Get button mappings
    const buttonMap = {
        'assistedControl': 'assistedControl',
        'emergencyStop': 'emergencyStop',
        'arm': 'arm',
        'exitApp': 'exitApp',
        'alt1': 'alt1',
        'alt2': 'alt2',
        'muxSwitch': 'muxSwitch'
    };
    
    Object.keys(buttonMap).forEach(key => {
        const checkbox = document.getElementById(key + 'Check');
        if (checkbox && checkbox.checked) {
            config.buttons[buttonMap[key]] = currentInputConfig.buttons[buttonMap[key]] || true;
        }
    });
    
    // Get calibration settings
    config.calibration = {
        pitchPos: document.getElementById('pitchPosCheck').checked,
        rollNeg: document.getElementById('rollNegCheck').checked,
        rollPos: document.getElementById('rollPosCheck').checked,
        pitchNeg: document.getElementById('pitchNegCheck').checked
    };
    
    try {
        const response = await fetch(`/api/input/profiles/${encodeURIComponent(profileName)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ config })
        });
        
        const data = await response.json();
        if (data.status === 'success') {
            alert(`Profile "${profileName}" saved successfully`);
            loadInputProfiles();
            // Select the saved profile
            const selector = document.getElementById('profileSelector');
            selector.value = profileName;
        } else {
            alert(`Save failed: ${data.message}`);
        }
    } catch (err) {
        console.error('Save profile error:', err);
        alert(`Error: ${err.message}`);
    }
}

// Load input profile
async function loadInputProfile(profileName) {
    if (!profileName) {
        profileName = document.getElementById('profileSelector').value;
    }
    
    if (!profileName) {
        alert('Please select a profile');
        return;
    }
    
    try {
        const response = await fetch(`/api/input/profiles/${encodeURIComponent(profileName)}`);
        const data = await response.json();
        
        if (data.status === 'success' && data.profile) {
            const profile = data.profile;
            
            // Load device
            if (profile.device) {
                const selector = document.getElementById('inputDeviceSelector');
                selector.value = profile.device;
                currentInputConfig.device = profile.device;
                await configureInputDevice();
            }
            
            // Load axes
            if (profile.axes) {
                Object.keys(profile.axes).forEach(axis => {
                    const slider = document.getElementById(axis + 'Slider');
                    const valueDisplay = document.getElementById(axis === 'thrust' ? 'thrustSliderValue' : axis + 'Value');
                    if (slider && profile.axes[axis].value !== undefined) {
                        slider.value = profile.axes[axis].value;
                        if (valueDisplay) {
                            valueDisplay.textContent = profile.axes[axis].value;
                        }
                        currentInputConfig.axes[axis] = profile.axes[axis];
                    }
                });
            }
            
            // Load buttons
            if (profile.buttons) {
                Object.keys(profile.buttons).forEach(button => {
                    const checkboxId = button === 'assistedControl' ? 'assistedControlCheck' :
                                     button === 'emergencyStop' ? 'emergencyStopCheck' :
                                     button === 'arm' ? 'armCheck' :
                                     button === 'exitApp' ? 'exitAppCheck' :
                                     button === 'alt1' ? 'alt1Check' :
                                     button === 'alt2' ? 'alt2Check' :
                                     button === 'muxSwitch' ? 'muxSwitchCheck' : null;
                    if (checkboxId) {
                        const checkbox = document.getElementById(checkboxId);
                        if (checkbox) {
                            checkbox.checked = !!profile.buttons[button];
                            currentInputConfig.buttons[button] = profile.buttons[button];
                        }
                    }
                });
            }
            
            // Load calibration
            if (profile.calibration) {
                if (profile.calibration.pitchPos !== undefined) {
                    document.getElementById('pitchPosCheck').checked = profile.calibration.pitchPos;
                }
                if (profile.calibration.rollNeg !== undefined) {
                    document.getElementById('rollNegCheck').checked = profile.calibration.rollNeg;
                }
                if (profile.calibration.rollPos !== undefined) {
                    document.getElementById('rollPosCheck').checked = profile.calibration.rollPos;
                }
                if (profile.calibration.pitchNeg !== undefined) {
                    document.getElementById('pitchNegCheck').checked = profile.calibration.pitchNeg;
                }
                currentInputConfig.calibration = profile.calibration;
            }
            
            alert(`Profile "${profileName}" loaded successfully`);
        } else {
            alert(`Load failed: ${data.message || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Load profile error:', err);
        alert(`Error: ${err.message}`);
    }
}

// Setup input config dialog event listeners
function setupInputConfigListeners() {
    // Configure device button
    const configureBtn = document.getElementById('configureDeviceBtn');
    if (configureBtn) {
        configureBtn.addEventListener('click', configureInputDevice);
    }
    
    // Detect axis buttons
    const detectButtons = {
        'detectRoll': { type: 'axis', name: 'roll' },
        'detectPitch': { type: 'axis', name: 'pitch' },
        'detectYaw': { type: 'axis', name: 'yaw' },
        'detectThrust': { type: 'axis', name: 'thrust' },
        'detectPitchPos': { type: 'button', name: 'pitchPos' },
        'detectRollNeg': { type: 'button', name: 'rollNeg' },
        'detectRollPos': { type: 'button', name: 'rollPos' },
        'detectPitchNeg': { type: 'button', name: 'pitchNeg' },
        'detectAssistedControl': { type: 'button', name: 'assistedControl' },
        'detectEmergencyStop': { type: 'button', name: 'emergencyStop' },
        'detectArm': { type: 'button', name: 'arm' },
        'detectExitApp': { type: 'button', name: 'exitApp' },
        'detectAlt1': { type: 'button', name: 'alt1' },
        'detectAlt2': { type: 'button', name: 'alt2' },
        'detectMuxSwitch': { type: 'button', name: 'muxSwitch' }
    };
    
    Object.keys(detectButtons).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', (e) => {
                const config = detectButtons[btnId];
                detectInput(config.type, config.name);
            });
        }
    });
    
    // Profile management buttons
    const saveBtn = document.getElementById('saveConfigBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const profileName = document.getElementById('profileSelector').value || prompt('Enter profile name:');
            if (profileName) {
                saveInputConfig(profileName);
            }
        });
    }
    
    const loadBtn = document.getElementById('loadProfileBtn');
    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            const profileName = document.getElementById('profileSelector').value;
            if (profileName) {
                loadInputProfile(profileName);
            } else {
                alert('Please select a profile');
            }
        });
    }
    
    const deleteBtn = document.getElementById('deleteProfileBtn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            const profileName = document.getElementById('profileSelector').value;
            if (profileName && confirm(`Delete profile "${profileName}"?`)) {
                deleteInputProfile(profileName);
            } else if (!profileName) {
                alert('Please select a profile to delete');
            }
        });
    }
    
    const cancelBtn = document.getElementById('cancelConfigBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeInputConfigDialog);
    }
    
    // Update slider values when changed
    ['roll', 'pitch', 'yaw', 'thrust'].forEach(axis => {
        const slider = document.getElementById(axis + 'Slider');
        if (slider) {
            slider.addEventListener('input', (e) => {
                const valueDisplay = document.getElementById(axis === 'thrust' ? 'thrustSliderValue' : axis + 'Value');
                if (valueDisplay) {
                    valueDisplay.textContent = e.target.value;
                }
                if (currentInputConfig.axes[axis]) {
                    currentInputConfig.axes[axis].value = parseInt(e.target.value);
                }
            });
        }
    });
}

// Initialize input device menu on load
window.addEventListener('load', () => {
    loadInputDevices();
    setupInputConfigListeners();
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        const modals = ['inputConfigDialog', 'aboutDialog', 'bootloaderDialog', 'cf2ConfigDialog', 'logConfigDialog'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal && event.target === modal) {
                if (modalId === 'inputConfigDialog') closeInputConfigDialog();
                else if (modalId === 'aboutDialog') closeAboutDialog();
                else if (modalId === 'bootloaderDialog') closeBootloaderDialog();
                else if (modalId === 'cf2ConfigDialog') closeCf2ConfigDialog();
                else if (modalId === 'logConfigDialog') closeLogConfigDialog();
            }
        });
    };
    
    // Setup tab visibility checkboxes
    setupTabVisibilityControls();
    
    // Setup theme radio buttons
    setupThemeControls();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
            handleExit();
        }
    });
});

// Menu Functions
function handleExit() {
    if (confirm('Are you sure you want to exit?')) {
        window.close();
        // If window.close() doesn't work (some browsers block it), show message
        alert('Please close this browser tab/window to exit.');
    }
}

function handleMenuConnect() {
    if (isConnected) {
        handleDisconnect();
    } else {
        handleConnect();
    }
}

function showAboutDialog() {
    document.getElementById('aboutDialog').style.display = 'block';
}

function closeAboutDialog() {
    document.getElementById('aboutDialog').style.display = 'none';
}

function showBootloaderDialog() {
    document.getElementById('bootloaderDialog').style.display = 'block';
    setupBootloaderDialog();
}

function closeBootloaderDialog() {
    document.getElementById('bootloaderDialog').style.display = 'none';
}

function showCf2ConfigDialog() {
    document.getElementById('cf2ConfigDialog').style.display = 'block';
}

function closeCf2ConfigDialog() {
    document.getElementById('cf2ConfigDialog').style.display = 'none';
}

function saveCf2Config() {
    const deviceType = document.getElementById('cf2DeviceType').value;
    const enableLED = document.getElementById('cf2EnableLED').checked;
    const enableZRanger = document.getElementById('cf2EnableZRanger').checked;
    
    // Save configuration
    fetch('/api/cf2/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceType, enableLED, enableZRanger })
    }).then(() => {
        closeCf2ConfigDialog();
    }).catch(err => console.error('Save CF2 config error:', err));
}

function showLogConfigDialog() {
    document.getElementById('logConfigDialog').style.display = 'block';
    loadLogConfigurations();
}

function closeLogConfigDialog() {
    document.getElementById('logConfigDialog').style.display = 'none';
}

async function loadLogConfigurations() {
    try {
        const response = await fetch('/api/logconfigs');
        const data = await response.json();
        const list = document.getElementById('logConfigList');
        
        if (data.status === 'success' && data.configs.length > 0) {
            list.innerHTML = '';
            data.configs.forEach(config => {
                const item = document.createElement('div');
                item.className = 'config-item';
                item.textContent = config.name;
                item.onclick = () => {
                    document.querySelectorAll('.config-item').forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                    document.getElementById('loadLogConfigBtn').disabled = false;
                    document.getElementById('deleteLogConfigBtn').disabled = false;
                };
                list.appendChild(item);
            });
        } else {
            list.innerHTML = '<p class="info-text">No saved configurations</p>';
        }
    } catch (err) {
        console.error('Load log configurations error:', err);
    }
}

function openConfigFolder() {
    // Open config folder - in web, we can only download or show info
    alert('Config folder location: ' + (window.location.origin + '/api/config/path'));
    // Or try to open in new window
    window.open('/api/config/path', '_blank');
}

function setupBootloaderDialog() {
    const fileInput = document.getElementById('firmwareFile');
    const flashBtn = document.getElementById('flashFirmwareBtn');
    const resetBtn = document.getElementById('resetToBootloaderBtn');
    
    fileInput.addEventListener('change', (e) => {
        flashBtn.disabled = !e.target.files.length;
    });
    
    flashBtn.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (file) {
            flashFirmware(file);
        }
    });
    
    resetBtn.addEventListener('click', () => {
        resetToBootloader();
    });
}

async function flashFirmware(file) {
    const status = document.getElementById('bootloaderStatus');
    status.innerHTML = '<p>Uploading firmware...</p>';
    
    const formData = new FormData();
    formData.append('firmware', file);
    
    try {
        const response = await fetch('/api/bootloader/flash', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        
        if (data.status === 'success') {
            status.innerHTML = '<p style="color: green;">Firmware flashed successfully!</p>';
        } else {
            status.innerHTML = '<p style="color: red;">Error: ' + data.message + '</p>';
        }
    } catch (err) {
        status.innerHTML = '<p style="color: red;">Error: ' + err.message + '</p>';
    }
}

async function resetToBootloader() {
    const status = document.getElementById('bootloaderStatus');
    status.innerHTML = '<p>Resetting to bootloader...</p>';
    
    try {
        const response = await fetch('/api/bootloader/reset', { method: 'POST' });
        const data = await response.json();
        
        if (data.status === 'success') {
            status.innerHTML = '<p style="color: green;">Reset to bootloader successful!</p>';
        } else {
            status.innerHTML = '<p style="color: red;">Error: ' + data.message + '</p>';
        }
    } catch (err) {
        status.innerHTML = '<p style="color: red;">Error: ' + err.message + '</p>';
    }
}

function setupTabVisibilityControls() {
    const checkboxes = document.querySelectorAll('#tabsSubmenu input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const tabName = e.target.dataset.tab;
            const navTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
            const tabContent = document.getElementById(`${tabName}-tab`);
            
            if (e.target.checked) {
                if (navTab) navTab.style.display = 'flex';
                if (tabContent) tabContent.style.display = 'block';
            } else {
                if (navTab) navTab.style.display = 'none';
                if (tabContent) tabContent.style.display = 'none';
                
                // If hiding active tab, switch to first visible
                if (navTab && navTab.classList.contains('active')) {
                    const firstVisible = document.querySelector('.nav-tab:not([style*="display: none"])');
                    if (firstVisible) firstVisible.click();
                }
            }
        });
    });
}

function setupThemeControls() {
    // Load saved theme or default to sunset (twilight)
    const savedTheme = localStorage.getItem('theme') || 'sunset';
    applyTheme(savedTheme);
    updateThemeIcon(savedTheme);
    
    // Setup theme radio buttons if they exist
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    themeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            applyTheme(e.target.value);
            updateThemeIcon(e.target.value);
        });
        if (radio.value === savedTheme) {
            radio.checked = true;
        }
    });
}

function applyTheme(theme) {
    localStorage.setItem('theme', theme);
    // Remove all theme classes
    document.body.classList.remove('dark-theme', 'sunset-theme');
    // Add the selected theme class
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'sunset') {
        document.body.classList.add('sunset-theme');
    }
}

// Update menu connect text based on connection status
function updateMenuConnectText() {
    const menuConnectItem = document.getElementById('menuConnectItem');
    if (menuConnectItem) {
        menuConnectItem.querySelector('span').textContent = isConnected ? 'Disconnect' : 'Connect to TerraDrone';
    }
}

// Chatbot Functions
function toggleChatbot() {
    const modal = document.getElementById('chatbotModal');
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            const input = document.getElementById('chatbotInput');
            if (input) input.focus();
        }
    }
}

function sendChatbotMessage() {
    const input = document.getElementById('chatbotInput');
    const messagesContainer = document.getElementById('chatbotMessages');
    
    if (!input || !messagesContainer) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message chatbot-user';
    userMessage.innerHTML = `
        <div class="message-content">
            <p>${escapeHtml(message)}</p>
        </div>
    `;
    messagesContainer.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chatbot-message chatbot-bot';
    typingIndicator.id = 'typingIndicator';
    typingIndicator.innerHTML = `
        <div class="message-content">
            <p>...</p>
        </div>
    `;
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Call backend API for LLM response
    fetch('/api/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            language: currentLanguage
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'LLM service is not available');
            });
        }
        return response.json();
    })
    .then(data => {
        typingIndicator.remove();
        if (data.status === 'success' && data.response) {
            const botMessage = document.createElement('div');
            botMessage.className = 'chatbot-message chatbot-bot';
            // Render markdown-formatted response
            const formattedResponse = markdownToHtml(data.response);
            botMessage.innerHTML = `
                <div class="message-content">
                    ${formattedResponse}
                </div>
            `;
            messagesContainer.appendChild(botMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else {
            throw new Error(data.message || 'Failed to get response from LLM');
        }
    })
    .catch(error => {
        console.error('Chatbot API error:', error);
        typingIndicator.remove();
        const botMessage = document.createElement('div');
        botMessage.className = 'chatbot-message chatbot-bot';
        const errorMsg = currentLanguage === 'vi' 
            ? 'Lỗi: Dịch vụ LLM không khả dụng. Vui lòng cấu hình OPENAI_API_KEY hoặc GEMINI_API_KEY.'
            : 'Error: LLM service is not available. Please configure OPENAI_API_KEY or GEMINI_API_KEY.';
        botMessage.innerHTML = `
            <div class="message-content">
                <p style="color: var(--danger-color);">${escapeHtml(error.message || errorMsg)}</p>
            </div>
        `;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function markdownToHtml(markdown) {
    if (!markdown) return '';
    
    let html = markdown;
    
    // Escape HTML first to prevent XSS
    html = escapeHtml(html);
    
    // Convert markdown to HTML
    // Process in order: code, bold, then italic
    
    // Code: `code` (process first to avoid formatting inside code)
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    
    // Bold: **text** or __text__
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    
    // Italic: *text* or _text_ (only single, not part of bold)
    // Use a simpler approach: match single asterisks/underscores that aren't adjacent to another
    html = html.replace(/(^|[^*])\*([^*\n]+?)\*([^*]|$)/g, '$1<em>$2</em>$3');
    html = html.replace(/(^|[^_])_([^_\n]+?)_([^_]|$)/g, '$1<em>$2</em>$3');
    
    // Code: `code`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Split by double newlines to get paragraphs/blocks
    const blocks = html.split(/\n\n+/);
    const processedBlocks = [];
    
    let inList = false;
    let listType = null;
    let listItems = [];
    
    for (let block of blocks) {
        block = block.trim();
        if (!block) continue;
        
        const lines = block.split('\n');
        const processedLines = [];
        
        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            
            // Check for headings
            const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
            if (headingMatch) {
                // Close any open list
                if (inList) {
                    processedBlocks.push(`<${listType}>${listItems.join('')}</${listType}>`);
                    listItems = [];
                    inList = false;
                    listType = null;
                }
                const level = headingMatch[1].length;
                const text = headingMatch[2];
                processedBlocks.push(`<h${level}>${text}</h${level}>`);
                continue;
            }
            
            // Check for bullet list
            const bulletMatch = line.match(/^[-*]\s+(.+)$/);
            if (bulletMatch) {
                if (!inList || listType !== 'ul') {
                    if (inList && listType === 'ol') {
                        processedBlocks.push(`<ol>${listItems.join('')}</ol>`);
                        listItems = [];
                    }
                    inList = true;
                    listType = 'ul';
                }
                listItems.push(`<li>${bulletMatch[1]}</li>`);
                continue;
            }
            
            // Check for numbered list
            const numberedMatch = line.match(/^\d+\.\s+(.+)$/);
            if (numberedMatch) {
                if (!inList || listType !== 'ol') {
                    if (inList && listType === 'ul') {
                        processedBlocks.push(`<ul>${listItems.join('')}</ul>`);
                        listItems = [];
                    }
                    inList = true;
                    listType = 'ol';
                }
                listItems.push(`<li>${numberedMatch[1]}</li>`);
                continue;
            }
            
            // Regular text line
            if (inList) {
                processedBlocks.push(`<${listType}>${listItems.join('')}</${listType}>`);
                listItems = [];
                inList = false;
                listType = null;
            }
            processedLines.push(line);
        }
        
        // Close any open list
        if (inList) {
            processedBlocks.push(`<${listType}>${listItems.join('')}</${listType}>`);
            listItems = [];
            inList = false;
            listType = null;
        }
        
        // Add paragraphs for regular text
        if (processedLines.length > 0) {
            const text = processedLines.join(' ');
            if (text) {
                processedBlocks.push(`<p>${text}</p>`);
            }
        }
    }
    
    // Close any remaining list
    if (inList) {
        processedBlocks.push(`<${listType}>${listItems.join('')}</${listType}>`);
    }
    
    return processedBlocks.join('');
}

async function saveInputConfig(profileName) {
    // Implementation for saving input configuration
    console.log('Saving input config:', profileName);
}

async function loadInputProfile(profileName) {
    // Implementation for loading input profile
    console.log('Loading input profile:', profileName);
}

async function deleteInputProfile(profileName) {
    try {
        await fetch('/api/input/profiles/' + encodeURIComponent(profileName), {
            method: 'DELETE'
        });
        loadInputProfiles();
    } catch (err) {
        console.error('Delete profile error:', err);
    }
}

// Settings menu toggle
function toggleSettingsMenu() {
    // You can add settings menu logic here
    console.log('Settings menu toggled');
}

// Make functions available globally
window.setParam = setParam;
window.showInputConfigDialog = showInputConfigDialog;
window.closeInputConfigDialog = closeInputConfigDialog;
window.rescanInputDevices = rescanInputDevices;
window.toggleSettingsMenu = toggleSettingsMenu;
window.toggleSearch = toggleSearch;
window.toggleNotifications = toggleNotifications;
window.toggleViewMenu = toggleViewMenu;
window.toggleTheme = toggleTheme;
window.toggleChatbot = toggleChatbot;
window.sendChatbotMessage = sendChatbotMessage;
window.showConnectionDialog = showConnectionDialog;
window.closeConnectionDialog = closeConnectionDialog;
