payment systems setup
notifications system
Order system, working with funds and with refunding — automatically
Lifecycle emails
Make project extendible, without big pain
Support, faq section, interactions with humans
Search
Localization
Switch, upgrade plan
data import
SEO: titles, URLs, schema.org
Security

--------------------


Note: This version has limited functionality.
No user registration, no meal planning — but it can be up in a small amount of time.

---

1) Your website + app(display content from the website). Or you can create separated content container instance. For app only

2) App will be connected to your database via API endpoints or webhooks

3) Authorization + Registration inside app. This can be covered by our API.
Or you can use sign up flow from your previous setup(your own registration way).
We’ll have an advanced security option for API and receiving data in next releases.

Most complex thing related to building a bridge between your website database, API, an app. Our recipe API and an app can(might) work together without complex setup. But your project and database will require some changes.

You are able to set up an app with free-menu functionality right now.
You’ll display 5–6 recipes for a week, with additional data.

----------------


Free Menu have this app screens(screenshots available at the end of article):

Login / sign-up
About app tour
View Menu(recipes list)
View Recipe data
View settings
Profile
Recipe information short/extended (limited for different purposes)
Simple grocery list form with to-do checkboxes list.
Note: in this release, we have screens with ingredients list — right now auto-generation(convert recipes data to grocery list) is not working.
In order to use this functionality, you must have another one file with Grocery List items only.


------


Enable Login and get information from the main database. Display current menu(aka meal planning)
Paid subscription, subscriptions management, Advanced search with filters.
