# floreal
## Installation ##
Using git:

    $ git clone https://github.com/seeschloss/floreal.git

Using npm:

    $ npm install floreal

## Usage ##

### new floreal.Date(timespec) ###
Uses the native JavaScript Date object to parse *timespec* and takes any correctly formatted date.

    var Floreal = require('floreal').Date;
    var coup = new Floreal("1799-11-09");
    console.log('%s', coup);
will output:

    18 brumaire, an VIII


### floreal.Date.toFullDateString() ###
Returns the full date in long form as "[day number] [month name], an [year in roman numerals]"

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-10-11")).toFullDateString());
will output:

    18 brumaire, an VIII

### floreal.Date.toShortDateString() ###
Returns the full date in short form as "[day number]-[month number]-[year in roman numerals]"

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-10-11")).toShortDateString());
will output:

    18-02-VIII

### floreal.Date.year() ###
### floreal.Date.yearDecimal() ###
Displays year of the Republic as roman numerals or as a decimal number

    var Floreal = require('floreal').Date;
    var coup = new Floreal("1799-11-09");
    console.log('%s', coup.year());
    console.log('%s', coup.yearDecimal());
will output:

    VIII
    8

### floreal.Date.isYearSextile() ###
Returns true if year is sextile, using actual sextile years for years I to XVI, and [Romme system](http://gallica.bnf.fr/ark:/12148/bpt6k826927/f328.image.r) for subsequent years.

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).isYearSextile());
    console.log('%s', (new Floreal("1803-08-18")).isYearSextile());
will output:

    false
    true

### floreal.Date.firstDayOfYear() ###
Returns the first day of the Republican year as a JavaScript Date object.

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).firstDayOfYear().toDateString());
    console.log('%s', (new Floreal("1803-08-18")).firstDayOfYear().toDateString());
will output:

    Mon Sep 23 1799
    Thu Sep 23 1802

### floreal.Date.dayOfYear() ###
Returns the day number within the year (from 1 to 365, or 366 for sextile years).

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).dayOfYear());
will output:

    48

### floreal.Date.month() ###
Returns the month number within the year. Complementary days are technically not part of any month, but for practical purposes are considered part of the 13th month.

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).month());
will output:

    2

### floreal.Date.isComplementaryDay() ###
Whether the day is a complementary day&mdash;the five or six days at the end of the year which are not part of any month.

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1800-09-20")).isComplementaryDay());
will output:

    true

### floreal.Date.monthName() ###
Returns the (French) name of the month, in all lower case, or an empty string for complementary days.

    var Floreal = require('floreal').Date;
    console.log('"%s"', (new Floreal("1799-11-09")).monthName());
    console.log('"%s"', (new Floreal("1800-09-20")).monthName());
will output:

    "brumaire"
    ""

### floreal.Date.dayOfMonth() ###
### floreal.Date.day() ###
Returns the day number within its month, from 1 to 30 (1 to 6 for complementary days).

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).dayOfMonth());
    console.log('%s', (new Floreal("1800-09-20")).dayOfMonth());
will output:

    18
    3

### floreal.Date.dayOfDecade() ###
### floreal.Date.dayOfWeek() ###
Returns the day number within its decade, from 1 to 10 (1 to 6 for complementary days).

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).dayOfDecade());
    console.log('%s', (new Floreal("1800-09-20")).dayOfDecade());
will output:

    8
    3

### floreal.Date.decade() ###
Returns the decade number within the month, from 1 to 3 (complementary days are reported as belonging to first decade).

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).decade());
    console.log('%s', (new Floreal("1800-09-20")).decade());
will output:

    2
    1

### floreal.Date.dayName() ###
Returns the name of the day (primidi, duodi... equivalent to monday, tuesday...). Complementary days have a different naming scheme and are named "jour de la vertu", "jour du génie", etc.

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-11-09")).dayName());
will output:

    octidi

### floreal.Date.dayTitle() ###
Returns the French name of the object associated with the day (like saints on Christian calendars).

    var Floreal = require('floreal').Date;
    console.log('%s', (new Floreal("1799-10-11")).dayTitle());
will output:

    tournesol
