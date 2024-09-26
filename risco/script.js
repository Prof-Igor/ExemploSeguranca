function executeCode() {
    var userInput = document.getElementById('userInput').value;
    // Este eval é intencional para demonstrar vulnerabilidade de XSS
    eval(userInput);

    if (userInput.includes(atob("YWxlcnQo"))){
        alertDica();
    }
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function alertDica() {
    alert(b64DecodeUnicode("TmEgw7psdGltYSBhdWxhLCBvIHNpbMOqbmNpbyBuw6NvIGNoZWdvdS4gTyBwcm9mZXNzb3IgZmFsb3UsIG1hcyB2b2PDqiBvdXZpdT8gTyBiYW5jbyBkZSBkYWRvcywgdW0gcmVwb3NpdMOzcmlvIGRlIG1pc3TDqXJpb3MsIGZvaSBhY2Vzc2Fkbywgc3VhcyBwb3J0YXMgYWJlcnRhcyBwb3IgdW0gw7puaWNvIGNvbWFuZG8uIEFnb3JhLCB2b2PDqiBkZXZlIHNlZ3VpciBhIHRyaWxoYSBkZWl4YWRhLiBWw6Egw6Agcm90YSBxdWUgbyBzY3JpcHQgbm9tZW91Li4uIEzDoSwgbm8gY8OzZGlnbyBvY3VsdG8sIHZvY8OqIGVuY29udHJhcsOhIG8gcHLDs3hpbW8gZW5pZ21hLiBRdWFsIHNlcsOhIG8gZGVzdGlubyBkZXNzYSBidXNjYT8gTyB0ZW1hIGRhIHVsdGltYSBhdWxhIGRlIHJlc3BvbmRlcsOhLg=="));
}
