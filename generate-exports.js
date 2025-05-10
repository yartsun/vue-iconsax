import fs from 'fs';
import path from 'path';

// Путь к директории с иконками
const iconsDir = path.join(process.cwd(), 'dist/components/icons');
const packageJsonPath = path.join(process.cwd(), 'package.json');

// Чтение package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Создаем новый объект exports, сохраняя корневой экспорт
const exports = {
  '.': packageJson.exports['.']
};

// Добавляем VsxIcon компонент
exports['./VsxIcon'] = './dist/components/VsxIcon.vue.js';

// Получаем список всех файлов иконок
const iconFiles = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.vue.js'))
  .map(file => file.replace('.vue.js', ''));

// Добавляем каждую иконку в экспорты
iconFiles.forEach(iconName => {
  exports['./' + iconName] = `./dist/components/icons/${iconName}.vue.js`;
});

// Обновляем package.json
packageJson.exports = exports;

// Записываем обновленный package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Обновлено ${iconFiles.length} экспортов в package.json`); 