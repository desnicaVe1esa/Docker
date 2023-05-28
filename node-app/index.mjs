import fs from "fs";
import { setTimeout } from "timers/promises";

fs.appendFile("my-file.txt", "Файл создан Node.js", (err) => {
  if (err) throw err;
  console.log("Файл сохранен!");
});

// Для того, чтобы процесс не завершался какое-то время и можно было перейти внутрь контейнера
setTimeout(() => console.log("Конец"), 10000);
