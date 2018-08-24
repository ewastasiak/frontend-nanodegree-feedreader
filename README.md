# UdaciFeeds Jasmine Tests Project Overview

For this project, students are given a web-based application that reads RSS feeds.
It requires writing four suites of tests checking feed reader's functionalities.


## How to run the UdaciFeeds Jasmine tests?

1. Download the zipped file from project's repository and unpack it.

2. Open the **index.html** file. You are now able to review the Reader's functionality, along with Jasmine test suites.

3. To run a suite of tests, click on the suite's name:
>RSS Feeds

>The menu

>Initial Entries

>New Feed Selection

4. To run a single test, click on the expectation description of your choice:
> (For RSS Feeds suite, testing if all feeds are named and contain urls)

> * are defined
> * have a defined name
> * have a defined url

> (For The menu suite, testing menu's visibility and default class)

> * is hidden by default
> * changes visibility after menu icon is clicked

> (For Initial Entries suite, testing if there are entries inside the feed container div)

> * there is at least one .entry within .feed container

> (For New Feed Selection suite, testing if content changes when user clicks on a different feed from the app's menu)

> * changes content when new feed is loaded

5. To run all the suites at once, click "run all".

6. All tests should pass.

## How to edit tests?

Edit tests inside the spec file in **./jasmine/spec/feedreader.js**, review the [Jasmine documentation](http://jasmine.github.io) for more information on how to write your own tests. Make your tests standalone, not dependent on the results of another.


# Additional Information

* [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
* [Udacity JavaScript testing course](https://www.udacity.com/course/ud549)
* [Required project assets](http://github.com/udacity/frontend-nanodegree-feedreader)
* [Jasmine documentation](http://jasmine.github.io)

---

# About Udacity and Google Scholarships

[Udacity blog entry announcing Google Developer Challenge 2017/2018](https://blog.udacity.com/2017/09/announcing-60000-challenge-scholarships-udacity-google.html)

[Information on all Google Scholarship tracks](https://www.udacity.com/google-scholarships)

**[Visit Udacity scholarships page](https://www.udacity.com/scholarships)**
