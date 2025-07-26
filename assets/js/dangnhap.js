//Chỉ cho phép chữ cái tiếng Anh thường và chữ số, tối thiểu 4 ký tự
function isValidName(inputName) {
    return /^[a-z0-9]{4,}$/.test(inputName.trim());
}

//Ít nhất có 1 chữ cái in hoa,1 chữ thường 1 chữ số, không khoảng trắng và tối thiểu 8 ký tự
function isValidPass(pass) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{8,}$/.test(pass.trim());
}

document.addEventListener("DOMContentLoaded", () => {
    loadDangNhapPage();
});

function loadDangNhapPage() {
    // Chỉ thực hiện khi form phản hồi có tồn tại
    if (document.getElementById('dn-form') == null) return;

    document.getElementById("dn-form").addEventListener("submit", function (e) {
        const inputName = document.getElementById("inputName").value;
        const pass = document.getElementById("password").value;

        let errors = [];

        if (inputName.length < 4) {
            errors.push("Tên tài khoản phải có ít nhất 4 ký tự!");

        } else if (!isValidName(inputName)) {
            errors.push("Tên tài khoản không hợp lệ");
        }

        if (pass.length < 8) {
            errors.push("Mật khẩu phải có ít nhất 8 ký tự!")
        }
        else if (!isValidPass(pass)) {
            errors.push("Mật khẩu không hợp lệ");
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại: \n- " + errors.join("\n- "));
            e.preventDefault();
        }

        else {
            alert("Đăng nhập thành công!");
        }
    });
}
