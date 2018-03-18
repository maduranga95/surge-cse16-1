<?php session_start(); ?>

<?php
  //check if usser logged in
  if(!isset($_SESSION['username'])){
    header('Location: login.php');
  }
?>

<html>
<head>
  <title>
    SurgeOrb.com
  </title>

  <!-- Latest compiled and minified CSS -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/examstyle.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="distributor" content="Global" />
    <meta itemprop="contentRating" content="General" />
    <meta name="robots" content="All" />
    <meta name="revisit-after" content="7 days" />
    <meta name="description" content="The source of truly unique and awesome jquery plugins." />
    <meta name="keywords" content="slider, carousel, responsive, swipe, one to one movement, touch devices, jquery, plugin, bootstrap compatible, html5, css3" />
    <meta name="author" content="w3widgets.com">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='http://fonts.googleapis.com/css?family=Economica' rel='stylesheet' type='text/css'>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
    <!-- Respomsive slider -->
    <link href="css/responsive-calendar.css" rel="stylesheet">
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
    <style>
    body {
  padding-top: 50px;
  overflow: hidden;
}
#wrapper {
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 35px;
  left: 0;
  display: inline-block;
  background-color: #D6EAF8;
}
#main-wrapper {
  height: 100%;
  overflow-y: auto;
  padding: 50px 0 0px 0;
}
#main {
  position: relative;
  height: 100%;
  overflow-y: auto;
  padding: 0 15px;
}
#sidebar-wrapper {
  height: 100%;
  padding: 50px 0 0px 0;
  position: fixed;
  border-right: 1px solid gray;
  background-color: tan;
}
#sidebar {
  position: relative;
  height: 100%;
  overflow:hidden;
}
#sidebar .list-group-item {
      border-radius: 0;
      border-left: 0;
      border-right: 0;
      border-top: 0;
      background-color: tan;
      color : white;
}
@media (max-width: 992px) {
  body {
      padding-top: 0px;
  }
}
@media (min-width: 992px) {
  #main-wrapper {
      float:right;
  }
}
@media (max-width: 992px) {
  #main-wrapper {
      padding-top: 0px;
  }
}
@media (max-width: 992px) {
  #sidebar-wrapper {
      position: static;
      height:auto;
      max-height: 300px;
    border-right:0;
}
}
.footer {
  background-color:#ffffff;
bottom:0;
  position:fixed;
  padding:10px;
}


    </style>
</head>
<body>
  <div id="header" class="navbar navbar-default navbar-fixed-top" style="height:90; background:url(img/ab.jpg)"; >
      <div class="navbar-header" >
          <img src="img/nt.png" style="height:82;width:180px;padding-left: 10px; padding-top: 10px"/>
      </div>
      <nav class="collapse navbar-collapse" style="color:white;">
          <ul class="nav navbar-nav">
              <li>
                  <h1 style="font-family:'Courier New';">Welcome to SurgeOrb!</h1>
              </li>
              <!--<li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Navbar Item 2<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                      <li><a href="#">Navbar Item2 - Sub Item 1</a></li>
                  </ul>
              </li>
              <li>
                  <a href="#">Navbar Item 3</a>
              </li>-->
          </ul>
          <ul class="nav navbar-nav pull-right">
              <li class="dropdown1">
                  <img src="img/149071.png" width="30px" style="margin-left:3rem; margin-top:0.25rem;"/>
                  
                  <div class="dropdown">
                  <button onclick="myFunction()" class="dropbtn" ><?php echo $_SESSION['username'] ?>  <img src="drop.png" style="width: 10px; height: 10px"></button>
                    <div id="myDropdown" class="dropdown-content">
                      <a href="index.php"><img src="img/logout.jpg" style="width: 20px; height: 20px">&nbsp;&nbsp;Logout</a>
                      
                    </div>
                  </div>
                
              </li>
          </ul>
      </nav>
  </div>
  <div id="wrapper">
    <div id="sidebar-wrapper" class="col-md-1" style="background:url(img/ab.jpg); width: 150px">
              <div id="sidebar" style="background:url(img/ab.jpg)";>
                  
                    <div class="btn-group">
  <button class="button">Home</button>
  <button class="button" onclick="window.location.href='#">My Courses</button>
  <button class="button" onclick="window.location.href='progress.php'">Progress Check</button>
  <button class="button"   onclick="window.location.href='leave.html'">Leave Application</button>
