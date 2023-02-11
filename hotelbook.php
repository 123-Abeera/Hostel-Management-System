<html>
 <head>
    <title> DISPLAY</title>
    <style>
    body {
        background: orange;
    }
    table{
         background-color: white;
    }
    #home1{
      position:absolute;
     top: 5px;;
     right:0;
      margin: 0px ;
      padding : 0px;
      border: none;
    border-radius: 34px;
    box-shadow: 0 20px 24px 3px rgb(251 161 40 / 42%);

    font-size: 16px;
    box-sizing: content-box;
    text-align: center;
    background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);


    width: 10%;
    background-color: orange;
    color: white;
}
</style>
<div id="home1">
      <a class="active" href="index.html">Home</a>
    </div>
</head>
<?php 

include 'config.php';

error_reporting(0);

session_start();

//if (isset($_SESSION['username'])) {
//    header("Location: index.php");
//}

if (isset($_POST['skip_Submit'])) {
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$pNo = $_POST['pNo'];
	$email_id = $_POST['email_id'];
  $aDate = $_POST['aDate'];
  $dDate = $_POST['dDate'];
  $noStudents = $_POST['noStudents'];

		$sql = "SELECT * FROM booked_hostel_details";
		$result = mysqli_query($conn, $sql);
//		if (!$result->num_rows > 0) {
			$sql = "INSERT INTO booked_hostel_details (Fname, Lname, p_No, email, arrival_date, departure_date, noOfStudents)
					VALUES ('$fname', '$lname','$pNo', '$email_id', '$aDate', '$dDate', '$noStudents')";
			$result = mysqli_query($conn, $sql);
			if ($result) {
				echo "<script>alert('Hostel Succesfully Booked')</script>";
				$fname = "";
	      $lname = "";
      	$pNo = "";
      	$email_id = "";
        $aDate = "";
        $dDate = "";
        $noStudents = "";
			} else {
				echo "<script>alert('Woops! Something Wrong Went.')</script>";
			}
//		} 
	
	}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hostel Registration</title>
  <style>
    html *
{
   font-size: 1em ;
   color: #000 ;
   font-family: Trebuchet MS !important;
}
    body {
    /*  background: url('123.jpg') no-repeat center fixed;
      background-size: cover; */
      background-color: #FFFDD0;    
    }
    </style>
</head>
<body>
  <form style="margin: auto; width: 320px" method="POST" action="">
    <div style="max-width: 400px;">
    </div>
    <div style="padding-bottom: 18px;font-size : 32px;">Hostel Reservation</div> <br>
    <div style="display: flex; padding-bottom: 18px;max-width : 450px;">
    <div style=" margin-left: 0; margin-right: 1%; width: 49%;">First name<span style="color: red;"> *</span><br/>
    <input type="text" id="data_2" name="fname" style="max-width: 100%;" class="form-control"/>
    </div>
    <div style=" margin-left: 1%; margin-right: 0; width: 49%;">Last name<span style="color: red;"> *</span><br/>
    <input type="text" id="data_3" name="lname" style="max-width: 100%;" class="form-control"/>
    </div>
    </div><div style="padding-bottom: 18px;">Phone<span style="color: red;"> *</span><br/>
    <input type="text" id="data_4" name="pNo" style="max-width : 450px;" class="form-control"/>
    </div>
    <div style="padding-bottom: 18px;">Email<span style="color: red;"> *</span><br/>
    <input type="text" id="data_5" name="email_id" style="max-width : 450px;" class="form-control"/>
    </div>
    <div style="padding-bottom: 18px;">Arrival date<span style="color: red;"> *</span><br/>
    <input type="text" id="data_6" name="aDate" style="max-width : 250px;" class="form-control"/>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.4.0/pikaday.min.js" type="text/javascript"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.4.0/css/pikaday.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">new Pikaday({ field: document.getElementById('data_6') });</script>
    <div style="padding-bottom: 18px;">Departure date<span style="color: red;"> *</span><br/>
    <input type="text" id="data_7" name="dDate" style="max-width : 250px;" class="form-control"/>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.4.0/pikaday.min.js" type="text/javascript"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.4.0/css/pikaday.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">new Pikaday({ field: document.getElementById('data_7') });</script>
    <div style="padding-bottom: 18px;">Number of Students<span style="color: red;"> *</span><br/>
    <input type="number" id="data_8" name="noStudents" style="max-width : 250px;" class="form-control"/>
    </div>
    <div style="padding-bottom: 28px;"><input name="skip_Submit" value="Submit" type="submit"/></div>
    <div>
    </form>
    
    <script type="text/javascript">
    function validateForm() {
    if (isEmpty(document.getElementById('data_2').value.trim())) {
    alert('First name is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_3').value.trim())) {
    alert('Last name is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_4').value.trim())) {
    alert('Phone is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_5').value.trim())) {
    alert('Email is required!');
    return false;
    }
    if (!validateEmail(document.getElementById('data_5').value.trim())) {
    alert('Email must be a valid email address!');
    return false;
    }
    if (isEmpty(document.getElementById('data_6').value.trim())) {
    alert('Arrival date is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_7').value.trim())) {
    alert('Departure date is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_8').value.trim())) {
    alert('Number of Students is required!');
    return false;
    }
    return true;
    }
    function isEmpty(str) { return (str.length === 0 || !str.trim()); }
    function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
    }
    </script>
</body>
</html>