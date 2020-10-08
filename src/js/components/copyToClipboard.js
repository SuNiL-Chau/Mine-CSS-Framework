// source https://codepen.io/shaikmaqsood/pen/XmydxJ
// copy Text to Clipboard
export default function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}