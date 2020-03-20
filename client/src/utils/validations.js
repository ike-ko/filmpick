export const isRegistrationValid = (username, password, confirmPassword) => {
    let res = {
        success: true,
        message: ""
    }

    if (!username || !password || !confirmPassword) {
        res.message = "Username and/or password are missing!"
        res.success = false;
    }
    else if (password !== confirmPassword) {
        res.message = "Password does not match!";
        res.success = false;
    }
    
    return res;
}

export const isLoginValid = (username, password) => {
    let res = {
        success: true,
        message: ""
    }

    if (!username || !password) {
        res.message = "Username and/or password are missing!"
        res.success = false;
    }
    
    return res;
}

export const isSearchQueryValid = (query) => {
    let res = {
        success: true,
        message: ""
    }

    if (!query) {
        res.message = "Invalid search query"
        res.success = false;
    }

    return res;
}