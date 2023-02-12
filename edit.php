

<?php 

include 'config.php';

error_reporting(0);

session_start();
/*
$id = $_GET['id'];
$username = $_GET['username'];
 $email = $_GET['email'];
 $password = $_GET['password'];
 //$cpassword = $_GET['cpassword'];
 $fathername = $_GET['fathername'];
 $address = $_GET['address'];

$sql = "SELECT * FROM edit where id ='$id'";
$result = mysqli_query($conn, $sql);

// Find the number of records returned
//$num = mysqli_num_rows($result);
$row = mysqli_fetch_assoc($result);


if($_SERVER['REQUEST_METHOD'] == 'POST'){
if (isset($_POST['submit'])) {
	$id = $_POST['id'];
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = md5($_POST['password']);
	//$cpassword = md5($_POST['cpassword']);
	$fathername = $_POST['fathername'];
	$address = $_POST['address'];

	if ($password == $cpassword) {
		$sql = "SELECT * FROM edit where id='$id'";
		//$result = mysqli_query($conn, $sql);
		//if (!$result->num_rows > 0) {
			//$sql = "INSERT INTO edit (username, email, password,cpassword,fathername,address) VALUES ('$username', '$email', '$password','$cpassword', '$fathername', '$address')";
			$sql = "UPDATE edit set  username='$username',email='$email', password='$password',fathername='$fathername', address='$address' where id=$id";		
			$row = mysqli_query($conn, $sql);
			
			
			if ($row) {
				echo "<script>alert('Wow! User Registration Completed UPDATED.')</script>";
				$username = "";
				$email = "";
				$_POST['password'] = "";
				//$_POST['cpassword'] = "";
				$fathername = "";
				$address = "";
			} else {
				echo "<script>alert('Woops! Something Wrong Went.')</script>";
			}
		}else {
			echo "<script>alert('Woops ! UPDATED.')</script>";
		}
		
	} 
}
*/
?>








<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="style.css">

	<title> EDIT STUDENT DETAILS</title>
</head>
<body>
	<div class="container">
		<?php
		if(isset($_GET['id'])){
			$conn = mysqli_connect("localhost:3307","root","","hostel_system");
			$id = $_GET['id'];
			$sql = "SELECT * FROM edit where id ='$id'";
			$result = mysqli_query($conn, $sql);
			if(mysqli_num_rows($result) > 0) {
             foreach($result as $row)
              ?>
                
			   <form action="code.php" method="POST" class="login-email">
			   <p class="login-text" style="font-size: 2rem; font-weight: 800;">Edit Student Details</p>
			   <input type= "hidden" name = "id" value="<?php echo $row['id'];?>">
			   <div class="input-group">
			   <input type="text" value="<?php echo $row['username'];?>" class="input" name="username"  required>
				</div>
			   <div class="input-group">
				   <input type="email" value="<?php echo $row['email'];?>" placeholder="Email" name="email"  required>
			   </div>
			   <div class="input-group">
				   <input type="password" value="<?php echo $row['password'];?>" placeholder="Password" name="password" value="<?php echo $_POST['password']; ?>" required>
			   </div>
			 
			   <div class="input-group">
				   <input type="text" value="<?php echo $row['fathername'];?>" placeholder="Father name" name="fathername"  required>
			   </div>
			   <div class="input-group">
				   <input type="text" value="<?php echo $row['address'];?>" placeholder="address" name="address" value="<?php echo $address; ?>" required>
			   </div>
			   <div class="input-group">
				   <button name="submit" class="btn">Update</button>
			   </div>
	   
		   
		   </form>
		   <?php



			}else{
				echo "no data found";
			}

		}else{
			echo " something wrong";
		}

		?>
		
	</div>
</body>
</html>