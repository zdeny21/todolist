## What to do BE:

1. type: composer create-project --prefer-dist laravel/laravel name_of_project
2. type: php artisan serve 
   1. Create DB and connect it with .env:
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=8889
        DB_DATABASE=todoapp
        DB_USERNAME=root
        DB_PASSWORD=root
3. type: php artisan make:model name_of_modal -m 
   1. Create modal file, which i change it
4. type: php artisan migrate
5. type: php artisan make:Controller name_of_controller --resource 
   1. Create my own controller
6. Routes/api.php
   1. Create my own routes
7. app/Http/Controllers/ItemController.php
   1. Doplníme metody pro CRUD operace
   2. Fill out CRUD methods
8. In Postman try:
   1. Nastavit v headers Content-Type : application/json
   2. http://127.0.0.1:8000/api/items
   3. http://127.0.0.1:8000/api/item/store
   4. http://127.0.0.1:8000/api/item/1
   5. http://127.0.0.1:8000/api/item/1
   6. { "item": { "name": "Get a house" } }
9. BE is Done!

## What to do FE:

10. npm install
11. npm install vue
12. resources/js -> Create folder Vue
13. In folder Vue create file app.vue
14. resources/js/app.js
    1. Create connection on app.vue
15. resources/views/welcome.blade.php
    1. Delete body and create connection to app.js
16. In webpack.mix.js add .vue()
17. Type: npm run hot
18. Now it shout be Laravel and Vue connected!
19. Create in resources/js/vue/ files addItemForm, listView a listItem
20. If you have a problem, try this commands: 
    1. npm remove vue-template-compiler 
    2. npm remove vue
    3. npm install vue-template-compiler@2.6.11 
    4. npm install vue@2.6.11
21. In app.vue add styles and html
22. In addItemForm add div
23. Type:
    1. npm i --save @fortawesome/fontawesome-svg-core 
    2. npm i --save @fortawesome/free-solid-svg-icons
    3. npm i --save @fortawesome/vue-fontawesome@latest
24. resources/js/app.js
    1. Insert from webpage icon import 
25. In addItemForm
    1. Add styles and script
    2. Adding items from FE should work 
26. Open listView
    1. Add script and style for showing items on page
27. Open app.vue
    1. add script for calling method for reload page after change
28. Open listItem
    1. add script and style for checkbox update in a list of items
29. Open listView
    1. add script for reload page after click to checkbox
30. Open App
    1. add script for reload page after click to checkbox
31. Open listItem
    1. add script for deleting items in list
32. Open addItemForm
    1. add script for reload the page after adding new item
33. Open app.vue
    1. add code to reload page 

During development run:
php artisan serve
npm run dev
npm run hot


