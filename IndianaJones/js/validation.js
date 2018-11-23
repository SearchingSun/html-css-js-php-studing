// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }else {
                    var arrey = [];
                    for( var i = 1; i < 7; i++ ){
                        var pos = "validationTooltip0" + i;
                        var val = document.getElementById(pos).value;
                        arrey[i-1] = val
                    }
                    var ob = {};
                    ob.fstName = arrey[0];
                    ob.secName = arrey[1];
                    ob.login = arrey[2];
                    ob.Email = arrey[3];
                    ob.pwd = arrey[4];
                    ob.pwd2 = arrey[5];
                    console.log(ob);
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
