//Chỉ cho phép chữ cái tiếng Anh thường và chữ số, tối thiểu 4 ký tự
function isValidName(inputName) {
    return /^[a-z0-9]{4,}$/.test(inputName.trim());
}

//Ít nhất có 1 chữ cái in hoa, 1 chữ số, 1 ký tự đặt biệt, không khoảng trắng và tối thiểu 8 ký tự
function isValidPass(pass) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{8,}$/.test(pass.trim());
}


document.addEventListener("DOMContentLoaded", () => {
    // Chỉ thực hiện khi form phản hồi có tồn tại
    if (document.getElementById('dn-form') == null) return;

    document.getElementById("dn-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const inputName = document.getElementById("inputName").value;
        const pass = document.getElementById("password").value;

        let errors = [];

        if (!isValidName(inputName)) {
            errors.push("Tên tài khoản không hợp lệ");
        }

        if (!isValidPass(pass)) {
            errors.push("Mật khẩu không hợp lệ")
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại: \n- " + errors.join("\n- "));
        }

        else {
            alert("Đăng nhập thành công!");
        }
    });
});
