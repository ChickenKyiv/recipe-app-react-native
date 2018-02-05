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

Sample:

``"meta"      : {
  "id"          : "",
  "user_id"     : "",
  "title"       : "September 5 - 11",
  "created_at"  : "09/02/16",
  "description" : "Happy Labor Day Weekend!!"
 },

"items" : [
  {
    "id"      : "1",
    "title"   : "Pimento Cheeseburgers, Roasted Gold Potatoes",
    "weekDay" : "monday",
    "img"     : "https://planitdinner.net/uploads/8/8/9/d/0/2/889d028702ff76b383f7cc8ef203ba99/dsc_0969.list.jpg",
    "description" : "Don't get me started on these bad boys!  Awesome!  Yes, that's a good description! "

  },
  {
    "id"      : "2",
    "title"   : "Shrimp and Green Chili Grits, Simple Salad and Basic Vinaigrette",
    "weekDay" : "tuesday",
    "img"     : "https://planitdinner.net/uploads/c/6/b/5/f/f/c6b5ff5f4529ea88ebff1f86a973d0b1/dsc_0976-2.display.jpg",
    "description" : "Who can resist Shrimp and Grits?  I know I certainly can't!!  This is outstanding - the kiddos cleaned their plates, as did the adults.  "

  },
  ]``

* Grocery List
This is a sample data, not very binded to recipe list or sample recipes
It's just give a basic idea about how ingredient list can looks and works inside Free Recipe Menu. Used just in purpose to easily display data at app screen

Sample:
``{
"id" : "1", //department ID
"name"        : "BAKERY/BREAD",
"items" : [
  {
    "id"      : "1",
    "name"   : "hamburger buns",
    "recipeId" : ["1"],
    "type"     : "simple",
    "units"    : "4",
    "done"     : "0",
    "delete"   : "0"			
  },
  {
    "id"      : "2",
    "name"   : "small French baguette",
    "recipeId" : ["1"],
    "type"     : "simple",
    "units"    : "1",
    "done"     : "0",
    "delete"   : "0"			
  }


]

},

{
"id" : "2",
"name"        : "BAKING",
"items" : [
  {
    "id"      : "4",
    "name"   : "all-purpose flour",
    "recipeId" : ["1"],
    "type"     : "simple",
    "units"    : "0.5 cup",
    "done"     : "0",
    "delete"   : "0"			
  },
  {
    "id"      : "5",
    "name"   : "granulated sugar",
    "recipeId" : ["1"],
    "type"     : "simple",
    "units"    : "1 pinch",
    "done"     : "0",
    "delete"   : "0"			
  }


]

}
]
}``

* Simple Recipe #1
Basic structure. Have an ingredient list inside with departments and quantity

``    "id"   : "1989",
    "name" : "Crock Pot Roast",
    "ingredients": [
      {
        "quantity": "1",
        "name": " beef roast",
        "department": "Meat"
      },
      {
        "quantity": "1 package",
        "name": "brown gravy mix",
        "department": "Baking"
      },
      {
        "quantity": "1 package",
        "name": "dried Italian salad dressing mix",
        "department": "Condiments"
      },
      {
        "quantity": "1 package",
        "name": "dry ranch dressing mix",
        "department": "Condiments"
      },
      {
        "quantity": "1/2 cup",
        "name": "water",
        "department": "Drinks"
      }
    ],
    "directions": [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours."
    ],

    "prepTime"    :"30min",
    "totalTime"   :"3h",
    "recipeYield" :"8",

    "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
};``

* Simple Recipe #2
Have more complex recipe data structure. I think i steal this example from one of big recipe api providers. So we can assume that this is a good structure. Have simple version of quantities.

