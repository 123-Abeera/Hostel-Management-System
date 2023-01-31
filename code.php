<?php session_start();

$conn = mysqli_connect("localhost:3307","root","","hostel_system");

/*if(isset($_POST['submit'])){
    $id = $_POST['id'];
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = md5($_POST['password']);
	//$cpassword = md5($_POST['cpassword']);
	$fathername = $_POST['fathername'];
	$address = $_POST['address'];

    $sql = "INSERT INTO edit (username, email, password,fathername,address) VALUES ('$username', '$email', '$password', '$fathername', '$address')";
    $row = mysqli_query($conn, $sql); 

    if($row)
    {

        $_SESSION['status'] = "data inserted successfully";
        header('Location: edit.php');

    }else{
        echo " something wrong";
    }*/
    if(isset($_POST['submit'])){
        $id = $_POST['id'];
    $username = $_POST['username'];
	$email = $_POST['email'];
	$password = md5($_POST['password']);
	//$cpassword = md5($_POST['cpassword']);
	$fathername = $_POST['fathername'];
	$address = $_POST['address'];

    $sql = "UPDATE edit set  username='$username',email='$email', password='$password',fathername='$fathername', address='$address' where id='$id'";		
    $row = mysqli_query($conn, $sql);

    if($row)
    {

        $_SESSION['status'] = "updated successfully";
        header('Location: editstudentdetails.php');
    }else{
        $_SESSION['status'] = " not updated";
        header('Location: editstudentdetails.php');
    }

}


?>
