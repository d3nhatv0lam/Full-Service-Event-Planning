function isValidLienHeName(inputName) {
    return /^[A-Za-zÀ-Ỹà-ỹ\s]+$/.test(inputName.trim());
}

// Đảm bảo sđt có 10 chữ số 
function isValidPhone(phone) {
    return /^(0|\+84)\d{9}$/.test(phone.trim());
}

//Email có format là abc@xyz.tmn
function isValidGmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.trim());
}

// Đảm bảo không bỏ trống Nội dung
function isValidMessage(msg) {
    return msg.trim().length > 10;
}

document.addEventListener("DOMContentLoaded", () => {
    loadLienHePage();
});

function loadLienHePage() {
    // Chỉ thực hiện khi form phản hồi có tồn tại
    if (document.getElementById('lh-fb-form') == null) return;

    document.getElementById("lh-fb-form").addEventListener("submit", function(e) {
        const inputName = document.getElementById("inputName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        let errors = [];

        if (!isValidLienHeName(inputName)) {
            errors.push("Họ và tên không được chứa số và ký tự đặc biệt");
        }

        if (!isValidGmail(email)) {
            errors.push("Email không hợp lệ");
        }

        if (!isValidPhone(phone)) {
            errors.push("Số điện thoại không hợp lệ");
        }

        if (!isValidMessage(message)) {
            errors.push("Nội dung phản hồi quá ngắn!");
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại:\n- " + errors.join("\n- "));
            e.preventDefault();
        } else {
            alert("Gửi phản hồi thành công!");
        }
    });
}