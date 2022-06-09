$(document).ready(function() {
    var idcount = 0;
    $("#form").submit(function(event) {
        event.preventDefault();
        idcount++;
        var Name = $("#fname").val();
        var Surname = $("#surname").val();
        var Gender = $("#gender:checked").val();
        var Email = $("#email").val();
        var Contact = $("#contact").val();
        var Address = $("#address").val();

        $("#tblData tbody").append("<tr><td>" + idcount + "</td>" + 
        "<td>" + Name + "</td>" +
        "<td>" + Surname + "</td>" +
        "<td>" + Gender + "</td>" +
        "<td>" + Email + "</td>" +
        "<td>" + Contact + "</td>" +
        "<td>" + Address + "</td>" +
        "<td><button class='btnEdit'>Edit</button>" + 
        "<button class='btnDelete'>Delete</button></td></tr>");

        $(".btnEdit").bind("click", Edit);
        $(".btnDelete").bind("click", Delete);
    });

    function Edit() {
        var par = $(this).parent().parent();
        var tdName = par.children("td:nth-child(2)");
        var tdSurname = par.children("td:nth-child(3)");
        var tdGender = par.children("td:nth-child(4)");
        var tdEmail = par.children("td:nth-child(5)");
        var tdContact = par.children("td:nth-child(6)");
        var tdAddress = par.children("td:nth-child(7)");
        var tdButtons = par.children("td:nth-child(8)");
        
        tdName.html("<input type='text' value='" + 
           tdName.html() + "'>");
        tdSurname.html("<input type='text' value='" + 
           tdSurname.html() + "'>");
        tdGender.html("<input type='text' value='" + 
           tdGender.html() + "'>");
        tdEmail.html("<input type='text' value='" + 
           tdEmail.html() + "'>");
        tdContact.html("<input type='text' value='" + 
           tdContact.html() + "'>");
         tdAddress.html("<input type='text' value='" + 
           tdAddress.html() + "'>");
         tdButtons.html("<button class='btnSave'>Save</button>");

        $(".btnSave").bind("click", Save);

    }

    function Save() {
      var par = $(this).parent().parent();
      var tdName = par.children("td:nth-child(2)");
      var tdSurname = par.children("td:nth-child(3)");
      var tdGender = par.children("td:nth-child(4)");
      var tdEmail = par.children("td:nth-child(5)");
      var tdContact = par.children("td:nth-child(6)");
      var tdAddress = par.children("td:nth-child(7)");
      var tdButtons = par.children("td:nth-child(8)");

      tdName.html(tdName.children("input[type=text]").val());
      tdSurname.html(tdSurname.children("input[type=text]").val());
      tdGender.html(tdGender.children("input[type=text]").val());
      tdEmail.html(tdEmail.children("input[type=text]").val());
      tdContact.html(tdContact.children("input[type=text]").val());
      tdAddress.html(tdAddress.children("input[type=text]").val());
      tdButtons.html("<button class='btnEdit'>Edit</button>" + 
         "<button class='btnDelete'>Delete</button>");

      $(".btnEdit").bind("click", Edit);
      $(".btnDelete").bind("click", Delete);

    }

    function Delete() {
       var par = $(this).parent().parent();
       par.remove();
    }

    $("#hide").click(function(){
       $("#tblData").fadeToggle();
    })
});