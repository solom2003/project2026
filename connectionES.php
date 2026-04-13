<?php
$server = "localhost";
$username_db = "root";
$password_db = "";
$db = "smart_learn";

$conn = mysqli_connect($server, $username_db, $password_db, $db);

if (!$conn) {
    die("فشل الاتصال: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استقبال البيانات (تأكد أن الاسم في HTML هو username أو name)
    $name = isset($_POST['username']) ? $_POST['username'] : (isset($_POST['name']) ? $_POST['name'] : null);
    $email = isset($_POST['email']) ? $_POST['email'] : null;

    if ($name && $email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // تنفيذ الإدخال في جدول users
        $stmt = $conn->prepare("INSERT INTO users (username, email) VALUES (?, ?)");
        if ($stmt) {
            $stmt->bind_param("ss", $name, $email);
            $stmt->execute();
            $stmt->close();
        }
    }
}

// إغلاق الاتصال
$conn->close();

// السطر السحري: يعيد المستخدم لصفحة النموذج فوراً ويمنع ظهور صفحة بيضاء
header("Location: " . $_SERVER['HTTP_REFERER']);
exit();
?>