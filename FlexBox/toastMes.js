// Hàm toast
function toast({
    type = 'warning',
    duration = 1000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Auto remove
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);


        // Remove onclick
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
        const delay = (duration / 500).toFixed(2);
        // Nhận giá trị icon dựa trên type nhập vào
        const icons = {
            success: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-xmark'
        }
        const icon = icons[type];
        // Nhận giá trị titles dựa trên title nhập vào
        const titles = {
            success: 'Success',
            warning: 'Warning',
            error: 'Error'
        }
        const title = titles[type];
        // Nhận giá trị messenge dựa trên title nhập vào
        const messenges = {
            success: 'Mọi thứ diễn ra bình thường, không có lỗi xảy ra',
            warning: 'Có gì đó không đúng',
            error: 'Lỗi, xin vui lòng kiểm tra lại'
        }
        const mess = messenges[type];
        // Thêm toast dựa trên type vào list
        toast.classList.add('toast', `toast--${type}`);
        // Chạy animation
        toast.style.animation = `slideInLeft ease .7s, fadeOut linear 1s ${delay}s forwards`;
        // Chương trình chạy
        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${mess}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fa-solid fa-x"></i>
                        </div>
                    `;
        // Thêm giá trị vào main
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({ type: 'success', duration: 1000 })
}

function showWarningToast() {
    toast({ type: 'warning', duration: 1000 })
}

function showErrorToast() {
    toast({ type: 'error', duration: 1000 })
}