// node style callback

function response(err, data) {
    // error?
    if (err) {
        console.error(err)
    }
    else {
        console.log(data)
    }
}

ajax('https://eample.com', response)