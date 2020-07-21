export const data = {
    "responses": {
      "06upHq61udoaTh2EImqq": {
        "parameters": {
          "eConnector": "in",
          "polymorphism": true,
          "eRequest": "example",
          "virtual_base_class": true
        },
        "response": {
          "text": { "title": "ví dụ về virtual base class trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_virtual_base_class_polymorphism.png?alt=media&token=10ac212a-d6fd-4d6d-baba-fbad639f0b4e"
          }
        },
        "intent": "iWhat"
      },
      "0pEsiHQDDfVznFwtTlvF": {
        "response": {
          "text": {
            "content": "Trong đó:*lb *modifier* là một từ khóa tùy chọn xác định mức độ truy cập của một biến thể hiện, nó có thể là private, protected hoặc public.*lb *data-type* xác định kiểu dữ liệu của biến.*lb *name* Xác định tên của biến.",
            "title": "Cách biễu diễn thuộc tính (java):",
            "code": "[modifier] <data-type> <name>;"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "declare", "property": true }
      },
      "1HU5nyqM07hRoyhi8TOP": {
        "response": {
          "card": {
            "buttonUrl": "https://stackjava.com/java-core/cac-loai-access-modifier-trong-java-public-protected-default-private.html",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm"
          },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-public-private-protected.png?alt=media&token=977a7c55-d736-439b-9bf3-8d7a97aacc53"
          },
          "text": { "title": "Khác nhau giữa private, public và protected?" }
        },
        "parameters": {
          "public": true,
          "eRequest": "different",
          "private": true,
          "protected": true
        },
        "intent": "iCompare"
      },
      "1Jz9l0xUULRC1Bq7OnqJ": {
        "parameters": { "eRequest": "declare", "static": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Cách khai báo biến static (java):",
            "content": "Trong đó*lb *data-type* là kiểu dữ liệu của biến.*lb *name* là tên biến. *lb *value* là giá trị của biến static.*lb *method-name* là tên của phương thức.",
            "code": "//Biến static *lb static <data-type> <name> = [value];*lb // Phương thức static *lb static <return-type> <method-name>() {*lb // code *lb }"
          }
        }
      },
      "1OKhHHyanb2pYwCTws21": {
        "response": {
          "text": { "title": "ví dụ về overload?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_overload.png?alt=media&token=bc908f6f-0a03-41b8-95e5-d0a07b3e2b88"
          },
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonUrl": "https://viblo.asia/p/override-va-overload-WAyK8V4NlxX",
            "buttonText": "Tìm hiểu thêm"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "overload": true }
      },
      "1TqybHHEjArfkB6k8BMg": {
        "response": {
          "text": {
            "content": "Lớp con hay còn lại là lớp dẫn xuất (Class Derived) là lớp thừa hưởng các thuộc tính và các hàm của lớp cha. Lớp con có thể cũng có thuộc tính của riêng nó.",
            "title": "Lớp con / lớp dẫn xuất là gì ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "derived_class": true }
      },
      "1csUhiVR6ZoR5vKxSjJy": {
        "parameters": { "method": true, "eRequest": "define" },
        "response": {
          "text": {
            "title": "Phương thức là gì ?",
            "content": "Phương thức (Method) là hành động mà một đối tượng hoặc thực thể cần phải có khi được mô tả trong một lớp. Ví dụ: Trong lớp đa giác thì Vẽ, Xóa, Di chuyển là các phương thức của lớp này."
          }
        },
        "intent": "iWhat"
      },
      "1nSpJCU3zgDwmxkLpKsH": {
        "response": {
          "text": {
            "content": "Con trỏ this trả về địa chỉ của vùng nhớ mà nó đang trỏ tới, còn *this trả về giá trị của vùng nhớ mà nó trỏ tới.",
            "title": "Khác nhau giữa this và *this?"
          }
        },
        "parameters": { "eRequest": "different", "this": true },
        "intent": "iCompare"
      },
      "1wWkpKjxkJBvJlaCPmIr": {
        "parameters": { "virtual_base_class": true, "eRequest": "define" },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "lớp ảo là một lớp bên trong lồng nhau , các hàm và biến thành viên có thể được ghi đè và định nghĩa lại bởi các lớp con của lớp bên ngoài.",
            "title": "Định nghĩa lớp ảo ?"
          }
        }
      },
      "26ZM1GC3zts5s84Utfbj": {
        "parameters": { "eRequest": "advantage", "static": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "giúp các đối tượng khác sử dụng Chuỗi hoặc các hàm hữu ích mà bạn không cần tạo đối tượng.",
            "title": "Lợi ích của việc sử dụng thành phần static ?"
          }
        }
      },
      "2o6peafHNNpgtxwNCuHe": {
        "response": {
          "text": { "title": "Sự khác nhau giữa struct và class" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-class-struct.png?alt=media&token=fb62f560-73c0-421c-aa92-e5a87b0117f5"
          }
        },
        "parameters": { "struct": true, "class": true, "eRequest": "different" },
        "intent": "iCompare"
      },
      "2qhCSWHoRrbo38EIX42C": {
        "response": {
          "text": { "title": "ví dụ nạp chồng toán tử một ngôi?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_unary_operation.png?alt=media&token=8fbe609c-8148-48e2-8461-2f3172cf6468"
          }
        },
        "parameters": {
          "eRequest": "example",
          "unary_op": true,
          "operator": true
        },
        "intent": "iWhat"
      },
      "33YJeLLflbF54efsS2KO": {
        "parameters": { "eRequest": "example", "derived_class": true },
        "intent": "iWhat",
        "response": {
          "text": { "title": "Ví dụ về lớp con ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_parent_child.png?alt=media&token=222b385d-b52f-42eb-b67b-e167eb882b48"
          }
        }
      },
      "3EfKLfR4Y5MunHWSkduS": {
        "parameters": {
          "class_program": true,
          "eRequest": "same",
          "struct_program": true
        },
        "response": {
          "text": {
            "title": "Sự giống nhau giữa lập trình cấu trúc và lập trình hướng đối tượng",
            "content": "Cả hai đều là các quy trình lập trình, đều là ngôn ngữ lập trình sử dụng lập trình cấp cao để giải quyết vấn đề nhưng sử dụng các phương pháp khác nhau."
          }
        },
        "intent": "iCompare"
      },
      "3lgmMn5qX78ME737d1Ni": {
        "parameters": {
          "virtual_func": true,
          "pure_virtual_func": true,
          "eRequest": "different"
        },
        "response": {
          "text": { "title": "Khác nhau giữa hàm ảo và hàm thuần ảo?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-virtual-pure_virtual.png?alt=media&token=d7a96bed-9ab2-4159-9bc7-a8659bf20e50"
          }
        },
        "intent": "iCompare"
      },
      "3sr8WHwzJCxovKlEBVMZ": {
        "parameters": { "copy_constructor": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "title": "Ưu điểm của hàm dựng sao chép ?",
            "content": "giúp dễ dàng sao chép các đối tượng."
          }
        },
        "intent": "iWhat"
      },
      "4CJME8QJLDcEUFDaXZZB": {
        "parameters": { "eRequest": "define", "class": true },
        "response": {
          "text": {
            "title": "Lớp là gì ? ",
            "content": "Lớp (Class) là nhóm các đối tượng có thuộc tính như nhau, có chung hành vi và mối quan hệ. Ví dụ: - Lớp người -Lớp các động vật - Lớp các nhân vật , …"
          }
        },
        "intent": "iWhat"
      },
      "4NSiBkfMGonYMPPJFeXk": {
        "parameters": { "vector_class": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "content": "- Kích thước của vectơ có thể thay đổi khi cần thiết. *lb - Một số loại đối tượng khác nhau có thể tồn tại trong cùng một Vector.",
            "title": "Sử dụng lớp vector có những ưu điểm gì ?"
          }
        },
        "intent": "iWhat"
      },
      "4TeTTd068tMdzXIPsFVj": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_friend_class.png?alt=media&token=afd5c922-14e4-4478-aa56-8f65fc28b991"
          },
          "text": { "title": "ví dụ về lớp bạn?" },
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://freetuts.net/ham-ban-friend-function-va-lop-ban-friend-class-trong-c++-1801.html",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          }
        },
        "intent": "iWhat",
        "parameters": { "friend_class": true, "eRequest": "example" }
      },
      "4jinP3EUbtwaKvfiP6gm": {
        "response": {
          "text": {
            "content": "Cả Class và Interface đều được sử dụng để tạo các kiểu tham chiếu mới.",
            "title": "Sự giống nhau giữa class và interface"
          }
        },
        "parameters": { "eRequest": "same", "interface": true, "class": true },
        "intent": "iCompare"
      },
      "582FkswCnAXEWcin6K2z": {
        "parameters": { "eRequest": "define", "friend_func": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Hàm bạn là gì ?",
            "content": "Hàm bạn trong c++ là hàm tự do, không thuộc lớp. Tuy nhiên hàm bạn trong c++ có quyền truy cập các thành viên private của class."
          }
        }
      },
      "5VKi0mTMm4iMJarpNke3": {
        "parameters": { "eRequest": "define", "interface": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Interface (giao diện, lớp giao tiếp) là 1 tập các thành phần chỉ có khai báo mà không có phần định nghĩa.",
            "title": "Khái niệm interface ?"
          }
        }
      },
      "5sNSVW6TdykBnSeUObZT": {
        "parameters": { "friend_func": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "content": "một hàm không phải là thành viên của lớp không thể truy cập dữ liệu thành viên của lớp đó. ",
            "title": "Lợi ích của việc sử dụng hàm bạn ?"
          }
        },
        "intent": "iWhat"
      },
      "6aacVuApSbkBfVi0NMML": {
        "parameters": { "class": true, "eRequest": "declare" },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Việc khai báo lớp được đặt bên trong một khối mã. Nói cách khác, thân của lớp được đặt trong cặp ngoặc nhọn ({}). Trong thân lớp, ta có thể khai báo các thành phần như trường, phương thức, và hàm tạo.",
            "title": "Cách khai báo lớp (java):",
            "code": "class <class-name> { *lb // thân của lớp *lb }"
          }
        }
      },
      "6p8sbhppihQOlhddxXbW": {
        "parameters": { "casting": true, "eRequest": "specification" },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đặc điểm của việc ép kiểu ?",
            "content": "chuyển đổi một biến từ một kiểu dữ liệu này sang kiểu dữ liệu khác. "
          }
        }
      },
      "71OhrIOWSQ8gjkdsnZQ8": {
        "response": {
          "text": { "title": "Ví dụ về tính đóng gói ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_encapsulation.png?alt=media&token=72ada33f-bfc1-4fba-b281-40d89bb3c64a"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "encapsulation": true }
      },
      "7LZC4e4heL3pt7KEM0Hu": {
        "parameters": {
          "eRequest": "example",
          "compare_op": true,
          "operator": true
        },
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về phương thức compare?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_operation_compare.png?alt=media&token=1a61a15e-ecf1-4e09-bb78-961ef0406b29"
          }
        }
      },
      "7i8MF0YxSLVDuXRC0GjE": {
        "parameters": { "static": true, "eRequest": "disadvantage" },
        "response": {
          "text": {
            "content": "*static* hoạt động như một biến toàn cục và vì điều này mà khi sử dụng static trong chương trình thì nó sẽ chiếm nhiều tài nguyên hơn các thành phần thường.",
            "title": "Nhược điểm của static"
          }
        },
        "intent": "iWhat"
      },
      "8fzGZe7H4MEWNPYX0ADf": {
        "parameters": {
          "overloading_op": true,
          "eRequest": "example",
          "operator": true
        },
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về operator overloading?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_overloading_operation.png?alt=media&token=6914eebf-251f-4ca1-82b3-d151f95cfd67"
          }
        }
      },
      "8v0Cre2T500GwNJuU4J2": {
        "parameters": { "method": true, "eRequest": "same", "property": true },
        "response": {
          "text": {
            "content": "Chúng đều là thành phần của 1 class.",
            "title": "Sự giống nhau giữa method và property"
          }
        },
        "intent": "iCompare"
      },
      "94Qpk1Lrgo73mQyFQvqp": {
        "response": {
          "text": {
            "content": "- Cho phép xây dựng 1 lớp mới từ lớp đã có. *lb Lớp mới gọi là lớp con (subclass) hay lớp dẫn xuất (derived class). *lb Lớp đã có gọi là lớp cha (superclass) hay lớp cơ sở (base class). *lb - Cho phép chia sẽ các thông tin chung nhằm tái sử dụng và đồng thời giúp ta dễ dàng nâng cấp, dễ dàng bảo trì. *lb - Định nghĩa sự tương thích giữa các lớp, nhờ đó ta có thể chuyển kiểu tự động (sẽ được trình bày trong bài ĐA HÌNH TRONG LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG).",
            "title": "Điểm mạnh của việc sử dụng kế thừa ?"
          }
        },
        "parameters": { "inheritance": true, "eRequest": "advantage" },
        "intent": "iWhat"
      },
      "99leJQxgfJgVTQuqFcF5": {
        "parameters": { "eRequest": "specification", "overload": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "trong một lớp có nhiều phương thức cùng tên nhưng: *lb Khác nhau về số đối số truyền vào và các đối số có cùng kiểu dữ liệu. *lb Có cùng số đối số truyền vào và các đối số không có cùng kiểu dữ liệu. *lb Khác nhau trình tự kiểu dữ liệu của các đối số.",
            "title": "Đặc điểm của việc nạp chồng "
          }
        }
      },
      "9FLXYzw0TDLFY5RYh663": {
        "response": {
          "text": {
            "content": "Đều là hàm thành viên đặc biệt của một lớp.",
            "title": "Sự giống nhau giữa contructor và destructor"
          }
        },
        "intent": "iCompare",
        "parameters": {
          "destructor": true,
          "constructor": true,
          "eRequest": "same"
        }
      },
      "9Yul6ldbcWrGuJe4VtfD": {
        "intent": "iWhat",
        "parameters": {
          "eConnector": "in",
          "constructor": true,
          "eRequest": "example"
        },
        "response": {
          "text": { "title": "Ví dụ về hàm khởi trong kế thừa ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_constructor_inheritance.png?alt=media&token=1651a22a-7456-46da-b05f-078221723208"
          }
        }
      },
      "AmsgoyES6LGl2TNzOL5V": {
        "parameters": { "eRequest": "example", "multilevel_inheritance": true },
        "intent": "iWhat",
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_inheritance_multilevel.png?alt=media&token=092dcfc7-8b05-4b42-8910-26e974ebe2c0"
          },
          "text": { "title": "Ví dụ về đa thừa kế ?" }
        }
      },
      "Az2TE5TjXwKtnT17xEoL": {
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về virtual destructor trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_virtual_destructor_function_polymorphism.png?alt=media&token=a7bb10f8-ab94-4425-85cf-9efff3d61f30"
          }
        },
        "parameters": {
          "vitural_destructor": true,
          "eConnector": "in",
          "polymorphism": true,
          "eRequest": "example"
        }
      },
      "AzYAYgaMPB7ea4LgbfA6": {
        "intent": "iCompare",
        "parameters": {
          "protected": true,
          "eRequest": "different",
          "public": true
        },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-public-protected.PNG?alt=media&token=f1472b68-29e6-4619-b483-c454d6538da2"
          },
          "text": { "title": "Khác nhau giữa public và protected?" },
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://stackjava.com/java-core/cac-loai-access-modifier-trong-java-public-protected-default-private.html",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          }
        }
      },
      "B6oOfEM0jVFcXdxA4LVZ": {
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về operator?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_operation.png?alt=media&token=af403857-d6ee-4ea8-b216-9b1190136239"
          }
        },
        "parameters": { "eRequest": "example", "operator": true }
      },
      "B7F7NSuVrPTxtxMHb3Qr": {
        "parameters": { "inheritance": true, "eRequest": "define" },
        "response": {
          "text": {
            "content": "Kế thừa (Inheritance) là thuôc tính cho phép tái sử dụng một lớp có sẵn để tạo ra một lớp mới. Hay hiểu nôm na nó là cách một lớp có thể thừa hưởng lại những thuộc tính, phương thức từ một lớp khác và sử dụng chúng như là của bản thân mình.",
            "title": "Kế thừa là gì ?"
          }
        },
        "intent": "iWhat"
      },
      "BN9MxQWX5oYsYYC2Qny9": {
        "response": {
          "text": { "title": "ví dụ về override?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_override.png?alt=media&token=444aa8a0-dbfc-4884-ba6b-7fa8d53a2151"
          },
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://viblo.asia/p/override-va-overload-WAyK8V4NlxX",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          }
        },
        "intent": "iWhat",
        "parameters": { "override": true, "eRequest": "example" }
      },
      "BRO2OtRbtOkmuzwCBdRQ": {
        "parameters": {
          "eConnector": "in",
          "destructor": true,
          "eRequest": "define"
        },
        "response": {
          "text": {
            "title": "Hàm khởi tạo trong kế thừa là gì ?",
            "content": "Trong kế thừa, Hàm hủy được gọi theo trình tự ngược với hàm khởi tạo. Lớp dẫn xuất được gọi trước và sau đó là lớp cơ bản."
          }
        },
        "intent": "iWhat"
      },
      "Bcpueebz6UupqA4gLM6S": {
        "intent": "iWhat",
        "parameters": { "object": true, "eRequest": "declare" },
        "response": {
          "text": {
            "content": "Trong đó:*lb *new* là 1 toán tử mà sẽ cấp phát vùng nhớ của 1 đối tượng khi chạy chương trình (runtime).*lb *name* là biến lưu tham chiếu của đối tượng.",
            "title": "Cách khai báo đối tượng (java):",
            "code": "<class-name> <name> = new <class-name>();"
          }
        }
      },
      "BjGCiOQwNOYvEbeKYvgK": {
        "parameters": { "stack": true, "eRequest": "example" },
        "intent": "iWhat",
        "response": {
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonUrl": "https://viblo.asia/p/cach-xay-dung-cau-truc-du-lieu-stack-va-queue-L4x5xwwalBM",
            "buttonText": "Tìm hiểu thêm"
          },
          "text": { "title": "ví dụ về ngăn xếp?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_stack.png?alt=media&token=4ef96c72-8d4b-4f4a-ba4a-172a24a82831"
          }
        }
      },
      "BlvXvEFlTkdRS0wjzBpr": {
        "response": {
          "text": {
            "code": "<class-name> (const <class-name> &obj) *lb { *lb // phan than cua constructor *lb }",
            "content": "Trong đó*lb *obj* là một tham chiếu tới một đối tượng mà đang được sử dụng để khởi tạo đối tượng khác",
            "title": "Cách khai báo copy constructor trong c++"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "declare", "copy_constructor": true }
      },
      "C11wFLvf8nwI8FjFpGsH": {
        "response": {
          "text": {
            "title": "Cách biểu diễn kế thừa (java):",
            "code": "class <class-name_con> extends <class-name_cha> { *lb ... *lb ... *lb}",
            "content": ""
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "declare", "inheritance": true }
      },
      "CatQ3kkBl9ZslApbGUrM": {
        "parameters": {
          "eRequest": "specification",
          "eConnector": "in",
          "constructor": true
        },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đặc điểm của hàm khởi tạo trong kế thừa ?",
            "content": "luôn luôn được gọi tới khi ta khởi tạo một đối tượng. *lb Hàm khởi tạo có thẻ có tham số hoặc không có tham số, có thể có giá trị trả về hoặc không."
          }
        }
      },
      "CsMjvgkKCaLwlkGA4hA5": {
        "parameters": { "virtual_base_class": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "title": "Điểm mạnh của lớp ảo so vơi các lớp khác là gì ?",
            "content": "- Các chức năng ảo được sử dụng để đạt được đa hình thời gian chạy. *lb - Nếu một lớp có nguồn gốc từ một lớp có hàm ảo, thì định nghĩa hàm có thể được định nghĩa lại trong lớp dẫn xuất."
          }
        },
        "intent": "iWhat"
      },
      "CvixxEDkLMbAj7fFBfkJ": {
        "response": {
          "text": { "title": "Ví dụ về class ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_class.png?alt=media&token=1d11183a-8bf8-4b47-aca4-61d419698ec4"
          }
        },
        "parameters": { "eRequest": "example", "class": true },
        "intent": "iWhat"
      },
      "D5Rw9fzCdnz1TzbOIvpE": {
        "parameters": { "eRequest": "example", "queue": true },
        "response": {
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://viblo.asia/p/cach-xay-dung-cau-truc-du-lieu-stack-va-queue-L4x5xwwalBM",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          },
          "text": { "title": "ví dụ về hàng chờ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_queue.png?alt=media&token=8c4d92a0-1fa9-4039-8b8e-234e4ef5a164"
          }
        },
        "intent": "iWhat"
      },
      "DNCppmD7gLx0CAIpwWdn": {
        "parameters": { "eRequest": "define", "compare_op": true },
        "response": {
          "text": {
            "content": "Toán tử so sánh là toán tử dùng để so sánh hai giá trị có cùng kiểu dữ liệu.",
            "title": "Toán tử so sánh là sao ?"
          }
        },
        "intent": "iWhat"
      },
      "DW4eQ3P7MHmfTRFGbC5Z": {
        "response": {
          "text": {
            "content": "Có thể xử lý các loại tham số khác nhau. *lb Trình biên dịch tạo các lớp chỉ cho các loại được sử dụng. Nếu mẫu được khởi tạo cho kiểu int, trình biên dịch chỉ tạo một phiên bản int cho lớp mẫu c ++. *lb Giảm nỗ lực mã hóa cho các loại dữ liệu khác nhau thành một bộ mã. *lb Các nỗ lực kiểm tra và gỡ lỗi bị giảm.",
            "title": "Ưu điểm của  việc sử dụng class ?"
          }
        },
        "parameters": { "eRequest": "advantage", "class": true },
        "intent": "iWhat"
      },
      "DdMmzF6MBqWUQhYZrwF1": {
        "response": {
          "text": {
            "content": "Kiểu số thực là kiểu dữ liệu dùng để định nghĩa một kiểu số thực.",
            "title": "Kiểu số thực là gì?"
          }
        },
        "parameters": { "float_type": true, "eRequest": "define" },
        "intent": "iWhat"
      },
      "DiDRESdn6I3sVgU18UrO": {
        "parameters": { "eRequest": "specification", "inheritance": true },
        "response": {
          "text": {
            "content": "Lớp kế thừa có thể sử dụng lại các phương thức và thuộc tính của lớp cha.",
            "title": "Đặc điểm của tính kế thừa ?"
          }
        },
        "intent": "iWhat"
      },
      "E3kfjLBSbSocqw8kc3JJ": {
        "response": {
          "text": {
            "title": "Khác nhau giữa toán tử một ngôi và toán tử đa ngôi?",
            "content": "Unary Operators (toán tử đơn ngôi): Là operator tác động tới một toán hạng duy nhất. Ví dụ: (++ , --) *lb Binary Operators (toán tử đa ngôi): Là các operator tác động đến hai toán hạng. Ví dụ: (+ , - , * , /)."
          }
        },
        "intent": "iCompare",
        "parameters": {
          "binary_op": true,
          "eRequest": "different",
          "unary_op": true
        }
      },
      "E6jpSPEleygJio6Zyavv": {
        "intent": "iWhat",
        "parameters": { "polymorphism": true, "eRequest": "disadvantage" },
        "response": {
          "text": {
            "content": "Nhược điểm của tính đa hình:*lb- Khó đọc code hơn.*lb- Tốn nhiều thời gian để thiết kế.",
            "title": "Nhược điểm của đa hình"
          }
        }
      },
      "ER9wrGe1tJUY4bE3vjyE": {
        "parameters": {
          "eRequest": "different",
          "class": true,
          "interface": true
        },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-class-interface.png?alt=media&token=a970385e-be8a-47a1-9a2c-627a00ea68ee"
          },
          "text": { "title": "Sự khác nhau giữa interface và class" }
        },
        "intent": "iCompare"
      },
      "Ef2Uy7bLWTyohclhxwM0": {
        "response": {
          "text": {
            "content": "Trong đó:*lb *modifier* Xác định mức truy cập của một phương thức thể hiện.*lb *return-type* Xác định kiểu dữ liệu của giá trị mà được trả về bởi phương thức.*lb *name* Là tên phương thức.*lb *parameter-list* Là các giá trị truyền tới phương thức.",
            "title": "Cách biểu diễn phương thức trong lớp (java):",
            "code": "[modifier] <return-type> <name> ([parameter-list])*lb { *lb  // Thân của phương thức *lb }"
          }
        },
        "intent": "iWhat",
        "parameters": { "method": true, "eRequest": "declare" }
      },
      "Eg2vogiskv9OBwqDBVTd": {
        "response": {
          "text": {
            "content": "toán tử một ngôi là hàm hai biến.",
            "title": "Định nghĩa toán tử hai ngôi ?"
          }
        },
        "parameters": { "eRequest": "define", "binary_op": true },
        "intent": "iWhat"
      },
      "EsCQkNFc1Z7pGj0lyezB": {
        "response": {
          "text": {
            "title": "Sự giống nhau giữa virtual funtion và pure vitural function",
            "content": "Đều là một hàm thành viên trong lớp cơ sở mà bạn muốn xác định lại trong các lớp dẫn xuất."
          }
        },
        "intent": "iCompare",
        "parameters": {
          "eRequest": "same",
          "virtual_func": true,
          "pure_virtual_func": true
        }
      },
      "FDkVhMaCmV9FkhisJpeH": {
        "response": {
          "text": {
            "content": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_inheritance_single.png?alt=media&token=73e800bd-c170-495b-be9b-3de8f90fae87",
            "title": "Ví dụ về thừa kế đơn ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "single_inheritance": true, "eRequest": "example" }
      },
      "G3up7lMs08mmgIZNFe9n": {
        "response": {
          "text": {
            "content": "trong từng trường hợp, hoàn cảnh khác nhau thì đối tượng có hình thái khác nhau tùy thuộc vào từng ngữ cảnh.",
            "title": "Đa hình có đặc điểm gì ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "specification", "polymorphism": true }
      },
      "G7YNTdBCjugxGBvbTBFx": {
        "parameters": {
          "virtual_func": true,
          "polymorphism": true,
          "eRequest": "example",
          "eConnector": "in"
        },
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về virtual function trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_virtual_function.png?alt=media&token=07a62898-001d-43d5-87bd-5fc9ad132e03"
          }
        }
      },
      "GO5xR7rXvNtNxiaSZ4dt": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Kiểu số nguyên là kiểu dữ liệu dùng để định nghĩa một kiểu số nguyên.",
            "title": "Kiểu số nguyên là gì ?"
          }
        },
        "parameters": { "int_type": true, "eRequest": "define" }
      },
      "GVM0EWhzHpRzeRFAZ4qm": {
        "intent": "iWhat",
        "parameters": { "casting": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "content": "- Điều này được thực hiện để tận dụng các tính năng nhất định của phân cấp loại hoặc biểu diễn kiểu. *lb - Nó giúp tính toán các biểu thức có chứa các biến của các loại dữ liệu khác nhau.",
            "title": "Ưu điểm của việc ép kiểu ?"
          }
        }
      },
      "GVRoDLhC9yDZHW6vjwnI": {
        "parameters": { "eRequest": "advantage", "encapsulation": true },
        "response": {
          "text": {
            "title": "Đóng gói có những ưu điểm như thế nào ?",
            "content": "Tính đóng gói tránh truy cập từ code bên ngoài, nghĩa là code bên ngoài không thể trực tiếp nhìn thấy và thay đổi trạng thái bên trong của đối tượng."
          }
        },
        "intent": "iWhat"
      },
      "GWz3yauCYwmlMjL6RYyP": {
        "response": {
          "text": { "title": "ví dụ về pure virtual destructor trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_pure_virtual_destructor_function_polymorphism.png?alt=media&token=37839393-c5b5-45b0-863d-3cd69c5d1aff"
          }
        },
        "parameters": {
          "polymorphism": true,
          "eRequest": "example",
          "pure_virtual_func": true,
          "eConnector": "in"
        },
        "intent": "iWhat"
      },
      "GXUjCu6KzQwxNz9z1ayz": {
        "parameters": { "default_argument_func": true, "eRequest": "define" },
        "response": {
          "text": {
            "title": "Hàm với đối số ngầm định là sao ?",
            "content": "Hàm với đối số ngầm định là hàm tạo có thể được gọi mà không cần cung cấp bất cứ đối số (argument) nào, cho dù hàm tạo được tự động sinh ra hay do người dùng định nghĩa."
          }
        },
        "intent": "iWhat"
      },
      "HCYdodL0Te1VjUhUH5bZ": {
        "response": {
          "text": {
            "title": "Đặc điểm của thừa kế đơn ?",
            "content": "Mỗi lớp chỉ kế thừa từ một lớp duy nhất."
          }
        },
        "parameters": { "eRequest": "specification", "single_inheritance": true },
        "intent": "iWhat"
      },
      "HHOm42ygTQqkbjl55z7a": {
        "intent": "iWhat",
        "parameters": { "eRequest": "disadvantage", "interface": true },
        "response": {
          "text": {
            "title": "Nhược điểm của interface",
            "content": "Mỗi khi định nghĩa thêm tính năng, các class impelement nó đồng lọat phải thêm tính năng đó, khả năng cao sẽ không có xử lý gì."
          }
        }
      },
      "HYR9KM7G6rg5iDM76iKg": {
        "intent": "iCompare",
        "parameters": {
          "eRequest": "different",
          "interface": true,
          "abstract_class": true
        },
        "response": {
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://viblo.asia/p/khac-biet-giua-abstract-class-va-interface-trong-java-DzVkpgRXenW"
          },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-abstract_class-interface.png?alt=media&token=6c596de8-7773-4b0e-9154-131aa98db2d4"
          },
          "text": { "title": "Sự khác nhau giữa abstract class và interface" }
        }
      },
      "HwXtG8SyCBQNKvQ3zgGX": {
        "parameters": { "eRequest": "define", "assignment_op": true },
        "response": {
          "text": {
            "title": "Toán tử gán là gì ?",
            "content": "Toán tử gán là một trường hợp đặc biệt so với các toán tử khác. Nếu trong lớp chưa định nghĩa một phương thức toán tử gán thì trình biên dịch sẽ phát sinh một toán tử gán mặc định để thực hiện câu lệnh gán 2 đối tượng của lớp."
          }
        },
        "intent": "iWhat"
      },
      "IUu5KTz2XHcFI3cqqEoz": {
        "intent": "iCompare",
        "response": {
          "text": {
            "title": "Sự giống nhau giữa kế thừa và đa hình",
            "content": "Kế thừa và đa hình là các khái niệm có liên quan với nhau, vì đa hình áp dụng cho các lớp cũng thực hiện khái niệm kế thừa."
          }
        },
        "parameters": {
          "eRequest": "same",
          "polymorphism": true,
          "inheritance": true
        }
      },
      "IWiAypUV6wtiUytyYCFo": {
        "response": {
          "text": {
            "title": "Nhược điểm của việc sử dụng kế thừa",
            "content": "Nhược điểm chính của kế thừa là hai lớp (lớp cơ sở và lớp kế thừa) được liên kết chặt chẽ với nhau, đó là các lớp phụ thuộc lẫn nhau. Nếu chức năng của lớp cơ sở bị thay đổi thì các thay đổi cũng phải được thực hiện trên các lớp con."
          }
        },
        "parameters": { "inheritance": true, "eRequest": "disadvantage" },
        "intent": "iWhat"
      },
      "IrcipqWyids8czqniG5H": {
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đối tượng là gì ?",
            "content": "Đối tượng đại diện cho một thực thể trong thế giới thực. Mỗi đối tượng có thuộc tính và đặc điểm riêng dùng để mô tả nó là cái gì và nó có thể làm gì ?  Ví dụ: - Học sinh ,giáo viên - Nhân vật trong game - Những loài động vật , ... "
          }
        },
        "parameters": { "eRequest": "define", "object": true }
      },
      "J68nOLfm0VSKuSAoXv44": {
        "response": {
          "text": { "title": "ví dụ về con trỏ this?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_this_point.png?alt=media&token=cd6fab80-66a8-442e-a74c-47f65bbffa07"
          }
        },
        "parameters": { "eRequest": "example", "this": true },
        "intent": "iWhat"
      },
      "JNKWfvpWE5hqepPtrji2": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_parent_child.png?alt=media&token=222b385d-b52f-42eb-b67b-e167eb882b48"
          },
          "text": { "title": "Vi dụ về hàm thành viên trong kế thừa ?" }
        },
        "intent": "iWhat",
        "parameters": {
          "eRequest": "example",
          "member_func": true,
          "eConnector": "in"
        }
      },
      "JTvYh0CCYy4dQloYLbJP": {
        "parameters": { "abstract_class": true, "eRequest": "declare" },
        "response": {
          "text": {
            "title": "Cách khai báo lớp trừu tượng (java):",
            "code": "abstract class <class-name> { *lb // Khai báo các trường *lb // Định nghĩa các phương thức cụ thể *lb //[Khai báo các phương thức trừu tượng]*lb }",
            "content": "Trong đó *lb *abstract*: chỉ ra rằng lớp và phương thức là trừu tượng."
          }
        },
        "intent": "iWhat"
      },
      "JZveEBWfM2MfeZ3WbzzB": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Đa năng toán tử là xử lý để cho phép các toán tử của c++ có thể làm việc với các đối tượng của lớp.",
            "title": "Đa năng toán tử là gì ?"
          }
        },
        "parameters": { "eRequest": "define", "overloading_op": true }
      },
      "JaFlYpOxeozkpIMuxnM9": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Priority queue là một loại container adaptor, được thiết kế đặc biệt để phần tử ở đỉnh luôn luôn là phần tử có độ ưu tiên lớn nhất so với các phần tử khác.",
            "title": "Định nghĩa hàng đợi có độ ưu tiên ?"
          }
        },
        "parameters": { "eRequest": "define", "priority_queue": true }
      },
      "KLu8ue28n5YRDWnxQmzT": {
        "parameters": { "eRequest": "example", "scope": true },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_scope.png?alt=media&token=92b08558-274b-4072-9e7b-60c0ba28dffe"
          },
          "text": { "title": "ví dụ về phạm vi?" }
        },
        "intent": "iWhat"
      },
      "KR6Vw6OZkZFnCkS0Ozb8": {
        "response": {
          "text": {
            "title": "Thuộc tính là gì ?",
            "content": "Thuộc tính (Property) là đặc tính mà đối tượng cần phải có khi được mô tả trong một lớp."
          }
        },
        "parameters": { "property": true, "eRequest": "define" },
        "intent": "iWhat"
      },
      "KifWM3GhdRa8rtaZusIT": {
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Định nghĩa tầm vực ?",
            "content": "tầm vực dùng để chỉ một ngữ cảnh đóng, trong đó các giá trị và biểu thức được kết hợp với nhau."
          }
        },
        "parameters": { "scope": true, "eRequest": "define" }
      },
      "LKwLmMvqUhHOQ55Kramp": {
        "parameters": {
          "eConnector": "in",
          "constructor": true,
          "eRequest": "define"
        },
        "response": {
          "text": {
            "title": "Hàm khởi tạo trong kế thừa là gì ?",
            "content": "Trong kế thừa, Hàm khởi tạo của lớp cơ bản được gọi trước sau đó đó đến hàm khởi tạo của lớp dẫn xuất."
          }
        },
        "intent": "iWhat"
      },
      "LesEDujdV7up31epHeml": {
        "response": {
          "text": {
            "title": "ví dụ về new operation?",
            "content": "int *a = new int; // cấp phát bộ nhớ cho con trỏ a thuộc kiểu int (4 bytes) *lb double *arr = new double[5]; // cấp phát 5 ô nhớ cho mảng arr thuộc kiểu double (8 bytes)"
          }
        },
        "intent": "iWhat",
        "parameters": { "new_op": true, "operator": true, "eRequest": "example" }
      },
      "Li4qvO6N4wxs070ORDLF": {
        "response": {
          "text": {
            "title": "Định nghĩa hàm hủy ?",
            "content": "Hàm hủy là hàm tự động gọi sau khi đối tượng bị hủy, nó thường được sử dụng để giải phóng bộ nhớ chương trình. Trong đối tượng hàm hủy có thể có hoặc không."
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "destructor": true }
      },
      "LmkPY3hKstvN0V6597Mk": {
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "object": true },
        "response": {
          "text": {
            "content": "Sinh viên chắc chắn là đối tượng cần quản lý rồi. Vậy đâu sẽ là khuôn mẫu cho các đối tượng Sinh viên này. *lb Trong trường hợp này, cái Khuôn mẫu ấy hơi trừu tượng xíu, nó sẽ là một hình tượng chung chung với các nhãn như: Giới tính, Tên, Lớp, Tuổi, Quê quán, Chiều cao, Cân nặng.",
            "title": "Ví dụ về đối tượng trong cuộc sống ?"
          }
        }
      },
      "MYjgELYTUUC1GkRL77fh": {
        "response": {
          "text": { "title": "Ví dụ về tính kế thừa ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_parent_child.png?alt=media&token=222b385d-b52f-42eb-b67b-e167eb882b48"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "inheritance": true }
      },
      "MvRZMhNXg322seLTcQzQ": {
        "parameters": { "eRequest": "define", "oop": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Lập trình hướng đối tượng là gì?",
            "content": "OOP (Object-oriented programming) là kiểu lập trình nhằm vào sự tương tác của các đối tượng. Mỗi đối tượng có những thuộc tính xác định các đặc điểm, những phương thức xác định những chức năng của đối tượng. Chúng tạo thành cấu trúc của đối tượng."
          }
        }
      },
      "ND0ANUt87Psxp7cA4F8H": {
        "response": {
          "text": {
            "title": "ví dụ về assing operation?",
            "content": "arr.assign(10);"
          }
        },
        "parameters": {
          "assignment_op": true,
          "operator": true,
          "eRequest": "example"
        },
        "intent": "iWhat"
      },
      "NbUfpMzUr0D516l58aSh": {
        "parameters": { "eRequest": "different", "oop": true, "pop": true },
        "intent": "iCompare",
        "response": {
          "text": {
            "title": "Sự khác nhau giữa lập trình cấu trúc và lập trình hướng đối tượng"
          },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-struct_program-oop.png?alt=media&token=338cc739-42e8-44f3-b075-3a14a064f90a"
          }
        }
      },
      "NiZZx9p9KWafTSbrHnqY": {
        "intent": "iCompare",
        "parameters": {
          "eRequest": "different",
          "method": true,
          "property": true
        },
        "response": {
          "text": {
            "content": "Thuộc tính dùng để lưu trạng thái của đối tượng (state) còn phương thức là cách mà ta giải quyết hành vi của đối tượng hoặc dịch vụ được cung cấp để đáp ứng hành vi của đối tượng",
            "title": "Khác nhau giữa thuộc tính và phương thức?"
          }
        }
      },
      "NlagqEJYQSPE7xhkUN8M": {
        "parameters": {
          "eConnector": "in",
          "eRequest": "specification",
          "destructor": true
        },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đặc điểm của hàm hủy trong kế thừa ?",
            "content": "tự động gọi sau khi đối tượng bị hủy, nó thường được sử dụng để giải phóng bộ nhớ chương trình. Trong đối tượng hàm hủy có thể có hoặc không."
          }
        }
      },
      "NlnvHiAcaWAYdcNYkad8": {
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "abstraction": true },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_abstraction.png?alt=media&token=05fcb6be-7dab-4149-a8ea-cc1fdd556411"
          },
          "text": { "title": "Ví dụ về tính trừu tượng ?" }
        }
      },
      "NwwiRoCA2yPM8AWlXYac": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_constructor.png?alt=media&token=c0d12d5f-c81d-42d1-8d4d-0e9effc1ea5f"
          },
          "text": {
            "content": "new dùng để cấp phát bộ nhớ còn delete dùng để giải phóng bộ nhớ đã cấp phát trước đó.",
            "title": "Ví dụ về hàm khởi tạo ?"
          }
        },
        "parameters": { "eRequest": "example", "constructor": true },
        "intent": "iWhat"
      },
      "OAFOBkFIVcfXRdn2JHmD": {
        "response": {
          "text": {
            "content": "",
            "title": "Cách khai báo hàm hủy (destructor) (java):",
            "code": "__destruct() { *lb // code *lb }"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "declare", "destructor": true }
      },
      "P66HKCkEWJKuoFnuycNw": {
        "parameters": {
          "multilevel_inheritance": true,
          "single_inheritance": true,
          "eRequest": "same"
        },
        "response": {
          "text": {
            "content": "Là cách 1 lớp có thể thừa hưởng lại những thuộc tính, phương thức từ 1 lớp khác và sử dụng chúng như là của bản thân mình, nói cách khác là dùng để biểu diễn mối quan hệ đặc biệt hoá – tổng quát hoá giữa các lớp.",
            "title": "Sự giống nhau đơn kế thừa và đa kế thừa"
          }
        },
        "intent": "iCompare"
      },
      "Pm802qice84EHkhHdXEw": {
        "parameters": {
          "eRequest": "example",
          "polymorphism": true,
          "abstract_class": true,
          "eConnector": "in"
        },
        "response": {
          "text": { "title": "ví dụ về abstract class trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_abstract_class_polymorphism.png?alt=media&token=93bb919b-4fca-48bf-8701-fc490bdbf4e4"
          }
        },
        "intent": "iWhat"
      },
      "Q43t7zOyf0rsFNSAeBRC": {
        "parameters": { "polymorphism": true, "eRequest": "define" },
        "response": {
          "text": {
            "title": "Đa hình là gì ?",
            "content": "Tính đa hình ( Polymorphism ) là hiện tượng các đối tượng thuộc các lớp khác nhau có thể hiểu cùng 1 thông điệp theo các cách khác nhau."
          }
        },
        "intent": "iWhat"
      },
      "QOcIonTdGxiDPCArLKpL": {
        "response": {
          "text": {
            "content": "dữ liệu được bảo vệ (protected) và riêng tư (private) của một lớp có thể được truy cập bằng cách sử dụng hàm.",
            "title": "Đặc điểm của hàm bạn ?"
          }
        },
        "parameters": { "friend_func": true, "eRequest": "specification" },
        "intent": "iWhat"
      },
      "R1AIycq1vQCymftAqRAJ": {
        "intent": "iWhat",
        "parameters": { "eRequest": "declare", "overload": true },
        "response": {
          "text": {
            "code": "[modifier] <return-type> <name> ([parameter-list])*lb { *lb // code *lb }",
            "content": "Trong đó*lb *modifier* Xác định mức truy cập của một phương thức thể hiện.*lb *return-type* Xác định kiểu dữ liệu của giá trị mà được trả về bởi phương thức.*lb *name* là tên của phương thức muốn nạp chồng. *parameter_list* là danh sách các đối số.",
            "title": "Cách biểu diễn nạp chồng phương thức (java):"
          }
        }
      },
      "R8Ee7AemcnbhdzE6XjjA": {
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "unary_op": true },
        "response": {
          "text": {
            "title": "Định nghĩa toán tử một ngôi ?",
            "content": "toán tử một ngôi là hàm một biến."
          }
        }
      },
      "RBLnOEIIDDadO4MMj3fW": {
        "parameters": { "eRequest": "define", "char_type": true },
        "response": {
          "text": {
            "content": "Kiểu ký tự là kiểu dữ liệu dùng để định nghĩa ký tự.",
            "title": "Kiểu ký tự là gì ?"
          }
        },
        "intent": "iWhat"
      },
      "RJ1Od07AuRh4V1oKNlMJ": {
        "parameters": { "eRequest": "define", "delete_op": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Định nghĩa toán tử delete ?",
            "content": "là toán tử dùng để giải phóng 1 con trỏ đã được cấp phát trước đó, còn nếu đó là 1 mảng thì dùng delete[]"
          }
        }
      },
      "RoCz5oAE9nx0HE7p2Ff8": {
        "parameters": { "eRequest": "define", "boolean_type": true },
        "response": {
          "text": {
            "title": "Kiểu luận lý là gì ?",
            "content": "Kiểu luận lý là một kiểu dữ liệu chỉ có thể nhận một trong hai giá trị như đúng/sai (true/false, yes/no, 1/0) nhằm đại diện cho hai giá trị thật (truth value)."
          }
        },
        "intent": "iWhat"
      },
      "RzCW012AX6NgglIFvoOk": {
        "parameters": { "eRequest": "advantage", "friend_class": true },
        "response": {
          "text": {
            "title": "Lợi ích của việc sử dụng lớp bạn ?",
            "content": "một hàm không phải là thành viên của lớp có thể truy cập dữ liệu thành viên của lớp đó. "
          }
        },
        "intent": "iWhat"
      },
      "SKcsaESdI80Gouq2SOnU": {
        "parameters": { "eRequest": "define", "stack": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "ngăn xếp là một cấu trúc dữ liệu trừu tượng hoạt động theo nguyên lý vào sau ra trước.",
            "title": "Khái niệm ngăn xếp ?"
          }
        }
      },
      "TCpSZGJB4QLZ54IywxKQ": {
        "intent": "iWhat",
        "parameters": { "vector_class": true, "eRequest": "define" },
        "response": {
          "text": {
            "content": "vector trong C++ là một đối tượng dùng để chứa các đối tượng khác, và các đối tượng được chứa này cũng được lưu trữ một cách liên tiếp trong vector.",
            "title": "Lớp vector là gì ?"
          }
        }
      },
      "TQfcjn7WR8go1E8HxGDJ": {
        "response": {
          "text": {
            "content": "Cấp phát mảng là việc cấp phát bộ nhớ cho mảng.",
            "title": "Cấp phát mảng là thế nào ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "allocation_array": true }
      },
      "TUEOx2RTGpHi9anI8pZO": {
        "response": {
          "text": {
            "title": "Định nghĩa hàm thành viên trong kế thừa ?",
            "content": "Trong Kế thừa, Hàm thành viên của lớp dẫn xuất có thể có cùng tên với hàm của lớp cơ bản."
          }
        },
        "parameters": {
          "eConnector": "in",
          "eRequest": "define",
          "member_func": true
        },
        "intent": "iWhat"
      },
      "Ta05EXrPPEYZs48S8s3F": {
        "parameters": { "eRequest": "example", "private": true },
        "response": {
          "text": { "title": "ví dụ phạm vi truy cập private?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_scope.png?alt=media&token=92b08558-274b-4072-9e7b-60c0ba28dffe"
          }
        },
        "intent": "iWhat"
      },
      "TjXy8kmdMbi1LB2F8AwI": {
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "polymorphism": true },
        "response": {
          "text": { "title": "Ví dụ về đa hình ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_polymorphism.png?alt=media&token=29c7e0f7-438c-4a91-a8f4-724dddd04682"
          }
        }
      },
      "Tmi7E0NpvK1yyfF17L2W": {
        "parameters": { "dynamic_casting": true, "eRequest": "example" },
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về dynamic_cast?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_dynamic_cast.png?alt=media&token=8c37a57f-51d3-44af-92f6-f1812a533ac4"
          }
        }
      },
      "U9wYigaIaHUtcDL0BHEP": {
        "parameters": {
          "eRequest": "same",
          "abstract_class": true,
          "interface": true
        },
        "intent": "iCompare",
        "response": {
          "text": {
            "title": "Sự giống nhau giữa abstract class và interface",
            "content": "Đều cung cấp khả năng mở rộng cho một class."
          }
        }
      },
      "UIFaGSveMb6G6b2bHHPf": {
        "parameters": { "polymorphism": true, "eRequest": "advantage" },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Tính đa hình cung cấp khả năng cho phép người lập trình gọi trước một phương thức của đối tượng, tuy chưa xác định đối tượng có phương thức muốn gọi hay không. *lb Đến khi thực hiện (run-time), chương trình mới xác định được đối tượng và gọi phương thức tương ứng của đối tượng đó. *lb Kết nối trễ giúp chương trình được uyển chuyển hơn, chỉ yêu cầu đối tượng cung cấp đúng phương thức cần thiết là đủ.",
            "title": "Đa hình có ưu điểm gì ?"
          }
        }
      },
      "URjhf53R09BwOvGIEmWK": {
        "parameters": { "queue": true, "eRequest": "specification" },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đặc điểm của queue ?",
            "content": " phần tử cuối cùng được chèn vào hàng đợi sẽ là phần tử cuối cùng được lấy ra khỏi hàng đợi. *lb ở một đầu không thể xảy ra hai hành động thêm và xóa đồng thời."
          }
        }
      },
      "UdVDfoPmd7zyAnXHZc7r": {
        "parameters": { "eRequest": "advantage", "reusability": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": " chúng ta không cần phải viết lại mã tương tự trong lớp con. Điều này khiến chúng ta viết ít mã hơn và mã trở nên dễ đọc hơn nhiều.",
            "title": "Lợi ích của việc tái sử dụng ?"
          }
        }
      },
      "Uss7zfbCZ2yFfdI5rTwj": {
        "parameters": { "friend_func": true, "eRequest": "example" },
        "intent": "iWhat",
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_friend_function.png?alt=media&token=36cb80c6-ba32-41cd-beda-3252382ae45f"
          },
          "card": {
            "buttonUrl": "https://freetuts.net/ham-ban-friend-function-va-lop-ban-friend-class-trong-c++-1801.html",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm"
          },
          "text": { "title": "ví dụ về hàm bạn?" }
        }
      },
      "VFwkxzXk5KQZhTvn6AWr": {
        "parameters": { "eRequest": "define", "queue": true },
        "response": {
          "text": {
            "content": "hàng đợi là một cấu trúc dữ liệu dùng để lưu giữ các đối tượng theo cơ chế FIFO (viết tắt từ tiếng Anh: First In First Out), nghĩa là vào trước ra trước.",
            "title": "Khái niệm hàng đợi ?"
          }
        },
        "intent": "iWhat"
      },
      "Vok0U6ecq6C8hp977pdr": {
        "response": {
          "text": {
            "content": "new dùng để cấp phát bộ nhớ còn delete dùng để giải phóng bộ nhớ đã cấp phát trước đó.",
            "title": "Sự khác nhau giữa new và delete"
          }
        },
        "parameters": {
          "delete_op": true,
          "new_op": true,
          "eRequest": "different"
        },
        "intent": "iCompare"
      },
      "VwppChy0b7Om2Kws2vyU": {
        "intent": "iWhat",
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_dynamic_arr_multidimension.png?alt=media&token=9e99a2f6-f70f-46f1-8651-a84bb123beb2"
          },
          "card": {
            "buttonUrl": "https://www.techiedelight.com/dynamic-memory-allocation-in-c-for-2d-3d-array/#2D",
            "buttonText": "Tìm hiểu thêm",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          },
          "text": { "title": "ví dụ về mảng động đa chiều?" }
        },
        "parameters": {
          "eRequest": "example",
          "dynamic_arr_multidimension": true
        }
      },
      "W9fLZoG83ceFvUmsc9Ro": {
        "parameters": { "eRequest": "declare", "override": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "code": "@Override *lb [modifier] <return-type> <name> ()*lb { *lb // code *lb }",
            "content": "Trong đó*lb *modifier* Xác định mức truy cập của một phương thức thể hiện.*lb *return-type* Xác định kiểu dữ liệu của giá trị mà được trả về bởi phương thức.*lb *name* là tên của phương thức muốn ghi đè.",
            "title": "Cách biểu diễn ghi đè phương thức (java):"
          }
        }
      },
      "WL5FkUGzWTOKFNCCIZjY": {
        "parameters": { "cstyle_casting": true, "eRequest": "example" },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "int i_value1 = 10; *lb int i_value2 = 4; *lb float f_value = i_value1 / i_value2;",
            "title": "ví dụ về ép kiểu trong C?"
          },
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://cpp.daynhauhoc.com/4/2-ep-kieu-du-lieu/",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          }
        }
      },
      "WsmQRVbqWz12aeh54jhq": {
        "response": {
          "text": {
            "content": "Đa kế thừa cho phép lớp dẫn xuất kế thừa các thành phần từ nhiều lớp cơ sở.",
            "title": "Lợi ích của đa kế thừa ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "multilevel_inheritance": true, "eRequest": "advantage" }
      },
      "XGvsLjVvvQUPvKYVkYAk": {
        "parameters": { "eRequest": "example", "priority_queue": true },
        "response": {
          "text": { "title": "ví dụ về hàng chờ ưu tiên?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_priority_queue.png?alt=media&token=7ea119e3-78e2-437c-9cc1-40f77974bb74"
          },
          "card": {
            "buttonUrl": "https://motoo.in/tutorial-su-dung-thu-vien-stl-trong-c-priority-queue/",
            "buttonText": "Tìm hiểu thêm",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          }
        },
        "intent": "iWhat"
      },
      "XN31pwAC0PD65FpKFdwa": {
        "parameters": { "oop": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "content": "- Dễ dàng quản lý code khi có sự thay đổi chương trình. *lb - Dễ mở rộng dự án. *lb - Tiết kiệm được tài nguyên đáng kể cho hệ thống. *lb - Có tính bảo mật cao. *lb - Có tính tái sử dụng cao.",
            "title": "Ưu điểm của lập trình hướng đối tượng ?"
          }
        },
        "intent": "iWhat"
      },
      "XbvD2yp0BWVLtR6jq3eI": {
        "parameters": { "eRequest": "advantage", "point": true },
        "response": {
          "text": {
            "content": "- Có thể dùng để cấp phát bộ nhớ động. *lb - Truyền các tham số (các đối tượng, các mảng, các chuỗi ...) hiệu quả hơn (thay vì truyền giá trị của một biến, ta có thể truyền địa chỉ của biến đó). *lb - Giúp hàm có thể trả về nhiều hơn một giá trị. *lb - Xây dựng các cấu trúc dữ liệu phức tạp hơn như linked list, tree, và graph. ",
            "title": "Ưu điểm của con trỏ ?"
          }
        },
        "intent": "iWhat"
      },
      "Xy9cX7X9C7jScg8zmH3p": {
        "parameters": { "eRequest": "advantage", "overload": true },
        "response": {
          "text": {
            "title": "Điểm mạnh của việc nạp chồng toán tử ?",
            "content": "- Có khả năng tạo ra nhiều phương thức cùng tên, nhưng với các tham số khác nhau. *lb - Ưu điểm chính của điều này là mã sạch. *lb - Cung cấp cho các lập trình viên khả năng gọi một phương thức tương tự cho các loại dữ liệu khác nhau."
          }
        },
        "intent": "iWhat"
      },
      "Y63uFdav4iXaqnwXorVI": {
        "parameters": { "friend_class": true, "eRequest": "specification" },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đặc điểm của lớp bạn ?",
            "content": "có thể truy cập cả các thành viên riêng tư và được bảo vệ của lớp mà nó đã được khai báo là friend."
          }
        }
      },
      "YQghAks7vYxEUKHUJd64": {
        "intent": "iWhat",
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_destructor_polymorphism.png?alt=media&token=060c06ab-6912-4e5a-afb9-156c3d7126a7"
          },
          "text": { "title": "ví dụ về destructor trong đa hình?" }
        },
        "parameters": {
          "polymorphism": true,
          "destructor": true,
          "eRequest": "example",
          "eConnector": "in"
        }
      },
      "YzDKDNAq2SIscp8aFUOM": {
        "parameters": {
          "public": true,
          "eRequest": "same",
          "private": true,
          "protected": true
        },
        "intent": "iCompare",
        "response": {
          "text": {
            "title": "Sự giống nhau giữa private, public và protected",
            "content": "Các từ khóa *private*, *public* và *protected* quy định quyền truy cập của các thuộc tính, phương thức, hay lớp được khai báo với từ khóa đó. "
          }
        }
      },
      "ZOg21083NFNxIGvd80uz": {
        "parameters": { "destructor": true, "eRequest": "specification" },
        "response": {
          "text": {
            "content": "Nó có thể xảy ra khi thời gian sống của nó được gắn với tầm vực và sự thực thi rời khỏi tầm vực đó, hay khi nó được nhúng vào trong đối tượng khác mà thời gian sống của đối tượng đó kết thúc, hoặc khi nó được cấp phát động và bị giải phóng một cách tường minh.",
            "title": "Đặc điểm của hàm hủy ?"
          }
        },
        "intent": "iWhat"
      },
      "a0mlzkEEKEOlah8N3ww0": {
        "parameters": { "eRequest": "example", "const_casting": true },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_const_casting.png?alt=media&token=0b8245ca-d334-4499-90cf-26f4907caeca"
          },
          "text": { "title": "ví dụ về const_cast?" }
        },
        "intent": "iWhat"
      },
      "a1eEXvL1FlM5xYQgFtj1": {
        "response": {
          "text": {
            "title": "Ép kiểu là gì ?",
            "content": "Ép kiểu (Casting) là việc chuyển đổi các biến từ kiểu dữ liệu này sang kiểu dữ liệu khác."
          }
        },
        "parameters": { "casting": true, "eRequest": "define" },
        "intent": "iWhat"
      },
      "aC69XPAf2PqPk5MbfyHd": {
        "intent": "iWhat",
        "parameters": { "eRequest": "specification", "stack": true },
        "response": {
          "text": {
            "title": "Đặc điểm cúa stack ?",
            "content": " phần tử cuối cùng được chèn vào ngăn xếp sẽ là phần tử đầu tiên được lấy ra khỏi ngăn xếp."
          }
        }
      },
      "agwfH1pJlPgSWpCvejEk": {
        "parameters": {
          "eRequest": "example",
          "polymorphism": true,
          "eConnector": "in",
          "constructor": true
        },
        "response": {
          "text": { "title": "ví dụ về constructor trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_constructor_polymorphism.png?alt=media&token=86f7381b-54b1-4509-86b5-961d37af42dd"
          }
        },
        "intent": "iWhat"
      },
      "anSGbofnu54PkmDRN4oC": {
        "parameters": {
          "operator": true,
          "eRequest": "example",
          "delete_op": true
        },
        "response": {
          "text": {
            "content": "int *a = new int;// do_something; *lb delete a; // giải phóng con trỏ a đã cấp phát ở trên",
            "title": "ví dụ về delete operation?"
          }
        },
        "intent": "iWhat"
      },
      "arPRofxjLsCOCw5rEiXo": {
        "parameters": { "eRequest": "define", "operator": true },
        "response": {
          "text": {
            "title": "Khái niệm toán tử ?",
            "content": "toán tử là một ký hiệu được sử dụng để thực hiện một phép tính/chức năng nào đó."
          }
        },
        "intent": "iWhat"
      },
      "aszhww7m5tyIhZXrD2xT": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Có thể kế thừa từ  nhiều lớp.",
            "title": "Đặc điểm của đa thừa kế ?"
          }
        },
        "parameters": {
          "eRequest": "specification",
          "multilevel_inheritance": true
        }
      },
      "b5epwLzAZcYZ52ng0dEn": {
        "parameters": {
          "eRequest": "same",
          "overloading_func": true,
          "overriding_func": true
        },
        "intent": "iCompare",
        "response": {
          "text": {
            "content": "Đều cho phép bạn xác định nhiều hơn một định nghĩa cho một tên hàm hoặc một toán tử trong cùng phạm vi (scope).",
            "title": "Sự giống nhau giữa hàm nạp chồng và hàm ghi đè"
          }
        }
      },
      "bIGgLXnGeIKgyUudy1ln": {
        "response": {
          "text": {
            "content": "Trong đó*lb *const_cast* được sử dụng để ghi đè const.*lb *type* là kiểu dữ liệu muốn ép.",
            "code": "const_cast<type> (expr)",
            "title": "Cú pháp ép kiểu const (c++):"
          }
        },
        "intent": "iWhat",
        "parameters": { "const_casting": true, "eRequest": "declare" }
      },
      "barrH2KkMkcYzUvXDbSO": {
        "parameters": {
          "override": true,
          "eRequest": "different",
          "overload": true
        },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-override-overload.PNG?alt=media&token=5b09ec23-50b2-4cf0-bba4-969db180f29e"
          },
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonUrl": "https://viblo.asia/p/override-va-overload-WAyK8V4NlxX",
            "buttonText": "Tìm hiểu thêm"
          },
          "text": { "title": "Khác nhau giữa nạp chồng và ghi đè?" }
        },
        "intent": "iCompare"
      },
      "beFrGttn8Lm9gjOHiY5l": {
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "point": true },
        "response": {
          "text": { "title": "ví dụ về con trỏ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_point.png?alt=media&token=2d0cfa32-4258-4aba-b69d-ad0449005c67"
          }
        }
      },
      "c1vjULn89cfoXrHJi9uP": {
        "parameters": { "eRequest": "disadvantage", "friend_func": true },
        "response": {
          "text": {
            "title": "Nhược điểm của hàm friend",
            "content": "- class con không được kế thừa hàm friend của class cha.*lb- chúng không thể được khai báo static hoặc từ bên ngoài."
          }
        },
        "intent": "iWhat"
      },
      "c3gDbUcD0t3UUr8Zu9Wj": {
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "single_inheritance": true },
        "response": {
          "text": {
            "content": "Thừa kế đơn là tiến trình tạo một lớp mới từ một lớp đã có sẵn.",
            "title": "Thừa kế đơn là gì ?"
          }
        }
      },
      "cF1rebW45LtJv6wvgf5C": {
        "parameters": {
          "eConnector": "in",
          "eRequest": "example",
          "polymorphism": true,
          "base_class": true
        },
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về base class trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_base_class_polymorphism.png?alt=media&token=dd5b63ef-7be1-49bf-8ad3-4463b1a37a82"
          }
        }
      },
      "cPdRWQehqkN7ncF9pssk": {
        "response": {
          "text": { "title": "ví dụ về mảng động một chiều?" },
          "card": {
            "buttonUrl": "https://www.techiedelight.com/dynamic-memory-allocation-in-c-for-2d-3d-array/#2D",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm"
          },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_dynamic_arr_dimension.png?alt=media&token=812f42e2-6b63-4907-8d59-9a5c2de9f2f1"
          }
        },
        "parameters": { "dynamic_arr_dimension": true, "eRequest": "example" },
        "intent": "iWhat"
      },
      "cXsVMZyJkPzzMNqW1iHN": {
        "parameters": { "point": true, "eRequest": "define" },
        "response": {
          "text": {
            "content": "Con trỏ được dùng để trỏ tới tới địa chỉ trên bộ nhớ nơi được dùng để lưu trữ giá trị của biến.",
            "title": "Con trỏ là gì ?"
          }
        },
        "intent": "iWhat"
      },
      "cbal1UhLo5UgSFd0tKc7": {
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ về interface?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_interface.png?alt=media&token=796d9107-6263-4cf5-b9e3-7fe6b6ade042"
          }
        },
        "parameters": { "eRequest": "example", "interface": true }
      },
      "d6BSV0RCzxKgN5sgvmst": {
        "response": {
          "text": {
            "content": "Lớp container là lớp có thành viên là một đối tượng thuộc lớp khác.",
            "title": "Định nghĩa lớp container trong kế thừa ?"
          }
        },
        "intent": "iWhat",
        "parameters": {
          "container": true,
          "eRequest": "define",
          "eConnector": "in"
        }
      },
      "dBGJEMxvj27LnuwzRH78": {
        "parameters": { "class": true, "eRequest": "same", "struct": true },
        "intent": "iCompare",
        "response": {
          "text": {
            "content": "Đều định nghĩa một đối tượng.",
            "title": "Sự giống nhau giữa Class và struct"
          }
        }
      },
      "eFQvRk5bDnBLvVLmMlFE": {
        "parameters": {
          "eConnector": "in",
          "destructor": true,
          "eRequest": "example"
        },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_destructor_inheritance.png?alt=media&token=ec47324e-beb4-4fc9-b104-b91806a99532"
          },
          "text": { "title": "Ví dụ về hàm hủy trong kế thừa ?" }
        },
        "intent": "iWhat"
      },
      "epwg74EBAVIf5wW4WDjA": {
        "response": {
          "text": {
            "title": "Toán tử new là gì ?",
            "content": "Toán tử new là toán tử dùng để cấp phát bộ nhớ cho 1 con trỏ."
          }
        },
        "parameters": { "new_op": true, "eRequest": "define" },
        "intent": "iWhat"
      },
      "fkO4sjMv22C078gTk7eq": {
        "response": {
          "text": {
            "title": "Đặc trưng của lập trình hướng đối tượng?",
            "content": "Tính đóng gói *lb Tính trừu tượng *lb Tính kế thừa *lb Tính đa  hình"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "specification", "oop": true }
      },
      "flALjobCQRDRiKOvmAJu": {
        "response": {
          "text": {
            "content": "có thể thừa kế và ghi đè được để tạo điều kiện cho điều phối động.",
            "title": "Đặc điểm của hàm ảo ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "specification", "virtual_base_class": true }
      },
      "g8SpZkZd6904YrXBJfXU": {
        "response": {
          "text": {
            "content": "Hàm khởi tạo cũng là một hàm bình thường nhưng có điểm đặc biệt là nó luôn luôn được gọi tới khi ta khởi tạo một đối tượng. Hàm khởi tạo có thẻ có tham số hoặc không có tham số. ",
            "title": "Định nghĩa hàm khởi tạo ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "constructor": true }
      },
      "hOo9yV8Mjg1hpfPSOZQT": {
        "parameters": { "eRequest": "specification", "abstraction": true },
        "response": {
          "text": {
            "title": "Đặc trưng của tính trừu tượng hóa ?",
            "content": "Chỉ hiển thị những thông tin cần thiết và ẩn những thông tin không cần thiết."
          }
        },
        "intent": "iWhat"
      },
      "i6uxYCurxZL689YKavP1": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_reference_parameter.png?alt=media&token=99f70316-889d-4c02-bfcb-037f39fe4b96"
          },
          "text": { "title": "ví dụ về tham chiếu?" }
        },
        "parameters": { "eRequest": "example", "reference": true },
        "intent": "iWhat"
      },
      "ieK4FODpDAMsRUJYHXBC": {
        "response": {
          "text": {
            "title": "Khái niệm lớp bạn ?",
            "content": "Lớp bạn trong c++ cũng tương tự như hàm bạn, việc khai báo lớp bạn sẽ cho phép lớp bạn của lớp kia được truy cập tất cả thành viên của nó."
          }
        },
        "parameters": { "eRequest": "define", "friend_class": true },
        "intent": "iWhat"
      },
      "ieKjaN4uO615LpGvLfr9": {
        "response": {
          "text": {
            "title": "Đặc điểm của hàm khởi tạo ?",
            "content": "không có kiểu trả về rõ ràng. *lb không được kế thừa ngầm và nó thường có các quy tắc khác nhau để chỉ định tầm vực. *lb Hàm tạo thường có tên giống với lớp được khai báo."
          }
        },
        "parameters": { "eRequest": "specification", "constructor": true },
        "intent": "iWhat"
      },
      "jNK2em4xD385h72sOvKQ": {
        "response": {
          "text": {
            "content": "Mỗi đối tượng có quyền truy cập vào địa chỉ riêng của nó thông qua một con trỏ quan trọng được gọi là con trỏ this. Con trỏ this là một tham số ngầm định cho tất cả các hàm thành viên. Vì vậy, bên trong một hàm thành viên, điều này có thể được sử dụng để chỉ đối tượng gọi.",
            "title": "Con trỏ this là gì ?"
          }
        },
        "parameters": { "eRequest": "define", "this": true },
        "intent": "iWhat"
      },
      "jYPgTLGXyStSYbm91CKd": {
        "response": {
          "text": {
            "title": "Sự giống nhau giữa constructor va destructor trong kế thừa",
            "content": "Đều không được các lớp con thừa kế."
          }
        },
        "parameters": {
          "eRequest": "same",
          "destructor": true,
          "constructor": true
        },
        "intent": "iCompare"
      },
      "kYzbENGN4ykFUvxO21AD": {
        "parameters": { "eRequest": "define", "multilevel_inheritance": true },
        "response": {
          "text": {
            "content": "Đa thừa kế là quá trình tạo ra một lớp mới từ nhiều lớp cơ bản sẵn có. Cho phép ta tích hợp các hành vi của lớp cơ bản vào một lớp duy nhất.",
            "title": "Đa thừa kế là sao ?"
          }
        },
        "intent": "iWhat"
      },
      "keY5mwPc1MjSG3zh1d53": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Hàm khởi tạo sao chép là một constructor mà tạo một đối tượng bằng việc khởi tạo nó với một đối tượng của cùng lớp đó, mà đã được tạo trước đó.",
            "title": "Hàm khởi tạo sao chép là gì ?"
          }
        },
        "parameters": { "eRequest": "define", "copy_constructor": true }
      },
      "kfp03MEFnoQeH0nDdSxf": {
        "intent": "iCompare",
        "parameters": {
          "constructor": true,
          "destructor": true,
          "eRequest": "different"
        },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-constuctor-destructor.png?alt=media&token=58ad0784-2859-4ef6-b3ea-f0d88c776482"
          },
          "text": { "title": "Sự khác nhau giữa constructor và destructor" }
        }
      },
      "kuTeVOu6Hk3DJ5FS65Ga": {
        "response": {
          "text": { "title": "ví dụ vê thuộc tính trong class ?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_class.png?alt=media&token=1d11183a-8bf8-4b47-aca4-61d419698ec4"
          }
        },
        "parameters": { "property": true, "eRequest": "example" },
        "intent": "iWhat"
      },
      "lHo2VpHzF8x0WWDoHkDR": {
        "response": {
          "text": {
            "content": "Đều cung cấp khả năng sử dụng lại mã",
            "title": "Sự giống nhau giữa quan hệ is-a và has-a"
          }
        },
        "parameters": { "eRequest": "same", "is-a": true, "has-a": true },
        "intent": "iCompare"
      },
      "lLD8EKrgmBz2toQBbYmq": {
        "parameters": { "eRequest": "example", "static": true },
        "response": {
          "text": { "title": "ví dụ về static?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_static.png?alt=media&token=27f0d9f3-a085-43d4-99b4-a121fc8e989d"
          }
        },
        "intent": "iWhat"
      },
      "lRYbPxJBWLZgUsoNHwXo": {
        "intent": "iWhat",
        "response": {
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonUrl": "https://www.stdio.vn/articles/inline-functions-trong-c-13",
            "buttonText": "Tìm hiểu thêm"
          },
          "text": { "title": "ví dụ về inline function?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_inline_function.png?alt=media&token=b9ff096c-726a-4fe5-97a8-3d2335d7af3a"
          }
        },
        "parameters": { "eRequest": "example", "inline_func": true }
      },
      "lUuE4KffUen0vAAY9tmT": {
        "parameters": { "eRequest": "advantage", "overloading_func": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Hàm đa năng có ưu điểm gì ?",
            "content": "- việc sử dụng chức năng nạp chồng là để tiết kiệm không gian bộ nhớ, tính nhất quán và khả năng đọc. *lb - Chúng ta có thể phát triển nhiều hơn một chức năng có cùng tên."
          }
        }
      },
      "m6geiIwAG9jRNSQ2ANg7": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Lớp cha hay còn gọi là lớp cơ sở (Class Base) là lớp mà các lớp khác thừa hưởng hành vi của nó.",
            "title": "Lớp cha / lớp cơ sở là gì ?"
          }
        },
        "parameters": { "eRequest": "define", "base_class": true }
      },
      "mCeEY1vXtUKwPNrjmSnv": {
        "intent": "iWhat",
        "response": {
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://docs.microsoft.com/en-us/cpp/cpp/cast-operator-parens?view=vs-2019",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          },
          "text": { "title": "ví dụ về cast operator?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_cast_operator.png?alt=media&token=fbdf112b-7562-48d6-ad39-5c38cf160ae3"
          }
        },
        "parameters": { "eRequest": "example", "cast_op": true }
      },
      "nhzd6dTVJE9wMhQXAd95": {
        "parameters": { "protected": true, "eRequest": "example" },
        "intent": "iWhat",
        "response": {
          "text": { "title": "ví dụ phạm vi truy cập protected?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_scope.png?alt=media&token=92b08558-274b-4072-9e7b-60c0ba28dffe"
          }
        }
      },
      "nmryvBinLBdH18c3RH3x": {
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "base_class": true },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_parent_child.png?alt=media&token=222b385d-b52f-42eb-b67b-e167eb882b48"
          },
          "text": { "title": "Ví dụ về lớp cha ?" }
        }
      },
      "oBqJp4QXRqJyFTOzHudd": {
        "parameters": { "interface": true, "eRequest": "specification" },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Đặc điểm của interface ?",
            "content": "- Chỉ chứa khai báo không chứa phần định nghĩa (giống phương thức thuần ảo) tuy nhiên không cần phải khai báo từ khóa *abstract* *lb - Việc ghi đè 1 thành phần trong interface cũng không cần từ khoá *override*.  *lb - Không thể khai báo phạm vi truy cập cho các thành phần bên trong interface. Các thành phần này sẽ mặc định là *public* . *lb không chứa các thuộc tính (các biến) dù là hằng số hay biến tĩnh vẫn không được.  *lb Không có *constructor* cũng không có *destructor* *lb - Các lớp có thể thực thi nhiều interface cùng lúc *lb - Một interface có thể kế thừa nhiều interface khác nhưng không thể kế thừa bất kỳ lớp nào."
          }
        }
      },
      "op9XOqAPGv7CLOBEaVwr": {
        "response": {
          "text": {
            "title": "Ghi đè là gì ?",
            "content": "Ghi đè là Phương thức đã xuất hiện ở lớp cha và xuất hiện tiếp ở lớp con."
          }
        },
        "parameters": { "eRequest": "define", "override": true },
        "intent": "iWhat"
      },
      "oxe1Od56et3jr1eYHz6W": {
        "response": {
          "text": {
            "title": "Đóng gói là gì ?",
            "content": "Đóng gói ( Encapsulation) là cơ chế ràng buộc dữ liệu và thao tác trên dữ liệu đó thành một thể thống nhất, tránh được tác động từ bên ngoài. Đây là tính chất bảo đảm sự toàn vẹn và bảo mật của đối tượng. Tính đóng gói được thể hiện thông qua phạm vi truy cập (access modifier). "
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "define", "encapsulation": true }
      },
      "p9PQdf1oIFpSjtJ9CIJo": {
        "parameters": { "vector_class": true, "eRequest": "specification" },
        "response": {
          "text": {
            "content": "Tự động tăng kích thước.",
            "title": "Đặc điểm của lớp vector ?"
          }
        },
        "intent": "iWhat"
      },
      "pH0TTZY9fRCwoLzRuTkP": {
        "parameters": { "eRequest": "different", "has-a": true, "is-a": true },
        "response": {
          "text": { "title": "Khác nhau giữa quan hệ is-a và has-a?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-isa-hasa.png?alt=media&token=10d6230a-271c-4d4b-b124-9b1c805b0b51"
          }
        },
        "intent": "iCompare"
      },
      "pINyfTbfvR0lRENOCG3Q": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_copy_constructor.png?alt=media&token=7f7638df-3f41-4e43-b1e5-aebdf619f8a0"
          },
          "text": { "title": "ví dụ về copy constructor?" }
        },
        "parameters": { "eRequest": "example", "copy_constructor": true },
        "intent": "iWhat"
      },
      "pXA69cg7LY8b3Ry4YutP": {
        "intent": "iCompare",
        "parameters": {
          "overloading_func": true,
          "eRequest": "different",
          "overloading_op": true
        },
        "response": {
          "text": {
            "title": "Khác nhau giữa overloading function và overloading operation?"
          },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-overloading_function-overloading_operation.png?alt=media&token=3e45a7ef-3f1b-4248-a494-65aa835fc86e"
          },
          "card": {
            "buttonUrl": "https://dnmtechs.com/vi/bai-15-nap-chong-ham-va-nap-chong-toan-tu-trong-c-plus-plus/",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm"
          }
        }
      },
      "pYjS6I4MsA0E8gYOjFct": {
        "parameters": { "eRequest": "specification", "encapsulation": true },
        "response": {
          "text": {
            "content": "Tạo ra cơ chế để ngăn ngừa việc gọi phương thức của lớp này tác động hay truy xuất dữ liệu của đối tượng thuộc về lớp khác. *lb Dữ liệu riêng (khi được khai báo là private) của mỗi đối tượng được bảo vệ khỏi sự truy xuất không hợp lệ từ bên ngoài. *lb Người lập trình có thể dựa vào cơ chế này để ngăn ngừa việc gán giá trị không hợp lệ vào thành phần dữ liệu của mỗi đối tượng. *lb Cho phép thay đổi cấu trúc bên trong của một lớp mà không làm ảnh hưởng đến những lớp bên ngoài có sử dụng lớp đó.",
            "title": "Đặc trưng của tính đóng gói ?"
          }
        },
        "intent": "iWhat"
      },
      "pkKaslatOSqk63YlZkWM": {
        "parameters": { "eRequest": "define", "abstraction": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Trừu tượng hóa là gì ?",
            "content": "Tính trừu tượng (Abstraction) là một tiến trình ẩn các chi tiết trình triển khai và chỉ hiển thị tính năng tới người dùng , cho phép bạn loại bỏ tính chất phức tạp của đối tượng bằng cách chỉ đưa ra các thuộc tính và phương thức cần thiết của đối tượng trong lập trình. "
          }
        }
      },
      "qCYUob8eAAuyd5MHed7D": {
        "parameters": { "this": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "content": "- Nó có thể được sử dụng để truyền đối tượng hiện tại làm tham số cho phương thức khác. *lb - Nó có thể được sử dụng để tham chiếu đến thể hiện hiện tại của lớp (như ở ví dụ trên). *lb - Nó có thể được sử dụng để khai báo các chỉ mục.",
            "title": "Điểm mạnh của con trỏ this ?"
          }
        },
        "intent": "iWhat"
      },
      "qJOQY58cQLncGOi72ZQ5": {
        "parameters": { "binary_op": true, "eRequest": "same", "unary_op": true },
        "intent": "iCompare",
        "response": {
          "text": {
            "content": "Đều là toán tử số học, là các operator được sử dụng để thực hiện các phép tính toán học lên toán hạng.*lb *Ví dụ*: ( +, -, *, /, %, ++, --)",
            "title": "Sự giống nhau giữa toán tử đơn ngôi và toán tử đa ngôi"
          }
        }
      },
      "qMaoohF9lb086gHIbBHV": {
        "response": {
          "text": { "title": "ví dụ về giá trị truyền vào?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_value_parameter.png?alt=media&token=2bca8743-85a6-4123-a98b-ff21610f415b"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "value_parameter": true }
      },
      "qUKuYRm6yB10AxhqsrU3": {
        "parameters": { "eRequest": "example", "destructor": true },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_destructor.png?alt=media&token=e88008f7-42c2-4763-828c-3b687ca7243a"
          },
          "text": { "title": "Ví dụ về hàm hủy ?" }
        },
        "intent": "iWhat"
      },
      "qkuF1wyLLGJ8siKSL9H2": {
        "response": {
          "text": {
            "content": "Kiểu chuỗi là một lớp chuẩn mô tả về về chuỗi kí tự",
            "title": "Kiểu chuỗi là gì ?"
          }
        },
        "parameters": { "eRequest": "define", "string_type": true },
        "intent": "iWhat"
      },
      "qm1xlOGch9ZTaw9oQjbj": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "chứa địa chỉ của một vùng trong bộ nhớ và có kiểu xác định. *lb Kích thước của con trỏ tương đương của int, tuy nhiên kích thước của vùng nhớ được trỏ tới là không xác định",
            "title": "Đặc điểm của con trỏ ?"
          }
        },
        "parameters": { "point": true, "eRequest": "specification" }
      },
      "r2jqMWPGfExbKvE1OkIF": {
        "intent": "iWhat",
        "parameters": { "explicit_casting": true, "eRequest": "example" },
        "response": {
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://cpp.daynhauhoc.com/4/2-ep-kieu-du-lieu/"
          },
          "text": {
            "title": "ví dụ về ép kiểu rõ ràng?",
            "content": "int i_value1 = 10; *lb int i_value2 = 4; *lb float f_value = i_value1 / i_value2;"
          }
        }
      },
      "r8iorYvGHhhLmIi4gNlz": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-inheritance-constuctor-destructor.png?alt=media&token=fc932a15-f36d-4a88-a4f9-d549224dbc3b"
          },
          "text": {
            "title": "Sự khác nhau giữa constructor và destructor trong kế thừa."
          }
        },
        "intent": "iCompare",
        "parameters": {
          "eRequest": "different",
          "constructor": true,
          "destructor": true
        }
      },
      "rONwyu5xM8FegyNzB7sz": {
        "intent": "iWhat",
        "parameters": { "interface": true, "eRequest": "advantage" },
        "response": {
          "text": {
            "title": "Điểm mạnh của interface ?",
            "content": "- Có thể kế thừa nhiều interface(tính đa hình). *lb - Xây dựng được bộ khung mẫu mà các lớp phải follow theo. *lb - Giúp quản lý tốt, nắm bắt được các chức năng phải có cho một đối tượng nào đó. *lb - giảm mã và cải thiện hiệu suất."
          }
        }
      },
      "rWwTIciIfudVd1jI8w7E": {
        "intent": "iWhat",
        "parameters": { "public": true, "eRequest": "example" },
        "response": {
          "text": { "title": "ví dụ phạm vi truy cập public?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_scope.png?alt=media&token=92b08558-274b-4072-9e7b-60c0ba28dffe"
          }
        }
      },
      "s0YvHPkSrg02xkPc0j8H": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_class.png?alt=media&token=1d11183a-8bf8-4b47-aca4-61d419698ec4"
          },
          "text": { "title": "Ví dụ về phương thức trong lớp ?" }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "method": true }
      },
      "s8Ew4nO0HJgiC5CI5q23": {
        "response": {
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonUrl": "https://vietjack.com/cplusplus/tinh_ke_thua_trong_cplusplus.jsp"
          },
          "text": {
            "content": "Một lớp kế thừa có thể truy cập tất cả thành viên không phải là private của lớp cơ sở của nó.",
            "title": "Khác nhau giữa lớp cơ sở và lớp thừa kế?"
          }
        },
        "intent": "iCompare",
        "parameters": {
          "base_class": true,
          "derived_class": true,
          "eRequest": "different"
        }
      },
      "t0pC1Q2EPyNC2C3QxUWH": {
        "response": {
          "text": {
            "title": "Cách khai báo hàm khởi tạo (constructor) (java):",
            "content": "Hàm khởi tạo có tên trùng với tên lớp",
            "code": "<class-name>() {*lb // Các câu lệnh khởi tạo *lb }"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "declare", "constructor": true }
      },
      "tsKJ9CutAXr7JkkfMZT0": {
        "parameters": { "eRequest": "specification", "static": true },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Từ khóa static có thể được sử dụng để khai báo biến, dù đặt bên trong hay bên ngoài những khối lệnh, vẫn khiến cho biến đó có hiệu lực tương tự như biến toàn cục.",
            "title": "Đặc điểm của thành phần static ?"
          }
        }
      },
      "u6uxCfMRxvDCGqwMEN8F": {
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Static trong c++ là dữ liệu của lớp không phải là dữ liệu của đối tượng. Static trong c++ tồn tại như một biến toàn cục.",
            "title": "Thành phần tĩnh static là gì ?"
          }
        },
        "parameters": { "eRequest": "define", "static": true }
      },
      "uM3zyFOXKY34JLNI7jfy": {
        "parameters": { "inline_func": true, "eRequest": "define" },
        "response": {
          "text": {
            "content": "Hàm tại chỗ là một cấu trúc trong ngôn ngữ lập trình được sử dụng để đề nghị với chương trình biên dịch rằng một hàm cụ thể nào đó là đối tượng của việc khai triển nội tuyến (inline expansion); *lb có nghĩa là, nó đề nghị rằng chương trình biên dịch nên chèn toàn bộ thân hàm vào trong từng ngữ cảnh, nơi hàm đó được sử dụng.",
            "title": "Hàm tại chỗ là gì ?"
          }
        },
        "intent": "iWhat"
      },
      "uQI3eRavMcA2He1dCSq5": {
        "response": {
          "text": {
            "content": "Phát  triển hướng đối tượng cho phép chúng ta có thể tái sử dụng lại các thiết kế và mã lệnh trong các ứng dụng tiếp theo, đặc biệt trong tính thừa kế cũng thúc đẩy việc tái sử dụng này.",
            "title": "Tái sử dụng là gì ?"
          }
        },
        "intent": "iWhat",
        "parameters": { "reusability": true, "eRequest": "define" }
      },
      "uSuuCQaH30UTecJoz981": {
        "parameters": { "virtual_func": true, "eRequest": "declare" },
        "intent": "iWhat",
        "response": {
          "text": {
            "title": "Cách khai báo hàm ảo trong c++",
            "content": "Trong đó*lb *return-type* là kiểu dữ liệu trả về của phương thức. *lb *name* là tên của phương thức.",
            "code": "virtual <return-type> <name>() { *lb // code *lb }"
          }
        }
      },
      "uUCbdPZVhENQSiuNHFqa": {
        "parameters": {
          "eRequest": "different",
          "multilevel_inheritance": true,
          "single_inheritance": true
        },
        "response": {
          "text": {
            "title": "Khác nhau giữa đơn kế thừa và kế thừa đa tầng?",
            "content": "Tính đơn thừa kế: là tính chất cho phép một lớp chỉ có thể kế thừa từ một lớp cơ sở duy nhất. Tính đa thừa kế: là tính chất cho phép một lớp có thể kế thừa từ nhiều lớp cơ sở."
          }
        },
        "intent": "iCompare"
      },
      "uuSe6QnACbywmtYh2EhC": {
        "response": {
          "text": {
            "code": "dynamic_cast<type> (expr)",
            "content": "Trong đó*lb *dynamic_cast* thực hiện ép kiểu động.*lb *type* là kiểu dữ liệu muốn ép.",
            "title": "Cú pháp ép kiểu động (c++):"
          }
        },
        "parameters": { "eRequest": "declare", "dynamic_casting": true },
        "intent": "iWhat"
      },
      "v8Z6Yk6UpRQ63qYZlaXM": {
        "parameters": { "class": true, "eRequest": "specification" },
        "response": {
          "text": {
            "content": "được khai báo bằng từ khóa class. *lb nó chứa các biến (còn gọi là thuộc tính) hay các hàm. *lb  Các phần tử của class được quản lý bởi ba thuộc tính truy cập: private, protected hoặc public.",
            "title": "Lớp có những đặc điểm gì ?"
          }
        },
        "intent": "iWhat"
      },
      "vcwXa3V6GyttXAVAybfh": {
        "response": {
          "text": {
            "content": "*public* và *protected* quy định quyền truy cập của các thuộc tính, phương thức, hay lớp được khai báo với từ khóa đó.",
            "title": "Sự giống nhau giữa public và protected"
          }
        },
        "intent": "iCompare",
        "parameters": { "public": true, "eRequest": "same", "protected": true }
      },
      "vjCiJrMwydrDbAVdqab1": {
        "parameters": {
          "eRequest": "advantage",
          "operator": true,
          "overloading_op": true
        },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "Giúp cho chương trình dễ hiểu và dễ truy tìm lỗi.",
            "title": "Toán tử đa năng có ưu điểm gì ?"
          }
        }
      },
      "vx7XYdiFKlQzuQw3Tvjk": {
        "response": {
          "text": {
            "content": "Khi định nghĩa một lớp mới kế thừa một lớp hiện tại thì lớp mới gọi là *lớp kế thừa* (derived class) và lớp hiện tại sẽ là *lớp cơ sở* (base class) của lớp đó.",
            "title": "Sự giống nhau giữa lớp cơ sở và lớp kế thừa"
          }
        },
        "parameters": {
          "derived_class": true,
          "eRequest": "same",
          "base_class": true
        },
        "intent": "iCompare"
      },
      "wrSKDjQ9dV7cgu3gStGg": {
        "intent": "iCompare",
        "parameters": { "override": true, "overload": true, "eRequest": "same" },
        "response": {
          "text": {
            "content": "Chúng là 2 khái niệm đi liền với tính đa hình trong lập trình hướng đối tượng.",
            "title": "Sự giống nhau giữa nạp chồng và ghi đè"
          }
        }
      },
      "x0e3sVgY4ThuINfLxJ66": {
        "parameters": { "eRequest": "declare", "casting": true },
        "response": {
          "text": {
            "code": "(type) expression",
            "content": "Trong đó*lb *type* là kiểu dữ liệu bạn muốn",
            "title": "Cú pháp ép kiểu (c++):"
          }
        },
        "intent": "iWhat"
      },
      "xCXAAKwqiOHB5SunfDOZ": {
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_static_cast.png?alt=media&token=d00ef7d5-34ff-40c3-ba2d-bea6542250d7"
          },
          "text": { "title": "ví dụ về static_cast?" },
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonUrl": "https://cpp.daynhauhoc.com/4/2-ep-kieu-du-lieu/",
            "buttonText": "Tìm hiểu thêm"
          }
        },
        "intent": "iWhat",
        "parameters": { "eRequest": "example", "static_casting": true }
      },
      "xXTBsKMWhD43Ja1lBPEJ": {
        "parameters": {
          "eRequest": "example",
          "operator": true,
          "binary_op": true
        },
        "response": {
          "text": { "title": "ví dụ về binary operation?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_binary_operation.png?alt=media&token=11e70f0d-ccba-4e41-a43e-4d5470f6a8a6"
          }
        },
        "intent": "iWhat"
      },
      "xduVgeF1etEvilb18MXV": {
        "response": {
          "card": {
            "buttonUrl": "https://cpp.daynhauhoc.com/4/2-ep-kieu-du-lieu/",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm"
          },
          "text": {
            "title": "ví dụ về ép kiểu ngầm định?",
            "content": "float f_value = 10.0f; *lb double d_value(f_value);"
          }
        },
        "parameters": { "default_casting": true, "eRequest": "example" },
        "intent": "iWhat"
      },
      "yO10fH2k74FmTWGIrSOZ": {
        "parameters": {
          "eRequest": "different",
          "polymorphism": true,
          "inheritance": true
        },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/iCompare%2Fcompare-inheritance-polymorphism.PNG?alt=media&token=16b8e82c-7cc0-436d-bdef-07d698b7fa37"
          },
          "text": { "title": "Khác nhau giữa kế thừa và đa hình?" },
          "card": {
            "title": "Bấm nút bên dưới để hiểu thêm nè :D",
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://techblog.vn/su-khac-biet-cua-ke-thua-va-da-hinh-trong-java"
          }
        },
        "intent": "iCompare"
      },
      "yk1jdf4hlKfBdsHq64zk": {
        "intent": "iWhat",
        "parameters": {
          "eRequest": "example",
          "eConnector": "in",
          "polymorphism": true,
          "ambiguity": true
        },
        "response": {
          "text": { "title": "ví dụ về ambiguity trong đa hình?" },
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_ambiguity_polymorphism.png?alt=media&token=6dfca11c-b329-413e-ba50-44cbe020a573"
          }
        }
      },
      "zC2jPpONQQwp4A9n5PYl": {
        "parameters": { "overload": true, "eRequest": "define" },
        "intent": "iWhat",
        "response": {
          "text": {
            "content": "là các phương thức nằm trong cùng 1 lớp , có cùng tên với nhau nhưng có danh sách đối số khác nhau.",
            "title": "Nạp chồng là sao ?"
          }
        }
      },
      "zJxQRne6Vjk9kLLRQGYt": {
        "parameters": { "eRequest": "declare", "interface": true },
        "response": {
          "text": {
            "code": "interface <tên interface> {*lb // Khai báo các thành phần bên trong interface*lb }",
            "title": "Cách khai báo interface",
            "content": "Trong đó*lb *interface* là từ khóa dùng để khai báo*lb *tên interface* là tên do người dùng đặt và tuân theo các quy tắc đặt tên*lb *Lưu ý* để tránh nhầm lẫn với lớp kế thừa thì khi đặt tên interface người ta thường thêm tiền tố 'i' để nhận dạng."
          }
        },
        "intent": "iWhat"
      },
      "zQSv7eQy4nqMwKrO7MUh": {
        "parameters": { "eRequest": "example", "overloading_func": true },
        "response": {
          "image": {
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-dphgsx.appspot.com/o/Example%2Fexample_overloading_function.png?alt=media&token=3eeee9a4-09c7-497a-8b9a-2e28012f387f"
          },
          "card": {
            "buttonText": "Tìm hiểu thêm",
            "buttonUrl": "https://www.stdio.vn/articles/nap-chong-ham-function-overloading-145",
            "title": "Bấm nút bên dưới để hiểu thêm nè :D"
          },
          "text": { "title": "ví dụ về nạp chồng hàm?" }
        },
        "intent": "iWhat"
      }
    }
  }
  