# 项目介绍
# Introduction
该项目前端使用vue.js框架和element-ui组件库完成，这是在1.0版本的基础上增添删改和完善了一些处理。后端使用node.js部署了一些简单的增删改查功能，以提供数据接口。我使用了nginx作为http服务器，目前部署在我的服务器上：http://8.134.217.191:8082。

This project is currently completed using vue.js framework and element-ui component library, which is added, modified and improved on the basis of version 1.0. Node.js is used to deploy some simple add, delete, update and select functions on the back end to provide a data interface. I use the nginx as http server, currently deployed on my server: http://8.134.217.191:8082.


# 与1.0的比较
# Compared with version 1.0
* 删除了"开发者"的功能，主页中也删除了"开发者"的功能栏目。
* 在主页中的右边栏目可以自行滚动，而不是像1.0那样只能跟随浏览器的滚动而滚动。我尽量实现得与taptap网站上的右边栏目的滚动效果一样：除了可以自行滚动外，网页一起滚动时，它也会跟着滚动。
* 首页中的应用展示添加了简单的"加载更多"功能。
* 应用评分是使用随机数来实现的，所以当进行页面跳转的时候同个应用评分可能会不同。应用的展示信息上添加了"应用类别"。
* 改善了"分类"栏目的类别展示，我单独做了一个类别选择的页面，以便更加美观。
* 在"排行榜"和"分类"的应用展示中，点击右侧的图片可以展示该图片的原图，我使用了element-ui组件库的el-image来实现。
* 重新设计了"应用详情"页面，并且点击任何一个"应用展示"模块都会跳转到"应用详情"页面。点击该页面的下载按钮会跳转到该应用的官网，点击该页面轮播图中的图片会放大展示。"应用详情"页面中可以看到有评论，这些评论是已经写好了的，然后从已经写好的评论里面随机展示的。
* 增添了简单的搜索功能。1.0中虽然有搜索框，但它是不能使用的。该搜索功能是使用mysql的模糊匹配来实现的，然而只能根据应用的名称来搜索，没有实现根据类别来搜索。输入完关键词后，按下回车或者右边的搜索图片就可以搜索应用。
* 改进了"登录"和"注册"页面，点击主页右上角的用户图片就可以跳转到"登录"页面。在"登录"页面中也有跳转到"注册"页面的按钮。当登录完毕后，会自动跳转到主页。若是注册完毕后，则会自动跳转到"登录"页面。如果你已经进行了登录，那么主页右上角的用户图片就会变成另一张默认的用户图片，再点击一次的话，就会跳转到一个简单的"用户信息详情"页面，用户可以修改自己的简单信息。

* Removed the "developer" feature and removed the "Developer" feature section from the main page.
* The right pane on the main page can scroll by itself, rather than following the browser's scroll as in 1.0. I tried to make it scroll like the right pane on Taptap: in addition to scrolling by itself, the page scrolls along with it.
* Add a simple "load more" feature to the app display on the home page.
* App ratins are implemented using random numbers, so the ratings of the same app may be different when jumping to other pages. "Application Category" has been added to the application display information.
* Improved the category display of the "category" column, I made an additional category selection page to make it more beautiful.
* In the "ranking" and "category" application displays, clicking on the image to right shows the original image of that image. I used the element-ui componenet library to do this.
* Resdesigned the "Application Details" page, and clicking on any "App Display" item will redirect you to the "App Details" page. Clicking the download button on that page will takes you to the application's official website, and clicking on the wheel image on that page will zoom in. The "App Details" page shows comments that have been written and then randomly displayed from the comments that have been written.
* Added a simple search function. The search box was available in 1.0, but it could not work. The search function is implemented using mysql's fuzzy matching, but it can only search by application name, not by category. After entering your keywords, press Enter or the search image on the left to search for the application.
* Improved the "Login" and "Register" pages, it can redirect to the "Login" page by clicking on the user's picture in the upper right corner of the home page. There is also a button on the Login page to jump to the Register page. When the login is complete, it will automatically jump to the home page. If the registration is complete, it will automatically jump to the "Login" page. If you are already logged in, the user image in the upper right corner of the home page will become another default user image, and clicking again will take you to a simple "User details" page where users can modify their simple information.
