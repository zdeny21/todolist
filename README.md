## What to do BE:

1. type: composer create-project --prefer-dist laravel/laravel name_of_project
2. type: php artisan serve
   * Vytvořím si DB a propojím ji skrze .env soubor:
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=8889
     DB_DATABASE=todoapp
     DB_USERNAME=root
     DB_PASSWORD=root
3. type: php artisan make:model name_of_modal -m
   * Vytvořím si modalový soubor, který upravím ať sedí podle toho, co chci v db za tabulku 
4. type: php artisan migrate
5. type: php artisan make:Controller name_of_controller --resource
    * Vytvoření vlastního controleru 
6. Routes/api.php
   * Vytvoříme teď vlastní routy
7. app/Http/Controllers/ItemController.php
    * Doplníme metody pro CRUD operace
8. V Postmanovi můžeme vyzkoušet
   * Nastavit v headers Content-Type : application/json
   * http://127.0.0.1:8000/api/items
   * http://127.0.0.1:8000/api/item/store
   * http://127.0.0.1:8000/api/item/1
   * http://127.0.0.1:8000/api/item/1
   * { "item": { "name": "Get a house" } }
9. BE část hotova!

## What to do FE:

10. npm install
11. npm install vue
12. resources/js -> vytvořit složku Vue
13. ve složce Vue vytvořit soubor app.vue
14. resources/js/app.js
    * Vytvoříme propojení na app.vue soubor
15. resources/views/welcome.blade.php
    * Promažeme body a vytvoříme propojení na app.js které je propojené na app.vue
16. Do webpack.mix.js přidat .vue()
17. spustit příkaz npm run hot
18. Mělo by být napojeno vue na laravel!
19. vytvoříme v resources/js/vue/ soubory addItemForm, listView a listItem


