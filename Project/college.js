function stdDetails() {
    var roll = document.getElementById('roll').value;
    var name = document.getElementById("stdName").value;
    var mail = document.getElementById("mail").value;
    var prn = document.getElementById("prn").value;
    var address = document.getElementById("address").value;
    var mobile = document.getElementById("mobile").value;

    var std = StudentModule.Student();
    std.setDetails(roll, name, mail, prn, address, mobile);
    var details = std.getDetails();
    document.getElementById("result").value = details;
}

var StudentModule = (function() {
    function Student() {
        var roll = 0;
        var name = "";
        var email = "";
        var prn = 0;
        var address = "";
        var mobile = 0;

        function _setroll(_roll) {
            roll = _roll;
        }

        function _getroll() {
            return roll;
        }

        function _setname(_name) {
            name = _name;
        }

        function _getname() {
            return name;
        }

        function _setemail(_email) {
            email = _email;
        }

        function _getemail() {
            return email;
        }

        function _setprn(_prn) {
            prn = _prn;
        }

        function _getprn() {
            return prn;
        }

        function _setaddress(_address) {
            address = _address;
        }

        function _getaddress() {
            return address
        }

        function _setmobile(_mobile) {
            mobile = _mobile;
        }

        function _getmobile() {
            return mobile
        }

        function setDetails(_roll, _name, _email, _prn, _address, _mobile) {
            _setroll(_roll);
            _setname(_name);
            _setemail(_email);
            _setprn(_prn);
            _setaddress(_address);
            _setmobile(_mobile);
        }

        function getDetails() {
            return "\tStudent Details\n\nRoll no = " + _getroll() + "\n\nName = " + _getname() + "\n\nEmail = " + _getemail() + "\n\nPrn no. = " + _getprn() + "\n\nAddress = " + _getaddress() + "\n\nMobile No. = " + _getmobile();
        }

        return {
            setDetails,
            getDetails
        }

    }
    return {
        Student
    }
})();