</div>
                      <!--<li>
                          <a class="button" href="#" style="background:url(ab.jpg); height: 85px; padding-top: 33px"><i class="icon-home icon-1x"></i>Sidebar Item 1</a>
                      </li>
                      <li>
                          <a class="list-group-item" href="#" style="background:url(ab.jpg); height: 85px; padding-top: 33px"><i class="icon-home icon-1x"></i>Sidebar Item 2</a>
                      </li>
                      
                      <li>
                          <a class="list-group-item" href="#" style="background:url(ab.jpg); height: 85px; padding-top: 33px"><i class="icon-home icon-1x"></i>Sidebar Item 1</a>
                      </li>
                      <li>
                          <a class="list-group-item" href="#" style="background:url(ab.jpg); height: 85px; padding-top: 33px"><i class="icon-home icon-1x"></i>Sidebar Item 1</a>
                      </li>
                      <li>
                          <a class="list-group-item" href="#" style="background:url(ab.jpg); height: 85px; padding-top: 33px"><i class="icon-home icon-1x"></i>Sidebar Item 1</a>
                      </li>-->
                 
              </div>
          </div>
         <!-- <div class="item" style="top: 220px; left:370px; width:1320px; height:125px" >
            <p style="padding-left: 150px; padding-top: 10px; font-size: 50"><img src="voc.jpg" style="height: 100px ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RIVEROAK VOCATIONAL CENTER</p>
            

          </div>-->
          <div id="main-wrapper" class="col-md-11 pull-right">
              <div id="main" style="padding-left: 50px;">
                <div class="page-header">
                  <!--h3 style="font-weight: bold; font-family:'Courier New'; padding-top: 10px">You have logged in to Examination Division</h3-->
                </div>
                <div class="item" style="top: 290px; left:280px; width:1250px; height:350px" >
                <p style="padding-left: 50px; padding-top: 20px; font-size: 30; font-weight: bold;">Site News</p>
                <div class="item1" style="top: 230px; left:249px; width:1150px; height:80px" >
                <p style="padding-left: 30px; padding-top: 10px; font-size: 15; font-weight: bold">Awareness Session - Oxford Art Online
</p><p style="padding-left: 30px; padding-top: 10px; font-size: 15">by Uditha Maduranga (Admin) - Monday, 05 March 2018, 10:34 PM</p>
                
                </div>
                

                <div style="padding-top: 170px;padding-left: 50px;padding-right: 30px">Nulla tincidunt augue vel dolor convallis lobortis. Nunc nibh dolor, tincidunt elementum lorem id, porta imperdiet neque. Quisque egestas lacus nec magna mattis aliquam. Nunc eget orci odio. Quisque neque odio, lobortis a orci ut, tempus feugiat tortor. Quisque et tincidunt arcu. Sed vel accumsan risus. Quisque enim ipsum, luctus vitae ultrices at, vulputate eu lorem. Curabitur at nibh sagittis, lobortis odio nec, sodales velit. Aenean interdum, magna nec molestie congue, magna nisi sodales dolor, at mattis ipsum nisi at nibh. Aenean quis dictum lacus. Vivamus commodo sit amet nibh eget scelerisque. Duis consequat fringilla mollis. Sed eros risus, sodales in porttitor bibendum, vulputate ut est.</div>
                
                </div>
                <div class="item1" style="top: 700px; left:330px; width:450px; height:350px;background-image: url(img/watsapp.jpg);" ><h1 style="padding-left:150px">Notice 1</h1></div>
                <div class="item1" style="top: 700px; left:1030px; width:450px; height:350px;background-image: url(img/watsapp.jpg);" ><h1 style="padding-left:150px">Notice 2</h1></div>
                <div class="container" style="padding-top: 900px; left:100px; width:650px; height:350px">
      <!-- Responsive calendar - START -->
                  <div class="responsive-calendar" style=" border-style: solid; background: url(img/calback.jpg);" >
                    <div class="controls">
                        <a class="pull-left" data-go="prev"><div class="btn btn-primary">Prev</div></a>
                        <h4><span data-head-year></span> <span data-head-month></span></h4>
                        <a class="pull-right" data-go="next"><div class="btn btn-primary">Next</div></a>
                    </div><hr/>
                    <div class="day-headers">a
                      <div class="day header">Mon</div>
                      <div class="day header">Tue</div>
                      <div class="day header">Wed</div>
                      <div class="day header">Thu</div>
                      <div class="day header">Fri</div>
                      <div class="day header">Sat</div>
                      <div class="day header">Sun</div>
                    </div>
                    <div class="days" data-group="days">
                      
                    </div>
                  </div>
                  <!-- Responsive calendar - END -->
                </div>
                <script src="js/jquery.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <script src="js/responsive-calendar.js"></script>
                <script type="text/javascript">
                  $(document).ready(function () {
                    $(".responsive-calendar").responsiveCalendar({
                      time: '2018-03',
                      events: {
                        "2013-04-30": {"number": 5, "url": "http://w3widgets.com/responsive-slider"},
                        "2013-04-26": {"number": 1, "url": "http://w3widgets.com"}, 
                        "2018-03-06":{"number": 1}, 
                        "2013-06-12": {}}
                    });
                  });
                </script>

                <img src="img/poster.jpg" style="width: 1315px; padding-top: 500px"><br><br> <br>
              
              <div class="item1" style="top: 2150px; left:223px; width:1367px; height:150px;background-image: url(img/footer.jpg);" ><p style="padding-left:1140px;padding-top: 75px;font-family:'Courier New'; font-weight: bold;"><img src="img/surge.png" style="width: 30px;height: 30px"> By TEAM SURGE</p></div>
              </div>



          </div>

  </div>

  <script>
          function myFunction() {
              document.querySelector('.dropdown-content').classList.toggle('show');
          }

              
                window.onclick = function(e) {
                  if (!e.target.matches('.dropbtn')) {
                    var myDropdown = document.querySelector('.dropdown-content');
                      if (myDropdown.classList.contains('show')) {
                        myDropdown.classList.remove('show');
                      }
                  }
                }
</script>
</body>
</html>