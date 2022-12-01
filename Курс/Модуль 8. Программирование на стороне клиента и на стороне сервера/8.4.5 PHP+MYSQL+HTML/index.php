<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP+MySQL+HTML</title>
</head>
<body>

<?php

include 'include/config.php';

// Подключение у БД
$mysqli = mysqli_connect($host, $user, $password, $db);

// Проверка ошибок подключения
if (mysqli_connect_errno()) {
    // Вывод ошибки
    print mysqli_connect_error();
    // Остановка работы скрипта
    exit();
}

// Проверка добавления
if ($_POST['add'] == 1) {
    // Создаем запрос
    $query = "
        INSERT INTO categories (name)
        VALUES ('{$_POST['cat']}')
    ";
    // Выполняем запрос
    mysqli_query($mysqli, $query);
}

// Проверка обновления
if ($_POST['edit'] == 1) {
    //созаем запрос
    $query = "
        UPDATE categories 
        SET name = '{$_POST['cat']}'
        WHERE id = {$_POST['id']} 
        
    ";
    //Выполняем запрос
    mysqli_query($mysqli, $query);
}

// Проверка удаления
if ($_GET['action'] == 'del' && $_GET['id'] > 0) {
    //Формирование запроса
    $query = "
        DELETE FROM categories
        WHERE id = {$_GET['id']}
    ";
    // ВЫполнение запроса
    mysqli_query($mysqli, $query);
}

?>
<!-- Создаем таблицу -->
<table border="1">
    <tr>
        <th>Номер</th>
        <th>Категория</th>
        <th>Удалить</th>
        <th>Редактировать</th>
    </tr>
    <?php
    $i = 1;
    // Запрос на выборку данных иэ БД
    $result = mysqli_query($mysqli, "SELECT id, name FROM categories");
    // Пока получаем записи формируем строки таблицы
    while ($row = mysqli_fetch_row($result)) {
        print '<tr>';
        print '<td>' . $i . '</td>';
        print '<td>' . $row[1] . '</td>';
        print '<td> <a href="index.php?action=del&id=' . $row[0] . '">Удалить</a></td>';
        print '<td> <a href="categories.php?cat=' . $row[1] . '&amp;id=' . $row[0] . '">Изменить</a></td>';
        print '</tr>';
        $i++;
    }

    ?>
</table>
<a href="categories.php">Добавить категорию</a>
</body>
</html>
