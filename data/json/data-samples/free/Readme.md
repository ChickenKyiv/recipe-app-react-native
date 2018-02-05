Main items of Free Recipe Menu items

Free Recipe List
Weekly Menu
Grocery List
Simple Recipe #1
Simple Recipe #2
Simple Recipe #3
Simple Recipe #4

* Free Recipe List
This is an array that contain short data about recipe

Sample:

``[
  {
    "id"      : "1",
    "title"   : "Pimento Cheeseburgers, Roasted Gold Potatoes",
    "img"     : "https://planitdinner.net/uploads/8/8/9/d/0/2/889d028702ff76b383f7cc8ef203ba99/dsc_0969.list.jpg",
    "description" : "Don't get me started on these bad boys!  Awesome!  
    Yes, that's a good description! "
  },
  {
    "id"      : "2",
    "title"   : "Shrimp and Green Chili Grits, Simple Salad and Basic Vinaigrette",
    "img"     : "https://planitdinner.net/uploads/c/6/b/5/f/f/c6b5ff5f4529ea88ebff1f86a973d0b1/dsc_0976-2.display.jpg",
    "description" : "Who can resist Shrimp and Grits?  
    I know I certainly can't!!  This is outstanding - the kiddos cleaned their plates, as did the adults.  "

  },
]``

* Weekly Menu
This is an extended version of Free Recipe List. Can be used as переходный период между Free Recipe Menu и Weekly Recipe Menu. Also have a simple structure.
Have only one node inside, so features like previous week or change recipe order cannot be implemented properly

* Grocery List
This is a sample data, not very binded to recipe list or sample recipes
It's just give a basic idea about how ingredient list can looks and works inside Free Recipe Menu. Used just in purpose to easily display data at app screen

* Simple Recipe #1
Basic structure. Have an ingredient list inside with departments and quantity

* Simple Recipe #2
Have more complex recipe data structure. I think i steal this example from one of big recipe api providers. So we can assume that this is a good structure. Have simple version of quantities.

* Simple Recipe #3
Basic structure.


* Simple Recipe #4
Have most advanced structure or recipe data. Each ingredient have extended object that contains advanced quantity data. Can be used for testing Measurements and Quantities for other projects.
