function validate() {
    
    // 아이디가 적합한지 검사할 정규식
    const re = /^[a-zA-Z0-9]{6,12}$/
    
    // 비밀번호가 적합한지 검사할 정규식
    const re2 = /^[a-zA-Z0-9]{8,16}$/ 
    
    // 이메일이 적합한지 검사할 정규식
    const re3 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (signUp_form.user_id == "") {
        alert("아이디를 입력해 주세요.");
        signUp_form.user_id.focus();
        return false;
    }

    if (!check(re, signUp_form.user_id, "아이디를 입력 해주세요.")) {
        return false;
    }

    if (signUp_form.user_pw == "") {
        alert("비밀번호를 입력해 주세요.");
        signUp_form.user_pw.focus();
        return false;
    }

    if (!check(re2, signUp_form.user_pw, "비밀번호를 입력 해주세요.")) {
        return false;
    }

    if (signUp_form.user_re_pw == "") {
        alert("비밀번호를 입력해 주세요.");
        signUp_form.user_re_pw.focus();
        return false;
    }

    if (signUp_form.user_pw.value != signUp_form.user_re_pw.value) {
        alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
        signUp_form.user_re_pw.value = "";
        signUp_form.user_re_pw.focus();
        return false;
    }

    if (signUp_form.user_name.value == "") {
        alert("이름을 입력해 주세요");
        signUp_form.user_name.focus();
        return false;
    }

    if (signUp_form.user_email.value == "") {
        alert("이메일을 입력해 주세요");
        signUp_form.user_email.focus();
        return false;
    }

    if (!check(re3, signUp_form.user_email, "적합하지 않은 이메일 형식입니다.")) {
        return false;
    }

    sign_up_check();

    // 정규식 체크 함수
    function check(re, what, message) {
        if (re.test(what.value)) {
            return true;
        }else{
            alert(message);
            what.focus();
        }
    }

    // server에 fetch로 data 처리 함수
    function sign_up_check() {

        fetch("/sign_up_process", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `user_id = ${signUp_form.user_id.value}&user_pw=${signUp_form.user_pw.value}&user_name=${signUp_form.user_name.value}&user_email=${signUp_form.user_email.value}&user_sex="남자"`
        }).then(response => response.json())
          .then(json => {
            if (json.to_sign_up === true) {
              alert("회원가입 완료");
              window.location = "/sign_in"
            } else if(json.to_sign_up === false){
              alert("Server Error");
            } 
          })
          .catch(err => console.log(err));
      }
}