const korOnly = /^[가-힣]+$/; // 한글만
const engOnly = /^[a-zA-z]+$/; // 영문만
const engLower = /^[a-z]+$/; // 영문 소문자만
const engUpper = /^[A-Z]+$/; // 영문 대문자만
const korEng = /^[가-힣a-zA-Z]+$/; // 한글 + 영문만

export const isRequired = (value) => {
    return value.trim() !== '';
}

export const isMinLength = (value, minLength) => {
    return value.length >= minLength;
}

export const emailCheck = (value) => {
    const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const message = '올바른 형식의 이메일을 입력해 주세요. (예 : example@gmail.com)';
    return regex.test(value);
}

export const nameCheck = (value) => {
    const regex = /^[가-힣]+$/;
    const message = '올바른 한글 이름을 입력해 주세요.'
    return regex.test(value);
}

export const pwCheck = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&\^{}[\]:;<>,.?\/#~_+\-=|`'"\\(){}[\]]{10,20}$/;
    const message = '비밀번호는 10~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
    return regex.test(value);
}

export const pinPwCheck = (value) => {
    const regex = /^\d{6}$/;
    const message = '6자리 숫자로 입력해 주세요.';
    return regex.test(value);
}

export const phoneCheck = (value) => {
    // const regex =  /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
    const regex =  /^(010)[0-9]{3,4}[0-9]{4}$/;
    const message = '올바른 휴대폰 번호를 입력해 주세요.'
    return regex.test(value);
}


