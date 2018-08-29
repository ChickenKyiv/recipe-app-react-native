* Weekly Menu
have one big array that have all the data related to whole project

Sample:

``"meta"        : {
    "id"          : "1",
    "user_id"     : "",
    "title"       : "September 5 - 11",
    "created_at"  : "09/02/16",

    "description" : "Happy Labor Day Weekend!! "

},


"items" : [
    {
        "id"      : "1",
        "weekDay" : "monday",
        "recipes" : [{
            "id": "1",
            "name": "Crock Pot Roast",
            "img": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
            "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",

            "title"   : "Shrimp and Green Chili Grits, Simple Salad and Basic Vinaigrette",
            "ingredients": [
                {

                    "unit_type" : "simple",
                    "quantity"  : "1",

                    "unit_name" : "beef roast",

                    "department"  : {
                        "id" : "1",
                        "name"   : "Meat"

                    }



                },
                {

                    "unit_type" : "simple",
                    "quantity"  : "1 package",
                    "name"      : "brown gravy mix",

                    "department"  : {
                        "id" : "2",

                        "name"   : "Baking"

                    }


                },
                {

                    "unit_type" : "simple",
                    "quantity"  : "1 package",
                    "unit_name" : "dried Italian salad dressing mix",

                    "department"  : {
                        "id" : "3",
                        "name"   : "Condiments"

                    }


                },
                {

                    "unit_type" : "simple",
                    "quantity"  : "1 package",
                    "unit_name" : "dry ranch dressing mix",

                    "department"  : {
                        "id" : "3",

                        "name"   : "Condiments"

                    }

                },
                {

                    "unit_type" : "simple",
                    "quantity"  : "1/2 cup",
                    "unit_name" : "water",

                    "department"  : {
                        "id" : "4",
                        "name"   : "Drinks"

                    }


                }
            ],
            "steps": [
                "Place beef roast in crock pot.",
                "Mix the dried mixes together in a bowl and sprinkle over the roast.",
                "Pour the water around the roast.",
                "Cook on low for 7-9 hours."
            ],
            "meta": [{
                "prepTime"    :"30min",
                "totalTime"   :"3h",
                "recipeYield" :"8",

                "description" : "Don't get me started on these bad boys!  Awesome!  Yes, that's a good description! ",
                "notes"       : ""

            }
            ]
        }
        ],

        "nutritions": {
            "calories" : 450,
            "fat_calories" : 430,
            "total_fat" : 48,
            "sat_fat" : 6,
            "trans_fat" : 0,
            "cholesterol" : 30,
            "sodium" : 780,
            "total_carb" : 3,
            "fibers" : 0,
            "sugars" : 3,
            "proteins" : 3,
            "vitamins" : {
                "a" : 1.22,
                "c" : 4.22
            },
            "calcium" : 7.22,
            "iron" : 11.22
        },

        "title"   : "Pimento Cheeseburgers, Roasted Gold Potatoes",

        "img"     : "https://planitdinner.net/uploads/8/8/9/d/0/2/889d028702ff76b383f7cc8ef203ba99/dsc_0969.list.jpg",
        "recipeDescription" : "Don't get me started on these bad boys!  Awesome!  Yes, that's a good description! "

    }