Sample:
``  "title": "Basic Fruit Salad",
  "yields" : {
    "servings": "6"
  },
  "ingredients": [
    {
      "name" : "apple",
      "amounts" : {
        "amount" : "1",
        "unit"   : "each"
      }
    },
    {
      "name" : "banana",
      "amounts" : {
        "amount" : "1",
        "unit"   : "each"
      }
    },
    {
      "name" : "orange",
      "amounts" : {
        "amount" : "1",
        "unit"   : "each"
      }
    },
    {
      "name" : "grapes",
      "amounts" : {
        "amount" : "10",
        "unit"   : "cup"
      }
    },
  ],
  "directions": [
    "Cut the apple into cubes",
    "Cut the banana into slices",
    "Peel the orange, and divide into segments",
    "Combine all ingredients in a bowl",
    "Mix to combine"
  ]
``

* Simple Recipe #3
Basic structure.

Sample:
``"id": "1989",
"name": "Crock Pot Roast",
"imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
"originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
"ingredients": [
    {
        "quantity": "1",
        "name": " beef roast"
    },
    {
        "quantity": "1 package",
        "name": "brown gravy mix"
    },
    {
        "quantity": "1 package",
        "name": "dried Italian salad dressing mix"
    },
    {
        "quantity": "1 package",
        "name": "dry ranch dressing mix"
    },
    {
        "quantity": "1/2 cup",
        "name": "water"
    }
],
"directions": [
    "Place beef roast in crock pot.",
    "Mix the dried mixes together in a bowl and sprinkle over the roast.",
    "Pour the water around the roast.",
    "Cook on low for 7-9 hours."
],

"prepTime"    :"PT30M",
"totalTime"   :"PT3H",
"recipeYield" :"8"
``

* Simple Recipe #4
Have most advanced structure or recipe data. Each ingredient have extended object that contains advanced quantity data. Can be used for testing Measurements and Quantities for other projects.

``"title": "Basic Fruit Salad",
"yields" : {
  "servings": "6"
},
"ingredients": [
{
  "name" : "apple",
  "amounts" : {
      "amount" : "1",
      "unit"   : "each",
      "quantity": 0.333333333333333,
      "displayQuantity": "1/3",
      "metricQuantity": 59,
      "metricDisplayQuantity": "59",
      "metricUnit": "ml",
  }
},
{
    "name" : "banana",
    "amounts" : {
        "amount" : "1",
        "unit"   : "each",
        "quantity": 0.333333333333333,
        "displayQuantity": "1/3",
        "metricQuantity": 59,
        "metricDisplayQuantity": "59",
        "metricUnit": "ml",
    }
},
{
    "name" : "orange",
    "amounts" : {
        "amount" : "1",
        "unit"   : "each",
        "quantity": 0.333333333333333,
        "displayQuantity": "1/3",
        "metricQuantity": 59,
        "metricDisplayQuantity": "59",
        "metricUnit": "ml",
    }
},
{
    "name" : "grapes",
    "amounts" : {
        "amount" : "10",
        "unit"   : "cup",
        "quantity": 0.333333333333333,
        "displayQuantity": "1/3",
        "metricQuantity": 59,
        "metricDisplayQuantity": "59",
        "metricUnit": "ml",
    }
},
],
"directions": [

    {
        "step"  : "Cut the apple into cubes",
        "notes" : [
            "Use whole apples",
            "Pears may be substituted, but produce a different flavor and mouthfeel"
        ]
    },
    {
        "step"  : "Cut the banana into slices",
        "notes" : [
            "",
            ""
        ]
    },
    {
        "step"  : "Peel the orange, and divide into segments",
        "notes" : [
            "",
            ""
        ]
    },
    {
        "step"  : "Combine all ingredients in a bowl",
        "notes" : [
            "",
            ""
        ]
    },
    {
        "step"  : "Mix to combine",
        "notes" : [
            "",
            ""
        ]
    },

],
"notes" : [
    "This is a friendly recipe; giving, rather than throwing, is recommended.1",
    "This is a friendly recipe; giving, rather than throwing, is recommended.2",
    "This is a friendly recipe; giving, rather than throwing, is recommended.3"
]
``
