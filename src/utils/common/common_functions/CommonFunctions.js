import moment from 'moment';

export const isNotEmpty = (val) => {
    if (val != undefined && val != null && val != "" && val != {}) return true;
    return false;
}

export const phoneValidation = phone => {
    if (!phone || phone.length <= 0) return 'Required';
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneno.test(phone)) {
        return 'Please enter a valid Phone No';
    }
    return '';
}
export const mobileValidation = mobile => {
    if (!mobile || mobile.length <= 0) return 'Required';
    var mobilePattern =/^[6-9][0-9]{9}$/;
    if (mobilePattern.test(mobile)) {
        return true;
    }
    else{
        return 'Please enter a valid Mobile No';
    }
}
export const passwordValidation = (password) => {
    if (!password || password.length <= 0) return 'Required';
    const passwordPattern =/^(?!.*(abc|xyz|ABC|XYZ|123|890))(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (passwordPattern.test(password)){
            return ' ';
    }
    else{
        return 'Invalid Password';
    }
  };
export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Required';
    return '';
};

export const nameValidator = value => {
    const re = /^[a-zA-Z .]*$/;
  //  if (!value || value.length <= 0) return 'Required';
    if (!re.test(value))
    {
         return 'Please enter a valid Name';
    }
    else{
        return '';
    }    
};

export const pinCodeValidator = value => {
    const re = /^[0-9]{6}$/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter valid OTP';
    return '';
};

export const IFSCValidator = value => {
    const re = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid IFSC';
    return '';
};

export const accountNoValidator = value => {
    const re = /^\d{9,18}$/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid Account Number';
    return '';
};

export const confirmAccountNoValidator = (value, account) => {
    const re = /^\d{9,18}$/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid Account Number';
    if (value != account) return 'Account No and Confirm Account No does not match'
    return '';
};

export const upiValidator = value => {
    const re = /^\w+@\w+$/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid UPI';
    return '';
};

export const panValidator = value => {
    const re = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid PAN No';
    return '';
};

export const gstValidator = value => {
    const re = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/;
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid GST';
    return '';
};

export const addressValidator = value => {
    const re = /^[#.0-9a-zA-Z\s, -/]+$/
    if (!value || value.length <= 0) return 'Required';
    if (!re.test(value)) return 'Please enter a valid Address';
    return '';
};

export const confirmPasswordValidator = (value, account) => {
    if (value == '' || value.length <= 0) return 'Required';
    if (value != account) return 'Please enter the same Password as above';
    return '';
};

export const toIndianRupee = (amount) => {
    if (amount != undefined) {
        const Rupee = amount.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
        return Rupee;
    }
};

export const numbersOnly = (value) => {
    if (value != undefined) {
        return /^\d+$/.test(value.toString()) || value === '' ? " " : "Enter Numbers Only"
    }
};

export const decimalOnly = (value) => {
    if (value != undefined) {
        return /^\d+\.\d{0,8}$/.test(value.toString()) || value === '' ? true : false
    }
};

export const alphaNumaric = (value) => {
    if (value != undefined) {
        return /^[0-9a-zA-Z]+$/.test(value.toString()) || value === '' ? true : false
    }
};

export const alphabetOnly = (value) => {
    if (value != undefined) {
        return /^[A-Za-z\s]+$/.test(value.toString()) || value === '' ? true : false
    }
};


export const IFSCValid = (value) => {
    if (value != undefined) {
        return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value.toString()) ? true : false
    }
}

export const emailValid = (value) => {
    if (value != undefined) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value.toString()) ? '' : 'Enter a valid EmailID'
    }
}

export const panValid = (value) => {
    if (value != undefined) {
        return /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(value.toString()) ? true : false;
    }
}
