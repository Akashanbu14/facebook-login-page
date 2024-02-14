$(document).ready(function() {
  $('#signup') .validate({
    rules:{
        fname:{
            required: true,
            minlength: 5,
        },
        sname:{
            required: true,
            minlength: 5,
        },
        mobile:{
            required: true,
            minlength: 10,
        },
        password:{
            required: true,
            minlength: 8,
        },
        Date:{
            required: true,
        },
        month:{
            required: true,
        },
        year:{
            required: true,
        },
        Gender:{
            required: true,
        }
    }
  })
});