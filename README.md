# "Renta Car's" -  многостраничное адаптивное приложение для компании по сдаче в аренду авто.
 Структура приложения:
 Хедер(шапка сайта) для связки страниц приложения. В мобильной версии есть кнопка "menu" для включения модального окна со ссылками на страницы сайта, так же сама иконка-логотип компании является ссылкой на главную страницу. Для планшетной и десктопной версий сайта в хедере предусмотрены кнопки-ссылки для каждой страницы. Для переключения перевода контента на укр. язык, русский и английский предусмотрена специальная кнопка.
 1. Страница "Главная" (ознакомительно-представительная), так же есть форма отправки клиентом своих данных: телефона и имени.
 2. Страница "Каталог" с фильтром для выбора авто по бренду, цене аренды, пробегу. Каждый элемент с  авто имеет кнопку включения модального окна с более детальной информацией про авто и кнопкой звонка в компанию. Так же на каждом элементе авто есть иконка-сердечко для включения машины на специальную страницу в избранные.
 3. Страница "Избранные"(Любимые авто) Здесь находяться авто выбранные клиентом. По умолчанию, если нет выбора стоит нарисованная картинка машины.
 4. Страница "Про нас". Информация про компанию и ее сотрудников.
 5. Страница "Контакты". На странице есть контактные данные компании, фото главного офиса компании, а так же встроенной интерактивной карты с маркером-адреса компании.
 ## Фреймворк, шаблон, серверные данные при создании проэкта
* Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).
* Репозиторий создан по шаблону организации GoIT со структурой файлов и папок(React homework template).
* Использован "MockAPI.io - это сервис, который позволяет имитировать серверные данные и создавать имитацию API для разработки и тестирования приложений."(База данных авто)
* Для отправки клиентом своих личных данных с формы в компанию применяем вспомогательный эндпоинт  "https://api.web3forms.com/submit"(точку доступа) API для отправки данных формы на платформе Web3Forms.  
## Технологии(библиотеки) используемые при создании проэкта.
* Приложение использует библиотеку `react-router-dom` для маршрутизации
* Для запроса данных на сервер используем `axios`
* Для перевода контента на разные языки используем `i18next-browser-languagedetector` и `i18next`
* Для использования иконок месенжеров применяем библиотеку `react-icons`
* Для применения интерактивной карты с маркером компании применяем `react-leaflet`
* Для запоминания приложением избранных авто для каждого клиента применяем `react-redux`, `redux-persist`, `redux` Частично эту технологию применил для запоминания состояния открытия модального окна на элементе авто. 
* Для особенных случаев определения типа устройства применяем две технологии: библиотеку`react-responsive` и специальный прием "onTouchStart"
* Для вывода уведомлений об успешной или не успешной отправки своих данных в компанию с главной страницы применяем библиотеку `react-toastify`
### Особенности и сложности при создании проэкта
*  не функциональность изменения сотояния цвета иконки-сердечка для устройств с тач-скрином, чтобы решить это применил прием "onTouchStart" для определения типа устройства
* не видно уведомлений `react-toastify` в мобильных устройствах, так как при вводе в форму экран автоматически увеличивает зум. Для решения этого момента применил библиотеку`react-responsive`
* проблемой было сделать адекватное универсальное для разных типов устройств модальное окно для вывода детальной информации про авто, когда высота модального окна превышает высоту видимой части экрана, для решения этого момента пришлось искать дополнительную информацию

### Inglish translate
# Multi-page adapted application "Renta Car's" - for a car rental company.
 Application structure:
 Header (site header) for linking application pages. The mobile version has a “menu” button to enable a modal window with links on the site page, and the company logo icon itself is a link to the main page. For the tablet and desktop versions of the site, the header provides link buttons for each page. To switch the translation of content into Ukrainian. language, Russian and English there is a special button.
 1. The “Home” page (introductory and representative), there is also a form for the client to send his data: phone number and name.
 2. “Catalog” page with a filter for selecting a car by brand, rental price, mileage. Each element with a car has a button to turn on a modal window with more detailed information about the car and a button to call the company. Also, on each element of the car there is a heart icon to include the car on a special page in your favorites.
 3. “Favorites” page (Favorite cars) Here are the cars selected by the client. By default, if there is no choice, there is a drawn picture of a car.
 4. "About Us" page. Information about the company and its employees.
 5. "Contacts" page. The page contains contact details of the company, a photo of the company's main office, as well as a built-in interactive map with a marker-address of the company.
 ## Framework, template, server data when creating a project
*This project was created with
[Create React App](https://github.com/facebook/create-react-app). For acquaintance
and settings of additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* The repository was created according to the GoIT organization template with a file and folder structure (React homework template).
* Used "MockAPI.io is a service that allows you to mock server data and create mock APIs for application development and testing." (Auto Database)
* To send the client his personal data from the form to the company, we use the auxiliary endpoint "https://api.web3forms.com/submit" (access point) API for sending form data on the Web3Forms platform.
## Technologies (libraries) used to create the project.
* The application uses the `react-router-dom` library for routing
* To request data to the server we use `axios`
* To translate content into different languages ​​we use `i18next-browser-languagedetector` and `i18next`
* To use messenger icons, we use the `react-icons` library
* To use an interactive map with a company marker, use `react-leaflet`
* To remember the selected cars for each client by the application, we use `react-redux`, `redux-persist`, `redux` We partially used this technology to remember the state of opening a modal window on the car element.
* For special cases of determining the device type, we use two technologies: the `react-responsive` library and the special technique "onTouchStart"
* To display notifications about the successful or unsuccessful sending of your data to the company from the main page, we use the `react-toastify` library
### Features and difficulties when creating a project
* the functionality of changing the color state of the heart icon for devices with a touch screen is not possible; to solve this, I used the “onTouchStart” technique to determine the device type
* `react-toastify` notifications are not visible on mobile devices, since the screen automatically zooms in when entering the form. To solve this issue I used the `react-responsive` library
* the problem was to make an adequate modal window, universal for different types of devices, to display detailed information about the car, when the height of the modal window exceeds the height of the visible part of the screen, to solve this issue we had to look for additional information
