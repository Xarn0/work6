<?php
if(isset($_POST['ok'])){
    echo " Номер телефона : " . $_POST['sab'] . "<br>";
}


$mail = 'revi16@mail.ru';
$token = '1415312933:AAET5phJ5hH1AKKSXzQ20NTdqEdeaYTfciU'; // Токен телеграм чата
$chatid = '409586914'; // id телеграм чата

 $message =  " Номер телефона : " . $_POST['sab'] . "\r\n" 
 . "Тип отапливаемого помещения: " . $_POST['firstsurvey'] . "\r\n"
 . "Проживание в доме: " . $_POST['secondsurvey']. "\r\n"
 . "тип отопления: " . $_POST['thirdsurvey']. "\r\n";

//  if(isset($_POST['oki'])){
//     echo $message;
// }
// Отправляем
if(isset($_POST['oki'])){
    // if(!empty($_POST['sab'] && $message)){
mail($mail, 'Заявка', $message); // Отправка на почту
file_get_contents("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chatid."&text=".urlencode($message)); // Отправка в телеграм
// }else{
//     echo "  <br> Заполните все поля";
// }
}

?>
