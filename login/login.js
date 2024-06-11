const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;
    }

    if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
    }

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue);
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    const hasUpperCase = /[A-Z]+/.test(passwordValue);
    const hasLowerCase = /[a-z]+/.test(passwordValue);
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
    }
    
    return true; // 모든 검증을 통과하면 true를 반환합니다.
}

const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;
    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);
    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
    }
    // Sanitized된 값 반환
    return sanitizedInput;
    };
    const sanitizedPassword =
check_xss(passwordValue);
// check_xss 함수로 비밀번호 Sanitize
const sanitizedEmail = check_xss(emailValue);
// check_xss 함수로 비밀번호 Sanitize
if (!sanitizedEmail) {
// Sanitize된 비밀번호 사용
return false;
}
if (!sanitizedPassword) {
// Sanitize된 비밀번호 사용
return false;
}

{
alert("쿠키를 저장합니다.", emailValue);
setCookie("id", emailValue, 1); // 1일 저장
alert("쿠키 값 :" + emailValue);
}
{ // 아이디 체크 x
setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if(get_id) {
    emailInput.value = get_id;
    idsave_check.checked = true;
    }
    }
    function session_set() { //세션 저장
        let session_id = document.querySelector("#typeEmailX");
        if (sessionStorage) {
        sessionStorage.setItem("Session_Storage_test", session_id.value);
        } else {
        alert("로컬 스토리지 지원 x");
        }
        }

        function session_get() { //세션 읽기
            if (sessionStorage) {
            return sessionStorage.getItem("Session_Storage_test");
            } else {
            alert("세션 스토리지 지원 x");
            }
            }

            function encodeByAES256(key, data){
                const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(""),
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC
                });
                return cipher.toString();
                }
                function decodeByAES256(key, data){
                const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(""),
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC
                });
                return cipher.toString(CryptoJS.enc.Utf8);
                }

                function encrypt_text(password){
                    const k = "key"; // 클라이언트 키
                    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
                    const b = password;
                    const eb = this.encodeByAES256(rk, b);
                    return eb;
                    console.log(eb);
                    }
                    function decrypt_text(){
                    const k = "key"; // 서버의 키
                    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
                    const eb = session_get();
                    const b = this.decodeByAES256(rk, eb);
                    console.log(b);
                    }
                    
            