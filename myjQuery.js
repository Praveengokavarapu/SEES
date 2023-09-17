$(document).ready(function(){
    $(".home-page").hide()
    $('.home-page').addClass('current-inner-div');
    $('.home-page').removeClass('inner-div-sidebar')
    $(".table-page").hide();
    $(".graph-page").hide();
    $("#home-page").show()
    $("#table-page").hide();
    $("#graph-page").hide();
    $(".fa-angle-down").hide()
    $(".close").hide()
  

    $(".side-menu").click(function(){
      $(".side-menu").toggle()
      $(".sidebar").toggle();
      $(".close").toggle()
    });
    $(".close").click(function(){
      $(".side-menu").toggle()
      $(".sidebar").toggle();
      $(".close").toggle()
    });
    $("#dashboards").click(function(){
        $(".home-page").toggle();
        $(".table-page").toggle();
        $(".graph-page").toggle();
        $(".fa-angle-down").toggle();
        $(".fa-angle-right").toggle();

      });
      $(".table-page").click(function(){
        $("#home-page").hide();
        $("#graph-page").hide();
        $("#table-page").show();
        $(".home-page").removeClass('current-inner-div');
        $(".home-page").addClass('inner-div-sidebar');
        $(".table-page").addClass('current-inner-div');
        $(".graph-page").removeClass('current-inner-div');
        $(".table-page").removeClass('inner-div-sidebar');
        $(".graph-page").addClass('inner-div-sidebar');
        

      });
      $(".home-page").click(function(){
        $("#table-page").hide();
        $("#graph-page").hide();
        $("#home-page").show();
        $(".graph-page").removeClass('current-inner-div');
        $(".graph-page").addClass('inner-div-sidebar');
        $(".home-page").addClass('current-inner-div');
        $(".table-page").removeClass('current-inner-div');
        $(".home-page").removeClass('inner-div-sidebar');
        $(".table-page").addClass('inner-div-sidebar');

      });
      $(".graph-page").click(function(){
        $("#home-page").hide();
        $("#table-page").hide();
        $("#graph-page").show();
        $(".home-page").removeClass('current-inner-div');
        $(".home-page").addClass('inner-div-sidebar');
        $(".graph-page").addClass('current-inner-div');
        $(".table-page").removeClass('current-inner-div');
        $(".graph-page").removeClass('inner-div-sidebar');
        $(".table-page").addClass('inner-div-sidebar');

      });






      var tbody = $('table tbody');
    var pagination = $('#pagination');

    // Sample data array
    var data = [
        { name: 'Ramesh', email: 'ramesh@gmail.com', date: '24-04-2004',salary:"$5000",status:"Professional" },
        { name: 'Praveen', email:'praveen@gmail.com' , date: '21-05-2004',salary:"$4300",status:"Professional" },
        { name: 'Karan', email: 'karan@gmail.com', date: '12-04-2003',salary:"$3200",status:"Current" },
        { name: 'Varshit', email: 'varshit@gmail.com', date: '16-05-2002',salary:"$4320",status:"Current" },
        { name: 'Eshwar', email: 'eshwar@gmail.com', date: '24-11-2004',salary:"$3110",status:"Professional" },
        { name: 'Sai', email: 'sai@gmail.com', date: '23-04-2001',salary:"$4500",status:"Resigned" },
        { name: 'Jaswanth', email:'jaswanth@gmail.com', date: '14-04-2002',salary:"$2100.98",status:"Professional" },
        { name: 'Yashwant', email: 'yaswant@gmail.com', date: '04-04-2002',salary:"$3600.07",status:"Professional" },
        { name: 'Ashish', email: 'ashish@gmail.com', date: '04-03-2004',salary:"$5400.21",status:"Current" },
        { name: 'Govardan', email: 'govardhan@gmail.com', date: '17-03-2004',salary:'$6000.40',status:"Current" },
        { name: 'Kusuma', email:'kusuma@gmail.com', date: '18-08-2004',salary:"$3022.45",status:"Resigned" },
        { name: 'Pranay', email: 'pranay@gmail.com', date: '14-09-2003',salary:"$3200",status:"Professional" },
        { name: 'Rahul', email: 'rahul@gmail.com', date: '24-06-2004',salary:"$4500",status:"Professional" },
        { name: 'Bharat', email: 'bharat@gmail.com', date: '14-07-2002',salary:"$5600",status:"Current" },
        { name: 'Bhagavan', email: 'bhagavan@gmail.com', date: '15-05-2003',salary:"$3400",status:"Professional" },
        { name: 'Lalit', email: 'lalit@gmail.com', date: '14-03-2004',salary:"$3200",status:"Current" },
        { name: 'Pavan', email: 'pavan@gmail.com', date: '12-11-2004',salary:"$4560",status:"Professional" },
        { name: 'Anudeep', email: 'anudeep@gmail.com', date: '23-04-2004',salary:"$6750",status:"Resigned" },
        { name: 'Swati', email: 'swati@gmail.com', date: '15-06-2003',salary:"$5384",status:"Professional" },
        { name: 'Mathin', email: 'mathin@gmail.com', date: '28-11-2003',salary:"$8224",status:"Professional" },
        { name: 'Rajeswari', email: 'rajeswari@gmail.com', date: '19-04-2002',salary:"$2339",status:"Current" },
        { name: 'Ankitha', email: 'ankitha@gmail.com', date: '24-01-2004',salary:"$1218",status:"Professional" },
        { name: 'Jayanthi', email: 'jayanthi@gmail.com', date: '24-02-2001',salary:"$1923",status:"Professional" },
        { name: 'Kumar', email: 'kumar@gmail.com', date: '16-06-2003',salary:"$5384",status:"Professional" },
        { name: 'Ravi', email: 'ravi@gmail.com', date: '21-11-2003',salary:"$8124",status:"Professional" },
        { name: 'Suresh', email: 'suresh@gmail.com', date: '12-04-2002',salary:"$2389",status:"Current" },
        { name: 'Uday', email: 'uday@gmail.com', date: '24-03-2004',salary:"$1211",status:"Professional" },
        { name: 'Suraj', email: 'suraj@gmail.com', date: '24-02-2001',salary:"$1823",status:"Professional" },

        
        // Add more data here...
    ];

    var itemsPerPage = 7; // Number of items per page
    var currentPage = 1; // Current page

    // Function to display the table rows for the current page
    function displayTableRows() {
        tbody.empty();
        var startIndex = (currentPage - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, data.length);

        for (var i = startIndex; i < endIndex; i++) {
            var newRow = $('<tr>');
            var icon1=$('<i>').addClass("fa fa-ellipsis-v icon")
            var icon2=$('<i>').addClass("fa fa-pencil icon")
            var status=$('<td>')
            var stat=$('<p>').text((data[i].status) )
            
            
            status.append(stat)
            

            stat.addClass(`${data[i].status} status`)
            newRow.append($('<i>').addClass("fa fa-square-o"))
            newRow.append($('<td>').text(data[i].name));
            
            newRow.append($('<td>').text(data[i].email));
            newRow.append($('<td>').text(data[i].date));
            newRow.append($('<td>').text(data[i].salary));
            newRow.append(status);

            newRow.append(icon1,icon2);
            tbody.append(newRow);
        }
    }

    // Function to generate pagination links
    function generatePaginationLinks() {
        pagination.empty();
        var totalPages = Math.ceil(data.length / itemsPerPage);

        // Previous page link
        var prevLi = $('<p>').text('Previous');
        
        if (currentPage === 1) {
            prevLi.addClass('disabled');
           

            
        } else {
           
            prevLi.on('click', function () {
                
                
                
                currentPage--;
                
                displayTableRows();
                generatePaginationLinks();
                
            });
        }

        pagination.append(prevLi);

        // Page number links
        for (var i = 1; i <= totalPages; i++) {
            var li = $('<p>').text(i);

            // Highlight the current page
            if (i === currentPage) {
                li.addClass('active');
                li.addClass('current-page')
            }

            li.on('click', function () {
                currentPage = parseInt($(this).text());
                displayTableRows();
                generatePaginationLinks();
            });

            pagination.append(li);
        }

        // Next page link
        var nextLi = $('<p>').text('Next');
        if (currentPage === totalPages) {
            nextLi.addClass('disabled');
        } else {
            nextLi.on('click', function () {
                currentPage++;
                displayTableRows();
                generatePaginationLinks();
            });
        }

        pagination.append(nextLi);
    }

    // Initial display
    displayTableRows();
    generatePaginationLinks();
  });