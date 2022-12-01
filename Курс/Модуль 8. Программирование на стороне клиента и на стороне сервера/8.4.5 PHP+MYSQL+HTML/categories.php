<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP+MySQL+HTML</title>
</head>
<body>
<form action="index.php" method="post">
    Название категории <input type="text" name="cat" value="<?php print $_GET['cat']; ?>" required><br/>
    <br/>
    <?php
    // Если пришел id значит это обновление записи
    if ($_GET['id'] > 0) {
        print '<input type="hidden" name="id" value="' . $_GET['id'] . '">';
        print '<input type="hidden" name="edit" value="1">';
        print '<input type="submit" value="Изменить">';
    } else {
        // Если id не пришел, значит новая запись
        print '<input type="submit" value="Добавить">';
        print '<input type="hidden" name="add" value="1">';
    }
    ?>
</form>
</body>
</html>

