CREATE TABLE IF NOT EXISTS restaurants(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_name TEXT,
    address TEXT,
    description TEXT

);
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (1, 'Osmows', '312 Augusta Ave', 'Shawarma and falafel take out');
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (2, '789 Pizza', '789 College St', 'Dank pizza, open late');
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (3, 'Burger Dude', '50 Oxford Ave', 'Huge burgers and massive combos, dude');
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (4, 'Vinny The Pasta Man', '243 Augusta Ave', 'Authentic Italian pasta and sandwiches');
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (5, 'Mango Like', '351 Augusta Ave', 'Thai and Viet desserts and ice cream');
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (6, 'Ottos Berlin Doner', '289 Augusta Ave', 'Doner, gyro, and other kebab dishes');
INSERT or IGNORE INTO restaurants(id, restaurant_name, address, description) VALUES (7, 'Wandas Pie In The Sky', '286 Augusta Ave', 'Vegetarian baking and pies');
