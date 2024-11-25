const getData = [
    {
      "id": 1,
      "ten": "Dell",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/329700/huawei-watch-gt-5-tb-600x600.jpg",
      "gia": 1299.99,
      "title": "Dell XPS 13 - Hiệu năng mạnh mẽ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 2,
      "ten": "Asus ZenBook Pro Duo",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/329945/amazfit-t-rex-3-tn-600x600.jpg",
      "gia": 2499.99,
      "title": "Asus ZenBook Pro Duo - Màn hình kép",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 3,
      "ten": "Lenovo ThinkPad X1 Carbon",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/330173/huawei-watch-gt-5-pro-46mm-vien-titanium-day-cao-su-tb-600x600.jpg",
      "gia": 1599.99,
      "title": "Lenovo ThinkPad X1 - Bền bỉ, hiệu suất tốt",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 4,
      "ten": "HP Spectre x360",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/329153/apple-watch-s10-day-silicone-bac-tb-600x600.jpg",
      "gia": 1399.99,
      "title": "HP Spectre x360 - Thiết kế xoay 360 độ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 5,
      "ten": "Acer Predator Helios 300",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/330176/huawei-watch-gt-5-46mm-vien-thep-day-woven-tb-600x600.jpg",
      "gia": 1099.99,
      "title": "Acer Predator Helios 300 - Gaming mạnh mẽ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 6,
      "ten": "Microsoft Surface Pro 7",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/321616/samsung-galaxy-fit3-hong-thumb-1-600x600.jpg",
      "gia": 899.99,
      "title": "Surface Pro 7 - Thiết kế linh hoạt",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 7,
      "ten": "Razer Blade 15",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/284932/samsung-galaxy-watch5-tn-600x600.jpg",
      "gia": 1799.99,
      "title": "Razer Blade 15 - Gaming cực mạnh",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 8,
      "ten": "Apple MacBook Air",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/322846/garmin-lily-2-classic-day-da-den-tim-tb-600x600.jpg",
      "gia": 999.99,
      "title": "MacBook Air - Mỏng nhẹ, ổn định",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 9,
      "ten": "Gigabyte Aero 15",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/329156/apple-watch-s10-lte-day-silicone-bac-tb-600x600.jpg",
      "gia": 1499.99,
      "title": "Gigabyte Aero 15 - Hiệu năng cao",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 10,
      "ten": "Asus ROG Zephyrus G14",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/313840/befit-watch-s-day-silicone-xam-tn-600x600.jpg",
      "gia": 1299.99,
      "title": "ROG Zephyrus G14 - Gaming mạnh mẽ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 11,
      "ten": "Dell G5 15 SE",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/310850/samsung-galaxy-watch6-44mm-bac-ksp-600x600.jpg",
      "gia": 899.99,
      "title": "Dell G5 15 SE - Gaming giá rẻ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 12,
      "ten": "Lenovo Legion 5",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/235501/garmin-lily-day-silicone-trang-tn-2-600x600.jpg",
      "gia": 1099.99,
      "title": "Lenovo Legion 5 - Gaming mạnh mẽ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 13,
      "ten": "HP Envy x360",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/327696/samsung-galaxy-watch7-lte-40mm-tn-600x600.jpg",
      "gia": 899.99,
      "title": "HP Envy x360 - Thiết kế linh hoạt",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 14,
      "ten": "Acer Swift 5",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/320842/dong-ho-thong-minh-xiaomi-redmi-watch-4-47-5mm-day-silicone-090124-114101-1-600x600.jpg",
      "gia": 799.99,
      "title": "Acer Swift 5 - Mỏng nhẹ, ổn định",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 15,
      "ten": "MSI GS66 Stealth",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/316986/xiaomi-watch-2-pro-tn-1-600x600.jpg",
      "gia": 1699.99,
      "title": "MSI GS66 - Gaming cao cấp",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 16,
      "ten": "Asus ZenBook 13",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/316986/xiaomi-watch-2-pro-tn-1-600x600.jpg",
      "gia": 999.99,
      "title": "Asus ZenBook 13 - Mỏng nhẹ, ổn định",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 17,
      "ten": "Alienware m15 R6",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/330158/huawei-watch-ultimate-tb-600x600.jpg",
      "gia": 1999.99,
      "title": "Alienware m15 R6 - Gaming mạnh mẽ",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    },
    {
      "id": 18,
      "ten": "Acer Aspire 5",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/330175/huawei-watch-gt-5-41mm-vien-thep-day-woven-tb-600x600.jpg",
      "gia": 599.99,
      "title": "Acer Aspire 5 - Giá cả phải chăng",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 19,
      "ten": "Lenovo IdeaPad 5",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/330174/huawei-watch-gt-5-41mm-vien-thep-day-da-tb-600x600.jpg",
      "gia": 799.99,
      "title": "IdeaPad 5 - Hiệu năng tốt",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": false
    },
    {
      "id": 20,
      "ten": "HP Pavilion 15",
      "anh": "https://cdn.tgdd.vn/Products/Images/7077/329700/huawei-watch-gt-5-tb-600x600.jpg",
      "gia": 699.99,
      "title": "HP Pavilion 15 - Giá cả phải chăng",
      "danhgia": "⭐⭐⭐⭐⭐",
      "stock": true
    }
  ]

  
  export default getData;