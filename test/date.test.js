// vim:et:sw=2

var FlorealDate = require("../date.js");

exports['test date constructor'] = function(assert, done) {
	var date = new FlorealDate("2015-01-16 12:34:56");

	assert.equal(date.date.toString(), (new Date("2015-01-16 12:34:56")).toString(), "Internal date correctly set");

	done();
};

exports['test first_day_of_year'] = function(assert, done) {
	assert.equal(+FlorealDate.first_day_of_year(1), +new Date("1792-09-22"), "Year I started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(2), +new Date("1793-09-22"), "Year II started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(3), +new Date("1794-09-22"), "Year III started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(4), +new Date("1795-09-23"), "Year IV started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(5), +new Date("1796-09-22"), "Year V started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(6), +new Date("1797-09-22"), "Year VI started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(7), +new Date("1798-09-22"), "Year VII started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(8), +new Date("1799-09-23"), "Year VIII started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(9), +new Date("1800-09-23"), "Year XI started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(10), +new Date("1801-09-23"), "Year X started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(11), +new Date("1802-09-23"), "Year XI started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(12), +new Date("1803-09-24"), "Year XII started on 24 september");
	assert.equal(+FlorealDate.first_day_of_year(13), +new Date("1804-09-23"), "Year XIII started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(14), +new Date("1805-09-23"), "Year XIV started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(79), +new Date("1870-09-23"), "Year LXXIX started on 23 september");
	assert.equal(+FlorealDate.first_day_of_year(222), +new Date("2013-09-22"), "Year CCXXII would have started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(223), +new Date("2014-09-22"), "Year CCXXIII would have started on 22 september");
	assert.equal(+FlorealDate.first_day_of_year(224), +new Date("2015-09-22"), "Year CCXXIV would have started on 22 september");

    done();
};

exports['test yearDecimal'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").yearDecimal(), 1, "Year correctly calculated");
	assert.equal(new FlorealDate("1792-10-22").yearDecimal(), 1, "Year correctly calculated");
	assert.equal(new FlorealDate("1794-01-16").yearDecimal(), 2, "Year correctly calculated");
	assert.equal(new FlorealDate("1792-09-21").yearDecimal(), -1, "Years before 1er vendémiaire I are negative");

	done();
};

exports['test year'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").year(), "I", "Year correctly formatted as Roman numerals");
	assert.equal(new FlorealDate("1794-01-16").year(), "II", "Year correctly formatted as Roman numerals");
	assert.equal(new FlorealDate("1794-09-21").year(), "II", "Year II started on 22 september");
	assert.equal(new FlorealDate("1792-09-21").year(), "-I", "Years before 1er vendémiaire I are negative");
	assert.equal(new FlorealDate("1798-09-22").year(), "VII", "Year VII started on 22 september");
	assert.equal(new FlorealDate("1798-09-30").year(), "VII", "Year VII started on 22 september");
	assert.equal(new FlorealDate("1799-09-22").year(), "VII", "Year VII ended on 22 september");

	done();
};

exports['test sextileYear'] = function(assert, done) {
	assert.equal(+new FlorealDate("1792-09-22").sextileYear(), false, "Year I is not sextile");
	assert.equal(+new FlorealDate("1793-09-22").sextileYear(), false, "Year II is not sextile");
	assert.equal(+new FlorealDate("1794-09-22").sextileYear(), true, "Year III is sextile");
	assert.equal(+new FlorealDate("1795-09-23").sextileYear(), false, "Year IV is not sextile");
	assert.equal(+new FlorealDate("1796-09-22").sextileYear(), false, "Year V is not sextile");
	assert.equal(+new FlorealDate("1797-09-22").sextileYear(), false, "Year VI is not sextile");
	assert.equal(+new FlorealDate("1798-09-22").sextileYear(), true, "Year VII is sextile");
	assert.equal(+new FlorealDate("1799-09-23").sextileYear(), false, "Year VIII is not sextile");
	assert.equal(+new FlorealDate("1800-09-23").sextileYear(), false, "Year XI is not sextile");
	assert.equal(+new FlorealDate("1801-09-23").sextileYear(), false, "Year X is not sextile");
	assert.equal(+new FlorealDate("1802-09-23").sextileYear(), true, "Year XI is sextile");
	assert.equal(+new FlorealDate("1803-09-24").sextileYear(), false, "Year XII is not sextile");
	assert.equal(+new FlorealDate("1804-09-23").sextileYear(), false, "Year XIII is not sextile");
	assert.equal(+new FlorealDate("1805-09-23").sextileYear(), false, "Year XIV is not sextile");
	assert.equal(+new FlorealDate("1870-09-23").sextileYear(), false, "Year LXXIX is not sextile");
	assert.equal(+new FlorealDate("2013-09-21").sextileYear(), false, "Year CCXXII is not sextile");
	assert.equal(+new FlorealDate("2014-09-21").sextileYear(), false, "Year CCXXIII is not sextile");
	assert.equal(+new FlorealDate("2015-09-21").sextileYear(), false, "Year CCXXIV is sextile");

	done();
};

exports['test firstDayOfYear'] = function(assert, done) {
	assert.equal(+new FlorealDate("1792-09-22").firstDayOfYear(), +new Date("1792-09-22"), "The very first day of the calendar is correct");
	assert.equal(+new FlorealDate("1793-09-21").firstDayOfYear(), +new Date("1792-09-22"), "Year I started on 22 september");
	assert.equal(+new FlorealDate("1793-09-22").firstDayOfYear(), +new Date("1793-09-22"), "Year II started on 22 september");
	assert.equal(+new FlorealDate("1794-09-21").firstDayOfYear(), +new Date("1793-09-22"), "Year II started on 22 september");
	assert.equal(+new FlorealDate("1794-09-22").firstDayOfYear(), +new Date("1794-09-22"), "Year III started on 22 september");
	assert.equal(+new FlorealDate("1795-09-21").firstDayOfYear(), +new Date("1794-09-22"), "Year III started on 22 september");
	assert.equal(+new FlorealDate("1795-09-23").firstDayOfYear(), +new Date("1795-09-23"), "Year IV started on 23 september");
	assert.equal(+new FlorealDate("1796-09-22").firstDayOfYear(), +new Date("1796-09-22"), "Year V started on 22 september");
	assert.equal(+new FlorealDate("1797-09-21").firstDayOfYear(), +new Date("1796-09-22"), "Year V started on 22 september");
	assert.equal(+new FlorealDate("1797-09-22").firstDayOfYear(), +new Date("1797-09-22"), "Year VI started on 22 september");
	assert.equal(+new FlorealDate("1798-09-22").firstDayOfYear(), +new Date("1798-09-22"), "Year VII started on 22 september");
	assert.equal(+new FlorealDate("1799-09-23").firstDayOfYear(), +new Date("1799-09-23"), "Year VIII started on 23 september");
	assert.equal(+new FlorealDate("1800-09-23").firstDayOfYear(), +new Date("1800-09-23"), "Year XI started on 23 september");
	assert.equal(+new FlorealDate("1801-09-23").firstDayOfYear(), +new Date("1801-09-23"), "Year X started on 23 september");
	assert.equal(+new FlorealDate("1802-09-23").firstDayOfYear(), +new Date("1802-09-23"), "Year XI started on 23 september");
	assert.equal(+new FlorealDate("1803-09-24").firstDayOfYear(), +new Date("1803-09-24"), "Year XII started on 24 september");
	assert.equal(+new FlorealDate("1804-09-23").firstDayOfYear(), +new Date("1804-09-23"), "Year XIII started on 23 september");
	assert.equal(+new FlorealDate("1805-09-23").firstDayOfYear(), +new Date("1805-09-23"), "Year XIV started on 23 september");
	assert.equal(+new FlorealDate("1870-09-23").firstDayOfYear(), +new Date("1870-09-23"), "Year LXXIV started on 23 september");
	assert.equal(+new FlorealDate("2013-09-22").firstDayOfYear(), +new Date("2013-09-22"), "Year CCXXII would have started on 22 september");
	assert.equal(+new FlorealDate("2014-09-22").firstDayOfYear(), +new Date("2014-09-22"), "Year CCXXIII would have started on 22 september");
	assert.equal(+new FlorealDate("2015-09-22").firstDayOfYear(), +new Date("2015-09-22"), "Year CCXXIV would have started on 22 september");
    done();
};

exports['test dayOfYear'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").dayOfYear(), 1, "The very first day of the calendar is correct");
	assert.equal(new FlorealDate("1792-09-23").dayOfYear(), 2, "The second day is also correct");
	assert.equal(new FlorealDate("1792-10-01").dayOfYear(), 10, "The first day of the second decade is also correct");
	assert.equal(new FlorealDate("1793-10-22").dayOfYear(), 31, "The first day of the second month is the 31st of the year");
	assert.equal(new FlorealDate("1793-02-19").dayOfYear(), 151, "The first day of the sixth month is the 151th of the year");
	assert.equal(new FlorealDate("1793-03-21").dayOfYear(), 181, "The first day of the seventh month is the 181th of the year");
	assert.equal(new FlorealDate("1793-04-20").dayOfYear(), 211, "The first day of the eighth month is the 211th of the year");
	assert.equal(new FlorealDate("1793-05-20").dayOfYear(), 241, "The first day of the ninth month is the 241th of the year");
	assert.equal(new FlorealDate("1793-06-19").dayOfYear(), 271, "The first day of the tenth month is the 271th of the year");
	assert.equal(new FlorealDate("1793-09-21").dayOfYear(), 365, "The last day of year I is the 365th");

	done();
};

exports['test month'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").month(), 1, "The very first day of the calendar is in first month");
	assert.equal(new FlorealDate("1792-09-23").month(), 1, "The second day is also in first month");
	assert.equal(new FlorealDate("1792-10-01").month(), 1, "The first day of the second decade is also in first month");
	assert.equal(new FlorealDate("1793-10-22").month(), 2, "The first day of the second month is correct");
	assert.equal(new FlorealDate("1793-02-19").month(), 6, "The first day of the sixth month is correct");
	assert.equal(new FlorealDate("1793-03-21").month(), 7, "The first day of the seventh month is correct");
	assert.equal(new FlorealDate("1793-04-20").month(), 8, "The first day of the eighth month is correct");
	assert.equal(new FlorealDate("1793-05-20").month(), 9, "The first day of the ninth month is correct");
	assert.equal(new FlorealDate("1793-06-19").month(), 10, "The first day of the tenth month is correct");
	assert.equal(new FlorealDate("1793-09-17").month(), 13, "The last five days of year I are not parts of an actual month, but for regularisation purposes they are said to be part of month #13");
	assert.equal(new FlorealDate("1793-09-18").month(), 13, "The last five days of year I are not parts of an actual month, but for regularisation purposes they are said to be part of month #13");
	assert.equal(new FlorealDate("1793-09-19").month(), 13, "The last five days of year I are not parts of an actual month, but for regularisation purposes they are said to be part of month #13");
	assert.equal(new FlorealDate("1793-09-20").month(), 13, "The last five days of year I are not parts of an actual month, but for regularisation purposes they are said to be part of month #13");
	assert.equal(new FlorealDate("1793-09-21").month(), 13, "The last five days of year I are not parts of an actual month, but for regularisation purposes they are said to be part of month #13");
	assert.equal(new FlorealDate("1803-09-23").month(), 13, "The last day of a sextile year is also part of complementary days");

	done();
};

exports['test isComplementaryDay'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").isComplementaryDay(), false, "The very first day of the calendar is not a complementary day");
	assert.equal(new FlorealDate("1793-06-19").isComplementaryDay(), false, "The first day of the tenth month is still not a complementary day");
	assert.equal(new FlorealDate("1793-09-17").isComplementaryDay(), true, "The last five days of year I are complementary days");
	assert.equal(new FlorealDate("1793-09-18").isComplementaryDay(), true, "The last five days of year I are complementary days");
	assert.equal(new FlorealDate("1793-09-19").isComplementaryDay(), true, "The last five days of year I are complementary days");
	assert.equal(new FlorealDate("1793-09-20").isComplementaryDay(), true, "The last five days of year I are complementary days");
	assert.equal(new FlorealDate("1793-09-21").isComplementaryDay(), true, "The last five days of year I are complementary days");
	assert.equal(new FlorealDate("1803-09-23").isComplementaryDay(), true, "The last day of a sextile year is also a complementary day");

	done();
};

exports['test monthName'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").monthName(), "vendémiaire", "The very first day of the calendar is in first month");
	assert.equal(new FlorealDate("1792-09-23").monthName(), "vendémiaire", "The second day is also in first month");
	assert.equal(new FlorealDate("1792-10-01").monthName(), "vendémiaire", "The first day of the second decade is also in first month");
	assert.equal(new FlorealDate("1793-10-22").monthName(), "brumaire", "The first day of the second month is correct");
	assert.equal(new FlorealDate("1793-02-19").monthName(), "ventôse", "The first day of the sixth month is correct");
	assert.equal(new FlorealDate("1793-03-21").monthName(), "germinal", "The first day of the seventh month is correct");
	assert.equal(new FlorealDate("1793-04-20").monthName(), "floréal", "The first day of the eighth month is correct");
	assert.equal(new FlorealDate("1793-05-20").monthName(), "prairial", "The first day of the ninth month is correct");
	assert.equal(new FlorealDate("1793-06-19").monthName(), "messidor", "The first day of the tenth month is correct");
	assert.equal(new FlorealDate("1793-09-17").monthName(), "", "The last five days of year I are not parts of an actual month");
	assert.equal(new FlorealDate("1793-09-18").monthName(), "", "The last five days of year I are not parts of an actual month");
	assert.equal(new FlorealDate("1793-09-19").monthName(), "", "The last five days of year I are not parts of an actual month");
	assert.equal(new FlorealDate("1793-09-20").monthName(), "", "The last five days of year I are not parts of an actual month");
	assert.equal(new FlorealDate("1793-09-21").monthName(), "", "The last five days of year I are not parts of an actual month");
	assert.equal(new FlorealDate("1803-09-23").monthName(), "", "The last day of a sextile year is also part of complementary days");

	done();
};

exports['test dayOfMonth'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").day(), 1, "The very first day of the calendar is #1");
	assert.equal(new FlorealDate("1792-09-23").day(), 2, "The second day is #2");
	assert.equal(new FlorealDate("1792-10-01").day(), 10, "The last day of the first decade is #10");
	assert.equal(new FlorealDate("1792-10-11").day(), 20, "The last day of the second decade is #20");
	assert.equal(new FlorealDate("1792-10-21").day(), 30, "The last day of the third decade is #30");
	assert.equal(new FlorealDate("1793-10-22").day(), 1, "The first day of the second month is #1");
	assert.equal(new FlorealDate("1793-09-17").day(), 1, "The complementary days are correctly counted");
	assert.equal(new FlorealDate("1793-09-18").day(), 2, "The complementary days are correctly counted");
	assert.equal(new FlorealDate("1793-09-19").day(), 3, "The complementary days are correctly counted");
	assert.equal(new FlorealDate("1793-09-20").day(), 4, "The complementary days are correctly counted");
	assert.equal(new FlorealDate("1793-09-21").day(), 5, "The complementary days are correctly counted");
	assert.equal(new FlorealDate("1803-09-23").day(), 6, "The complementary days are correctly counted");

    assert.equal(FlorealDate.prototype.dayOfMonth, FlorealDate.prototype.day, "day() is an alias of dayOfMonth()");

	done();
};

exports['test decade'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").decade(), 1, "The very first day of the calendar is in first decade");
	assert.equal(new FlorealDate("1792-09-23").decade(), 1, "The second day is still in first decade");
	assert.equal(new FlorealDate("1792-10-01").decade(), 1, "The last day of the first decade is again in first decade");
	assert.equal(new FlorealDate("1792-10-11").decade(), 2, "The last day of the second decade is correct");
	assert.equal(new FlorealDate("1792-10-21").decade(), 3, "The last day of the third decade is correct");
	assert.equal(new FlorealDate("1793-10-22").decade(), 1, "The first day of the second month is in first decade");
	assert.equal(new FlorealDate("1793-09-17").decade(), 1, "The complementary days are not in any decade, but for regularisation purposes they are said to be part of decade 1");
	assert.equal(new FlorealDate("1793-09-18").decade(), 1, "The complementary days are not in any decade, but for regularisation purposes they are said to be part of decade 1");
	assert.equal(new FlorealDate("1793-09-19").decade(), 1, "The complementary days are not in any decade, but for regularisation purposes they are said to be part of decade 1");
	assert.equal(new FlorealDate("1793-09-20").decade(), 1, "The complementary days are not in any decade, but for regularisation purposes they are said to be part of decade 1");
	assert.equal(new FlorealDate("1793-09-21").decade(), 1, "The complementary days are not in any decade, but for regularisation purposes they are said to be part of decade 1");
	assert.equal(new FlorealDate("1803-09-23").decade(), 1, "The complementary days are not in any decade, but for regularisation purposes they are said to be part of decade 1");

	done();
};

exports['test dayOfDecade'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").dayOfDecade(), 1, "The very first day of the calendar is first of the first decade");
	assert.equal(new FlorealDate("1792-09-23").dayOfDecade(), 2, "The second day is #2");
	assert.equal(new FlorealDate("1792-09-24").dayOfDecade(), 3, "The third day is #3");
	assert.equal(new FlorealDate("1792-09-25").dayOfDecade(), 4, "The fourth day is #4");
	assert.equal(new FlorealDate("1792-09-26").dayOfDecade(), 5, "The fifth day is #5");
	assert.equal(new FlorealDate("1792-09-27").dayOfDecade(), 6, "The sixth day is #6");
	assert.equal(new FlorealDate("1792-09-28").dayOfDecade(), 7, "The seventh day is #7");
	assert.equal(new FlorealDate("1792-09-29").dayOfDecade(), 8, "The eighth day is #8");
	assert.equal(new FlorealDate("1792-09-30").dayOfDecade(), 9, "The ninth day is #9");
	assert.equal(new FlorealDate("1792-10-01").dayOfDecade(), 10, "The tenth day is #10");
	assert.equal(new FlorealDate("1792-10-02").dayOfDecade(), 1, "The first day of second decade is #1");
	assert.equal(new FlorealDate("1793-09-17").dayOfDecade(), 1, "The complementary days are not in any decade but still have numbers");
	assert.equal(new FlorealDate("1793-09-18").dayOfDecade(), 2, "The complementary days are not in any decade but still have numbers");
	assert.equal(new FlorealDate("1793-09-19").dayOfDecade(), 3, "The complementary days are not in any decade but still have numbers");
	assert.equal(new FlorealDate("1793-09-20").dayOfDecade(), 4, "The complementary days are not in any decade but still have numbers");
	assert.equal(new FlorealDate("1793-09-21").dayOfDecade(), 5, "The complementary days are not in any decade but still have numbers");
	assert.equal(new FlorealDate("1803-09-23").dayOfDecade(), 6, "The complementary days are not in any decade but still have numbers");

    assert.equal(FlorealDate.prototype.dayOfDecade, FlorealDate.prototype.dayOfWeek, "dayOfWeek() is an alias of dayOfDecade()");

	done();
};

exports['test dayName'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").dayName(), "primidi", "The very first day of the calendar is first of the first decade");
	assert.equal(new FlorealDate("1792-09-23").dayName(), "duodi", "The second day is #2");
	assert.equal(new FlorealDate("1792-09-24").dayName(), "tridi", "The third day is #3");
	assert.equal(new FlorealDate("1792-09-25").dayName(), "quartidi", "The fourth day is #4");
	assert.equal(new FlorealDate("1792-09-26").dayName(), "quintidi", "The fifth day is #5");
	assert.equal(new FlorealDate("1792-09-27").dayName(), "sextidi", "The sixth day is #6");
	assert.equal(new FlorealDate("1792-09-28").dayName(), "septidi", "The seventh day is #7");
	assert.equal(new FlorealDate("1792-09-29").dayName(), "octidi", "The eighth day is #8");
	assert.equal(new FlorealDate("1792-09-30").dayName(), "nonidi", "The ninth day is #9");
	assert.equal(new FlorealDate("1792-10-01").dayName(), "décadi", "The tenth day is #10");
	assert.equal(new FlorealDate("1792-10-02").dayName(), "primidi", "The first day of second decade is #1");
	assert.equal(new FlorealDate("1793-09-17").dayName(), "jour de la vertu", "The complementary days have special names");
	assert.equal(new FlorealDate("1793-09-18").dayName(), "jour du génie", "The complementary days have special names");
	assert.equal(new FlorealDate("1793-09-19").dayName(), "jour du travail", "The complementary days have special names");
	assert.equal(new FlorealDate("1793-09-20").dayName(), "jour de l'opinion", "The complementary days have special names");
	assert.equal(new FlorealDate("1793-09-21").dayName(), "jour des récompenses", "The complementary days have special names");
	assert.equal(new FlorealDate("1803-09-23").dayName(), "jour de la révolution", "The complementary days have special names");

	done();
};

exports['test toFullDateString'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").toFullDateString(), "1er vendémiaire, an I", "The very first day of the calendar is correctly formatted");
	assert.equal(new FlorealDate("1803-09-23").toFullDateString(), "6e jour complémentaire, an XI", "Complementary days are correctly formatted");

	done();
};

exports['test toShortDateString'] = function(assert, done) {
	assert.equal(new FlorealDate("1792-09-22").toShortDateString(), "01-01-I", "The very first day of the calendar is correctly formatted");
	assert.equal(new FlorealDate("1803-09-23").toShortDateString(), "06-13-XI", "Complementary days are correctly formatted");

    assert.equal(FlorealDate.prototype.toShortDateString, FlorealDate.prototype.toDateString, "toDateString() is an alias of toShortDateString()");

	done();
};

exports['test dayTitle'] = function(assert, done) {
	assert.equal(FlorealDate.day_names.length, 360 + 1, "There are 360 days associated with objects");
	assert.equal(FlorealDate.day_names[0], "", "The first one in the array is for padding");

	assert.equal(new FlorealDate("1795-08-18").dayTitle(), "prune", "1er fructidor, an III is plum day");
	assert.equal(new FlorealDate("1803-09-23").dayTitle(), "révolution", "6th complementary day of an XI is the day of revolution");

	done();
};

