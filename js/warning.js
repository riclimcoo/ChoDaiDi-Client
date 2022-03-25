const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
export function alert(message, type) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alertPlaceholder === null || alertPlaceholder === void 0 ? void 0 : alertPlaceholder.append(wrapper);
}
