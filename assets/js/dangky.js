//Chỉ cho phép chữ cái tiếng Anh thường, chữ số và tối thiểu 4 ký tự
function isValidName(inputName) {
    return /^[a-z0-9]{4,}$/.test(inputName.trim());
}

//Email có format là @gamil.com
function isValidGmail(email) {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim());
}

// Đảm bảo sđt có 10 chữ số 
function isValidPhone(phone) {
    return /^(0|\+84)\d{9}$/.test(phone.trim());
}

//Ít nhất có 1 chữ cái in hoa, 1 chữ số, 1 ký tự đặt biệt, không khoảng trắng và tối thiểu 8 ký tự
function isValidPass(pass) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{8,}$/.test(pass.trim());
}


document.addEventListener("DOMContentLoaded", () => {
    // Chỉ thực hiện khi form phản hồi có tồn tại
    if (document.getElementById('dk-form') == null) return;

    document.getElementById("dk-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const inputName = document.getElementById("inputName").value;
        const pass = document.getElementById("password").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        let errors = [];

        if (inputName.length < 4) {
            errors.push("Tên tài khoản phải có ít nhất 4 ký tự!");

        } else if (!isValidName(inputName)) {
            errors.push("Tên tài khoản không được chứa ký tự đặt biệt hoặc khoảng trắng!");
        }

        if (!isValidGmail(email)) {
            errors.push("Gmail không hợp lệ!");
        }

        if (!isValidPhone(phone)) {
            errors.push("Số điện thoại không hợp lệ!");
        }

        if (pass.length < 8) {
            errors.push("Mật khẩu phải có ít nhất 8 ký tự!")
        }
        else if (!isValidPass(pass)) {
            errors.push("Mật khẩu không có khoảng trắng, phải chứa ít 1 ký tự in hoa, 1 ký tự đặt biệt và 1 chữ số!");
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại: \n- " + errors.join("\n- "));
        }

        else {
            alert("Đăng ký thành công!");
        }
    });
});
