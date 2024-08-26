import Swal from "sweetalert2";

export const AlertWithConfirm = (
    {
        title,
        text,
        icon = 'error',
        cancelButtonText = 'ปิด',
        confirmButtonText = 'ตกลง',
        onPassed
    }) => {
    Swal.fire({
        icon, title, text, cancelButtonText, confirmButtonText,
        confirmButtonColor : '#f16a4b',
        allowOutsideClick: false,
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            onPassed(true);
        } else {
            onPassed(false);
        }
    })
}