function isValidName(inputName) {
    return /^[A-Za-zÀ-Ỹà-ỹ\s]+$/.test(inputName.trim());
}

function isValidPhone(phone) {
    return /^(0|\+84)\d{9}$/.test(phone.trim());
}

function isValidGmail(email) {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim());
}

function isValidMessage(msg) {
    return msg.trim().length > 0;
}

document.getElementById("lh-fb-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Không cho gửi form nếu có lỗi

    const inputName = document.getElementById("inputName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    let errors = [];

    if (!isValidName(inputName)) {
        errors.push("Họ tên không hợp lệ.");
    }

    if (!isValidGmail(email)) {
        errors.push("Email phải là @gmail.com.");
    }

    if (!isValidPhone(phone)) {
        errors.push("Số điện thoại không hợp lệ.");
    }

    if (!isValidMessage(message)) {
        errors.push("Nội dung không được để trống.");
    }

    if (errors.length > 0) {
        alert("Vui lòng kiểm tra lại:\n- " + errors.join("\n- "));
    } 
    
    else {
        alert("Gửi phản hồi thành công!");
    }
});