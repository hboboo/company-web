function check(form) {

 if (form.name.value == '') {
  alert("请输入姓名!");
  form.name.focus();
  return false;
 }
 if ($("#tel").val() == '') {
  alert("请添加手机！");
  return false;
 }
 if (!$("#tel").val().match(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/)) {
  alert("手机格式错误！");
  return false;
 }
 return true;
} 

